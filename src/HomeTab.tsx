import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { HomeTabFeedQuery } from '__generated__/HomeTabFeedQuery.graphql';

const FeedQuery = graphql`
    query HomeTabFeedQuery {
        feed {
            description
            url
            id
        }
    }
`;

function HomeTab(props: { queryRef: PreloadedQuery<HomeTabFeedQuery> }) {
    const data = usePreloadedQuery<HomeTabFeedQuery>(FeedQuery, props.queryRef);

    return (
        <div>
            {data.feed.map((link) => (
                <div key={link?.id}>
                    <p>{link?.url}</p>
                    <p>{link?.description}</p>
                </div>
            ))}
        </div>
    );
}

export default HomeTab;
