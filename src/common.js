export function parseStockInfo(stocks, availableColor, availableSize) {
  const result = [],
    colorIndex = {},
    sizeIndex = {}
  for (let i = 0, lc = availableColor.length; i < lc; i++) {
    colorIndex[availableColor[i]] = i
    const c = []
    for (let j = 0, ls = availableSize.length; j < ls; j++) {
      sizeIndex[availableSize[j]] = j
      c.push({ remain: 0, choosed: 0 })
    }
    result.push(c)
  }
  stocks.forEach(element => {
    const { size, color, remain } = element
    result[colorIndex[color]][sizeIndex[size]].remain = remain
  })
  return result
}
export function deparseStockInfo(stocks, colors, sizes) {
  const result = []
  stocks.forEach((colorLine, colorIdx) => {
    colorLine.forEach((item, sizeIdx) => {
      if (item.choosed) {
        result.push({
          color: colors[colorIdx],
          size: sizes[sizeIdx],
          count: item.choosed
        })
      }
    })
  })
  return result
}
export const isNumber = function(v) {
  return /^[0-9]*$/.test(v)
}
