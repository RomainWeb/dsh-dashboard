import { createAction, props } from '@ngrx/store';

export const loadTheme = createAction('[Ui] Load Theme');

export const changeTheme = createAction(
    '[Ui] Change Theme',
    props<{ theme: string }>()
)