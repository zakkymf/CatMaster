import {Owner} from './entities/owner';

export interface OwnerRepository {
  getOwner: (sort: 'name' | 'cats') => Promise<Owner[]>;
  getDetailOwner: (id: number | undefined) => Promise<Owner>;
  addFavoriteOwner: (id: number | undefined) => Promise<any>;
  makeMaster: (id: number | undefined) => Promise<any>;
}
