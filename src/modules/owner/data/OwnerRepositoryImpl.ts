import {OwnerRepository} from '../domain/OwnerRepository';
import {OwnerApi} from './api/owner.api';

export function OwnerRepositoryImpl(ownerApi: OwnerApi): OwnerRepository {
  return {
    async getOwner(sort) {
      const res = await ownerApi.getOwner(sort);

      return res.data.data;
    },

    async getDetailOwner(id) {
      const res = await ownerApi.getDetailOwner(id);

      return res.data.data;
    },

    async addFavoriteOwner(id: number | undefined) {
      const res = await ownerApi.addFavoriteOwner(id);

      return res.data.data;
    },

    async makeMaster(id: number | undefined) {
      const res = await ownerApi.makeMaster(id);

      return res.data.data;
    },
  };
}
