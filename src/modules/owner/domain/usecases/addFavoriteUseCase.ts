import {BaseUseCase} from '../../../../shared/base';
import {OwnerRepository} from '../OwnerRepository';

export function addFavoriteUseCase(
  repo: OwnerRepository,
): BaseUseCase<number | undefined, Promise<any>> {
  return {
    execute: (id: number | undefined) => repo.addFavoriteOwner(id),
  };
}
