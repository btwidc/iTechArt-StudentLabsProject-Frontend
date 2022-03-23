import React, { FC } from 'react';

import './ContentHeader.scss';

const ContentHeader: FC = () => {
  return (
    <div className="content-header">
      <div className="content-header-title">
        <h2>Event creating service</h2>
      </div>
      <button>Create event</button>
    </div>
  );
};

export default ContentHeader;
