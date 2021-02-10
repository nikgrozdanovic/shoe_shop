import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders')
        .then(response => {
            setOrders(response.data)
        })
        .catch(error => console.error(error))
    }, [])

    orders.map((order) => {
        console.log(order);
    })

    return 'test';
}

export default Orders;