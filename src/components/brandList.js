import React from 'react'
import BrandListItem from './brandListItem';

const BrandList = (props) => {
    // const result = props;

    const items =  props.items.map((item, i) => {
        return (
            <BrandListItem key = {i} item = {item} />
        )
    })
    // if(result.items.length){
    //     items = result.items.map((item, i)=>{
    //         return (
    //             <BrandListItem key={i} item = {item} />
    //         )
    //     })
    // }else{
    //     items = <h2>No Result</h2>
    // }

    return (
        <div>
            {items}
        </div>
    )
}

export default BrandList


