import 'babel-polyfill';
import React from 'react';
import StoryCollection from './';
/* eslint-disable max-len */
const exampleStories = [
  {
    title: 'You\'ll pay for this!',
    image: 'http://cdn.static-economist.com/sites/default/files/20150516_BLP510_0.jpg',
    source: 'The Economist online',
    webUrl: '/whichmba/financing-embas-youll-pay',
    itemType: 'https://schema.org/BlogPosting',
    itemProp: 'blogPost',
    renderLink: function renderLink(props) {
      return (<a {...props} title="Hello, I'm a custom link title!" />);
    },
  },
  {
    title: 'Keeping it on the company campus',
    image: 'http://cdn.static-economist.com/sites/default/files/20150516_WBD001.jpg',
    source: 'The Economist online',
    webUrl: '/news/business/21651217-more-firms-have-set-up-their-own-corporate-universities-they-have-become-less-willing-pay',
    itemType: 'https://schema.org/BlogPosting',
    itemProp: 'blogPost',
  },
  {
    title: 'EMBA supercommuters: Interminable terminals',
    image: 'http://cdn.static-economist.com/sites/default/files/20150516_BLP511_0.jpg',
    source: 'The Economist online',
    webUrl: '/whichmba/emba-supercommuters-interminable-terminals',
    /* itemType defaults to component-teaser's default itemType, Article */
    /* itemProp defaults to component-teaser's default itemProp, article */
  },
  {
    title: 'Donald Trump reveals his isolationist foreign-policy instincts',
    image: 'http://cdn.static-economist.com/sites/default/files/images/2016/03/blogs/democracy-america/20160326_usp504.jpg',
    source: 'Democray in America',
    webUrl: '/blogs/democracyinamerica/2016/03/aipac-and-foreign-policy',
  },
];
/* eslint-enable max-len */

export default (
  <StoryCollection
    stories={exampleStories}
    date="Mar 14th 2016"
    changed="13.01 GMT"
    itemType="https://bib.schema.org/Collection"
  />
);

