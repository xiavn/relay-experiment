import React from 'react';
import UserInfo from 'UserInfo';
import HomeTab from 'HomeTab';
import graphql from 'babel-plugin-relay/macro';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { HomeScreenQuery as HomeScreenQueryType } from './__generated__/HomeScreenQuery.graphql';

const HomeScreenQuery = graphql`
    query HomeScreenQuery {
        currentUser {
            user {
                id
            }
        }
    }
`;

export interface HomeScreenProps {
    prepared: { initialQueryRef: PreloadedQuery<HomeScreenQueryType> };
}

const HomeScreen = ({ prepared: { initialQueryRef } }: HomeScreenProps) => {
    const { currentUser } = usePreloadedQuery(HomeScreenQuery, initialQueryRef);
    return (
        <div>
            <h2>Home</h2>
            {currentUser?.user ? <UserInfo /> : <HomeTab />}
        </div>
    );
};

export default HomeScreen;
