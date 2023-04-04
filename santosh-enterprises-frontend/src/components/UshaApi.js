import {React, useEffect, useState} from 'react'
import { Route, Switch } from 'react-router-dom';
import UshaProduct from '../pages/UshaProduct';
import UshaService from '../pages/UshaService';

const UshaApi = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchAllProduct = async () =>{
            const response = await fetch('/product/all');
            const data = await response.json();
            // console.log(data);
            setProducts(data);
            setLoading(false);
        }

        fetchAllProduct();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return(
        <div>
            <Switch>
                <Route exact path='/service/usha'>
                    <UshaService products={products}/>
                </Route>
                <Route exact path='/product/usha'>
                    <UshaProduct products={products}/>
                </Route>
            </Switch>
        </div>
    );

}

export default UshaApi;