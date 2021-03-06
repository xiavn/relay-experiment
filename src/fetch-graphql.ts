import { readUserData } from 'authentication';

async function fetchGraphQL(text: string | null | undefined, variables?: any) {
    // const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;

    // // Fetch data from GitHub's GraphQL API:
    // const response = await fetch('https://api.github.com/graphql', {
    //     method: 'POST',
    //     headers: {
    //         Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         query: text,
    //         variables,
    //     }),
    // });
    const headers: { [key: string]: string } = {
        'Content-Type': 'application/json',
    };

    const userData = readUserData();

    if (userData?.token) {
        headers['Authorization'] = userData.token;
    }

    const response = await fetch('http://localhost:4000', {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query: text,
            variables,
        }),
    });

    // Get the response as JSON
    return await response.json();
}

export default fetchGraphQL;
