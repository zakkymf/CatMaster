import {BaseUseCase} from '../../../../shared/base';
import {OwnerRepository} from '../OwnerRepository';
import {Owner} from '../entities/owner';

export function getDetailOwnerUseCase(
  repo: OwnerRepository,
): BaseUseCase<number | undefined, Promise<Owner>> {
  return {
    execute: (id: number | undefined) => repo.getDetailOwner(id),
  };
}
