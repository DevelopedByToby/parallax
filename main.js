import * as basicScroll from 'basicscroll'
document.querySelectorAll('.scene').forEach((elem) => {

  const modifier = elem.getAttribute('data-modifier')

  basicScroll.create({
    elem: elem,
    from: 0,
    to: 519,
    props: {
      '--translateY': {
        from: '0',
        to: `${ 10 * modifier }px`,
        direct: true
      }
    }
  }).start()

})

document.documentElement.style.setProperty('--color', randomColor())
const basicScroll = require('basicscroll')

