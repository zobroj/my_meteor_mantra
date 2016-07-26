import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import FoobarList from '../components/foobar_list.jsx';
import { authComposer } from '/client/configs/composers';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();

  if (Meteor.subscribe('foobars.list').ready()) {
    const options = {
      sort: { createdAt: -1 },
    };
    const foobars = Collections.Foobars.find({}, options).fetch();
    onData(null, { foobars });
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  composeWithTracker(authComposer),
  useDeps()
)(FoobarList);
