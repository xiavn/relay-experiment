import AppTabs from 'AppTabs';
import React, { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { createRouter } from 'routing';
import routes from 'routes';
import './App.css';
import RelayEnvironment from './relay-environment';

const router = createRouter(routes);

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot() {
    return (
        <Suspense fallback={'Loading...'}>
            <RelayEnvironmentProvider environment={RelayEnvironment}>
                <AppTabs initialQueryRef={initialQueryRef} />
            </RelayEnvironmentProvider>
        </Suspense>
    );
}

export default AppRoot;
