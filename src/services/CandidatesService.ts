import api from '../http/index';
import { AxiosResponse } from 'axios';

import { ICandidateInfo } from '../types/candidateTypes/ICandidateInfo';

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

  static async getCandidatesList(): Promise<AxiosResponse<ICandidateInfo[]>> {
    return api.get<ICandidateInfo[]>('/candidate/list');
  }

  static async getCandidateInfo(
    id: string,
  ): Promise<AxiosResponse<ICandidateInfo>> {
    return api.get<ICandidateInfo>(`candidate/info/${id}`);
  }

  static async deleteCandidate(id: string): Promise<AxiosResponse<number>> {
    return api.delete<number>(`candidate/delete/${id}`);
  }

  static async downloadCandidateCv(id: string): Promise<AxiosResponse<Blob>> {
    return api.get<Blob>(`candidate/download/${id}`, { responseType: 'blob' });
  }
}
