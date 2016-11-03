import { observable, autorun } from 'mobx';

class BasicStore {
  @observable instaToken;
  @observable selfInfo;
  @observable images;
}

const store = new BasicStore();

export default store;

autorun(() => {
  console.log('instaToken: ', store.instaToken);
  console.log('selfInfo: ', store.selfInfo);
  console.log('images: ', store.images);
});
