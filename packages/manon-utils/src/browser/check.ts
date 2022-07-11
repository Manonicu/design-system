/**
 * 判断是否是ios
 */
export function isIOS() {
  // 暂时处理
  return typeof window !== 'undefined'
    ? /iphone|ipad|ipod/.test(navigator?.userAgent?.toLowerCase())
    : false
}

/**
 * 判断是否是iPhone X
 */
export function isiPhoneX() {
  if (!isIOS()) return false

  return screen.height >= 812 && screen.width >= 375
}
