export const bgImage = (data) => {
  let artistImage = 'https://images.unsplash.com/photo-1535554975110-9133cf938160?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35d4b5255f124736018f06fa8487e858&w=1000&q=80'
  let artistName = data.name
  const div = document.getElementById('title')
  const wrapper = document.querySelector('.wrapper')
  if (data.images.length > 0) {
    artistImage = data.images[0].url
    }
  div.insertAdjacentHTML('afterbegin', '<img id="bg-img" src="'+artistImage+'" />');
  wrapper.insertAdjacentHTML('beforeend', '<p class="artist-name">' + artistName + '</p>')
}
