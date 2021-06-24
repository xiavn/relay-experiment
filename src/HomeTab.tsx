import React, { Fragment } from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { HomeTabFeedQuery } from '__generated__/HomeTabFeedQuery.graphql';

const FeedQuery = graphql`
    query HomeTabFeedQuery {
        feed {
            description
            url
            id
            postedBy {
                email
                name
                faveColour {
                    hexValue
                }
            }
            votes(first: 5) {
                pageCursors {
                    totalRecords
                }
            }
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
                <div
                    key={link?.id}
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
                        <dd>{link?.url}</dd>
                        <dt>
                            <strong>Description:</strong>
                        </dt>
                        <dd>{link?.description}</dd>
                        {link?.postedBy !== null && (
                            <Fragment>
                                <dt>
                                    <strong>Posted By:</strong>
                                </dt>
                                <dd
                                    style={{
                                        color:
                                            link?.postedBy.faveColour.hexValue,
                                    }}
                                >
                                    {link?.postedBy.name} -{' '}
                                    {link?.postedBy.email}
                                </dd>
                            </Fragment>
                        )}
                        <dt>
                            <strong>Votes:</strong>
                        </dt>
                        <dd>{link?.votes?.pageCursors?.totalRecords || 0}</dd>
                    </dl>
                </div>
            ))}
        </div>
    );
}

export default HomeTab;
