import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { FeedTabFeedQuery } from '__generated__/FeedTabFeedQuery.graphql';
import FeedItem from 'FeedItem';
import { Link } from 'routing';

const FeedQuery = graphql`
    query FeedTabFeedQuery {
        feed {
            ...FeedItem_link
        }
    }
`;

export interface FeedTabQueryProps {
    prepared: {
        initialQueryRef: PreloadedQuery<FeedTabFeedQuery>;
    };
}

function FeedTab({ prepared: { initialQueryRef } }: FeedTabQueryProps) {
    const data = usePreloadedQuery<FeedTabFeedQuery>(
        FeedQuery,
        initialQueryRef,
    );
    const feedByNew = [...data.feed].reverse();
    return (
        <div
            style={{
                padding: '4px',
            }}
        >
            <h2>Feed</h2>
            <Link to="/new-feed-item">Add new feed item</Link>
            {feedByNew.map((link) => (
                <FeedItem link={link} />
            ))}
        </div>
    );
}

export default FeedTab;
