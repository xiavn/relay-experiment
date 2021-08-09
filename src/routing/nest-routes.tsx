import React from 'react';
import { SubscriptionEntry } from './create-router';
import Route from './Route';

const nestRoutes = (
    items: SubscriptionEntry[],
    currentRoute?: JSX.Element,
): JSX.Element => {
    const currentItem = items.shift();
    if (typeof currentItem === 'undefined') {
        throw new Error('items should contain at least 1 item');
    }
    let route;
    if (typeof currentRoute !== 'undefined') {
        route = <Route {...currentItem}>{currentRoute}</Route>;
    } else {
        route = <Route {...currentItem} />;
    }
    return items.length ? nestRoutes(items, route) : route;
};

export default nestRoutes;
