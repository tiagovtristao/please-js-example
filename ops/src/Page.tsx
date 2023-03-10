import React from 'react';

import {Button} from '@core3/copperkey/components/Button';

import '@core3/copperkey/base.scss';

import './page.scss';

export function Page() {
  return (
    <div>
      <h1 className="font-big page__header">My Page</h1>
      
      <div>Button: <Button /></div>
    </div>
  )
}

export function Name() {
  return 'Page';
}
