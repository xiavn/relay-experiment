import AppTabs from 'AppTabs';
import React, { Suspense } from 'react';

import {
    RelayEnvironmentProvider,
    loadQuery,
    usePreloadedQuery,
    PreloadedQuery,
} from 'react-relay/hooks';
import HomeTabRepositoryNameQuery, {
    HomeTabRepositoryNameQuery as HomeTabRepositoryNameQueryType,
} from '__generated__/HomeTabRepositoryNameQuery.graphql';
import './App.css';
import RelayEnvironment from './relay-environment';

const preloadedQuery = loadQuery<HomeTabRepositoryNameQueryType>(
    RelayEnvironment,
    HomeTabRepositoryNameQuery,
    { owner: 'facebook', name: 'relay' },
);

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot() {
    return (
        <Suspense fallback={'Loading...'}>
            <RelayEnvironmentProvider environment={RelayEnvironment}>
                <AppTabs initialQueryRef={preloadedQuery} />
            </RelayEnvironmentProvider>
        </Suspense>
    );
}

export default AppRoot;
