import api from '../http/index';
import { AxiosResponse } from 'axios';
import { CategoryType } from '../types/categoryTypes/CategoryType';

export default class CategoriesService {
  static async getCategoriesList(): Promise<AxiosResponse<CategoryType[]>> {
    return api.get<CategoryType[]>('/category/list');
  }
}
