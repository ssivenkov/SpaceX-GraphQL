import React from 'react';

import { Link } from 'react-router-dom';
import { PATH } from 'types/enum/Path';

export const Error404Page = () => {
  return (
    <div>
      <div>Page not found</div>
      <Link to={PATH.MAIN_PAGE}>Back to home</Link>
    </div>
  );
};
