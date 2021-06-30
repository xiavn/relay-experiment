import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { HelloUserQuery } from '__generated__/HelloUserQuery.graphql';

const NameQuery = graphql`
    query HelloUserQuery($id: ID!) {
        node(id: $id) {
            id
            ... on User {
                name
            }
        }
    }
`;

const HelloUser = ({
    queryRef,
}: {
    queryRef: PreloadedQuery<HelloUserQuery>;
}) => {
    const data = usePreloadedQuery<HelloUserQuery>(NameQuery, queryRef);
    return <div>Hello {data.node?.name}</div>;
};

export default HelloUser;
