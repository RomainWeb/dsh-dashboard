import * as fromUiReducer from './ui/reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    ui: fromUiReducer.UiState;
}

export const reducers: ActionReducerMap<AppState> = {
    ui: fromUiReducer.reducer
}