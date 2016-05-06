import expect from 'expect'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import {findWithClass} from 'react-shallow-testutils'

import About from '../components/About'

/*

  setup a shadow DOM of a component (i.e. returns pure JS data structure)
  
*/
function setup(props = {}){
  props = Object.assign({}, props, {
    onClick:expect.createSpy()
  })

  let renderer = TestUtils.createRenderer()
  renderer.render(<About {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

/*

  setup an actual DOM of a component (using js-dom)
  
*/
function setupDOM(props = {}){
  props = Object.assign({}, props, {
    onClick:expect.createSpy()
  })

  let component = TestUtils.renderIntoDocument(<About {...props} />)
  return ReactDOM.findDOMNode(component)
}

describe('Component: About', () => {

  it('should render', () => {
    
    const { output } = setup()

    var wrapper = findWithClass(output, 'wrapper')
    expect(wrapper.type).toBe('div')
    expect(wrapper.props.onClick).toBeA('function')

  })

  it('should render as a DOM element', () => {
    
    const rootElement = setupDOM()

    // rootElement is a proper DOM element - you can use JQuery on it

  })

  it('should run onClick', () => {

    const { output, props } = setup()

    var wrapper = findWithClass(output, 'wrapper')

    expect(props.onClick.calls.length).toBe(0)

    wrapper.props.onClick('apples')

    expect(props.onClick.calls.length).toBe(1)
    expect(props.onClick.calls[0].arguments).toEqual(['apples'])

  })

})
