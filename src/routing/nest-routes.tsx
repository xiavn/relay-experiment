import React from 'react';
import { SubscriptionEntry } from './create-router';
import Route from './Route';

const nestRoutes = (items: SubscriptionEntry[], currentRoute?: JSX.Element) => {
    const currentItem = items[0];
    if (typeof currentRoute !== 'undefined') {
        return <Route {...currentItem}>{currentRoute}</Route>;
    }
    return (
        <Route
            component={currentItem.component}
            prepared={currentItem.prepared}
            routeData={currentItem.routeData}
        />
    );
};

export default nestRoutes;
