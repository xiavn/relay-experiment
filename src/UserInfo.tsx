import React from 'react';
import { removeUserData } from 'authentication';
import { commitLocalUpdate } from 'react-relay';
import RelayEnvironment from 'relay-environment';

const removeCurrentUser = () => {
    removeUserData();
    commitLocalUpdate(RelayEnvironment, (store) => {
        store.getRoot().invalidateRecord();
        store.getRoot().setValue(null, 'currentUser');
    });
};

const UserInfo = () => {
    return (
        <div>
            <button onClick={removeCurrentUser}>Sign Out</button>
        </div>
    );
};

export default UserInfo;
