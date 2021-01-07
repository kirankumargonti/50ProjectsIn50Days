const bg = document.querySelector('.background_image')
const loading = document.querySelector('.loading')

let percentage = 0

const blurry = () => {
  percentage++
  if (percentage > 99) {
    clearInterval(int)
  }
//   loading.innerText = `${percentage}%`
  loading.innerText = `${scale(percentage, 0, 100, 100, 0)}%`
  loading.style.opacity = scale(percentage, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(percentage, 0, 100, 30, 0)}px)`
}
let int = setInterval(blurry, 30)


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
