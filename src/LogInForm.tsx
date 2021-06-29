import React, { useCallback, useState } from 'react';
import graphql from 'babel-plugin-relay/macro';

const logInQuery = graphql`
    query LogInFormQuery($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
            }
        }
    }
`;

const LogInForm = () => {
    const [email, updateEmail] = useState<string>('');
    const [password, updatePassword] = useState<string>('');
    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
        },
        [],
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
            <button type="submit">Submit</button>
        </form>
    );
};

export default LogInForm;
