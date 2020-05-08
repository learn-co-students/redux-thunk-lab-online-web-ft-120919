// write your CatList component here
import React from 'react'

export default function CatList(props) {
    const renderCats = () => {
        return props.catPics.map((catPic, index) => {
            return <img key={index} src={catPic.url}></img>
        })
    }
    
    return (
        <div>
            {renderCats()}
        </div>
    )
}
