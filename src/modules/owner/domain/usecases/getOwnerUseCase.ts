import {BaseUseCase} from '../../../../shared/base';
import {OwnerRepository} from '../OwnerRepository';
import {Owner} from '../entities/owner';

export function getOwnerUseCase(
  repo: OwnerRepository,
): BaseUseCase<'cats' | 'name', Promise<Owner[]>> {
  return {
    execute: (sort?: 'cats' | 'name') => repo.getOwner(sort ?? 'name'),
  };
}
