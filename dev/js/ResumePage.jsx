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
}
