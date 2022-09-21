import React, { Component } from "react";
import ProductList from "./ProductList";
import data from "../data/data.json";
import Modal from "./Modal";

export default class ShoesStore extends Component {
    state = { shoe: "shoe" };

    getShoeDetail = (id) => {
        this.setState({
            shoe: data.find((item) => {
                return id === item.id;
            }),
        });
    };

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Shoe Shop</h2>
                <ProductList getShoeDetail={this.getShoeDetail} data={data} />
                <Modal shoeDetail={this.state.shoe} />
            </div>
        );
    }
}
