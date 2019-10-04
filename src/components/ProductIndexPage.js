import React, { Component } from 'react';
import ProductDetails from "./ProductDetails";
import ProductIndexPageData from "../data/ProductIndexPageData";
import DeleteButton from './DeleteButton';

class ProductIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [...ProductIndexPageData]
        }
    }

    deleteProduct(id) {
        this.setState((state, props) => {
            return {
                products: state.products.filter((p) => p.id !== id)
            };

        });
    }

    render() {
        return (
            <div>
                <h1>Product Index Page</h1>

                {this.state.products.map((product, index) => (
                    <li key={index}>
                        <p>
                            {product.title}
                            <br />
                            {product.price}
                            <br />
                            <small>{product.seller.full_name}</small>
                            <DeleteButton onDeleteClick={() => this.deleteProduct(product.id)} />
                        </p>
                    </li>
                ))}
            </div>
        )
    }
}


export default ProductIndexPage;