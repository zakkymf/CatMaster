import {useMutation} from '@tanstack/react-query';
import ownerContainer from '../di/ownerContainer';
import {useOwnerStore} from './store/useOwnerStore';
import {Owner} from '../domain/entities/owner';
import {useCallback} from 'react';
import {Alert} from 'react-native';

export function useOwner() {
  const {
    getOwnerUseCase,
    getDetailOwnerUseCase,
    makeMasterUseCase,
    addFavoriteUseCase,
  } = ownerContainer.usecases();

  const {isPending: isLoadingGetOwner, mutateAsync: getOwnerMutation} =
    useMutation({
      mutationFn: (sort?: 'name' | 'cats') =>
        getOwnerUseCase.execute(sort ?? 'name'),
    });

  const {
    isPending: isLoadingGetDetailOwner,
    mutateAsync: getDetailOwnerMutation,
  } = useMutation({
    mutationFn: (id: number | undefined) => getDetailOwnerUseCase.execute(id),
  });

  const {isPending: isLoadingMakeMaster, mutateAsync: makeMasterMutation} =
    useMutation({
      mutationFn: (id: number | undefined) => makeMasterUseCase.execute(id),
    });

  const {isPending: isLoadingAddFavorite, mutateAsync: addFavoriteMutation} =
    useMutation({
      mutationFn: (id: number | undefined) => addFavoriteUseCase.execute(id),
    });

  const {
    owners,
    selectedOwner,
    detailOwner,
    selectedFilter,
    setOwners,
    setSelectedOwner,
    setDetailOwner,
    setSelectedFilter,
  } = useOwnerStore();

  async function getOwner() {
    try {
      const response = await getOwnerMutation(selectedFilter);
      setOwners(response);
    } catch (error) {
      Alert.alert('Error', error as string);
    }
  }

  async function getDetailOwner() {
    try {
      const response = await getDetailOwnerMutation(selectedOwner?.id);
      setDetailOwner(response);
    } catch (error) {
      Alert.alert('Error', error as string);
    }
  }

  async function makeMaster(item: Owner | null) {
    try {
      await makeMasterMutation(item?.id);
      await getOwner();
      Alert.alert('Success', 'Master added successfully');
    } catch (error) {
      Alert.alert('Error', error as string);
    }
  }

  async function addFavorite(item: Owner) {
    try {
      await addFavoriteMutation(item.id);
      await getOwner();
      Alert.alert('Success', 'Favorite added successfully');
    } catch (error) {
      Alert.alert('Error', error as string);
    }
  }

  const onSelectOwner = useCallback(
    (item: Owner) => {
      setSelectedOwner(item);
    },
    [selectedOwner],
  );

  const onChangeFilter = useCallback(
    (filter: 'cats' | 'name') => {
      setSelectedFilter(filter);
    },
    [selectedFilter],
  );

  return {
    isLoadingGetOwner,
    isLoadingGetDetailOwner,
    owners,
    detailOwner,
    selectedFilter,
    selectedOwner,
    getOwner,
    getDetailOwner,
    onSelectOwner,
    makeMaster,
    addFavorite,
    onChangeFilter,
  };
}
