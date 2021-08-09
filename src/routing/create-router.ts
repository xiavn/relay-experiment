import {
    BrowserHistoryBuildOptions,
    createBrowserHistory,
    Location,
} from 'history';
import { match } from 'react-router';
import { MatchedRoute, matchRoutes, RouteConfig } from 'react-router-config';
import { Resource } from './resource-loader';

interface PreparedData {
    [key: string]: any;
}
export interface PreloadableRouteConfig extends RouteConfig {
    prepare?: (params: {[key: string]: string }) => PreparedData;
    preloadComponent: Resource;
}

export interface SubscriptionEntry {
    component: Resource, prepared: PreparedData | undefined, routeData: match<{}>
}

type subscriptionCallback = (entry: { location: Location, entries: SubscriptionEntry[]) => void;

export type RouterContextType = ReturnType<typeof createRouter>['context'];

/**
 * Match the current location to the corresponding route entry.
 */
const matchRoute = (routes: PreloadableRouteConfig[], pathname: string) => {
    const matchedRoutes = matchRoutes<{}, PreloadableRouteConfig>(
        routes,
        pathname,
    );
    if (!Array.isArray(matchedRoutes) || matchedRoutes.length === 0) {
        throw new Error(`No route for ${pathname}`);
    }
    return matchedRoutes;
};

/**
 * Load the data for the matched route, given the params extracted from the route
 */
const prepareMatches = (
    matches: MatchedRoute<{}, PreloadableRouteConfig>[],
) => {
    return matches.map(({ route, match }) => {
        const prepared =
            typeof route.prepare === 'function'
                ? route.prepare(match.params)
                : undefined;
        const Component = route.preloadComponent.get();
        if (Component === null) {
            route.preloadComponent.load();
        }
        return { component: route.preloadComponent, prepared, routeData: match };
    });
};

/**
 * A custom router built from the same primitives as react-router. Each object in `routes`
 * contains both a Component and a prepare() function that can preload data for the component.
 * The router watches for changes to the current location via the `history` package, maps the
 * location to the corresponding route entry, and then preloads the code and data for the route.
 */
const createRouter = (
    routes: PreloadableRouteConfig[],
    options: BrowserHistoryBuildOptions,
) => {
    const history = createBrowserHistory(options);

    const initialMatches = matchRoute(routes, history.location.pathname);
    const initialEntries = prepareMatches(initialMatches);

    let currentEntry = {
        location: history.location,
        entries: initialEntries,
    };

    let nextId = 0;
    const subscribers = new Map();

    const cleanup = history.listen((location, action) => {
        if (location.pathname === currentEntry.location.pathname) {
            return;
        }
        const matches = matchRoute(routes, location.pathname);
        const entries = prepareMatches(matches);
        const nextEntry = {
            location,
            entries,
        };
        currentEntry = nextEntry;
        subscribers.forEach((callback) => callback(nextEntry));
    });

    const context = {
        history,
        get() {
            return currentEntry;
        },
        preloadCode(pathname: string) {
            // preload just the code for a route, without storing the result
            const matches = matchRoute(routes, pathname);
            matches.forEach(({ route }) => route.preloadComponent.load());
        },
        preload(pathname: string) {
            // preload the code and data for a route, without storing the result
            const matches = matchRoute(routes, pathname);
            prepareMatches(matches);
        },
        subscribe(callback: subscriptionCallback) {
            const id = nextId++;
            const dispose = () => {
                subscribers.delete(id);
            }
            subscribers.set(id, callback);
            return dispose;
        }
    };

    return { context, cleanup };
};

export default createRouter;
