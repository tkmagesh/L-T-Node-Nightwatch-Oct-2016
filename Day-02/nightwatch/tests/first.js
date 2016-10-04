var data = require('../data/data.js');
var testData = data['google-tests'];

var chalk = require('chalk');

console.log(chalk.red('Running the tests...'));

var tests = {};
function createTest(searchText, assertText){
  return function(browser){
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', searchText)
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', assertText)
      .end();
  }
}
for(var i=0; i<testData.length; i++){
  var tData = testData[i];
  var test = createTest(tData.searchText, tData.assertText);
  tests[tData.name] = test;
}
module.exports = tests;

/*module.exports = {
  'test-1' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  },
  'test-2' : function(browser){
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'node.js')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Node.js')
      .end();
  }
};
*/