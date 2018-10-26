const appendLi = (list, html, position = 'beforeend') => {
  list.insertAdjacentHTML(position, html);
}

export const listTracks = (response) => {
  console.log(response);
  const list = document.getElementById('list')
  response.data.items.forEach((item, i) => {
    const track = item.track //one recently played item
    const trackName = item.track.name;
    const artist = item.track.artists[0].name;
    const nowTime = new Date().getTime();
    const thenTime = +new Date(item.played_at);
    const relTime = nowTime - thenTime;
    const timestamp = new Date(relTime).getMinutes();


    // appending list items to the class .list
    appendLi(list, `<li>${trackName} <span class="artist">${artist}</span> <span class="timestamp">${timestamp} minutes ago</span></li>`);
  })
}
