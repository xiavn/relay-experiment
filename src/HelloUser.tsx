import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { PreloadedQuery } from 'react-relay';

const HelloUserQuery = graphql`
    query HelloUserQuery($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                name
            }
        }
    }
`;

const HelloUser = ({ queryRef }: PreloadedQuery) => {
    return <div>Hello </div>;
};

export default HelloUser;
