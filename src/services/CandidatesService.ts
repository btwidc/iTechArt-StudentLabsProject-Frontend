import api from '../http/index';
import { AxiosResponse } from 'axios';

import { ICandidateInfo } from '../types/candidateTypes/ICandidateInfo'

export default class CandidatesService {
  static async addCandidateInfo(
    candidateInfo: ICandidateInfo,
  ): Promise<AxiosResponse<ICandidateInfo>> {
    return api.post<ICandidateInfo>('/candidate/add', candidateInfo);
  }

  static async getCandidatesList(): Promise<
    AxiosResponse<Array<ICandidateInfo>>
    > {
    return api.get<Array<ICandidateInfo>>('/candidate/list');
  }

}
