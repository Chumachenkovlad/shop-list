import * as products from './products.actions';
import { Product } from './product.model';


export interface State {
  readonly products: Array<Product>;
  readonly products_buffer: Array<Product>;
  readonly in_basket_filtration: boolean;
}

const initialState: State = {
  products: [
      new Product('Milk 1l', false),
      new Product('Eggs Medium 12 pack', true),
      new Product('Fresh Basil', false),
      new Product('Wholegrain Bread 1 pkg', false),
      new Product('Ground Coffee 200g', false),
      new Product('Red Wine', false),
      new Product('Mozzarella Cheese 150g', false),
      new Product('Orange Juice 1l', false),
      new Product('Tomatoes', false),
  ],
  products_buffer: [
      new Product('Свитч', false)
  ],
  in_basket_filtration: false
};


export function reducer(state: State = initialState, action: products.ProductsActions): State {
  switch (action.type) {
    case products.ProductsActionTypes.BASKET_TOGGLE:
      {
        const product = state.products.find(p => p.name === action.payload.name);
        const pindex = state.products.indexOf(product);
        product.inBasket = action.payload.inBasket;
        return Object.assign({}, state, {
            products: [
              ...state.products.slice(0, pindex),
              product,
              ...state.products.slice(pindex + 1)
            ]
        });
      }
    case products.ProductsActionTypes.ADD_TO_BUFFER:
      {
        const product = new Product(action.payload.name, true);
        return Object.assign({}, state, {
            products_buffer: [...state.products_buffer, product]
        });
      }
    case products.ProductsActionTypes.REMOVE_FROM_BUFFER:
      {
        return Object.assign({}, state, {
            products_buffer: state.products_buffer.filter(p => p.name !== action.payload.product.name)
        });
      }
    case products.ProductsActionTypes.SAVE_FROM_BUFFER:
      {
        return Object.assign({}, state, {
          products: [...state.products, ...state.products_buffer],
          products_buffer: []
        });
      }
    case products.ProductsActionTypes.SWITCH_BASKET_FILTER:
      {
        return Object.assign({}, state,
          { in_basket_filtration: !state.in_basket_filtration });
      }
    default:
      return state;
  }
}


export const getProducts = (state: State) => state.products;
export const getProductsBuffer = (state: State) => state.products_buffer;
export const getInBasketFiltration = (state: State) => state.in_basket_filtration;
