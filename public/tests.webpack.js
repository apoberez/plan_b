var context = require.context('./frontend/js', true, /-test\.js$/);
context.keys().forEach(context);