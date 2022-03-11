import api from '../http/index';
import { AxiosResponse } from 'axios';

import { ICandidateInfo } from '../types/candidateTypes/ICandidateInfo';
import { CandidateFormInfo } from '../types/candidateTypes/CandidateFormInfo';

export default class CandidatesService {
  static async addCandidateInfo(
    candidateInfo: any,
  ): Promise<AxiosResponse<ICandidateInfo>> {
    return api.post<ICandidateInfo>('/candidate/add', candidateInfo, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
  }

  static async getCandidatesList(): Promise<
    AxiosResponse<Array<ICandidateInfo>>
  > {
    return api.get<Array<ICandidateInfo>>('/candidate/list');
  }
}
