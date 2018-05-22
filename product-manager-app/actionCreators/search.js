import {
    SEARCH_PRODUCTS,
    RESET_PRODUCTS,
} from "../actionTypes/product";


export function resetProducts() {
    return {
        type: RESET_PRODUCTS,
    }
}

export function searchProducts(searchText, page, limit) {
    return {
        type: SEARCH_PRODUCTS,
        searchText,
        page,
        limit,
    }
}
