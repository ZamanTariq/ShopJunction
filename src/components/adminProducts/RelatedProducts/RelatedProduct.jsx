import React, { Component } from 'react'
import Electronic from "./Electronic"
export default class RelatedProduct extends Component {
    render() {
        return (
            <div className="container font-weight-bold my-2">
                Related Products
                <hr className="mt-1"/>
                <Electronic/>
            </div>
        )
    }
}
