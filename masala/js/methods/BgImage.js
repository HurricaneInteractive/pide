import $ from "jquery";

export const bgImage = (response) => {

  const albumImage = response.data.items[0].track.album.images[0].url
  const div = document.getElementById('title')
  console.log(response)

  div.insertAdjacentHTML('afterbegin', '<img id="bg-img" src="'+albumImage+'" />');

}
