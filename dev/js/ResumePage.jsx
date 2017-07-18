import React from 'react';

import { Header } from 'semantic-ui-react';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pdf: false,
        };
    }

    render() {
        return (
            <div className='ui center aligned segment basic'>
                {this.buildPageHeader()}
                {this.buildPageBody()}
                {this.buildResumeText()}
            </div>
        );
    }

    buildPageHeader() {
        return (
            <Header size='large'>
                Nathan Allen
            </Header>
        );
    }

    buildPageBody() {
        return (
            <object data='src/media/Nathan_Allen_Resume.pdf'
                height={600} id='resume_pdf' width={750}/>
        );
    }

    buildResumeText() {
        return (
            <p>
                To view my resume in a separate page, click
                <a href='src/media/Nathan_Allen_Resume.pdf' target='_blank'>
                    &nbsp;here.
                </a>
            </p>
        );
    }
}
