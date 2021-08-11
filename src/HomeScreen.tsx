import React from 'react';
import UserInfo from 'UserInfo';
import HomeTab from 'HomeTab';
import { useGetCurrentUser } from 'current-user';

const HomeScreen = () => {
    const currentUser = useGetCurrentUser();
    return (
        <div>
            <h2>Home</h2>
            {currentUser?.user ? <UserInfo /> : <HomeTab />}
        </div>
    );
};

export default HomeScreen;
