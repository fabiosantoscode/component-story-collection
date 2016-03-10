
import 'babel-polyfill';
import StoryCollection from '..';
import chai from 'chai';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;
chai.should();
describe('StoryCollection', () => {
  it('is compatible with React.Component', () => {
    StoryCollection.should.be.a('function')
      .and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<StoryCollection/>).should.equal(true);
  });

  describe('Rendering', () => {
    const renderer = TestUtils.createRenderer();
    it('FILL THIS IN', () => {
      renderer.render(<StoryCollection/>, {});
      renderer.getRenderOutput().should.deep.equal(
        <div/>
      );
    });

  });

});

