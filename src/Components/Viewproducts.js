// import { useState } from 'react';
import { connect } from 'react-redux';
import { AddProduct } from '../actions/actions';
import './Viewproducts.css'
function Viewproducts({ products }) {

    // const [item, setItem] = useState("");

    // const submitHandler = e => {
    //     e.preventDefault();
    //     // if (item !== "") {
    //     AddProduct({ name: item})
    //         ;
    //     //     setItem("");
    //     // }
    //     setItem("");

    return (
        <div className='card'>
            <div className='card-body'>
                <br></br>
                <h2 className='registerhead' >List products</h2>
                
                <div className='container' >
                    <div className='row' id='ctn'>

                        <div className='col1'>Name</div>
                        <div className='col1'>price</div>
                        <div className='col1'>quantity</div>
                        <div className='col1'>category</div>



                    </div>
                </div>
                {
                    products.map(product => {
                        return (
                            <div className='container'>

                                <div className='row'>

                                    <div className='col1'>{product.name}</div>
                                    <div className='col1'>{product.price}</div>
                                    <div className='col1'>{product.quantity}</div>
                                    <div className='col1'>{product.category}</div>


                                </div>
                            </div>

                        )
                    })}
            </div>
        </div>

    )
}
const mapToProps = (state) => ({
    products: state
})

export default connect(mapToProps, { AddProduct })(Viewproducts);
