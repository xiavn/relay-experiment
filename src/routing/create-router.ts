import {
    BrowserHistoryBuildOptions,
    createBrowserHistory,
    Location,
} from 'history';
import { MatchedRoute, matchRoutes, RouteConfig } from 'react-router-config';

interface PreloadableRouteConfig extends RouteConfig {
    prepare?: (params: {}) => any;
}

/**
 * Match the current location to the corresponding route entry.
 */
const matchRoute = (routes: PreloadableRouteConfig[], location: Location) => {
    const matchedRoutes = matchRoutes(routes, location.pathname);
    if (!Array.isArray(matchedRoutes) || matchedRoutes.length === 0) {
        throw new Error(`No route for ${location.pathname}`);
    }
    return matchedRoutes;
};

/**
 * Load the data for the matched route, given the params extracted from the route
 */
const prepareMatches = (matches: MatchedRoute<{}>[]) => {
    return matches.map(({ route, match }) => {
        const prepared = route.prepare(match.params);
        const Component = route.component.get();
        if (Component === null) {
            route.component.load();
        }
        return { component: route.component, prepared, routeData: match };
    });
};

/**
 * A custom router built from the same primitives as react-router. Each object in `routes`
 * contains both a Component and a prepare() function that can preload data for the component.
 * The router watches for changes to the current location via the `history` package, maps the
 * location to the corresponding route entry, and then preloads the code and data for the route.
 */
const createRouter = (
    routes: RouteConfig[],
    options: BrowserHistoryBuildOptions,
) => {
    const history = createBrowserHistory(options);

    const initialMatches = matchRoute(routes, history.location);
    const initialEntries = prepareMatches(initialMatches);
};

export default createRouter;
