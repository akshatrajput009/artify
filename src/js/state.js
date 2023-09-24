import { getFromStorage } from "./storage";

let displayRedHeart = false;
let favouriteArr = [];
favouriteArr = getFromStorage().likedArr;

class State {
  get displayRedHeart() {
    return displayRedHeart;
  }

  get favouriteArr() {
    return favouriteArr;
  }
  set displayRedHeart(value) {
    displayRedHeart = value;
  }

  set favouriteArr(value) {
    favouriteArr.push(value);

    console.log(favouriteArr);
  }

  set removeItem(value) {
    let index = favouriteArr.indexOf(value);
    if (index != -1) {
      favouriteArr.splice(index, 1);
      console.log(favouriteArr);
    }
  }
}

export default new State();
