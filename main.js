let ll = new LazyLoad({})

$(_ => {
  $('.tabs li').on('click', e => {
    let keep = $(e.target).parent('li')
    if (!keep.hasClass('is-active')) {
      let ktxt = keep.text()
      let show = $('section')

      $('.tabs li').removeClass('is-active')
      keep.addClass('is-active')

      show.addClass('oh')
      setTimeout(_ => {
        show.addClass('dh')
        if (ktxt != 'all') show = show.filter($('.' + ktxt))
        setTimeout(_ => { show.removeClass('dh oh') }, 50)
      }, 200)
    }
  })
})