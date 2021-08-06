import React, { useContext, useEffect, useState } from 'react';
import { PreloadableRouteConfig } from './create-router';
import RouterContext from './RouterContext';

/**
 * A component that accesses the current route entry from RoutingContext and renders
 * that entry.
 */
const RouterRender = () => {
    const router = useContext(RouterContext);
    if (router !== null) {
        // Store the active entry in state - this allows the renderer to use features like
        // useTransition to delay when state changes become visible to the user.
        const [routeEntry, setRouteEntry] = useState(router.get());
        // On mount subscribe for route changes
        useEffect(() => {
            // Check if the route has changed between the last render and commit:
            const currentEntry = router.get();
            if (currentEntry !== routeEntry) {
                // if there was a concurrent modification, rerender and exit
                setRouteEntry(currentEntry);
                return;
            }
            // If there *wasn't* a concurrent change to the route, then the UI
            // is current: subscribe for subsequent route updates
            const dispose = router.subscribe((nextEntry) => {
                setRouteEntry(nextEntry);
            });
            return () => dispose();
        }, [router]);

        // The current route value is an array of matching entries - one entry per
        // level of routes (to allow nested routes). We have to map each one to a
        // RouteComponent to allow suspending, and also pass its children correctly.
        // Conceptually, we want this structure:
        // ```
        // <RouteComponent
        //   component={entry[0].preloadComponent}
        //   prepared={entrry[0].prepared}>
        //   <RouteComponent
        //     component={entry[1].preloadComponent}
        //     prepared={entry[1].prepared}>
        //       // continue for nested items...
        //   </RouteComponent>
        // </RouteComponent>
        // ```
        // To achieve this, we reverse the list so we can start at the bottom-most
        // component, and iteratively construct parent components w the previous
        // value as the child of the next one:
        const reversedItems = [...routeEntry.entries].reverse();
        const firstItem = reversedItems[0];
    }
};

export default RouterRender;
