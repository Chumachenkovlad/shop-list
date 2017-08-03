import * as layout from './layout.actions';

export const HEADER_TYPES = {
    PRODUCTS: 'Products',
    EDIT_PRODUCTS: 'Edit Products'
};

export interface State {
  readonly header_type;
}

const initialState: State = {
    header_type: HEADER_TYPES.PRODUCTS
};


export function reducer(state: State = initialState, action: layout.LayoutActions): State {
  switch (action.type) {
    case layout.LayoutActionTypes.UPDATE_HEADER:
      {
        const header_type = action.payload;
        return Object.assign({}, state, { header_type });
      }
    default:
      return state;
  }
}

export const getHeaderType = (state: State) => state.header_type;
