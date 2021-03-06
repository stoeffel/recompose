import React from 'react';
import curry from 'lodash/function/curry';
import wrapDisplayName from './wrapDisplayName';

const createSink = (callback, BaseComponent) => (
  class Sink extends React.Component {
    static displayName = wrapDisplayName(BaseComponent, 'sink');

    constructor(props, context) {
      super(props, context);
      callback(props);
    }

    componentWillReceiveProps(nextProps) {
      callback(nextProps);
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }
);

export default curry(createSink);
