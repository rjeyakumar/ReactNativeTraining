import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    ADD_TO_WISH,
    ADD_PRODUCT_TO_WISH,
    RESET_PRODUCTS
} from "../actionTypes/product";

export function getProducts(page, limit) {
    return {
        type: GET_PRODUCTS,
        page,
        limit
    }
}

export function getProductsSuccess(products) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        products
    }
}

export function getProductsFailure(error) {
    return {
        type: GET_PRODUCTS_FAILURE,
        error
    }
}

export function addToWishList(id) {
    return {
        type: ADD_TO_WISH,
        id
    }
}

export function addProductToWishList(products, id) {
    return {
        type: ADD_PRODUCT_TO_WISH,
        products,
        id,
    }
}
