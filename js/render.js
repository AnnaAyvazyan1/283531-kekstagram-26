import {photos} from './main.js';

export const renderPhotoList = (pictureList, pictureTemplate) => {
  const pictureListFragment = document.createDocumentFragment();

  photos.forEach(({url, likes, comments}) =>  {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureListFragment.appendChild(pictureElement);
  });

  pictureList.appendChild(pictureListFragment);
};

