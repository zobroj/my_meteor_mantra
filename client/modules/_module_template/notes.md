Also...
1. /client/modules/index.js:
```
  import foobarModule from './modules/foobars';
  app.loadModule( foobarModule );
```

2. /lib/collections.js
```
  export const Foobars = new Mongo.Collection( 'foobars' );
```

3. /server/configs/initial_adds.js
```
  import { Foobars } from '/lib/collections';

  if ( !Foobars.findOne() ) {
    for ( let lc = 1; lc <= 5; lc++ ) {
      const name = `This is the post title ${ lc }`;
      const createdAt = new Date();
      const foobarId = Meteor.uuid();
      Foobars.insert( { _id: foobarId, name, createdAt } );
    }
  }
```

4. /server/publications/foobars.js
* don't forget to update the index.js
```
import { Foobars } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.publish( 'foobars.list', () => {
    const selector = { category: { $ne: "private" } };
    const options = {
      fields: { _id: 1, name: 1, createdAt: 1 },
      sort: { createdAt: -1 },
      limit: 3
    };
    return Foobars.find( selector, options );
  });
}
```

5. /server/methods/foobars.js
* don't forget to update the index.js
```
  import { Foobars } from '/lib/collections';
  import { Meteor } from 'meteor/meteor';
  import { check } from 'meteor/check';

  export default function () {
    Meteor.methods({
      'foobars.create'( _id, name ) {
        check( _id, String );
        check( name, String );
        const createdAt = new Date();
        const foobar = { _id, name, createdAt };
        Foobars.insert( foobar );
      }
    });
  }

```
