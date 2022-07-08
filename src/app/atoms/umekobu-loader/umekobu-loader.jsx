import React from 'react';
import PropTypes from 'prop-types';
import './umekobu-loader.scss';

function UmekobuLoader({ size }) {
  return (
    <div className={`umekobu-loader umekobu-loader--${size}`}> </div>
  );
}

UmekobuLoader.defaultProps = {
  size: 'normal',
};

UmekobuLoader.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
};

export default UmekobuLoader;
