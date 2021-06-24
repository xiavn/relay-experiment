import ErrorBoundary from 'ErrorBoundary';
import HomeTab from 'HomeTab';
import React, { Fragment, useState } from 'react';
import { useQueryLoader } from 'react-relay';
import HomeTabRepositoryNameQuery, {
    HomeTabFeedQuery as HomeTabFeedQueryType,
} from '__generated__/HomeTabFeedQuery.graphql';

function AppTabs() {
    const [
        homeTabQueryRef,
        loadHomeTabQuery,
    ] = useQueryLoader<HomeTabFeedQueryType>(HomeTabRepositoryNameQuery);

    const [screen, updateScreen] = useState('home');

    const onSelectHomeTab = () => {
        loadHomeTabQuery({});
        updateScreen('home');
    };
    const onSelectOtherTab = () => {
        updateScreen('other');
    };
    return (
        <div>
            <ul>
                <li>
                    <button onClick={onSelectHomeTab}>Home</button>
                </li>
                <li>
                    <button onClick={onSelectOtherTab}>Other</button>
                </li>
            </ul>
            {screen === 'home' &&
            homeTabQueryRef !== null &&
            typeof homeTabQueryRef !== 'undefined' ? (
                <ErrorBoundary
                    onRetry={() => loadHomeTabQuery({})}
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
