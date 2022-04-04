declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      exampleCommand(name: string): Chainable<Element>
    }
  }
}

export {}
