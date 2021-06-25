import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { HomeTabFeedQuery } from '__generated__/HomeTabFeedQuery.graphql';
import FeedItem from 'FeedItem';

const FeedQuery = graphql`
    query HomeTabFeedQuery {
        feed {
            ...FeedItem_link
        }
    }
`;

function HomeTab(props: { queryRef: PreloadedQuery<HomeTabFeedQuery> }) {
    const data = usePreloadedQuery<HomeTabFeedQuery>(FeedQuery, props.queryRef);
    return (
        <div
            style={{
                padding: '4px',
            }}
        >
            <h2>Feed</h2>
            {data.feed.map((link) => (
                <FeedItem link={link} />
            ))}
        </div>
    );
}

export default HomeTab;
