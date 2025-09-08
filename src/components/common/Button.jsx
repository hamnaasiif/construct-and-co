"use client"
import "./button.css"

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  ...props
}) => {
  const classes = `btn btn-${variant} btn-${size} ${className}`

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
