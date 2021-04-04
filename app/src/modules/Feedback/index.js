import React from 'react';

const Feedback = () => (
    <div>Feedback Module</div>
);

export default {
    routeProps: {
        path: '/feedback',
        exact: true,
        component: Feedback,
    },
    name: 'Feedback',
};