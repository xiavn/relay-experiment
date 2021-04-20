import React, { useEffect, useState } from 'react';
import './App.css';
import fetchGraphQL from './fetch-graphql';

function App() {
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        fetchGraphQL(`
        query RepositoryNameQuery {
            # feel free to change owner/name here
            repository(owner: "facebook" name: "relay") {
              name
            }
          }
        `)
            .then((response) => {
                if (!isMounted) {
                    return;
                }
                const data = response.data;
                setName(data.repository.name);
            })
            .catch((error) => {
                console.error(error);
            });

        return () => {
            isMounted = false;
        };
    }, [fetchGraphQL, setName]);

    return (
        <div className="App">
            <header className="App-header">
                <p>{name != null ? `Repository: ${name}` : 'Loading'}</p>
            </header>
        </div>
    );
}

export default App;
