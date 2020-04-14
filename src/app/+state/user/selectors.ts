import { AppState } from './../index';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './reducers';

export const getUserFeatureState = createFeatureSelector<AppState, UserState>('user');

export const getIsLoggingState = createSelector(
    getUserFeatureState,
    (state: UserState) => state.isLogging
)