import React from 'react';
import './PasswordIndicator.css';
import { validateRegex, PASSWORD_PROPERTIES } from '../constants/formConsts';

function PasswordIndicator(props) {
  // eslint-disable-next-line react/prop-types
  const { password = '' } = props;

  /**
   *
   * @return {number}
   */
  const getPasswordStrength = () => {
    let passwordStrength = 0;

    validateRegex.forEach((regex) => {
      if (new RegExp(regex).test(password)) {
        passwordStrength += PASSWORD_PROPERTIES.STRENGTH_INCREMENTOR;
      }
    });

    const passwordLength = password.length;

    if (passwordLength < PASSWORD_PROPERTIES.PASSWORD_LENGTH.MIN_LENGTH) {
      passwordStrength = 4;
    }

    if (passwordLength === PASSWORD_PROPERTIES.PASSWORD_LENGTH.EMPTY) {
      passwordStrength = 0;
    }

    return passwordStrength;
  };
  /**
   *
   * @returns {object}
   */
  const passwordChecker = () => {
    const passwordStrength = getPasswordStrength();

    switch (passwordStrength) {
      case 0:
        return {
          strength: 0,
          val: PASSWORD_PROPERTIES.PASSWORD_STRENGTH.EMPTY,
        };
      case 1:
        return {
          strength: 1,
          val: PASSWORD_PROPERTIES.PASSWORD_STRENGTH.EASY,
        };
      case 2:
        return {
          strength: 2,
          val: PASSWORD_PROPERTIES.PASSWORD_STRENGTH.MEDIUM,
        };
      case 3:
        return {
          strength: 3,
          val: PASSWORD_PROPERTIES.PASSWORD_STRENGTH.STRONG,
        };
      case 4:
        return {
          strength: 3,
          val: PASSWORD_PROPERTIES.PASSWORD_STRENGTH.EASY,
        };

      default:
        return null;
    }
  };

  const { val, strength } = passwordChecker();
  return (
    <div className="wrapper">
      <div className="label-box">
        {password && (
        <p className={`label strength-${val}`}>
          Your password is
          {' '}
          <strong>{val}</strong>
        </p>
        )}
      </div>
      <progress className={`indicator-bar strength-${val}`} value={strength} max="3" />
    </div>
  );
}
export default PasswordIndicator;
