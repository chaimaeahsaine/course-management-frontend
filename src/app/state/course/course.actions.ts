import { createAction, props } from '@ngrx/store';

export enum courseTypes {
  GET_ALL = '[Course] find all courses',
  GET_ALL_SUCCESS = '[Course] find all courses success',
  GET_ALL_FAILURE = '[Course] find all courses failed',
}

export const getCourses = createAction(courseTypes.GET_ALL);

export const getCoursesSuccess = createAction(
  courseTypes.GET_ALL_SUCCESS,

  props<{ courseList: [] }>()
);

export const getCoursesFailed = createAction(
  courseTypes.GET_ALL_FAILURE,

  props<{ error: String }>()
);
