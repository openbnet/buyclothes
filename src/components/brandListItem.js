import React from 'react'

const BrandListItem = (props) => {

    // console.log("items:", props)

    return (
        <div className="brands-list">
            <h3 className="name">{props.item}</h3>
        </div>
    )
}

export default BrandListItem


