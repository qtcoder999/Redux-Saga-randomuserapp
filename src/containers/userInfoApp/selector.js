import { createSelector } from 'reselect';
import {NAME_FROM_STORE,EMAIL_FROM_STORE,IMAGE_FROM_STORE} from './constants';

const getState = (state) => state.get(NAME_FROM_STORE)
const getState1 = (state) => state.get(EMAIL_FROM_STORE)
const getState2 = (state) => state.get(IMAGE_FROM_STORE)


export const getBarState = createSelector(
    [ getState ],
    (name) => name,
  )

  export const getBarState1 = createSelector(
    [ getState1 ],
    (email) => email,
  )

  export const getBarState2 = createSelector(
    [ getState2 ],
    (image) => image,
  )

 
