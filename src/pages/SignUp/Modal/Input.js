import React, { useState, useRef } from 'react';

const Input = ({
  check,
  input_title,
  name,
  type,
  className,
  id,
  userInfo,
  id_error_message,
  pw_error_message,
}) => {
  const [placeholder, setPlaceholder] = useState('placeholder');
  const inputRef = useRef(null);

  const movePlaceholder = e => {
    if (inputRef.current.value.length === 0) {
      setPlaceholder('placeholder');
    } else {
      setPlaceholder('placeholderHasValue');
    }
  };

  return (
    <>
      <div className="inputBox">
        <p className={placeholder}>{input_title}</p>
        <input
          onChange={movePlaceholder}
          name={name}
          type={type}
          className={className}
          id={id}
          ref={inputRef}
        />
      </div>
      {userInfo.password.length === 0 ? (
        ''
      ) : userInfo.passwordConfirm.length === 0 ? (
        ''
      ) : userInfo.passwordConfirm === userInfo.password ? (
        ''
      ) : (
        <p className="errorMessage">{pw_error_message}</p>
      )}
      {userInfo.email.length === 0 ? null : userInfo.email.includes(
          '@' && '.com'
        ) ? null : (
        <p className="errorMessage">{id_error_message}</p>
      )}
    </>
  );
};

export default Input;
