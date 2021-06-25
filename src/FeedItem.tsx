import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { FeedItem_link$key } from '__generated__/FeedItem_link.graphql';
import UserDisplay from 'UserDisplay';

const linkFragment = graphql`
    fragment FeedItem_link on Link {
        description
        url
        id
        postedBy {
            ...UserDisplay_user
        }
        votes(first: 5) {
            pageCursors {
                totalRecords
            }
        }
    }
`;

interface FeedItemProps {
    link: FeedItem_link$key;
}

const FeedItem = ({ link }: FeedItemProps) => {
    const data = useFragment(linkFragment, link);
    return (
        <div
            key={data.id}
            style={{
                border: '2px darkcyan solid',
                background: 'azure',
                marginBottom: '4px',
                padding: '4px',
            }}
        >
            <dl>
                <dt>
                    <strong>Url:</strong>
                </dt>
                <dd>{data.url}</dd>
                <dt>
                    <strong>Description:</strong>
                </dt>
                <dd>{data.description}</dd>
                {data.postedBy && <UserDisplay user={data.postedBy} />}
                <dt>
                    <strong>Votes:</strong>
                </dt>
                <dd>{data.votes?.pageCursors?.totalRecords || 0}</dd>
            </dl>
        </div>
    );
};

export default FeedItem;
