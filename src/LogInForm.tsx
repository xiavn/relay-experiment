import React, { useCallback, useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'react-relay';
import { LogInFormMutation } from '__generated__/LogInFormMutation.graphql';
import { saveUserData } from 'authentication';

const logInMutation = graphql`
    mutation LogInFormMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
                name
            }
        }
    }
`;

const LogInForm = () => {
    const [email, updateEmail] = useState<string>('');
    const [password, updatePassword] = useState<string>('');
    const [commit, isInFlight] = useMutation<LogInFormMutation>(logInMutation);
    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            commit({
                variables: {
                    email,
                    password,
                },
                onCompleted(data) {
                    const id = data.login?.user?.id;
                    const token = data.login?.token;
                    if (id && token) {
                        saveUserData(id, token);
                    }
                },
                updater(store) {
                    const payload = store.getRootField('login');
                    store.getRoot().setLinkedRecord(payload, 'currentUser');
                },
            });
        },
        [email, password, commit],
    );
    return (
        <form onSubmit={handleSubmit}>
            <h3>Log In</h3>
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
            <button type="submit" disabled={isInFlight}>
                Submit
            </button>
        </form>
    );
};

export default LogInForm;
