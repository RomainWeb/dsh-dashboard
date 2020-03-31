import { AppState } from './../index';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UiState } from './reducers';

export const getUiFeatureState = createFeatureSelector<AppState, UiState>('ui');

export const getThemeState = createSelector(
    getUiFeatureState,
    (state: UiState) => state.theme
)