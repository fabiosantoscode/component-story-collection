import React from 'react';
import Teaser from '@economist/component-teaser';
import classnames from 'classnames';

export function StoryCollectionStory({ story, isFirst }) {
  if (!story) {
    return (<div />);
  }
  const { title, source, image, webUrl } = story;
  if (isFirst) {
    return (
      <div
        className="story-collection__main-story"
      >
        <Teaser
          image={{ src: image }}
          flyTitle={source}
          title={title}
          link={{ href: webUrl }}
        />
      </div>
    );
  }
  return (
    <Teaser
      image={{ src: image }}
      flyTitle={source}
      title={title}
      link={{ href: webUrl }}
    />
  );
}

export default function StoryCollection({
  className,
  stories,
  date,
  changed,
  label = 'What matters today',
}) {
  const firstStory = (
    <StoryCollectionStory story={stories[0]} isFirst />
  );
  const remainingStories = stories.slice(1).map((story, index) =>
    (
      <StoryCollectionStory
        story={story}
        key={index}
      />
    )
  );
  const changedText = changed ?
    (
      <div className="story-collection__changed">
        {`Last updated: ${ changed }`}
      </div>
    ) : null;
  const dateText = date ?
    (
      <div className="story-collection__date">
        {date}
      </div>
    ) :
    null;
  return (
    <div className="story-collection__wrapper">
      <aside className={classnames('story-collection', className)}>
        <div className="story-collection__head">
          <div className="story-collection__label">
            {label}
          </div>
          {dateText}
        </div>
        {firstStory}
        <div className="story-collection__rest">
          {remainingStories}
          {changedText}
        </div>
      </aside>
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  const storyShape = React.PropTypes.shape({
    title: React.PropTypes.string,
    source: React.PropTypes.string,
    image: React.PropTypes.string,
    webUrl: React.PropTypes.string,
  });
  StoryCollection.propTypes = {
    stories: React.PropTypes.arrayOf(storyShape),
    date: React.PropTypes.string,
    changed: React.PropTypes.string,
    className: React.PropTypes.string,
    label: React.PropTypes.string,
  };
  StoryCollectionStory.propTypes = {
    story: storyShape,
    isFirst: React.PropTypes.bool,
  };
}

