import { createReducer, on } from "@ngrx/store";


import { getCourses, getCoursesFailed, getCoursesSuccess } from "./course.actions";

export interface CourseState{
    courses: [],
    error: any
    

}
export const initialState: CourseState = {
   courses : [],
   error: ""
   
  };

  export const courseReducer = createReducer(
    initialState,
  on(getCourses,(state, action)=>{
    return {
        ...state
    }
  }),
  on(getCoursesSuccess,(state, action)=>{
    return {
        ...state,
        courses : action.courseList

    }
  }),
  on(getCoursesFailed,(state, action)=>{
    return {
        ...state,
        error: action.error
        

    }
  })
  );