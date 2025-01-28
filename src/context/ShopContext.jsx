import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = '₦';
    const delivery_fee = 3000;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userData, setSetUserData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [token , setToken] = useState('');
    const navigate = useNavigate();



    const addToCart = async (itemId, size) =>{
        if (!size) {
            toast.error('Please select a size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);

        if (token) {
            try {
                 await axios.post( backendUrl + '/api/cart/add', {itemId, size}, {headers:{token}})
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }



    }

    const getCartCount = ()=>{
        let totalCount = 0;

        for(const items in cartItems) {
           for (const item in cartItems[items]) {
            try {
                if (cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item];
                }
            } catch (error) {
                
            }
           }
            
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;
        setCartItems(cartData);

        if (token) {
            try {
                
                await axios.post( backendUrl + '/api/cart/update', {itemId, size, quantity}, {headers:{token}})

            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){            
            let itemInfo = products.find((product)=> product._id === items);
            for(const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }


    const getProductsData = async () => {
        try {
           
            const response = await axios.get( backendUrl + '/api/product/list')
            if(response.data.success){
                setProducts(response.data.products);
            }
            else{
                toast.error(response.data.message)
            }
            
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getUserCart = async ( token ) => {
        try {
            const response = await axios.post( backendUrl + '/api/cart/get', {}, {headers:{token}}) 
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    // Function to fetch user data from the backend
  const getUserData = async () => {
    if (!token) return; // If no token, skip fetching

    setLoading(true); // Start loading
    try {
      const response = await axios.get(`${backendUrl}/api/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setUserData(response.data.user); // Set user data from response
      } else {
        setError('Not Authorized, Please login again');
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError('Failed to fetch user data');
    } finally {
      setLoading(false); // End loading
    }
  };

  // Fetch user data when token changes
  useEffect(() => {
    if (token) {
      getUserData();
    }
  }, [token]);

    
    useEffect(()=>{
        getProductsData()
    },[])

    useEffect(()=>{
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
    },[])

    const value = {
        products,currency,
        delivery_fee, search,
        setSearch, showSearch, 
        setShowSearch,cartItems,
        addToCart,getCartCount,
        updateQuantity,getCartAmount,
        navigate,backendUrl,token,
        setToken, setCartItems,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;