module.exports = () => {
  const colors = require(`../colors`)
  const {tinycolor} = require('@ctrl/tinycolor')
  let customProperties = {
    '--opacity-variant-25': '0.25',
    '--opacity-variant-50': '0.5',
    '--opacity-variant-75': '0.75',
    '--color-transparent': '0,0,0'
  }

  for (const key in colors) {
    customProperties[`--color-${key}`] = Object.values(tinycolor(colors[key]).toRgb()).slice(0, -1).join(',')
  }

  return customProperties
}
