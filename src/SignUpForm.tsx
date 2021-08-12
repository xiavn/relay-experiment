import React, { useCallback, useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { PreloadedQuery, useMutation, usePreloadedQuery } from 'react-relay';
import { SignUpFormMutation } from '__generated__/SignUpFormMutation.graphql';
import { saveUserData } from 'authentication';
import { SignUpFormQuery } from '__generated__/SignUpFormQuery.graphql';
import { useHistory } from 'routing';

const signUpMutation = graphql`
    mutation SignUpFormMutation(
        $email: String!
        $password: String!
        $name: String!
        $faveColour: Int
    ) {
        signup(
            email: $email
            password: $password
            name: $name
            faveColour: $faveColour
        ) {
            token
            user {
                id
                name
            }
        }
    }
`;

const allColoursQuery = graphql`
    query SignUpFormQuery {
        colours {
            id
            localId
            name
            hexValue
        }
    }
`;

export interface SignUpFormProps {
    prepared: { initialQueryRef: PreloadedQuery<SignUpFormQuery> };
}

const SignUpForm = ({ prepared: { initialQueryRef } }: SignUpFormProps) => {
    const [email, updateEmail] = useState<string>('');
    const [password, updatePassword] = useState<string>('');
    const [name, updateName] = useState<string>('');
    const [faveColour, updateFaveColour] = useState<number>();
    const [commit, isInFlight] = useMutation<SignUpFormMutation>(
        signUpMutation,
    );
    const data = usePreloadedQuery<SignUpFormQuery>(
        allColoursQuery,
        initialQueryRef,
    );
    const history = useHistory();
    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            commit({
                variables: {
                    email,
                    password,
                    name,
                    faveColour,
                },
                onCompleted(data) {
                    const id = data.signup?.user?.id;
                    const token = data.signup?.token;
                    if (id && token) {
                        saveUserData(id, token);
                        history?.push('/');
                    }
                },
                updater(store) {
                    const payload = store.getRootField('signup');
                    store.getRoot().setLinkedRecord(payload, 'currentUser');
                },
            });
        },
        [email, password, name, faveColour, commit, history],
    );
    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <label>Email:</label>
            <br />
            <input
                type="email"
                name="email"
                placeholder="Please enter a valid email address"
                onChange={(event) => updateEmail(event.target.value)}
                value={email}
            />
            <br />
            <label>Password:</label>
            <br />
            <input
                type="password"
                name="password"
                placeholder="Please enter a valid password"
                onChange={(event) => updatePassword(event.target.value)}
                value={password}
            />
            <br />
            <label>Name:</label>
            <br />
            <input
                type="name"
                name="name"
                placeholder="Please enter a valid name"
                onChange={(event) => updateName(event.target.value)}
                value={name}
            />
            <br />
            <label>Favourite Colour:</label>
            <br />
            <select
                name="faveColour"
                onChange={(event) =>
                    updateFaveColour(Number(event.target.value))
                }
                value={faveColour}
            >
                {data.colours.map(
                    (colour) =>
                        colour && (
                            <option key={colour.id} value={colour.localId}>
                                {colour.name}
                            </option>
                        ),
                )}
            </select>
            <button type="submit" disabled={isInFlight}>
                Submit
            </button>
        </form>
    );
};

export default SignUpForm;
