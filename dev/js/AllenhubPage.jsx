import React from 'react';
import ReactDOM from 'react-dom';

import { Menu } from 'semantic-ui-react';

export default class AllenhubPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Home',
        };
        
        this.bindThisToFunctionsPassedAsParameters();
    }
    
    bindThisToFunctionsPassedAsParameters() {
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    render() {
        return this.buildPageForUser();
    }

    buildPageForUser() {
        return (
            <div>
                {this.buildMenuBar()}
                {this.buildActivePage()}
            </div>
        );
    }

    buildMenuBar() {
        let pages = this.generateMenuBarItems();
        return <Menu inverted items={pages} size='large' />;
    }

    generateMenuBarItems() {
        return [
            this.generateMenuBarItem('Home'),
            this.generateMenuBarItem('Bio'),
            this.generateMenuBarItem('Resume'),
        ];
    }

    generateMenuBarItem(key) {
        return {
            key,
            active: this.state.page === key,
            name: key,
            onClick: this.handleMenuClick,
        };
    }

    handleMenuClick(event, data) {
        this.setState({
            page: data.name,
        });
    }

    buildActivePage() {
        let page = this.state.page;
        if (page === 'Home') {
            return this.buildHomePage();
        } else if (page === 'Bio') {
            return this.buildBioPage();
        } else if (page === 'Resume') {
            return this.buildResumePage();
        } else {
            return '';
        }
    }

    buildHomePage() {
        // return <BodyPage page='home' />
    }

    buildBioPage() {
        // return <BodyPage page='bio' />
    }

    buildResumePage() {
        // return <BodyPage page='resume' />
    }
}
