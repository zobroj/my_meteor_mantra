import { createApp } from 'mantra-core';
import initContext from './configs/context';

// modules
import appModule from './modules/app';
import mainModule from './modules/main';
import postsModule from './modules/posts';
import commentsModule from './modules/comments';
import moduleTemplate from './modules/_module_template'

// import bootstrap.js plugin
import 'bootstrap-sass';

// init context
const context = initContext();

// create app
const app = createApp( context );
app.loadModule( appModule );
app.loadModule( mainModule );
app.loadModule( postsModule );
app.loadModule( commentsModule );
app.loadModule( moduleTemplate );
app.init();
