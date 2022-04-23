import React from 'react';

import {Button} from '@core3/copperkey';

import '@core3/copperkey/base.scss';

import './page.scss';

export function Page() {
  return (
    <div>
      <h1 className="font-big page__header">My page</h1>
      
      <div>Button: <Button /></div>
    </div>
  )
}
