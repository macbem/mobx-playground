import { configure } from 'mobx';

configure({ enforceActions: 'observed' }); // don't allow state modifications outside actions

export { rootStoreInstance, RootStore } from './root-store.store';
