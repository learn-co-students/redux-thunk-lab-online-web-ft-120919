import React, { Component } from 'react'

export class CatList extends Component {

    
    
    render() {

        // const {catsPics} = this.props
        console.log(this.props)
        return (         
            <div>
                {this.props.catPics.map( catPic => <li><img src={catPic.url}></img></li> )}
                
            </div>
        )
    }
}

export default CatList
