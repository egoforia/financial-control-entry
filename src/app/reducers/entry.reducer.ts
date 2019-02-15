import { Action } from '@ngrx/store';
import { ActionTypes } from './entry.actions';

export const initialState = 'Value';

export function entryReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.Value:
            return 'Value';

        case ActionTypes.Description:
            return 'Description';

        case ActionTypes.DateTime:
            return 'DateTime';

        case ActionTypes.Submiting:
            return 'Submiting';

        case ActionTypes.Success:
            return 'Success';

        case ActionTypes.Error:
            return 'Error';

        default:
            return state;
    }
  }