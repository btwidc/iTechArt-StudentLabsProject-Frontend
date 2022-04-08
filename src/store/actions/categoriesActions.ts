import { Dispatch } from 'redux';

import CategoriesService from '../../services/CategoriesService';

import {
  CategoriesActionsTypes,
  GetCategoriesActions,
} from '../../types/actionsTypes/categoriesActionsTypes/categoriesActionsTypes';

export const getCategoriesListAction = () => {
  return async (dispatch: Dispatch<GetCategoriesActions>) => {
    try {
      dispatch({
        type: CategoriesActionsTypes.GET_CATEGORIES_LIST_ACTION,
      });
      const categoriesList = await CategoriesService.getCategoriesList();
      dispatch({
        type: CategoriesActionsTypes.GET_CATEGORIES_LIST_SUCCESS,
        payload: categoriesList.data,
      });
    } catch (e) {
      dispatch({
        type: CategoriesActionsTypes.GET_CATEGORIES_LIST_FAILED,
      });
    }
  };
};
