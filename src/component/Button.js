import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
    if (props.setIndex) {
      props.setIndex();
      props.setStatus();
    }
  };

  if (props.href !== undefined) {
    return (
      <a
        href={props.href}
        className={`group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${props.className}`}
      >
        {props.children}
      </a>
    );
  } else {
    return (
      <button
        type={props.type}
        className={`group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${props.className}`}
        onClick={onClick}
        id={props.id}
      >
        {props.nolock === true ? (
          <span></span>
        ) : (
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {/* <!-- Heroicon name: solid/lock-closed --> */}

            <svg
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        )}

        {props.children}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  nolock: PropTypes.bool,
  id: PropTypes.string,
};

export default Button;
