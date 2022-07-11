export const randomString = (len: number): string => {
  len = len || 32
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  /** 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1 **/
  const maxPos = $chars.length
  let pwd = ''
  for (let i = 0; i < len; i++)
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))

  return pwd
}

/**
 * 移除字符串中的空格
 * @param str
 */
export const removeWhitespace = (str: string): string => str.replace(/\s+/g, '')
