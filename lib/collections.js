import { Mongo } from 'meteor/mongo';

export const Comments = new Mongo.Collection( 'comments' );
export const Posts = new Mongo.Collection( 'posts' );

// dev testing _module_template
export const Foobars = new Mongo.Collection( 'foobars' );
