import { createAction, props } from '@ngrx/store';

export const changeIsLogging = createAction(
    '[User] Change Is Logging',
    props<{ isLogging: boolean }>()
)