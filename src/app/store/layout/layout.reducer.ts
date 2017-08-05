import * as layout from './layout.actions';

export const HEADER_BUTTON_TYPES = {
  EDIT: 'edit', // products to edit list
  ADD_ALL: 'add all',
  ADD_ONE: 'add one',
  SAVE_ONE: 'save one',
  CANCEL_ONE: 'cancel one',
  SETTINGS: 'settings'
};

export interface State {
  readonly header: {
    title: string;
    buttons: string[]
  };
}

const initialState: State = {
    header: null
};

export function reducer(state: State = initialState, action: layout.LayoutActions): State {
  switch (action.type) {
    case layout.LayoutActionTypes.UPDATE_HEADER:
      {
        const header = action.payload;
        return Object.assign({}, state, { header });
      }
    default:
      return state;
  }
}

export const getHeaderData = (state: State) => state.header;
