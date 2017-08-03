import { Action } from '@ngrx/store';

export const LayoutActionTypes = {
  UPDATE_HEADER: '[Layout] Toggle product in/out of basket',
};

export class LayoutUpdateHeaderAction implements Action {
  type = LayoutActionTypes.UPDATE_HEADER;
  constructor(public payload: any = null) {}
}

export type LayoutActions = LayoutUpdateHeaderAction;




