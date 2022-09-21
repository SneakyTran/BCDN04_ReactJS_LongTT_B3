import React, { Component } from "react";

export default class ProductItem extends Component {
    render() {
        let { shoe, getShoeDetail } = this.props;
        let { id, name, price, image } = shoe;
        return (
            <div className="col-4 pt-4">
                <div className="card">
                    <img className="card-img-top" src={image} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">
                            {name.length > 21
                                ? name.substring(0, 21) + "..."
                                : name}
                        </h4>
                        <p className="card-text">{price}$</p>
                        <button
                            onClick={() => {
                                getShoeDetail(id);
                            }}
                            data-toggle="modal"
                            data-target="#modelId"
                            className="btn btn-dark"
                        >
                            View Detail
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
