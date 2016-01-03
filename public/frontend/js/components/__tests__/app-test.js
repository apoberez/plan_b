import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import App from '../app.js'

describe('App', () => {
    it('renders', () => {
        var element = TestUtils.renderIntoDocument(<App />);
        expect(element).toBeTruthy();
    });
});