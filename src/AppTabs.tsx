import ErrorBoundary from 'ErrorBoundary';
import FeedTab from 'FeedTab';
import React, { Fragment, PropsWithChildren } from 'react';
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import FeedTabFeedQuery, {
    FeedTabFeedQuery as FeedTabFeedQueryType,
} from '__generated__/FeedTabFeedQuery.graphql';
import { AppTabsQuery as AppTabsQueryType } from '__generated__/AppTabsQuery.graphql';
import HelloUser from 'HelloUser';
import UserInfo from 'UserInfo';
import HomeTab from 'HomeTab';
import Link from 'routing/Link';

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

export interface AppTabsProps {
    prepared: { initialQueryRef: PreloadedQuery<AppTabsQueryType> };
}

function AppTabs({
    prepared: { initialQueryRef },
    children,
}: PropsWithChildren<AppTabsProps>) {
    const { currentUser } = usePreloadedQuery<AppTabsQueryType>(
        rootQuery,
        initialQueryRef,
    );
    // const [
    //     feedTabQueryRef,
    //     loadFeedTabQuery,
    // ] = useQueryLoader<FeedTabFeedQueryType>(FeedTabFeedQuery);

    const tabLoaders = {
        feed: undefined,
        home: undefined,
        other: undefined,
    };

    return (
        <div style={{ padding: '4px' }}>
            <ul>
                {(Object.keys(tabLoaders) as tabNames[]).map((tab) => (
                    <li key={tab}>
                        <Link to={`/${tab}`}>{tab}</Link>
                    </li>
                ))}
            </ul>
            {currentUser && currentUser.user && (
                <HelloUser user={currentUser.user} />
            )}
            {children}

            {/* {screen === 'feed' &&
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
            {screen === 'other' && <div>Some other tab</div>} */}
        </div>
    );
}

export default AppTabs;
