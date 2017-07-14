import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

import BodyPage from './BodyPage';

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
        // return <h1>hi there</h1>;
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
            <Menu inverted size='large'>
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
                    <Route component={this.buildBio} path='/bio' />
                    <Route component={this.buildResume} path='/resume' />
                </Switch>
            </main>
        );
    }

    buildHome() {
        console.log('foo');
        // return <h1>hi there</h1>;
        return <BodyPage page='home' />;
    }

    buildBio() {
        return <h1>heroes never die</h1>;
        // return <BodyPage page='bio' />
    }

    buildResume() {
        return <h1>for a price</h1>;
        // return <BodyPage page='resume' />
    }
}
