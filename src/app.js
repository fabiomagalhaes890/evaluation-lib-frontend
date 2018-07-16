'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      books: []
    }
  }

  getApiUrlEvaluationLibs () {
    return 'http://localhost:58841/api/book'
  }

  getLivros () {
    return (e) => {
      ajax().get(this.getApiUrlEvaluationLibs())
        .then((result) => {
          console.log(result)
        })
        
    }
  }

  render () {
    return (
      <AppContent
        books={this.getLivros()}
      />
    )
  }
}

export default App
