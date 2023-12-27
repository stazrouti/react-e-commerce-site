import React from 'react'
import CartColumns from './CartColumns'

describe('<CartColumns />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CartColumns />)
  })
})