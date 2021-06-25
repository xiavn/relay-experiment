import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { FeedTabFeedQuery } from '__generated__/FeedTabFeedQuery.graphql';
import FeedItem from 'FeedItem';

const FeedQuery = graphql`
    query FeedTabFeedQuery {
        feed {
            ...FeedItem_link
        }
    }
`;

function FeedTab(props: { queryRef: PreloadedQuery<FeedTabFeedQuery> }) {
    const data = usePreloadedQuery<FeedTabFeedQuery>(FeedQuery, props.queryRef);
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

export default FeedTab;
