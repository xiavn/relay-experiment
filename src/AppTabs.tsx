import HomeTab from 'HomeTab';
import React, { useState } from 'react';
import { PreloadedQuery, useQueryLoader } from 'react-relay';
import HomeTabRepositoryNameQuery, {
    HomeTabRepositoryNameQuery as HomeTabRepositoryNameQueryType,
} from '__generated__/HomeTabRepositoryNameQuery.graphql';

function AppTabs({
    initialQueryRef,
}: {
    initialQueryRef: PreloadedQuery<HomeTabRepositoryNameQueryType>;
}) {
    const [
        homeTabQueryRef,
        loadHomeTabQuery,
    ] = useQueryLoader<HomeTabRepositoryNameQueryType>(
        HomeTabRepositoryNameQuery,
        initialQueryRef,
    );

    const [screen, updateScreen] = useState('home');

    const onSelectHomeTab = () => {
        loadHomeTabQuery({ owner: 'facebook', name: 'relay' });
        updateScreen('home');
    };

    return screen === 'home' &&
        homeTabQueryRef !== null &&
        typeof homeTabQueryRef !== 'undefined' ? (
        <HomeTab queryRef={homeTabQueryRef} />
    ) : (
        <div>Some other tab</div>
    );
}

export default AppTabs;
