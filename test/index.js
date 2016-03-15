import 'babel-polyfill';
import React from 'react';
import StoryCollection from '..';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Teaser from '@economist/component-teaser';
import { mount } from 'enzyme';
chai.should();
chai.use(chaiEnzyme());
describe('StoryCollection', () => {
  describe('Rendering', () => {
    let fakeStories;
    let collection;
    let fakeLabel;
    let fakeDate;
    let fakeChanged;
    beforeEach(() => {
      const genFakeStory = (i) => ({
        title: `Fake title ${ i }`,
        rubric: `Fake rubric ${ i }`,
        image: `http://images.io/${ i }.jpg`,
        webUrl: `/${ i }`,
      });
      fakeLabel = 'I am the label';
      fakeDate = '31 Feb 2016';
      fakeChanged = '4:00 GMT';
      fakeStories = [
        genFakeStory(0),
        genFakeStory(1),
        genFakeStory(2),
        genFakeStory(3),
      ];
      collection = mount(
        <StoryCollection
          stories={fakeStories}
          date={fakeDate}
          changed={fakeChanged}
          label={fakeLabel}
        />
      );
    });
    it('Has a bunch of teasers', () => {
      const [ firstTeaser, ...remainingTeasers ] = collection.find(Teaser).nodes;
      remainingTeasers.should.have.length(3);
      firstTeaser.props.should.have.property('title', 'Fake title 0');
      firstTeaser.props.should.have.property('text', 'Fake rubric 0');
      firstTeaser.props.image.should.have.property('src', 'http://images.io/0.jpg');
      firstTeaser.props.link.should.have.property('href', '/0');

      remainingTeasers[0].props.should.have.property('title', 'Fake title 1');
      remainingTeasers[0].props.should.have.property('text', 'Fake rubric 1');
      remainingTeasers[0].props.image.should.have.property('src', 'http://images.io/1.jpg');
      remainingTeasers[0].props.link.should.have.property('href', '/1');
    });
    it('First teaser is wrapped in the story-collection__main-story class', () => {
      const firstTeaser = collection.find(Teaser).get(0);
      const mainStoryWrapper = collection.find('.story-collection__main-story');
      const teaserInMainStoryWrapper = mainStoryWrapper.find(Teaser);
      teaserInMainStoryWrapper.should.have.length(1);
      teaserInMainStoryWrapper.get(0).should.equal(firstTeaser);
    });
  });
});

