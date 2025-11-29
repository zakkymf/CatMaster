import type {AxiosInstance, AxiosResponse} from 'axios';

import {GetDetailOwnerResponse, GetOwnerResponse} from '../dto/owner.dto';
import {Endpoint} from '../../../../shared/constants';

export interface OwnerApi {
  getOwner: (
    sort?: 'cats' | 'name',
  ) => Promise<AxiosResponse<GetOwnerResponse>>;
  getDetailOwner: (
    id: number | undefined,
  ) => Promise<AxiosResponse<GetDetailOwnerResponse>>;
  addFavoriteOwner: (id: number | undefined) => Promise<AxiosResponse<any>>;
  makeMaster: (id: number | undefined) => Promise<AxiosResponse<any>>;
}

export function ownerApiImpl(httpClient: AxiosInstance): OwnerApi {
  return {
    getOwner: (sort?: 'cats' | 'name') => {
      return httpClient.get<GetOwnerResponse>(Endpoint.GET_OWNERS, {
        params: {sort: sort ?? 'name'},
      });
    },

    getDetailOwner: (id: number | undefined) => {
      return httpClient.get<GetDetailOwnerResponse>(
        `${Endpoint.GET_OWNERS}/${id}`,
      );
    },

    addFavoriteOwner: (id: number | undefined) => {
      return httpClient.patch<any>(`${Endpoint.GET_OWNERS}/${id}/favorite`);
    },

    makeMaster: (id: number | undefined) => {
      return httpClient.patch<any>(`${Endpoint.GET_OWNERS}/${id}/master`);
    },
  };
}
