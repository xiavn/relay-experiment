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
                path: '/other',
                preloadComponent: resourceLoader(
                    'OtherTab',
                    () => import('./OtherTab'),
                ),
            },
            {
                path: '/sign-up',
                preloadComponent: resourceLoader(
                    'SignUpForm',
                    () => import('./SignUpForm'),
                ),
                prepare: (): import('./SignUpForm').SignUpFormProps['prepared'] => {
                    const SignUpFormQuery = require('__generated__/SignUpFormQuery.graphql');
                    return {
                        initialQueryRef: loadQuery<
                            import('__generated__/SignUpFormQuery.graphql').SignUpFormQuery
                        >(RelayEnvironment, SignUpFormQuery, {}),
                    };
                },
            },
            {
                path: '/feed',
                preloadComponent: resourceLoader(
                    'FeedTab',
                    () => import('./FeedTab'),
                ),
                prepare: (): import('./FeedTab').FeedTabQueryProps['prepared'] => {
                    const FeedTabQuery = require('__generated__/FeedTabFeedQuery.graphql');
                    return {
                        initialQueryRef: loadQuery<
                            import('__generated__/FeedTabFeedQuery.graphql').FeedTabFeedQuery
                        >(RelayEnvironment, FeedTabQuery, {}),
                    };
                },
            },
            {
                path: '/',
                preloadComponent: resourceLoader(
                    'HomeScreen',
                    () => import('./HomeScreen'),
                ),
                prepare: (): import('./HomeScreen').HomeScreenProps['prepared'] => {
                    const HomeScreenQuery = require('__generated__/HomeScreenQuery.graphql');
                    return {
                        initialQueryRef: loadQuery<
                            import('__generated__/HomeScreenQuery.graphql').HomeScreenQuery
                        >(
                            RelayEnvironment,
                            HomeScreenQuery,
                            {},
                            { fetchPolicy: 'store-only' as 'store-or-network' }, // This is typed incorrectly store-only is legitimate
                        ),
                    };
                },
            },
        ],
    },
];

export default routes;
