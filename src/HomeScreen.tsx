import React, { useRef } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { HomeScreen_user$key } from '__generated__/HomeScreen_user.graphql';
import UserInfo from 'UserInfo';
import HomeTab from 'HomeTab';

const HomeScreenQuery = graphql`
    fragment HomeScreen_user on User {
        id
    }
`;

const HomeScreen = ({ user }: { user: HomeScreen_user$key }) => {
    const data = useFragment(HomeScreenQuery, user);
    return (
        <div>
            <h2>Home</h2>
            {data ? <UserInfo /> : <HomeTab />}
        </div>
    );
};

export default HomeScreen;
