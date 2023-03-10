import cx from 'classnames';
import React from 'react';

import './styles/index.scss';

export interface SpinnerLoadingProps {
  color?: 'default' | 'primary' | 'white';
  size?: number;
  style?: React.CSSProperties;
}

const classPrefix = 'ygm-spinner-loading';

const SpinnerLoading: React.FC<SpinnerLoadingProps> = (props) => {
  return (
    <div
      className={cx(`${classPrefix}`, `${classPrefix}-color-${props.color}`)}
      style={{ ...props.style, width: props.size, height: props.size }}
    />
  );
};

SpinnerLoading.defaultProps = {
  size: 32,
  color: 'default',
};

export default SpinnerLoading;

SpinnerLoading.displayName = 'SpinnerLoading';
