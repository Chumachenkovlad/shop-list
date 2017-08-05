import { createSelector } from 'reselect';


import * as fromProducts from './products/products.reducer';
import * as fromLayout from './layout/layout.reducer';

import { compose } from '@ngrx/core';
import { combineReducers, ActionReducerMap, State } from '@ngrx/store';


// application's states
export interface AppState {
    products: fromProducts.State;
    layout: fromLayout.State;
}

export const reducers: any = {
    products: fromProducts.reducer,
    layout: fromLayout.reducer
};

// function debug(reducer) {
//   return function(state, action) {
//     console.log('state', state);
//     console.log('action', action);

//     return reducer(state, action);
//   };
// }

// export const metaReducers = [debug];

// Layout
export const getLayoutState            = (state: AppState) => state.layout;
export const getHeaderData             = createSelector(getLayoutState, fromLayout.getHeaderData);

// Products
export const getProductsState          = (state: AppState) => state.products;
export const getProducts               = createSelector(getProductsState, fromProducts.getProducts);
export const getProductsBuffer         = createSelector(getProductsState, fromProducts.getProductsBuffer);
export const getInBasketFiltration     = createSelector(getProductsState, fromProducts.getInBasketFiltration);
