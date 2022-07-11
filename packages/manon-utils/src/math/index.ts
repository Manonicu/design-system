import { Decimal } from 'decimal.js'

/**
 * 千位格式化金额
 * @param num
 * @constructor
 */
export const thousandNum = (num: number | string): string =>
  (+num).toLocaleString('en-US', { minimumFractionDigits: 2 })

/**
 * 精度相加
 * @constructor
 * @param args
 */
export const accAdd = function (...args: number[]) {
  return [...args].reduce((prev, next) =>
    new Decimal(prev).add(next || 0).toNumber()
  )
}

/**
 * 精度相减
 * @constructor
 * @param args
 */
export const accSub = function (...args: number[]) {
  return [...args].reduce((prev, next) =>
    new Decimal(prev).minus(next || 0).toNumber()
  )
}

/**
 * 精度相乘
 * @constructor
 * @param args
 */
export const accDiv = function (...args: number[]) {
  return [...args].reduce((prev, next) =>
    new Decimal(prev).div(next || 1).toNumber()
  )
}

/**
 * 精度相除
 * @constructor
 * @param args
 */
export const accMul = function (...args: number[]) {
  return [...args].reduce((prev, next) =>
    new Decimal(prev).mul(next || 1).toNumber()
  )
}
