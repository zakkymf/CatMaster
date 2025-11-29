import {BaseUseCase} from '../../../../shared/base';
import {OwnerRepository} from '../OwnerRepository';

export function makeMasterUseCase(
  repo: OwnerRepository,
): BaseUseCase<number | undefined, Promise<any>> {
  return {
    execute: (id: number | undefined) => repo.makeMaster(id),
  };
}
