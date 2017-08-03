import { Action } from '@ngrx/store';

export const ProductsActionTypes = {
  BASKET_TOGGLE: '[Products] Toggle product in/out of basket',
  ADD_TO_BUFFER: '[Products] add new product to buffer',
  REMOVE_FROM_BUFFER: '[Products] remove product from buffer',
  SAVE_FROM_BUFFER: '[Products] save all products from buffer',
  SWITCH_BASKET_FILTER: '[Products] switch on/off in basket filteration'
};

export class ProductsBasketToggleAction implements Action {
  type = ProductsActionTypes.BASKET_TOGGLE;
  constructor(public payload: any = null) {}
}

export class ProductsAddToBufferAction implements Action {
  type = ProductsActionTypes.ADD_TO_BUFFER;
  constructor(public payload: any = null) {}
}

export class ProductsRemoveFromBufferAction implements Action {
  type = ProductsActionTypes.REMOVE_FROM_BUFFER;
  constructor(public payload: any = null) {}
}

export class ProductsSaveFromBufferAction implements Action {
  type = ProductsActionTypes.SAVE_FROM_BUFFER;
  constructor(public payload: any = null) {}
}

export class ProductsSwitchBasketFilterAction implements Action {
  type = ProductsActionTypes.SWITCH_BASKET_FILTER;
  constructor(public payload: any = null) {}
}

export type ProductsActions = ProductsBasketToggleAction
    | ProductsAddToBufferAction
    | ProductsRemoveFromBufferAction
    | ProductsSaveFromBufferAction
    | ProductsSwitchBasketFilterAction;


