/// <reference types ="cypress" />

describe('template spec', () => {
  it('visit', () => {
    cy.visit('https://todomvc-app-for-testing.surge.sh/')
  })
})