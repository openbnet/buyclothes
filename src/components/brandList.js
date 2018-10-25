import React from 'react'
import BrandListGroup from './brandListGroup';

const BrandList = (props) => {
    const result = props;
    let list;
    
    if(result.items.length){
        list =
            <div className="row grid-wrapper">
                <div className="col-6">
                    <BrandListGroup group={'#'} items = {result.items} />
                    <BrandListGroup group={'A'} items = {result.items} />
                    <BrandListGroup group={'B'} items = {result.items} />
                    <BrandListGroup group={'C'} items = {result.items} />
                    <BrandListGroup group={'D'} items = {result.items} />
                    <BrandListGroup group={'E'} items = {result.items} />
                    <BrandListGroup group={'F'} items = {result.items} />
                    <BrandListGroup group={'G'} items = {result.items} />
                    <BrandListGroup group={'H'} items = {result.items} />
                    <BrandListGroup group={'I'} items = {result.items} />
                    <BrandListGroup group={'J'} items = {result.items} />
                    <BrandListGroup group={'K'} items = {result.items} />
                    <BrandListGroup group={'L'} items = {result.items} />
                </div>
                <div className="col-6">
                    <BrandListGroup group={'M'} items = {result.items} />
                    <BrandListGroup group={'N'} items = {result.items} />
                    <BrandListGroup group={'O'} items = {result.items} />
                    <BrandListGroup group={'P'} items = {result.items} />
                    <BrandListGroup group={'Q'} items = {result.items} />
                    <BrandListGroup group={'R'} items = {result.items} />
                    <BrandListGroup group={'S'} items = {result.items} />
                    <BrandListGroup group={'T'} items = {result.items} />
                    <BrandListGroup group={'U'} items = {result.items} />
                    <BrandListGroup group={'V'} items = {result.items} />
                    <BrandListGroup group={'W'} items = {result.items} />
                    <BrandListGroup group={'X'} items = {result.items} />
                    <BrandListGroup group={'Y'} items = {result.items} />
                    <BrandListGroup group={'Z'} items = {result.items} />
                </div>

            </div>
 
    }else{
        list = 
        <div className="grid-wrapper no-result">
            <div className="col-12">
                <h2>Sorry No Result</h2>
            </div>
        </div>
    }

    return (
        <div>
            {list}
        </div>
    )
}

export default BrandList


