import React from 'react';
import propTypes from 'prop-types';

export default function Input({
  error,
  name,
  onChange,
  placeholder,
  labelName,
  inputClassName,
  value,
  type = 'text',
}) {
  return (
    <div className="flex flex-col mb-4">
      {labelName && (
        <label
          htmlFor={name}
          className={[
            'text-lg mb-2',
            error ? 'text-red-500' : 'text-gray-900',
          ].join(' ')}
        >
          {labelName}
        </label>
      )}
      <input
        name={name}
        type={type}
        onChange={onChange}
        className={[
          'bg-white focus:outline-none border px-6 py-3 w-full border-gray-600 focus:border-teal-500',
          error
            ? 'focus:border-red-500 border-red-500 text-red-500'
            : 'focus:border-teal-500 border-gray-600 text-gray-600',
          inputClassName,
        ].join(' ')}
        value={value}
        placeholder={placeholder ?? 'Please change placeholder'}
      />
      <span className="text-red-500 pt-2">{error}</span>
    </div>
  );
}

Input.propTypes = {
  error: propTypes.string,
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  placeholder: propTypes.string,
  labelName: propTypes.string,
  inputClassName: propTypes.string,
  type: propTypes.oneOf(['text', 'email', 'password']),
};
