import React from 'react'

const BrandListItem = (props) => {
    return (
        <section className="style1 search-bar">
            <h4>{props.item.brandName}</h4>
        </section>
    )
}

export default BrandListItem


