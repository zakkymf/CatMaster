import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {mmkvStorage} from '../../../../shared/libraries';
import {OwnerStore} from '../../domain/entities/owner';

export const useOwnerStore = create<OwnerStore>()(
  persist(
    set => ({
      owners: [],
      selectedOwner: null,
      detailOwner: null,
      selectedFilter: 'name',

      setOwners: list => {
        set({owners: list});
      },

      setSelectedOwner: owner => {
        set({selectedOwner: owner});
      },

      setDetailOwner: owner => {
        set({detailOwner: owner});
      },

      setSelectedFilter: filter => {
        set({selectedFilter: filter});
      },
    }),
    {
      name: 'owner-storage',
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);
