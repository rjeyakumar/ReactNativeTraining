import {
    put,
    takeLatest,
    select,
    throttle,
} from "redux-saga/effects";
import * as actionCreators from "../actionCreators/product"
import * as detailsActionCreators from "../actionCreators/productDetails"
import * as addProductActionCreators from "../actionCreators/addProduct"
import { productsSelector } from './selectors';
import {
    GET_PRODUCTS, ADD_PRODUCT, GET_PRODUCT_DETAILS, ADD_TO_WISH, SEARCH_PRODUCTS,
} from "../actionTypes/product";
import { takeEvery } from "redux-saga";

let URI = "http://172.16.101.225:4000";

function* getProducts(action) {
    try {
        let products = yield fetch(`${URI}/products?_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.getProductsSuccess(products))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}

function* getProductDetails(action) {
    try {
        let productDetails = yield fetch(`${URI}/products/${action.id}`).then(r => r.json());
        yield put(detailsActionCreators.getProductDetailsSuccess(productDetails))
    } catch (error) {
        yield put(detailsActionCreators.getProductDetailsFailure(error))
    }
}
// function* getProduct(action) {
//     try {
//         let product = yield fetch(`${URI}\product\${action.id}`).then(r => r.json());
//         yield put(actionCreators.getProductSuccess(product))
//     } catch (error) {
//         yield put(actionCreators.getProductFailure(error))
//     }
// }

function* searchProducts(action) {
    try {
        let productDetails = yield fetch(`${URI}/products?q=${action.searchText}&_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.getProductsSuccess(productDetails))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}

function* addToWishList(action) {
    const products = yield select(productsSelector);
    yield put(actionCreators.addProductToWishList(products, action.id));
}

function* addProduct(action) {
    try {
        let product = yield fetch(`${URI}/products`, {
            body: JSON.stringify(action.product),
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
        }).then(r => r.json());
        yield put(addProductActionCreators.addProductSuccess(product))
    } catch (error) {
        yield put(addProductActionCreators.addProductFailure(error))
    }
}

export function* productWatchers() {
    yield [takeLatest(GET_PRODUCTS, getProducts),
    takeLatest(GET_PRODUCT_DETAILS, getProductDetails),
    takeEvery(ADD_TO_WISH, addToWishList),
    takeEvery(ADD_PRODUCT, addProduct),
    throttle(1000, SEARCH_PRODUCTS, searchProducts),]
}