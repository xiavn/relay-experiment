import graphql from 'babel-plugin-relay/macro';
import React, { useCallback, useState } from 'react';
import { useMutation } from 'react-relay';
import { useHistory } from 'routing';
import { AddNewFeedItemMutation } from '__generated__/AddNewFeedItemMutation.graphql';

const addNewLinkMutation = graphql`
    mutation AddNewFeedItemMutation($url: String!, $description: String!) {
        createLink(url: $url, description: $description) {
            feed {
                ...FeedItem_link
            }
        }
    }
`;

const AddNewFeedItem = () => {
    const [url, updateUrl] = useState('');
    const [description, updateDescription] = useState('');
    const [commit, isInFlight] = useMutation<AddNewFeedItemMutation>(
        addNewLinkMutation,
    );
    const history = useHistory();
    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            commit({
                variables: {
                    url,
                    description,
                },
                onCompleted() {
                    history?.push('/feed');
                },
                updater(store) {
                    const payload = store.getRootField('createLink');
                    const newFeed = payload.getLinkedRecords('feed');
                    store.getRoot().setLinkedRecords(newFeed, 'feed');
                },
            });
        },
        [url, description, commit, history],
    );
    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Feed Item</h3>
            <label>Url:</label>
            <br />
            <input
                type="string"
                name="url"
                placeholder="http://www.test.com"
                onChange={(event) => updateUrl(event.target.value)}
                value={url}
            />
            <br />
            <label>Description:</label>
            <br />
            <input
                type="string"
                name="description"
                placeholder="An awesome link!"
                onChange={(event) => updateDescription(event.target.value)}
                value={description}
            />
            <br />
            <button type="submit" disabled={isInFlight}>
                Submit
            </button>
        </form>
    );
};

export default AddNewFeedItem;
