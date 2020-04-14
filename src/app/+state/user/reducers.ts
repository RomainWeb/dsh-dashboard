import { createReducer, on } from '@ngrx/store';
import * as fromActions from './actions';

export interface UserState {
    isLogging: boolean;
}

export const initialState: UserState = {
    isLogging: true
}

export const reducer = createReducer(
    initialState,
    on(fromActions.changeIsLogging, (state, { isLogging }) => (
        { ...state, isLogging  }
    ))
)