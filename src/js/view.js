import state from "./state";

export const getCollage = (src, item) => {
  return `<div class="item item${item}"><img  src=${src} alt="img" /></div>`;
};

export const getArtGrid = (src, id) => {
  return ` <div class="item" >
<img id=${id} src=${src} alt="img" />
</div>`;
};

export const getArtdetails = (data) => {
  return `  <div class="artIndividualPhoto">
  <img src=${data.urls.small} alt="artPhoto" />
</div>
<div class="artIndividualDetails">
  <div class="artData">
    <div class="leftData">
      <div>
        <p>Views</p>
        <p>${data.views}</p>
      </div>
      <div>
        <p>Downloads</p>
        <p>${data.downloads}</p>
      </div>
     
    </div>
    <div class="likes">
    <i class="fa-regular fa-heart" style="display:${
      state.displayRedHeart ? "none" : "block"
    }"></i>
    <i class="fa-solid fa-heart" style=" display:${
      state.displayRedHeart ? "block" : "none"
    } ;color:red" ></i>
    </div>
  </div>

  <div class="tags">
    <p>${data.tags[0].title}</p>
    <p>${data.tags[1].title}</p>
    <p>${data.tags[2].title}</p>
  </div>
</div>`;
};
