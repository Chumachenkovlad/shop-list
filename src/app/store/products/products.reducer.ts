import * as products from './products.actions';
import { Product } from './product.model';


export interface State {
  readonly products: Array<Product>;
  readonly products_buffer: Array<Product>;
  readonly in_basket_filtration: boolean;
  readonly new_product: Product;
}

const initialState: State = {
  products: [
      new Product('Milk 1l', true),
      new Product('Eggs Medium 12 pack', true),
      new Product('Fresh Basil', true),
      new Product('Wholegrain Bread 1 pkg', true),
      new Product('Ground Coffee 200g', true),
      new Product('Red Wine', true),
      new Product('Mozzarella Cheese 150g', true),
      new Product('Orange Juice 1l', true),
      new Product('Tomatoes', true),
  ],
  products_buffer: [
      new Product('Свитч', true)
  ],
  in_basket_filtration: false,
  new_product: new Product('', true)
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
            products_buffer: [...state.products_buffer, state.new_product],
            new_product: new Product('', true)
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
          { in_basket_filtration: action.payload });
      }
    case products.ProductsActionTypes.UPDATE_UNSAVED_PRODUCT:
      {
        const name = action.payload.name;
        return Object.assign({}, state,
          { new_product: new Product(name, true) });
      }
    default:
      return state;
  }
}


export const getProducts = (state: State) => state.products;
export const getProductsBuffer = (state: State) => state.products_buffer;
export const getInBasketFiltration = (state: State) => state.in_basket_filtration;
