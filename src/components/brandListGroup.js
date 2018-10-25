import React from 'react'
import BrandListItem from './brandListItem';

const BrandListGroup = (props) => {
    const result = props;
    const digit = new RegExp("/^\d/", 'g');

    let group = (result.group == "#")? result.items.filter((item) => item.match(/^\d/)) : result.items.filter((item) => item.startsWith(props.group));

    let items;
    
    let getItems =  group.map((item, i) => {
        return (
                <BrandListItem key = {i} item = {item} />
        )
    })
    
    if(group.length){

        items =
            <div className="grid-wrapper">
                <div className="col-1">
                    <h1>{props.group}</h1>
                </div>
                <div className="col-4">
                    {getItems}
                </div>
            </div>
    }else{
        items = null;
    }

    return (
        <div className="brand-group">
            {items}
        </div>
    )
}

export default BrandListGroup

