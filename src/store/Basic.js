import { observable, autorun, computed } from 'mobx';

class BasicStore {
  @observable instaToken;
  @observable selfInfo;
  @observable selfImages;

  @computed get instaTokenLoaded() {
    return (this.instaToken !== undefined);
  }
  @computed get selfInfoLoaded() {
    return (this.selfInfo !== undefined);
  }
  @computed get selfImagesLoaded() {
    return (this.selfImages !== undefined);
  }
}

const store = new BasicStore();

export default store;

autorun(() => {
  console.log('Token is loaded: ', store.instaTokenLoaded);
  console.log('Info is loaded: ', store.selfInfoLoaded);
  console.log('Images is loaded: ', store.selfImagesLoaded);
});
