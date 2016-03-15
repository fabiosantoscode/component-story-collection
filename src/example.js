import 'babel-polyfill';
import React from 'react';
import Storycollection from './';
/* eslint-disable max-len */
const exampleStories = [
  {
    title: 'You\'ll pay for this!',
    rubric: 'Firms are no longer willing to foot the bill for executives\' education',
    image: 'http://cdn.static-economist.com/sites/default/files/20150516_BLP510_0.jpg',
    webUrl: '/whichmba/financing-embas-youll-pay',
  },
  {
    title: 'As more firms have set up their own “corporate universities”, they have become less willing to pay for their managers to go to business school',
    rubric: 'As more firms have set up their own “corporate universities”, they have become less willing to pay for their managers to go to business school',
    image: 'http://cdn.static-economist.com/sites/default/files/20150516_WBD001.jpg',
    webUrl: '/news/business/21651217-more-firms-have-set-up-their-own-corporate-universities-they-have-become-less-willing-pay',
  },
  {
    title: 'EMBA\'s supercommuters',
    rubric: 'How far will students commute to attend a prestigious programme?',
    image: 'http://cdn.static-economist.com/sites/default/files/20150516_BLP511_0.jpg',
    webUrl: '/whichmba/emba-supercommuters-interminable-terminals',
  },
  {
    title: 'Methodology',
    rubric: 'How the 2015 Economist EMBA ranking was calculated',
    image: '',
    webUrl: '/whichmba/methodology-2',
  },
];
/* eslint-enable max-len */

export default (
  <Storycollection stories={exampleStories} date="Mar 14th 2016" changed="13.01 GMT" />
);

