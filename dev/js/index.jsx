import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import AllenhubPage from './AllenhubPage.jsx';

ReactDOM.render(
    <Router>
        <AllenhubPage name='Nathan' />
    </Router>,
    document.getElementById('root')
);
