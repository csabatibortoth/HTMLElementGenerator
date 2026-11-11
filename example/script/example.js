import { HTMLElementGenerator } from '../../src/HTMLElementGenerator.js';

// Module scripts are deferred, so the DOM is ready by the time this runs.
HTMLElementGenerator({
    parent: 'example',
    id: 'myDiv',
    elementType: 'div',
    text: 'myDiv'
});

HTMLElementGenerator({
    parent: 'myDiv',
    id: 'mySpan',
    elementType: 'span',
    text: 'mySpan'
});

HTMLElementGenerator({
    parent: 'mySpan',
    id: 'myp',
    elementType: 'p',
    text: 'p'
});

HTMLElementGenerator({
    parent: 'myp',
    id: 'myh1',
    elementType: 'h1',
    text: 'myh1'
});
