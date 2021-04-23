import ErrorBoundary from 'ErrorBoundary';
import HomeTab from 'HomeTab';
import React, { Fragment, useState } from 'react';
import { useQueryLoader } from 'react-relay';
import HomeTabRepositoryNameQuery, {
    HomeTabRepositoryNameQuery as HomeTabRepositoryNameQueryType,
} from '__generated__/HomeTabRepositoryNameQuery.graphql';

function AppTabs() {
    const [
        homeTabQueryRef,
        loadHomeTabQuery,
    ] = useQueryLoader<HomeTabRepositoryNameQueryType>(
        HomeTabRepositoryNameQuery,
    );

    const [screen, updateScreen] = useState('home');

    const onSelectHomeTab = () => {
        loadHomeTabQuery({ owner: 'facebook', name: 'relay' });
        updateScreen('home');
    };
    return (
        <div>
            <ul>
                <li>
                    <button onClick={onSelectHomeTab}>Home</button>
                </li>
                <li>
                    <button>Other</button>
                </li>
            </ul>
            {screen === 'home' &&
            homeTabQueryRef !== null &&
            typeof homeTabQueryRef !== 'undefined' ? (
                <ErrorBoundary
                    onRetry={() =>
                        loadHomeTabQuery({ owner: 'facebook', name: 'relay' })
                    }
                    fallback={({ error, retry }) => (
                        <Fragment>
                            <div>Error! {error.message}</div>
                            <button onClick={retry}>Retry</button>
                        </Fragment>
                    )}
                >
                    <HomeTab queryRef={homeTabQueryRef} />
                </ErrorBoundary>
            ) : (
                <div>Some other tab</div>
            )}
        </div>
    );
}

export default AppTabs;
