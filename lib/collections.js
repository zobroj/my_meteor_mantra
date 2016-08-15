import { Mongo } from 'meteor/mongo';

export const Comments = new Mongo.Collection('comments');
export const Posts = new Mongo.Collection('posts');
