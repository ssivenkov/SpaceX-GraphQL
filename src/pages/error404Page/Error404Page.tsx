import React from 'react';

import { PATH } from 'enum/Path';
import { Link } from 'react-router-dom';

export const Error404Page = () => {
  return (
    <div>
      <div>Page not found</div>
      <Link to={PATH.MAIN_PAGE}>Back to home</Link>
    </div>
  );
};
