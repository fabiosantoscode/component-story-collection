import 'babel-polyfill';
/* eslint-disable sort-imports */
import React from 'react';
import chai from 'chai';
import chaiSpies from 'chai-spies';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import Teaser from '@economist/component-teaser';
import StoryCollection from '..';
/* eslint-enable sort-imports */
chai.should();
chai.use(chaiEnzyme());
chai.use(chaiSpies);
describe('StoryCollection', () => {
  describe('Rendering', () => {
    let fakeStories = null;
    let collection = null;
    let fakeLabel = null;
    let fakeDate = null;
    let fakeChanged = null;
    beforeEach(() => {
      function genFakeStory(i) {
        return {
          title: `Fake title ${ i }`,
          source: `Fake source ${ i }`,
          image: `http://images.io/${ i }.jpg`,
          webUrl: `/${ i }`,
        };
      }
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
      firstTeaser.props.should.have.property('flyTitle', 'Fake source 0');
      firstTeaser.props.image.should.have.property('src', 'http://images.io/0.jpg');
      firstTeaser.props.link.should.have.property('href', '/0');

      remainingTeasers[0].props.should.have.property('title', 'Fake title 1');
      remainingTeasers[0].props.should.have.property('flyTitle', 'Fake source 1');
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
    it('First teaser gets its title cut to 70 characters', () => {
      fakeStories[0].title = Array(90).join('X');
      collection = mount(
        <StoryCollection
          stories={fakeStories}
          date={fakeDate}
          changed={fakeChanged}
          label={fakeLabel}
        />
      );
      const firstTeaser = collection.find(Teaser).get(0);
      firstTeaser.props.title.should.have.length(70);
      firstTeaser.props.title.should.match(/^X{67}\.\.\.$/);
    });
    it('Stories\' renderLink functions get passed to the teasers', () => {
      fakeStories[0].renderLink = chai.spy(() => (<div / >));
      collection = mount(
        <StoryCollection
          stories={fakeStories}
        />
      );
      const firstTeaser = collection.find(Teaser).get(0);
      firstTeaser.props.should.have.property('renderLink', fakeStories[0].renderLink);
    });
  });
});

