import Config from 'react-native-config';
import {MMKV} from 'react-native-mmkv';

import type {StateStorage} from 'zustand/middleware';

const storage = new MMKV({
  id: 'SiCepat-Ekspres-Storage',
  encryptionKey: Config.MMKV_ENCRYPTION_KEY,
});

export const mmkvStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: name => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return storage.delete(name);
  },
};
