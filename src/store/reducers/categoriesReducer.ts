import {
  CategoriesActionsTypes,
  CategoriesState,
  GetCategoriesActions,
} from '../../types/actionsTypes/categoriesActionsTypes/categoriesActionsTypes';

const initialCategoriesState: CategoriesState = {
  message: '',
  loading: false,
  categories: [],
};

export const categoriesReducer = (
  state = initialCategoriesState,
  action: GetCategoriesActions,
): CategoriesState => {
  switch (action.type) {
    case CategoriesActionsTypes.GET_CATEGORIES_LIST_ACTION:
      return {
        ...state,
        message: 'Getting list of categories...',
        loading: true,
      };
    case CategoriesActionsTypes.GET_CATEGORIES_LIST_FAILED:
      return {
        ...state,
        message: 'Error during getting list of categories',
        loading: false,
      };
    case CategoriesActionsTypes.GET_CATEGORIES_LIST_SUCCESS:
      return {
        ...state,
        message: 'Successfully got list of categories',
        loading: false,
        categories: action?.payload,
      };
    default:
      return state;
  }
};
