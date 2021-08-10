import { ComponentProps } from 'react';
import { loadQuery } from 'react-relay';
import { resourceLoader } from 'routing';
import { PreloadableRouteConfig } from 'routing/create-router';
import RelayEnvironment from './relay-environment';

const routes: PreloadableRouteConfig[] = [
    {
        preloadComponent: resourceLoader('AppTabs', () => import('./AppTabs')),
        prepare: async (): Promise<import('./AppTabs').AppTabsProps> => {
            const AppTabsQuery = await (
                await import('__generated__/AppTabsQuery.graphql')
            ).default;
            return {
                initialQueryRef: loadQuery<
                    import('__generated__/AppTabsQuery.graphql').AppTabsQuery
                >(
                    RelayEnvironment,
                    AppTabsQuery,
                    {},
                    // The fetchPolicy allows us to specify whether to render from cached
                    // data if possible (store-or-network) or only fetch from network
                    // (network-only).
                    { fetchPolicy: 'store-or-network' },
                ),
            };
        },
    },
];

export default routes;
