import React, { PropsWithChildren, useCallback } from 'react';
import useHistory from './use-history';
import usePreloadRoute from './use-preload-route';

/**
 * An alternative to react-router's Link component that works with
 * our custom RoutingContext.
 */
const Link = ({ to, children }: PropsWithChildren<{ to: string }>) => {
    const history = useHistory();
    const { preloadRouteCode, preloadRoute } = usePreloadRoute(to);

    const changeRoute = useCallback(
        (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault();
            history?.push(to);
        },
        [to, history],
    );
    return (
        <a
            href={to}
            onClick={changeRoute}
            onMouseEnter={preloadRouteCode}
            onMouseDown={preloadRoute}
        >
            {children}
        </a>
    );
};

export default Link;
