export type StorageType = 'session' | 'local'
export type UseStorageReturnValue = {
  getItem: (key: string, type?: StorageType) => any
  setItem: (
    key: string,
    value: object | string | string[] | undefined,
    type?: StorageType
  ) => boolean
  removeItem: (key: string, type?: StorageType) => void
}
