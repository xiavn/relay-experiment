import React, { Fragment } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { UserDisplay_user$key } from '__generated__/UserDisplay_user.graphql';

const userFragment = graphql`
    fragment UserDisplay_user on User {
        email
        name
        faveColour {
            hexValue
        }
    }
`;

interface UserDisplayProps {
    user: UserDisplay_user$key;
}

const UserDisplay = ({ user }: UserDisplayProps) => {
    const data = useFragment(userFragment, user);
    return (
        <Fragment>
            <dt>
                <strong>Posted By:</strong>
            </dt>
            <dd
                style={{
                    color: data.faveColour.hexValue,
                }}
            >
                {data.name} - {data.email}
            </dd>
        </Fragment>
    );
};

export default UserDisplay;
