export const addtoStorage = ({ favouriteArr }) => {
  window.localStorage.setItem(
    "favouriteArrActive",
    JSON.stringify(favouriteArr)
  );
};

export const getFromStorage = () => {
  const likedArr = window.localStorage.getItem("favouriteArrActive");

  return {
    likedArr: likedArr ? JSON.parse(likedArr) : [],
  };
};
