import type { StorageType, UseStorageReturnValue } from '../types/browser'

export const utilStorage = (): UseStorageReturnValue => {
  const storageType = (type?: StorageType): 'localStorage' | 'sessionStorage' =>
    `${type ?? 'session'}Storage`

  const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')()

  const getItem = (key: string, type?: StorageType) => {
    if (isBrowser) {
      const value = window[storageType(type)][key]
      if (!value || value === 'undefined') return null

      const obj = JSON.parse(value)
      return obj
    } else {
      return null
    }
  }

  const setItem = (
    key: string,
    value: object | string | string[] | undefined,
    type?: StorageType
  ): boolean => {
    if (isBrowser) {
      const text = JSON.stringify(value)
      window[storageType(type)].setItem(key, text)
      return true
    }

    return false
  }

  const removeItem = (key: string, type?: StorageType): void => {
    window[storageType(type)].removeItem(key)
  }

  return {
    getItem,
    setItem,
    removeItem,
  }
}
