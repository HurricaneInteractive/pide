export const bgImage = (data) => {

  console.log(data)
  const artistImage = data.images[0].url
  const div = document.getElementById('title')

  div.insertAdjacentHTML('afterbegin', '<img id="bg-img" src="'+artistImage+'" />');

}
