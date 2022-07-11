/**
 * 判断数据类型
 * @param tgt
 * @param type
 * @constructor
 */
export const dataType = (tgt: unknown, type: string): boolean | string => {
  const dataType = Object.prototype.toString
    .call(tgt)
    .replace(/\[object (\w+)\]/, '$1')
    .toLowerCase()
  return type ? dataType === type : dataType
}

/**
 * 深拷贝
 * @param obj
 */
export const deepClone = (obj: any) => {
  if (obj === null) return null
  const clone = { ...obj }
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  )
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone
}

/**
 * 是否是对象
 * @param val
 */
export const isPlainObject = (val: any) =>
  !!val && typeof val === 'object' && val.constructor === Object
