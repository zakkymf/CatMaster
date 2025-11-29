import {httpClient} from '../../../shared/libraries';
import {ownerApiImpl} from '../data/api/owner.api';
import {OwnerRepositoryImpl} from '../data/OwnerRepositoryImpl';
import {addFavoriteUseCase} from '../domain/usecases/addFavoriteUseCase';
import {getDetailOwnerUseCase} from '../domain/usecases/getDetailOwnerUseCase';
import {getOwnerUseCase} from '../domain/usecases/getOwnerUseCase';
import {makeMasterUseCase} from '../domain/usecases/makeMasterUseCase';

function apis() {
  return {
    ownerApi: () => ownerApiImpl(httpClient),
  };
}

function repositories() {
  return {
    ownerRepositories: () => OwnerRepositoryImpl(apis().ownerApi()),
  };
}

function usecases() {
  return {
    getOwnerUseCase: getOwnerUseCase(repositories().ownerRepositories()),
    getDetailOwnerUseCase: getDetailOwnerUseCase(
      repositories().ownerRepositories(),
    ),
    makeMasterUseCase: makeMasterUseCase(repositories().ownerRepositories()),
    addFavoriteUseCase: addFavoriteUseCase(repositories().ownerRepositories()),
  };
}

export default {repositories, usecases};
