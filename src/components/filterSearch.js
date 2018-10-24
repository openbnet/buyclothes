import React from 'react'


const FilterSearch = (props) => {
    console.log(props)
    return (
        <section className="style1 search-bar">
            <div className="container">
                <h1>Accepted Brands List</h1>
                <input 
                    type="text"
                    placeholder="Brand Name"
                    onChange= {props.brand}/>
            </div>

        </section>
    )
}

export default FilterSearch


