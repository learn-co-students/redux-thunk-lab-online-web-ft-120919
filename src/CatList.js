import React, { Component } from 'react'

export class CatList extends Component {
    constructor(props) {
        super(props)
    }

    renderCatPics() {
       return this.props.catPics.map(pic => <img src={pic.url}></img>)
    }

    render() {
        console.log("props in CatList: ", this.props)
        return (
            <div>
                {this.renderCatPics()}
            </div>
        )
    }
}

export default CatList
