import React from 'react'
import Store from './Cart'

describe('<Store />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Store />)
  })
})