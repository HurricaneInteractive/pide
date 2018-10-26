import $ from "jquery";
import moment from 'moment'

const appendLi = (list, html, position = 'beforeend') => {
  list.insertAdjacentHTML(position, html);
}

export const listTracks = (response) => {
  console.log(response);
  const list = document.querySelector('.list')
  response.data.items.forEach((item, i) => {
    const track = item.track //one recently played item
    const trackName = item.track.name;
    const artist = item.track.artists[0].name;
    const nowTime = new Date().getTime();
    const thenTime = +new Date(item.played_at);
    // const timestamp = moment().startOf('minute').fromNow();
    const timestamp = moment(thenTime).fromNow();


    // appending list items to the class .list
    appendLi(list, `<tr class="row"><td class="track">${trackName}</td> <td class="artist">${artist}</td> <td class="timestamp">${timestamp}</td></tr>`);
  })
}

$( '.see-all' ).click(function expandTable() {

  $( '#latest' ).toggleClass( 'active' )

});
