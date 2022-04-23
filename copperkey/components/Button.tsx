import React from 'react';

import {capitalize} from 'lodash';

import {tmCaps} from './TMCaps';

import '../base.scss';

export function Button(): JSX.Element {
  return (
    <button className="font-big">{capitalize('Damn')} {tmCaps('Things')}</button>
  )
}

export function product(a: number, b: number): number {
  return a * b;
}

