import expect from 'expect'
import { HELLO, hello } from '../actions/hello'

describe('hello actions', () => {

  it('should make a basic action', () => {
    const expectedAction = {
      type: HELLO
    }
    const actualAction = hello()
    expect(actualAction).toEqual(expectedAction)
  })

})
