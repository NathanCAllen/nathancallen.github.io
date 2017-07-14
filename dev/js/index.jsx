import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AllenhubPage from './AllenhubPage.jsx';

ReactDOM.render(
    <BrowserRouter>
        <AllenhubPage name='Nathan' />
    </BrowserRouter>,
    // <h1>hi</h1>,
    document.getElementById('root')
);
