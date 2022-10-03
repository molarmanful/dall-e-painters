import { readFile, writeFile } from 'fs/promises'
import { compileFile } from 'pug'
import postcss from 'postcss'
import postcssStyl from 'postcss-styl'
import autoprefixer from 'autoprefixer'

let css = x => {
  let I = x + '.styl'
  let O = x + '.css'
  readFile(I).then(style => {
    postcss([autoprefixer]).process(style, {
      syntax: postcssStyl,
      from: I,
      to: O,
    }).then(({ css }) => {
      writeFile(O, css)
      console.log(I + ' > ' + O)
    })
  })
}

let html = x => {
  let I = x + '.pug'
  let O = x + '.html'
  writeFile(O, compileFile(I, {})()).then(_ => {
    console.log(I + ' > ' + O)
  })
}

css('style')
html('index')