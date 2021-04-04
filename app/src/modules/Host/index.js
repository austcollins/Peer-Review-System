import React from 'react';

const Host = () => (
    <div>Host Module</div>
);

export default {
    routeProps: {
        path: '/host',
        exact: true,
        component: Host,
    },
    name: 'Host',
};