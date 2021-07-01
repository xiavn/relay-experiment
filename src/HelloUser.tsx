import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { HelloUser_user$key } from '__generated__/HelloUser_user.graphql';

const NameQuery = graphql`
    fragment HelloUser_user on User {
        name
    }
`;

const HelloUser = ({ user }: { user: HelloUser_user$key }) => {
    const data = useFragment(NameQuery, user);
    return <div>Hello {data.name} </div>;
};

export default HelloUser;
