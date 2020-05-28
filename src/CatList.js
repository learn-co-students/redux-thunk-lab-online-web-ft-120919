// write your CatList component here
import React, { Component } from 'react'

export default class CatList extends Component {

  render() {
    return(
      <div>
        {this.props.catPics.map((catPic) => {
          return (
            <div key={catPic.id} >
              <img 
                src={catPic.url} 
                style={{width: "50%"}}
                alt="A very cute cat."
              />
            </div>
          )
        })}
      </div>
    )
  }

}