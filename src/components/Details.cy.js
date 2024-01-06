import React from 'react'
import Details from './Details'

describe('<Details />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Details />)
  })
})