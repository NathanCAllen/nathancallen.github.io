import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { Header } from 'semantic-ui-react';

import AllenhubPage from './AllenhubPage.jsx';

ReactDOM.render(
    <AllenhubPage name='Nathan' />,
    // <h1>hi</h1>,
    document.getElementById('root')
);
