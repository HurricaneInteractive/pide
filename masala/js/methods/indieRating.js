export const indieRating = (response) => {
  let totalValue = 0
  let ratingValues = []

  response.data.items.forEach((item, i) => {

    const singleValue = item.track.popularity
    ratingValues.push(singleValue)

  })

  const add = (a, b) =>
  a + b

  totalValue = ratingValues.reduce(add)
  const avg = (totalValue / 50)

  const label = document.querySelector('.indie-vis')
  label.insertAdjacentHTML('afterend', '<h3 class="avg-text">' + Math.round(avg) + '</h3>')
  label.style.width = avg + "%"
}
