'use strict'

import React from 'react'
import ButtonInclude from './button-include'

const SearchInclude = ({ children }) => (
  <div className='row'>
    <div className='col-md-1 col-xl-2'>
      &nbsp;
    </div>
    <div className='col-sm-12 col-md-6 col-xl-4'>
      {children}
    </div>
    <div className='col-md-2 col-xl-3'>
      &nbsp;
    </div>
    <div className='col-sm-12 col-md-2 col-xl-1'>
      <ButtonInclude />
    </div>
  </div>
)

export default SearchInclude
