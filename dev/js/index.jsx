import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import AllenhubPage from './AllenhubPage.jsx';

ReactDOM.render(
    <Router>
        <AllenhubPage name='Nathan' />
    </Router>,
    // <h1>hi</h1>,
    document.getElementById('root')
);
