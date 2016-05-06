import expect from 'expect'
import hello from '../reducers/hello'
import { HELLO } from '../actions/hello'

describe('hello reducer', () => {

  it('should return the initial state', () => {

    const expectedState = {
      helloClicked: false
    }
    const actualState = hello()

    expect(actualState).toEqual(expectedState)
    
  })

  it('should handle HELLO', () => {

    const action = {
      type:HELLO
    }
    const expectedState = {
      helloClicked: true
    }
    const actualState = hello(null, action)

    expect(actualState).toEqual(expectedState)
    
  })

})