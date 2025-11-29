export interface Cat {
  id: number;
  name: string;
  age: string | number | undefined;
}

export interface Owner {
  id: number;
  name: string;
  lastName: string | undefined;
  isMaster: boolean;
  isFavorite: boolean;
  cats: Cat[];
}

export interface OwnerStore {
  owners: Owner[];
  selectedOwner: Owner | null;
  selectedFilter: 'name' | 'cats';
  detailOwner: Owner | null;
  setOwners: (list: Owner[]) => void;
  setSelectedOwner: (owner: Owner | null) => void;
  setDetailOwner: (owner: Owner | null) => void;
  setSelectedFilter: (filter: 'name' | 'cats') => void;
}
