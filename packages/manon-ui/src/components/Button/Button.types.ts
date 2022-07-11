const tuple = <T extends string[]>(...args: T) => args
const buttonTypes = tuple('default', 'primary', 'secondary', 'link')
const buttonSizes = tuple('mini', 'small', 'middle', 'large')
const buttonShapes = tuple('round', 'circle')

export enum ButtonShape {
  Round = 'round',
  Circle = 'circle',
}
export type buttonShape = typeof buttonShapes[number]
export type buttonSize = typeof buttonSizes[number]
export type buttonType = typeof buttonTypes[number]
export interface BaseButtonProps {
  /**
   * @description       icon
   * @default
   */
  icon: React.ReactNode
  /**
   * @description       按钮类型
   * @default           default
   */
  btnType: buttonType
  /**
   * @description       自定义类名
   * @default
   */
  className: string
  /**
   * @description       按钮文字
   * @default
   */
  children: React.ReactNode
  /**
   * @description       click事件
   * @default
   */
  onClick: (e: any) => void
  /**
   * @description       按钮尺寸
   * @default           large
   */
  size: buttonSize
  /**
   * @description       按钮形状
   * @default
   */
  shape: buttonShape
  /**
   * @description       按钮以块元素显式
   * @default           false
   */
  block: boolean
  /**
   * @description       按钮loading
   * @default
   */
  loading: boolean
}

export type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>
export type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
