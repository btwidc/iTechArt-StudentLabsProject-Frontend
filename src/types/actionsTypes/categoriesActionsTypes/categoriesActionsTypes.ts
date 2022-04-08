import { CategoryType } from '../../categoryTypes/CategoryType';

export interface CategoriesState {
  message: string;
  loading: boolean;
  categories: CategoryType[] | null | undefined;
}

export enum CategoriesActionsTypes {
  GET_CATEGORIES_LIST_ACTION = 'GET_CATEGORIES_LIST_ACTION',
  GET_CATEGORIES_LIST_FAILED = 'GET_CATEGORIES_LIST_FAILED',
  GET_CATEGORIES_LIST_SUCCESS = 'GET_CATEGORIES_LIST_SUCCESS',
}

export interface GetCategoriesActions {
  type:
    | CategoriesActionsTypes.GET_CATEGORIES_LIST_ACTION
    | CategoriesActionsTypes.GET_CATEGORIES_LIST_FAILED
    | CategoriesActionsTypes.GET_CATEGORIES_LIST_SUCCESS;
  payload?: CategoryType[];
}
