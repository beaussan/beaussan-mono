import React from 'react';

function SvgWarning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" {...props}>
      <path fill="none" d="M0 0h16v16H0z" />
      <path
        d="M8 1.3a6.7 6.7 0 100 13.4A6.7 6.7 0 008 1.3zm0 7.4c-.4 0-.7-.3-.7-.7V5.3c0-.3.3-.6.7-.6s.7.3.7.6V8c0 .4-.3.7-.7.7zm.7 2.6H7.3V10h1.3v1.3z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWarning;
