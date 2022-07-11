/**
 * Aws 桶类型
 */
export enum AwsImageType {
  /**
   * 公开桶
   */
  Public = 'Public',
  /**
   * 私有桶
   */
  Private = 'Private',
  /**
   * 商户平台专用私有桶
   */
  MerchantPrivate = 'MerchantPrivate',
  /**
   * CRM 平台专用私有桶
   */
  CrmPrivate = 'CrmPrivate',
}

/**
 * Aws 资源权限类型
 */
export enum AwsPermissionType {
  /**
   * 公开桶
   */
  Public = 1,
  /**
   * 私有桶
   */
  Private = 2,
}
