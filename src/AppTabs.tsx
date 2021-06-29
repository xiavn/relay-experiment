import ErrorBoundary from 'ErrorBoundary';
import FeedTab from 'FeedTab';
import React, { Fragment, useEffect, useState } from 'react';
import { useQueryLoader } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import FeedTabFeedQuery, {
    FeedTabFeedQuery as FeedTabFeedQueryType,
} from '__generated__/FeedTabFeedQuery.graphql';
import HelloUserQuery, {
    HelloUserQuery as HelloUserQueryType,
} from '__generated__/HelloUserQuery.graphql';
import { readUserData } from 'authentication';
import HelloUser from 'HelloUser';
import { type } from 'os';
import LogInForm from 'LogInForm';

type tabNames = 'home' | 'feed' | 'other';

// const AppQuery = graphql`
//     query AppTabsQuery($email: String!, $password: String!) {
//         login(email: $email, password: $password) {
//             token
//             user {
//                 name
//             }
//         }
//     }
// `;

function AppTabs() {
    const [
        feedTabQueryRef,
        loadFeedTabQuery,
    ] = useQueryLoader<FeedTabFeedQueryType>(FeedTabFeedQuery);

    const [
        helloUserQueryRef,
        loadHelloUserQuery,
    ] = useQueryLoader<HelloUserQueryType>(HelloUserQuery);

    const userData = readUserData();

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
            {userData !== null &&
                helloUserQueryRef !== null &&
                typeof helloUserQueryRef !== 'undefined' && (
                    <ErrorBoundary
                        onRetry={() => loadHelloUserQuery({ id: userData.id })}
                        fallback={({ error, retry }) => (
                            <Fragment>
                                <div>😦 {error.message}</div>
                                <button onClick={retry}>Retry</button>
                            </Fragment>
                        )}
                    >
                        <HelloUser queryRef={helloUserQueryRef} />
                    </ErrorBoundary>
                )}
            {screen === 'home' && (
                <div>
                    <h2>Home</h2>
                    <LogInForm />
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
