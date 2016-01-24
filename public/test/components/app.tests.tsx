import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

import App from '../../src/components/app.tsx';

React;

describe('App', () => {
    it('renders', () => {
        var element = TestUtils.renderIntoDocument(<App />);
        expect(element).toBeTruthy();
    });
});