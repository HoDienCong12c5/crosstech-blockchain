import { Button } from 'antd'
import classNames from 'classnames'
import styles from './Button.module.scss'
const ButtonBasic = ({
  type = 1,
  children,
  isHover,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      //   styles={styles['style-bt-antd']}
      className={classNames(
        styles['style-bt-antd'],
        {'second-btn':type === 1},
        {'pri-btn-is-hover':isHover}
      )}
      {...props}s
    >
      {children}
    </Button>
  )
}

export default ButtonBasic
