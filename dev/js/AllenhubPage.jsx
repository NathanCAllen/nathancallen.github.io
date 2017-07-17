import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

import BioPage from './BioPage';
import HomePage from './HomePage';
import ResumePage from './ResumePage';

export default class AllenhubPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Home',
        };

        this.bindThisToFunctionsPassedAsParameters();
    }

    bindThisToFunctionsPassedAsParameters() {
        this.buildBio = this.buildBio.bind(this);
    }

    render() {
        return this.buildPageForUser();
    }

    buildPageForUser() {
        return (
            <div>
                {this.buildMenuBar()}
                {this.buildPage()}
            </div>
        );
    }

    buildMenuBar() {
        let pages = this.generateMenuBarItems();
        return (
            <Menu inverted size='huge'>
                {pages}
            </Menu>
        );
    }

    generateMenuBarItems() {
        return [
            <Menu.Item as={Link} key='home' to='/'>Home</Menu.Item>,
            <Menu.Item as={Link} key='bio' to='/bio'>Bio</Menu.Item>,
            <Menu.Item as={Link} key='resume' to='/resume'>Resume</Menu.Item>
        ];
    }

    buildPage() {
        return (
            <main>
                <Switch>
                    <Route exact component={this.buildHome} path='/' />
                    <Route exact component={this.buildBio} path='/bio' />
                    <Route exact component={this.buildResume} path='/resume' />
                </Switch>
            </main>
        );
    }

    buildHome() {
        return <HomePage />;
    }

    buildBio() {
        return <BioPage />;
    }

    buildResume() {
        return <ResumePage />;
    }
}
