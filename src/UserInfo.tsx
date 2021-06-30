import React, { useCallback } from 'react';
import { removeUserData } from 'authentication';

const UserInfo = () => {
    const handleSignOut = useCallback(() => {
        removeUserData();
    }, []);
    return (
        <div>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default UserInfo;
