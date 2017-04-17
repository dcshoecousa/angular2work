/**
 * Created by stan on 2017/4/1.
 */
import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(-100%)'
      }),
      animate('0.8s ease-in-out')
    ]),
    // transition(':leave', [
    //   animate('0.5s ease-out', style({
    //     opacity: 0,
    //     transform: 'translateY(100%)'
    //   }))
    // ])
  ]);
