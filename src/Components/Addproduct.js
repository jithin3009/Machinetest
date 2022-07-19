// import { Alert } from 'bootstrap';
import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { AddProduct } from '../actions/actions';
import './Addproduct.css'
// import Viewproducts from './Viewproducts';

const Addproduct = ({ AddProduct }) => {
    const [item, setItem] = useState("");
    const [rupees, setrupees] = useState("");
    const [kilogram, setkilogram] = useState("");
    const [category, setcategory] = useState("");





    const handleFormSubmit = e => {

        e.preventDefault();


                    AddProduct({ name: item, price: rupees, quantity: kilogram, category: category })
                    setItem("");
                    setItem("");
                    setrupees("");
                    setkilogram("");
                    setcategory("");
            
                

        

    }
    return (
        <center className="center">
            <h4 className='registerhead'>Add Product</h4>
            <div class="card">
                <div class="card-body">
                    <form onSubmit={handleFormSubmit}>

                        {/* name */}
                        <div className="form-group">
                            <table className="container">
                                <tr>
                                    <td className="heading">Name</td>
                                    <td>:</td>
                                    <td>
                                        <input type="text"
                                            className="form-control"
                                            placeholder="enter name" value={item}
                                            onChange={e => setItem(e.target.value)} />
                                    </td>
                                </tr>
                            </table>
                        </div>


                        {/* price */}
                        <div className="form-group">
                            <table className="container">
                                <tr>
                                    <td className="heading">Price</td>
                                    <td>:</td>
                                    <td>
                                        <input type="text"
                                            className="form-control"
                                            placeholder="enter price" value={rupees}
                                            onChange={e => setrupees(e.target.value)} />
                                    </td>
                                </tr>
                            </table>
                        </div>

                        {/* quantity*/}
                        <div className="form-group">
                            <table className="container">
                                <tr>
                                    <td className="heading">Quantity</td>
                                    <td>:</td>
                                    <td>
                                        <input type="text"
                                            className="form-control"
                                            placeholder="enter Quantity" value={kilogram}
                                            onChange={e => setkilogram(e.target.value)} />
                                    </td>
                                </tr>
                            </table>
                        </div>

                        {/* category*/}
                        <div className="form-group">
                            <table className="container">
                                <tr>
                                    <td className="heading">Category</td>
                                    <td>:</td>
                                    <td>
                                        <input type="text"
                                            className="form-control"
                                            placeholder="enter category" value={category}
                                            onChange={e => setcategory(e.target.value)} />
                                    </td>
                                </tr>
                            </table>
                        </div>





                        <br></br>

                        <button className='btn'>
                            Addproduct
                        </button>

                    </form>

                    <br/>
                    <br/>

                   

                </div>
            </div>

        </center>
 
    )
}

const mapToProps = (state) => ({
    products: state
})

export default connect(mapToProps, { AddProduct })(Addproduct);
