import { createApi } from "unsplash-js";
import { getCollage } from "./view";

const collageGridDiv = document.querySelector(".collageGrid");

const unsplash = createApi({
  accessKey: "pILwZlK8GtqoKDrscvhRp815FJ-JUpTRUDng7izdQ_w",
});

// api call for home

unsplash.search
  .getPhotos({
    query: "Art",
    page: 1,
    perPage: 6,
    orientation: "portrait",
  })
  .then((result) => {
    if (result.type === "success") {
      const photos = result.response.results;
      console.log(photos);
      let item = 0;
      let getUrl = photos.map((e) => {
        item++;
        return getCollage(e.urls.small_s3, item);
      });

      collageGridDiv.innerHTML = getUrl.join("");
    }
  })
  .catch((err) => {});

let toggle = false;
document.querySelector(".nav-btn").addEventListener("click", function () {
  if (toggle === false) {
    document.querySelector("nav ul").style.display = "flex";
    toggle = true;
  } else {
    document.querySelector("nav ul").style.display = "none";
    toggle = false;
  }
});
