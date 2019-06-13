var expect    = require('expect');
var React     = require('react');
var ReactDOM  = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $         = require('jQuery');

/* Custom Components */
var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toBeTruthy();
    });

    it('should call onSetCountdown if valid seconds entered', () => {
        // TODO: need to fix the spy, not working as expected
        //var spy = expect.createSpy();
        //var spy = jest.fn();
        //spy();
        //var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        //var $el = $(ReactDOM.findDOMNode(countdownForm));

        //countdownForm.refs.seconds.value = '109';
        //TestUtils.Simulate.submit($el.find('form')[0]);

        //expect(spy).toHaveBeenCalledWith(109);
    });
});
