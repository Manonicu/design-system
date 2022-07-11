/**
 * 获取地址栏参数
 * @param url
 */
interface URLParamValue {
  [key: string]: string | string[]
}
export const getURLParameters = (url: string) => {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
    const [key, value] = v.split('=')
    if (a[key])
      a[key] = (
        (typeof a[key] === 'string' ? [a[key]] : a[key]) as string[]
      ).concat(value)
    else a[key] = value

    return a
  }, {} as URLParamValue)
}

/**
 * 获取当前浏览器版本号
 */
export const getOsVersion = () => {
  const userAgent = navigator.userAgent
  let version = ''
  let regStrSaf = /Android [\d._]*/gi
  if (userAgent.includes('Mac OS X')) {
    // IOS
    regStrSaf = /OS [\d._]*/gi
  } else if (userAgent.includes('Android') || userAgent.includes('Linux')) {
    // Android
    regStrSaf = /Android [\d._]*/gi
  }

  const verinfo = userAgent.match(regStrSaf)
  version = `${verinfo}`.replace(/[^0-9|_.]/gi, '').replace(/_/gi, '.')

  return version
}
