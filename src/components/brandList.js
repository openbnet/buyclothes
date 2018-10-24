import React from 'react'
import BrandListItem from './brandListItem';

const BrandList = (props) => {
    const result = props;
    console.log(result)
    let items;

    if(result.items.length){
        items = result.items.map((item, i)=>{
            return (
                <BrandListItem key={i} item = {item} />
            )
        })
    }else{
        items = <h2>No Result</h2>
    }

    return (
        <div>
            {props.children}
            {items}
        </div>
    )
}

export default BrandList


