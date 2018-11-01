import $ from "jquery";
import moment from 'moment'

const appendLi = (list, html, position = 'beforeend') => {
  list.insertAdjacentHTML(position, html);
}

export const listTracks = (response) => {
  const list = document.querySelector('.list')
  response.data.items.forEach((item, i) => {
    const trackName = item.track.name;
    const trackUrl = item.track.external_urls.spotify
    const artist = item.track.artists[0].name
    const artistUrl = item.track.artists[0].external_urls.spotify
    const nowTime = new Date().getTime()
    const thenTime = +new Date(item.played_at)
    const timestamp = moment(thenTime).fromNow()
    // appending list items to the class .list
    appendLi(list, `<tr class="row"><td class="track"><a href=${trackUrl} target="_blank">${trackName}</a></td> <td class="artist"><a href=${artistUrl} target="_blank">${artist}</a></td> <td class="timestamp">${timestamp}</td></tr>`);
  })
}

$( '.see-all' ).click(function() {

  $( '#latest' ).toggleClass( 'active' )

});
