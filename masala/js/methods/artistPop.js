import $ from "jquery";



$( '.artist-see-all' ).click(function() {

  $( '#artist' ).toggleClass( 'artist-active' )

});
export const artistPop = (data) => {

  const appendAr = (circles, html, position = 'beforeend') => {
    circles.insertAdjacentHTML(position, html);
  }
  // console.log(data)
  const artistArray = []
  data.forEach((item, i) => {

    const allArtists = item.data.name
    artistArray.push(allArtists)

  })

  let refined = []
  let refinedObjectGlobal = {}
  let copy = artistArray.slice(0)

  for (let i = 0; i < artistArray.length; i++) {

    let count = 0
    let index = data.findIndex(item => item.data.name == artistArray[i])
    for (let a = 0; a < copy.length; a++) {
      if (artistArray[i] === copy[a]) {
        count++
        delete copy[a]
      }
    }
    if (count > 0) {
      if (artistArray[i] !== null) {
        refined.push(artistArray[i])
        const push = {
          [artistArray[i]]: {
            'value': artistArray[i],
            'count': count,
            'image' : data[index].data.images[0].url
          }
        }
        const oldObject = refinedObjectGlobal
        const refinedObject = Object.assign(oldObject, push)
        refinedObjectGlobal = refinedObject
      }
    }
  }

  const circleWrapper = document.querySelector('#artists');

  let arrayFinal = []

  Object.keys(refinedObjectGlobal).forEach((key, i) => {
    arrayFinal.push(refinedObjectGlobal[key])
  })

  arrayFinal.sort(function(a,b){
    return b.count - a.count
  })

  // console.log(arrayFinal)
  arrayFinal.forEach((artist, i) => {
    const artistName = artist.value
    const circleValue = artist.count / arrayFinal.length
    const percentage = Math.round(circleValue * 100)

    circleWrapper.insertAdjacentHTML('beforeend', '<div class="circle-wrapper"><div class="circle" data-index="' + i + '"></div><div class="artist-thumbnail"/><img src="' + artist.image + '" alt="' + artistName + '"/></div><h4>' + artistName + '</h4><h4 class="percentage">' + percentage + '%</h4></div></div>')

    $(`.circle[data-index="${i}"]`).circleProgress({
      value: circleValue,
      size: 200,
      thickness: 6,
      emptyFill: "rgba(255, 255, 255, .2)",
      lineCap: "round",
      fill: "#fff",
      startAngle: -Math.PI / 2
    })
  })
}
