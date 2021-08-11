import { loadQuery } from 'react-relay';
import { resourceLoader } from 'routing';
import { PreloadableRouteConfig } from 'routing/create-router';
import RelayEnvironment from './relay-environment';

const routes: PreloadableRouteConfig[] = [
    {
        preloadComponent: resourceLoader('AppTabs', () => import('./AppTabs')),
        prepare: (): import('./AppTabs').AppTabsProps['prepared'] => {
            // We have to use require here because import is async and would result in a promise
            // the data here is passed through as props.prepared and doesn't want to be a promise.
            const AppTabsQuery = require('__generated__/AppTabsQuery.graphql');
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
        routes: [
            {
                path: '/',
                preloadComponent: resourceLoader(
                    'HomeScreen',
                    () => import('./HomeScreen'),
                ),
            },
        ],
    },
];

export default routes;
