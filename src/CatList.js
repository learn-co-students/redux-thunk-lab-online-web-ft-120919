import React, { Component } from 'react';

export default class CatList extends Component {

    listOfCats = () => {
        return this.props.catPics.map(cat => {
            return <img src={cat.url} />
        })
    }

    render() {
        return (
            <div>
                {this.listOfCats()}
            </div>
        );
    }
}

