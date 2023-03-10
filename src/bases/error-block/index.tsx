import React from 'react';

import ErrorImage from './errorImage';
import './styles/index.scss';

export interface ErrorBlockProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  errorImage?: React.ReactNode;
}

const classPrefix = 'ygm-error-block';

const ErrorBlock: React.FC<ErrorBlockProps> = React.memo((props) => {
  let imageNode: React.ReactNode = ErrorImage;

  if (props.errorImage) {
    imageNode = props.errorImage;
  }
  return (
    <div className={`${classPrefix}`}>
      <div className={`${classPrefix}-image`}>{imageNode}</div>
      <div className={`${classPrefix}-description`}>
        <div className={`${classPrefix}-description-title`}>{props.title}</div>
        <div className={`${classPrefix}-description-subtitle`}>{props.description}</div>
      </div>
    </div>
  );
});

ErrorBlock.defaultProps = {
  title: '页面遇到一些小问题',
  description: '请稍后重试',
};

export default ErrorBlock;