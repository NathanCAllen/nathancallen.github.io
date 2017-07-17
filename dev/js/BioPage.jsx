import React from 'react';

import { Header } from 'semantic-ui-react';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='ui center aligned segment basic'>
                {this.buildPageHeader()}
                {this.buildPageBody()}
            </div>
        );
    }

    buildPageHeader() {
        return (
            <Header size='large'>
                Nathan Allen:
            </Header>
        );
    }

    buildPageBody() {
        return (
            <p>
                I grew up in the suburbs of Boston. I started my studies at
                Tufts in the fall of 2015, and have been pursuing majors in
                computer science and physics. I love designing and implementing
                web apps. I also love fantasy and sci-fi, especially the works
                of R.A. Salvatore, Timothy Zahn, and George R.R. Martin. I also
                love sprawling open-world RPG's and weird indie games with cute
                graphics. I intend to graduate in the spring of 2019, with
                fanfare and a job.
            </p>
        );
    }
}
