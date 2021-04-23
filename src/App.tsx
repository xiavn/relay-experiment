import AppTabs from 'AppTabs';
import React, { Suspense } from 'react';
import { RelayEnvironmentProvider, loadQuery } from 'react-relay/hooks';
import HomeTabRepositoryNameQuery, {
    HomeTabRepositoryNameQuery as HomeTabRepositoryNameQueryType,
} from '__generated__/HomeTabRepositoryNameQuery.graphql';
import './App.css';
import RelayEnvironment from './relay-environment';
import ErrorBoundary from './ErrorBoundary';

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
            <ErrorBoundary fallback={(error) => <div>Error!</div>}>
                <RelayEnvironmentProvider environment={RelayEnvironment}>
                    <AppTabs initialQueryRef={preloadedQuery} />
                </RelayEnvironmentProvider>
            </ErrorBoundary>
        </Suspense>
    );
}

export default AppRoot;
