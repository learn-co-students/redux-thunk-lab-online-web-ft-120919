import React, { Component } from 'react';

class CatList extends Component {

  render() {
    return (
      <div>
        {this.props.loading && "Loading ..."}
        {this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.source_url}></img>)}
      </div>
    )
  }
}
export default CatList