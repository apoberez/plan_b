import Test from './include.js';
import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';

document.getElementById('dynamic-require').onclick = function(){
    require.ensure(['./dm'], function(require){
        let dm = require('./dm');

        dm();
    }, 'dm');
};

document.getElementById('dynamic-require-2').onclick = function(){
    require.ensure(['./dm2'], function(require){
        let dm = require('./dm2');
        console.log(_.isNumber(22));
        dm();
    }, 'dm');
};

let routeName = location.pathname.slice(1);

require('bundle!./routes/' + routeName + '.js')(function(route){
    let page = new route();
    page.test();
});



export default class {
    test() {
        let x = new Test();
        x.test();
        console.log('hello world!!!');
    };
}