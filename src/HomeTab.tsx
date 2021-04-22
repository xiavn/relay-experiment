import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { HomeTabRepositoryNameQuery } from '__generated__/HomeTabRepositoryNameQuery.graphql';

const RepositoryNameQuery = graphql`
    query HomeTabRepositoryNameQuery($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
            name
        }
    }
`;

function HomeTab(props: {
    queryRef: PreloadedQuery<HomeTabRepositoryNameQuery>;
}) {
    const data = usePreloadedQuery<HomeTabRepositoryNameQuery>(
        RepositoryNameQuery,
        props.queryRef,
    );

    return <p>{data?.repository?.name}</p>;
}

export default HomeTab;
