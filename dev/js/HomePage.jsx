import React from 'react';

import { Header, Image, Label } from 'semantic-ui-react';

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
                Hi! Welcome to my personal web page.
                You'll find my bio and resume in the menu above.
                Thanks for stopping by!
            </Header>
        );
    }

    buildPageBody() {
        return (
            <div>
                {this.buildImage()}
                {this.buildImageCaption()}
            </div>
        );
    }

    buildImage() {
        return (
            <Image
                centered
                alt='Picture of me with cocoa'
                size='medium'
                src='src/media/Nathan_Allen_Cocoa.jpg'
            />
        );
    }

    buildImageCaption() {
        return (
            <Label
                color='grey'
                content='Me with some delicious hot cocoa, 2017'
            />
        );
    }
}
