import favicon from './favicon.jpg'
import style from './style.css'

const body = document.querySelector('body')
body.className = style.body
const img = document.createElement('img')
img.src = favicon
img.className = style.image

body.append(img)