import { observable, autorun, computed } from 'mobx';
import axios from 'axios';

const MKey = '9022fd69b5bb477d9591f4db93c7258a';

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

  @computed get cleanImages() {
    const imgArray = [];
    if (this.selfImages) {
      for (let i = 0; i < this.selfImages.data.length; i++) {
        imgArray.push(this.selfImages.data[i].images.standard_resolution.url);
      }
    }
    return imgArray;
  }

  @computed get getEmotions() {
    const emo = {
      anger: 0,
      contempt: 0,
      disgust: 0,
      fear: 0,
      happiness: 0,
      neutral: 0,
      sadness: 0,
      surprise: 0,
      count: 0,
    };

    for (let i = 0; i < this.cleanImages.length; i++) {
      axios.post('https://api.projectoxford.ai/emotion/v1.0/recognize', {
        url: this.cleanImages[i],
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Host': 'api.projectoxford.ai', //eslint-disable-line
          'Ocp-Apim-Subscription-Key': MKey,
        },
      })
      .then((res) => {
        for (let y = 0; y < res.data.length; y++) {
          emo.anger += res.data[y].scores.anger;
          emo.contempt += res.data[y].scores.contempt;
          emo.disgust += res.data[y].scores.disgust;
          emo.fear += res.data[y].scores.fear;
          emo.happiness += res.data[y].scores.happiness;
          emo.neutral += res.data[y].scores.neutral;
          emo.sadness += res.data[y].scores.sadness;
          emo.surprise += res.data[y].scores.surprise;
          emo.count++;
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
    return emo;
  }

  @computed get emoLoaded() {
    return this.getEmotions.count > 0;
  }
}

const store = new BasicStore();

export default store;

autorun(() => {
  console.log('+++++++++++++++++++++++++++++++++++');
  console.log('Token is loaded: ', store.instaTokenLoaded);
  console.log('Info is loaded: ', store.selfInfoLoaded);
  console.log('Images is loaded: ', store.selfImagesLoaded);
  console.log('Emo: ', store.getEmotions);
  console.log('+++++++++++++++++++++++++++++++++++');
});
