import { observable, autorun } from 'mobx';

class BasicStore {
  @observable InstaToken;
}

const store = new BasicStore();

export default store;

autorun(() => {
  console.log('InstaToken: %o', store.InstaToken);
});
