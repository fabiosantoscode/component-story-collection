import 'babel-polyfill';
import React from 'react';
import Storycollection from './';
/* eslint-disable max-len */
const exampleStories = [
  {
    title: 'You\'ll pay for this!',
    image: 'http://cdn.static-economist.com/sites/default/files/20150516_BLP510_0.jpg',
    source: 'The Economist online',
    webUrl: '/whichmba/financing-embas-youll-pay',
  },
  {
    title: 'Keeping it on the company campus',
    image: 'http://cdn.static-economist.com/sites/default/files/20150516_WBD001.jpg',
    source: 'The Economist online',
    webUrl: '/news/business/21651217-more-firms-have-set-up-their-own-corporate-universities-they-have-become-less-willing-pay',
  },
  {
    title: 'EMBA supercommuters: Interminable terminals',
    image: 'http://cdn.static-economist.com/sites/default/files/20150516_BLP511_0.jpg',
    source: 'The Economist online',
    webUrl: '/whichmba/emba-supercommuters-interminable-terminals',
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
  <Storycollection stories={exampleStories} date="Mar 14th 2016" changed="13.01 GMT" />
);

