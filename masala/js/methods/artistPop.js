import $ from "jquery";



$( '.artist-see-all' ).click(function() {

  $( '#artist' ).toggleClass( 'artist-active' )

});
export const artistPop = (data) => {

  const appendAr = (circles, html, position = 'beforeend') => {
    circles.insertAdjacentHTML(position, html);
  }
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
            'image' : data[index].data.images
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

  console.log(arrayFinal)
  arrayFinal.forEach((artist, i) => {
    let artistImage = 'https://images.unsplash.com/photo-1535554975110-9133cf938160?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35d4b5255f124736018f06fa8487e858&w=1000&q=80'
    const artistName = artist.value
    const circleValue = artist.count / 50
    const percentage = Math.round(circleValue * 100)
    if (artist.image.length > 0) {
      artistImage = artist.image[0].url
      }

    circleWrapper.insertAdjacentHTML('beforeend', '<div class="circle-wrapper"><div class="circle" data-index="' + i + '"></div><div class="artist-thumbnail"/><img src="' + artistImage + '" alt="' + artistName + '"/></div><h4>' + artistName + '</h4><h4 class="percentage">' + percentage + '%</h4></div></div>')

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
