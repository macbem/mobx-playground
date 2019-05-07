import { RootStore } from './root-store.store';

export type TRootStore = RootStore;

export interface Store {
  rootStore: RootStore;
}
