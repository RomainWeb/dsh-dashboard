import { trigger, transition, query, style, group, animate } from '@angular/animations';

export const LeftRightAnimation = trigger(
    'leftToRight',
    [
        transition(
            ':enter',
            [
                style({ transform: 'translateX(100%)', opacity: 0 }),
                animate('0.3s ease-out',
                    style({ transform: 'translateX(0%)', opacity: 1 }))
            ]
        ),
        transition(
            ':leave',
            [
                animate('0.3s ease-out',
                    style({ transform: 'translateX(100%)' }))
            ]
        )
    ]
)