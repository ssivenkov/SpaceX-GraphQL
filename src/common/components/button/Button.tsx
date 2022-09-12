import React from 'react';

import { ComponentType } from 'types/common/componentType';

import { StyledButton } from './styles';
import styles from './styles.module.scss';
import { ButtonPropsType } from './types';

export const Button = (props: ButtonPropsType): ComponentType => {
  const { children, onClick, type, disabled, leftIcon, rightIcon } = props;

  return (
    <StyledButton disabled={disabled} onClick={onClick} type={type}>
      {leftIcon && (
        <div className={disabled ? styles.leftIconDisabled : styles.leftIcon}>
          {leftIcon}
        </div>
      )}
      <span>{children}</span>
      {rightIcon && (
        <div className={disabled ? styles.rightIconDisabled : styles.rightIcon}>
          {rightIcon}
        </div>
      )}
    </StyledButton>
  );
};
