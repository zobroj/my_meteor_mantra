// Requirements and error handling
// before sending to server-side Meteor.call
export default {
  create({ Meteor, LocalState }, foo, bar) {
    if (!foo || !bar) {
      return LocalState.set('CREATE_FOOBAR_ERROR', 'Foo & Bar are required.');
    }

    LocalState.set('CREATE_FOOBAR_ERROR', null);

    Meteor.call('foobar.createFoobar', foo, bar, (err) => {
      if (err) {
        return LocalState.set('CREATE_FOOBAR_ERROR', err.message);
      }
    });
  },
  clearErrors({ LocalState }) {
    return LocalState.set('CREATE_COMMENT_ERROR', null);
  },
};
