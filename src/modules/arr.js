import { createAction, handleActions } from 'redux-actions';

const STUDENTS_ARR_ACTION = 'switch/STUDENTS_ARR_ACTION';
const DESKS_ARR_ACTION = 'switch/DESKS_ARR_ACTION';
const ID_ACTION = 'switch/ID_ACTION';

const initialState = {};

const arr = handleActions(
    {[STUDENTS_ARR_ACTION]: (state, {payload: studentsArr}) => ({
        ...state, 
        studentsArr: studentsArr}),
     [DESKS_ARR_ACTION]: (state,{payload: desksArr}) => ({
         ...state,
         desksArr: desksArr
     }),
    [ID_ACTION]: (state,{payload: lastId}) => ({
        ...state,
        lastId: lastId
    })},
     initialState,
);

export const studentsArr = createAction(STUDENTS_ARR_ACTION);
export const desksArr = createAction(DESKS_ARR_ACTION);



export default arr;