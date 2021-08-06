import React, { FC } from 'react';
import { SubscriptionEntry } from './create-router';

/**
 * The `component` property from the route entry is a Resource, which may or may not be ready.
 * We use a helper child component to unwrap the resource with component.read(), and then
 * render it if its ready.
 *
 * NOTE: calling routeEntry.route.component.read() directly in RouteRenderer woldn't work the
 * way we'd expect. Because that method could throw - either suspending or on error - the error
 * would bubble up to the *caller* of RouteRenderer. We want the suspend/error to bubble up to
 * our ErrorBoundary/Suspense components, so we have to ensure that the suspend/error happens
 * in a child component.
 */
const Route: FC<SubscriptionEntry> = ({ component, ...rest }) => {
    const Component = component.read();
    return <Component {...rest} />;
};

export default Route;
