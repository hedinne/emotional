import { observable, autorun, computed } from 'mobx';
// import axios from 'axios';
//
// const MKey = '9022fd69b5bb477d9591f4db93c7258a';

class BasicStore {
  @observable instaToken;

  @observable possibleUsersOne = [];
  @observable userInfoOne;
  @observable photosOne;
  @observable emoOne = {
    count: 0,
    emotions: {
      anger: 0,
      contempt: 0,
      disgust: 0,
      fear: 0,
      happiness: 0,
      neutral: 0,
      sadness: 0,
      surprise: 0,
    },
  };

  @observable possibleUsersTwo = [];
  @observable userInfoTwo;
  @observable photosTwo;
  @observable emoTwo = {
    count: 0,
    emotions: {
      anger: 0,
      contempt: 0,
      disgust: 0,
      fear: 0,
      happiness: 0,
      neutral: 0,
      sadness: 0,
      surprise: 0,
    },
  };


  @computed get cleanOne() {
    const imgArray = [];
    if (this.photosOne) {
      for (let i = 0; i < this.photosOne.data.length; i++) {
        imgArray.push(this.photosOne.data[i].images.standard_resolution.url);
      }
    }
    return imgArray;
  }

  @computed get cleanTwo() {
    const imgArray = [];
    if (this.photosTwo) {
      for (let i = 0; i < this.photosTwo.data.length; i++) {
        imgArray.push(this.photosTwo.data[i].images.standard_resolution.url);
      }
    }
    return imgArray;
  }

  @computed get cleanEmo() {
    return [
      {
        subject: 'Anger',
        A: this.emoOne.emotions.anger+0.1 / this.emoOne.count,
        B: this.emoTwo.emotions.anger+0.1 / this.emoTwo.count,
      },
      {
        subject: 'Contempt',
        A: this.emoOne.emotions.contempt+0.1 / this.emoOne.count,
        B: this.emoTwo.emotions.contempt+0.1 / this.emoTwo.count,
      },
      {
        subject: 'Disgust',
        A: this.emoOne.emotions.disgust+0.1 / this.emoOne.count,
        B: this.emoTwo.emotions.disgust+0.1 / this.emoTwo.count,
      },
      {
        subject: 'Fear',
        A: this.emoOne.emotions.fear+0.1 / this.emoOne.count,
        B: this.emoTwo.emotions.fear+0.1 / this.emoTwo.count,
      },
      {
        subject: 'Happiness',
        A: (this.emoOne.emotions.happiness+0.1 / (this.emoOne.count*3)),
        B: (this.emoTwo.emotions.happiness+0.1 / (this.emoTwo.count*3)),
      },
      {
        subject: 'Neutral',
        A: (this.emoOne.emotions.neutral+0.1 / (this.emoOne.count*2)),
        B: (this.emoTwo.emotions.neutral+0.1 / (this.emoTwo.count*2)),
      },
      {
        subject: 'Sadness',
        A: this.emoOne.emotions.sadness+0.1 / this.emoOne.count,
        B: this.emoTwo.emotions.sadness+0.1 / this.emoTwo.count,
      },
      {
        subject: 'Surprise',
        A: this.emoOne.emotions.surprise+0.1 / this.emoOne.count,
        B: this.emoOne.emotions.surprise+0.1 / this.emoOne.count,
      },
    ];
  }


  // @computed get emotionsOne() {
  //   const emo = {
  //     anger: 0,
  //     contempt: 0,
  //     disgust: 0,
  //     fear: 0,
  //     happiness: 0,
  //     neutral: 0,
  //     sadness: 0,
  //     surprise: 0,
  //     count: 0,
  //   };
  //
  //   for (let i = 0; i < this.cleanOne.length; i++) {
  //     setTimeout(() => {
  //       axios.post('https://api.projectoxford.ai/emotion/v1.0/recognize', {
  //         url: this.cleanOne[i],
  //       }, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Host': 'api.projectoxford.ai', //eslint-disable-line
  //           'Ocp-Apim-Subscription-Key': MKey,
  //         },
  //       })
  //       .then((res) => {
  //         for (let y = 0; y < res.data.length; y++) {
  //           emo.anger += res.data[y].scores.anger;
  //           emo.contempt += res.data[y].scores.contempt;
  //           emo.disgust += res.data[y].scores.disgust;
  //           emo.fear += res.data[y].scores.fear;
  //           emo.happiness += res.data[y].scores.happiness;
  //           emo.neutral += res.data[y].scores.neutral;
  //           emo.sadness += res.data[y].scores.sadness;
  //           emo.surprise += res.data[y].scores.surprise;
  //           emo.count++;
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //     }, 200);
  //   }
  //
  //   return emo;
  // }
}

const store = new BasicStore();

export default store;

autorun(() => {
  console.log(' ');
  console.log('Token is loaded: ', store.instaToken);
  console.log('UsernameOne: ', store.userInfoOne);
  console.log('UsernameTwo: ', store.userInfoTwo);
  // console.log('cleanImagesOne: ', store.cleanOne);
  // console.log('cleanImagesTwo: ', store.cleanTwo);
  console.log('emoOne.count: ', store.emoOne.count);
  console.log('emoOne: ', store.emoOne);
  console.log('emoTwo.count: ', store.emoTwo.count);
  console.log('emoTwo: ', store.emoTwo);
  console.log(' ');
});
