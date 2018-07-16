'use strict'

import React from 'react'

const Books = ({ books }) => (
  <div className='row'>
    <div className='col-md-1 col-xl-2'>&nbsp;</div>
    <div className='col-sm-12 col-md-10 col-xl-8'>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Código</th>
              <th scope='col'>Livro</th>
              <th scope='col'>Data de registro</th>
              <th scope='col'>Ação</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.registrationDate}</td>
                <td><button>maoi</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default Books
