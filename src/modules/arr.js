import { createAction, handleActions } from 'redux-actions';

const STUDENTS_ARR_ACTION = 'switch/STUDENTS_ARR_ACTION';
const DESK_ARR_ACTION = 'switch/DESK_ARR_ACTION';

const initialState = {};

const arr = handleActions(
    {[STUDENTS_ARR_ACTION]: (state, {payload: studentsArr}) => ({
        ...state, 
        studentsArr: studentsArr}),
     [DESK_ARR_ACTION]: (state,{payload: deskArr}) => ({
         ...state,
         deskArr: deskArr
     })},
     initialState,
);

export const studentsArr = createAction(STUDENTS_ARR_ACTION);
export const deskArr = createAction(DESK_ARR_ACTION);



export default arr;