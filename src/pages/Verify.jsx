import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Verify = () => {

    const location = useLocation();
    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
    const [searchParams] = useSearchParams();  // Fixing the searchParams hook

    // Extract orderId from the URL query params
    const queryParams = new URLSearchParams(location.search);
    const orderId = queryParams.get('orderId');
    const transactionId = queryParams.get('transaction_id'); // assuming it's also passed


    useEffect(() => {
        if (orderId) {
            verifyOrder(orderId, transactionId);
        }
    }, [orderId, transactionId]);
    const verifyOrder = async (orderId, transactionId) => {
        try {
          const response = await axios.post(`${backendUrl}/api/order/verify`, { 
            orderId, 
            transaction_id: transactionId 
          });
          
          if (response.data.success) {
            console.log("Payment Verified:", response.data.message);
            navigate('/orders'); // Redirect to orders page after success
          } else {
            console.log("Payment Failed:", response.data.message);
          }
        } catch (error) {
          console.error("Error verifying payment:", error);
        }
      };
    

    // useEffect(() => {
    //     if (success) {
    //         verifyPayment();
    //     } else {
    //         navigate('/cart');
    //     }
    // }, [token, success]);

    return <div>Verifying payment...</div>;
};

export default Verify;
