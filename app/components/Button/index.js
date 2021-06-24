/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.css';

const Button = React.forwardRef(
  (
    {
      children,
      className,
      onClick,
      medium,
      primary,
      secondary,
      uppercase,
      disabled,
      icon,
      iconColor = 'inherit',
      href,
      blank = false,
    },
    ref,
  ) => {
    if (href)
      return (
        <a
          className={cn('Button', className, {
            Button__medium: medium,
            Button__primary: primary,
            Button__secondary: secondary,
            Button__uppercase: uppercase,
            Button__disabled: disabled,
          })}
          onClick={onClick}
          disabled={disabled}
          ref={ref}
          href={href}
          target={blank ? '_blank' : '_self'}
        >
          {children}
          {icon && <ion-icon style={{ color: iconColor }} name={icon} />}
        </a>
      );

    return (
      <button
        className={cn('Button', className, {
          Button__medium: medium,
          Button__primary: primary,
          Button__secondary: secondary,
          Button__uppercase: uppercase,
          Button__disabled: disabled,
        })}
        onClick={onClick}
        disabled={disabled}
        ref={ref}
      >
        {children}
        {icon && <ion-icon style={{ color: iconColor }} name={icon} />}
      </button>
    );
  },
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  medium: PropTypes.bool,
  uppercase: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
};

export default Button;
