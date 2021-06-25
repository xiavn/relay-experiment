import ErrorBoundary from 'ErrorBoundary';
import FeedTab from 'FeedTab';
import React, { Fragment, useState } from 'react';
import { useQueryLoader } from 'react-relay';
import FeedTabFeedQuery, {
    FeedTabFeedQuery as FeedTabFeedQueryType,
} from '__generated__/FeedTabFeedQuery.graphql';

type tabNames = 'home' | 'feed' | 'other';

function AppTabs() {
    const [
        feedTabQueryRef,
        loadFeedTabQuery,
    ] = useQueryLoader<FeedTabFeedQueryType>(FeedTabFeedQuery);

    const [screen, updateScreen] = useState<tabNames>('home');

    const tabLoaders = {
        feed: loadFeedTabQuery,
        home: undefined,
        other: undefined,
    };

    const selectTab = (tabName: tabNames) => () => {
        const loader = tabLoaders[tabName];
        if (typeof loader === 'function') {
            loader({});
        }
        updateScreen(tabName);
    };

    return (
        <div>
            <ul>
                {(Object.keys(tabLoaders) as tabNames[]).map((tab) => (
                    <li key={tab}>
                        <button onClick={selectTab(tab)}>{tab}</button>
                    </li>
                ))}
            </ul>
            {screen === 'feed' &&
            feedTabQueryRef !== null &&
            typeof feedTabQueryRef !== 'undefined' ? (
                <ErrorBoundary
                    onRetry={() => loadFeedTabQuery({})}
                    fallback={({ error, retry }) => (
                        <Fragment>
                            <div>Error! {error.message}</div>
                            <button onClick={retry}>Retry</button>
                        </Fragment>
                    )}
                >
                    <FeedTab queryRef={feedTabQueryRef} />
                </ErrorBoundary>
            ) : (
                <div>Some other tab</div>
            )}
        </div>
    );
}

export default AppTabs;
