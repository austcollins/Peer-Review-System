import React from 'react';

const Authenticate = () => (
    <div>Authenticate Module</div>
);

export default {
    routeProps: {
        path: '/',
        exact: true,
        component: Authenticate,
    },
    name: 'Authenticate',
};