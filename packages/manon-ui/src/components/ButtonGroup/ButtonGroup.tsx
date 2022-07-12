import type { ReactElement } from 'react'
import React from 'react'
import Button from '../Button/Button'
import './ButtonGroup.scss'
import type { IButtonGroupProps } from './ButtonGroup.types'

const ButtonGroup = (props: IButtonGroupProps): ReactElement => {
  return (
    <div className="pp-btn-group" {...props}>
      {props.options.map((btn: any, index: number) => {
        return (
          <Button
            key={index}
            className={`${btn.className} pp-btn-group-btn`}
            btnType={btn.btnType}
            size={btn.size}
            shape={btn.shape}
            disabled={btn.disabled}
            block={btn.block}
            onClick={btn.onClick}
            loading={btn.loading}
          >
            {btn.icon}
            {btn.children}
          </Button>
        )
      })}
    </div>
  )
}

export default ButtonGroup
