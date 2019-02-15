import { Action } from '@ngrx/store';

export enum ActionTypes {
    Value       = 'Value',
    Description = 'Description',
    DateTime    = 'DateTime',
    Submiting  = 'Submitting',
    Success     = 'Success',
    Error       = 'Error'
  }

  export class Value implements Action {
    readonly type = ActionTypes.Value;
  }

  export class Description implements Action {
    readonly type = ActionTypes.Description;
  }

  export class DateTime implements Action {
    readonly type = ActionTypes.DateTime;
  }

  export class Submiting implements Action {
    readonly type = ActionTypes.Submiting;
  }

  export class Success implements Action {
    readonly type = ActionTypes.Success;
  }

  export class Error implements Action {
    readonly type = ActionTypes.Error;
  }