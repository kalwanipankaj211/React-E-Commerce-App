import React, {useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../redux/actions/productAction';
import ProductComponent from './ProductComponent.js';
import './ProductListing.css'

const ProductListing =  () =>{
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();
    const fetchProducts  = async () =>{
        const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("Err", err);
        })
        // console.log(response.data);
        dispatch(setProducts(response.data));
    }

    useEffect(()=>{
        fetchProducts();
    },[])
    console.log("Products::",products);
    return (
        <div className="ui grid container">
           <ProductComponent></ProductComponent>
        </div>
    )
}

export default ProductListing;