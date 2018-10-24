import React, {Component} from 'react'
// import { Link } from 'gatsby'
import '../assets/css/styles.css';
import FilterSearch from '../components/filterSearch';
import BrandList from '../components/brandList';

import JSON from '../assets/brandList.json'

class BrandSearch extends Component {


    state = {
        keyword: '',
        brands : JSON.brandNames,
        filtered : []
    }

    getBrand = (event) => {
        this.state.keyword = event.target.value;

        let filtered = this.state.brands.filter((item) => {
            return item.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1
        })
        this.setState({
            filtered
        });
        console.log(this.state.filtered)
    }

    render() {

        return (
            <div id="brandsearch-page">
                <section className="main style1 box-1">
                    <div className="grid-wrapper">
                        <div className="col-6">                
                            <p className="hashtag">                                   
                                #SGFashionForGood
                            </p>
                        </div>
                        <div className="col-6">
                            <a href="#" onClick={() => console.log("Clicked")} className="contact-us-btn button">I'm Interested!</a>
                        </div>
                    </div>
                </section>
                <FilterSearch brand={this.getBrand}/>
                <BrandList items={
                    (this.state.filtered.length === 0 && this.state.keyword.length === 0)? this.state.brands : this.state.filtered}> <h2> A. </h2> </BrandList>
            </div>
        )
    }
}

export default BrandSearch