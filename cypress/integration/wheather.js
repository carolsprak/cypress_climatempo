describe('Wheather API', () => {
  it('should return status 200', () => {
    const wheather = cy.request('GET', 'http://localhost:3050/api/v1/weather/Aracaju')
    
    wheather.its('status')
      .should('be.eql', 200)
    
  })

  it('should return content-type Json', () => {
    const wheather = cy.request('GET', 'http://localhost:3050/api/v1/weather/Aracaju')

    wheather.its('headers').its('content-type').should('include', 'application/json')
  })

  const getItems = () =>
  cy.request('GET', 'http://localhost:3050/api/v1/weather/Aracaju')
    .its('body')

  it('returns name Aracaju', () => {
      getItems()
      .should('include', { name: 'Aracaju' });
    })
})
