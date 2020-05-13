// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {

  renderCats = () => {
    return this.props.catPics.map(obj => {
      return <img src={obj.url} />
    })
  }

  render() {
    return (
      <div>
        {this.renderCats()}
      </div>
    )
  }
}

export default CatList
