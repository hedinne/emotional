import { observable, autorun, computed } from 'mobx';

function weight(number) {
  // if (number < 0.001) return number * 2000;
  // if (number < 0.01) return number * 200;
  // if (number < 0.7) return number * 50;
  // if (number < 0.15) return number * 3;
  // if (number < 0.2) return number * 2;
  // if (number < 0.3) return number * 1.5;
  // return number;

  // in case of request denied from Emotion API:
  // set scoring to 1 (the lowest possible value)
  if (isNaN(number)) return 1;
  if (number <0.0002) return 1;
  return Math.log10(number)+4;
}

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
  @observable happyOne = {
    score: 0,
    link: '',
  }

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
  @observable happyTwo = {
    score: 0,
    link: '',
  }


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
        A: weight(this.emoOne.emotions.anger / this.emoOne.count),
        B: weight(this.emoTwo.emotions.anger / this.emoTwo.count),
      },
      {
        subject: 'Contempt',
        A: weight(this.emoOne.emotions.contempt / this.emoOne.count),
        B: weight(this.emoTwo.emotions.contempt / this.emoTwo.count),
      },
      {
        subject: 'Disgust',
        A: weight(this.emoOne.emotions.disgust / this.emoOne.count),
        B: weight(this.emoTwo.emotions.disgust / this.emoTwo.count),
      },
      {
        subject: 'Fear',
        A: weight(this.emoOne.emotions.fear / this.emoOne.count),
        B: weight(this.emoTwo.emotions.fear / this.emoTwo.count),
      },
      {
        subject: 'Happiness',
        A: weight(this.emoOne.emotions.happiness / this.emoOne.count),
        B: weight(this.emoTwo.emotions.happiness / this.emoTwo.count),
      },
      {
        subject: 'Neutral',
        A: weight(this.emoOne.emotions.neutral / this.emoOne.count),
        B: weight(this.emoTwo.emotions.neutral / this.emoTwo.count),
      },
      {
        subject: 'Sadness',
        A: weight(this.emoOne.emotions.sadness / this.emoOne.count),
        B: weight(this.emoTwo.emotions.sadness / this.emoTwo.count),
      },
      {
        subject: 'Surprise',
        A: weight(this.emoOne.emotions.surprise / this.emoOne.count),
        B: weight(this.emoOne.emotions.surprise / this.emoOne.count),
      },
    ];
  }

  @computed get userOneLoaded() {
    return (
      this.userInfoOne !== undefined &&
      typeof this.userInfoOne === 'object' &&
      Object.keys(this.userInfoOne).length > 0
    );
  }

  @computed get userTwoLoaded() {
    return (
      this.userInfoTwo !== undefined &&
      typeof this.userInfoTwo === 'object' &&
      Object.keys(this.userInfoTwo).length > 0
    );
  }

  @computed get tokenLoaded() {
    return (
      this.instaToken !== undefined &&
      typeof this.instaToken === 'string'
    );
  }
}

const store = new BasicStore();

export default store;

// autorun(() => {
//   console.log(' ');
//   console.log('Token is loaded: ', store.instaToken);
//   console.log('UserInfoOne: ', store.userInfoOne);
//   console.log('UsernameTwo: ', store.userInfoTwo);
//   console.log('emoOne.count: ', store.emoOne.count);
//   console.log('emoOne: ', store.emoOne);
//   console.log('emoTwo.count: ', store.emoTwo.count);
//   console.log('emoTwo: ', store.emoTwo);
//   console.log('HappyOne: ', store.happyOne.link);
//   console.log('HappyOne: ', store.happyOne.score);
//   console.log('CleanEmo: ', store.cleanEmo);
//   console.log(' ');
// });
