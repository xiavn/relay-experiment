import ErrorBoundary from 'ErrorBoundary';
import FeedTab from 'FeedTab';
import React, { Fragment, useState } from 'react';
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import FeedTabFeedQuery, {
    FeedTabFeedQuery as FeedTabFeedQueryType,
} from '__generated__/FeedTabFeedQuery.graphql';
import { AppTabsQuery as AppTabsQueryType } from '__generated__/AppTabsQuery.graphql';
import HelloUser from 'HelloUser';
import UserInfo from 'UserInfo';
import HomeTab from 'HomeTab';

type tabNames = 'home' | 'feed' | 'other';

const rootQuery = graphql`
    query AppTabsQuery {
        currentUser {
            token
            user {
                id
                ...HelloUser_user
            }
        }
    }
`;

function AppTabs({
    initialQueryRef,
}: {
    initialQueryRef: PreloadedQuery<AppTabsQueryType>;
}) {
    const { currentUser } = usePreloadedQuery<AppTabsQueryType>(
        rootQuery,
        initialQueryRef,
    );
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
        <div style={{ padding: '4px' }}>
            <ul>
                {(Object.keys(tabLoaders) as tabNames[]).map((tab) => (
                    <li key={tab}>
                        <button onClick={selectTab(tab)}>{tab}</button>
                    </li>
                ))}
            </ul>
            {currentUser && currentUser.user && (
                <HelloUser user={currentUser.user} />
            )}
            {screen === 'home' && (
                <div>
                    <h2>Home</h2>
                    {currentUser?.user ? <UserInfo /> : <HomeTab />}
                </div>
            )}
            {screen === 'feed' &&
                feedTabQueryRef !== null &&
                typeof feedTabQueryRef !== 'undefined' && (
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
                )}
            {screen === 'other' && <div>Some other tab</div>}
        </div>
    );
}

export default AppTabs;
