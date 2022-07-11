/**
 * @ Author: Spencer Xiong
 * @ Create Time: 2022-03-28 17:25:17
 * @ Modified by: Spencer Xiong
 * @ Modified time: 2022-03-30 16:04:40
 * @ Description:
 */

import React from 'react'
import classNames from 'classnames'

import './Button.scss'

import type { ButtonProps } from './Button.types'

const clsPrefix = 'pp-btn'

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  const {
    icon,
    btnType,
    className,
    children,
    size,
    shape,
    block,
    loading,
    disabled,
    href,
    onClick,
    ...restProps
  } = props

  const classes = classNames(clsPrefix, className, {
    [`${clsPrefix}--${btnType}`]: btnType,
    [`${clsPrefix}--${size}`]: size,
    [`${clsPrefix}--${shape}`]: shape,
    [`${clsPrefix}--block`]: block,
    [`${clsPrefix}--disabled`]: disabled,
  })

  // if (!icon) {
  // 	titleClassName += ` ${styles['p0']}`
  // }

  // const handleClick = (event: any) => {
  // 	const logEventName = typeof children === 'string' ? children : children && children['props'] ? children['props']['children'] : 'Button'

  // 	// 埋点
  // 	const logEvent = {
  // 		btn: logEventName,
  // 	}
  // 	FireBaseAnalytics.logComponentEvent(logEvent)

  // 	onClick && onClick(event)
  // }
  const clickHandler = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (disabled) {
      // 禁用态阻止冒泡，以免嵌套的时候父元素触发点击事件
      e.stopPropagation()
      return
    }
    onClick && onClick(e)
  }

  const IconNode = icon && !loading ? icon : ''

  const ButtonInnerNode = (
    <div className={`${clsPrefix}__content`}>
      {IconNode}
      <span className={`${clsPrefix}__label`}>{children}</span>
    </div>
  )

  if (btnType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        onClick={(e) => clickHandler(e)}
        {...restProps}
      >
        {ButtonInnerNode}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        onClick={(e) => clickHandler(e)}
        {...restProps}
      >
        {ButtonInnerNode}
      </button>
    )
  }
}

Button.defaultProps = {
  btnType: 'default',
  size: 'large',
  disabled: false,
}
export default Button
