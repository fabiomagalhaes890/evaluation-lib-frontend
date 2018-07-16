'use strict'

import React from 'react'
import Header from './header'
import SearchInclude from './search-include'
import Search from './search'
import Books from './books'

const AppContent = ({ books }) => (
  <div className='app'>
    <div className='container-fluid'>
      <Header />
      <SearchInclude>
        <Search />
      </SearchInclude>
      
      {!!books && <Books books={books}/>}
    </div>
  </div>
)

export default AppContent
