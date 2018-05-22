import {
    GET_PRODUCTS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    ADD_PRODUCT_TO_WISH,
    SEARCH_PRODUCTS,
    RESET_PRODUCTS,
} from "../actionTypes/product";

export default (prevState = {
    products: [],
    product: {},
    isLoading: false,
    isRefreshing: false,
    page: 1,
    limit: 8
}, action) => {
    console.log(action.type);
    switch (action.type) {
        case GET_PRODUCTS:
        case SEARCH_PRODUCTS:
            return {
                ...prevState,
                isLoading: prevState.products.length > 0 ? false : true,
                page: action.page
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...prevState,
                isLoading: false,
                products: prevState.products.concat(action.products)
            }
        case ADD_PRODUCT_TO_WISH: {
            const { products, id } = action;
            return {
                ...prevState,
                products: products.map(product => ({ ...product, wish: product.id === id ? !product.wish : false })),
            }
        }
        case RESET_PRODUCTS:
            return {
                ...prevState,
                products: [],
                page: 1,                
            }
        default:
            return prevState;

    }
}