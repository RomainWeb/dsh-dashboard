import * as fromUiReducer from './ui/reducers';
import * as fromUserReducer from './user/reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    ui: fromUiReducer.UiState;
    user: fromUserReducer.UserState;
}

export const reducers: ActionReducerMap<AppState> = {
    ui: fromUiReducer.reducer,
    user: fromUserReducer.reducer
}