/**
 *
 * S T A R T U P  S C R I P T
 *
 */

console.log('S T A R T U P  S C R I P T');

domready.then(start_application('domready'));

// winready.then(start_application('winready'));

// Promise.all([domready, winready]).then(start_application('domready and winready'));



function start_application(message) {

    console.log('___starting ' + message);

    // build up html page
    fetchHtml.all('link');



};

