import React, {Component} from 'react'
import { Link } from 'gatsby'
import '../assets/css/styles.css';
import FilterSearch from '../components/filterSearch';
import BrandList from '../components/brandList';
import Footer from "../components//Footer";
import Layout from '../components/layout';

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
    }

    render() {

        return (
            <Layout>
                <div id="brandsearch-page">
                    <section id="search-bar">
                        <div className="grid-wrapper">
                            <div className="col-12">
                                <FilterSearch brand={this.getBrand}/>
                            </div>
                        </div>
                    </section>
                    <section className="brand-list">
                            <BrandList items={
                                (this.state.filtered.length === 0 && this.state.keyword.length === 0)? this.state.brands : this.state.filtered} />
                    </section>      
        
                    <Footer />
                </div>
            </Layout>
        )
    }
}

export default BrandSearch