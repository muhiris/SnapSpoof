import React from 'react'

function Button({text,onClick}) {
  return (
    <button
      onClick={onClick}
    className="btn-wide bg-red text-white rounded-3xl px-4 py-4 font-medium text-xl"
    >
      {text}
    </button>
  );
}

export default Button