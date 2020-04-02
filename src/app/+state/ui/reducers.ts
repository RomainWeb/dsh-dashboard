import { createReducer, on } from '@ngrx/store';
import * as fromActions from './actions';
import { state } from '@angular/animations';

export interface UiState {
    theme: string;
}

export const initialState: UiState = {
    theme: 'dark' // | dark
}

export const reducer = createReducer(
    initialState,
    on(fromActions.loadTheme, state => (
        {...state, theme: localStorage.getItem('theme') ?? 'dark'}
    )),
    on(fromActions.changeTheme, (state, { theme }) => (
        { ...state, theme  }
    ))
)