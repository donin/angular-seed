'use strict';

describe('angularjs homepage', function(){
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  function add(a,b){
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  it('should have a title', function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('shold be zero by default',function(){
   expect(latestResult.getText()).toEqual('0');
  });
  
  it('shouldn\'t have a history',function(){
    expect(history.count()).toEqual(0);
  });

  it('should add one and two', function(){
    add(1,2);
    expect(latestResult.getText()).toEqual('3'); // 1+2=3
  });

  it('should add four and two',function(){
    add(2,4);
    expect(latestResult.getText()).toEqual('6'); //2+4=6
  });

  it('should have a history',function(){
    expect(history.count()).toEqual(2);
    // Check history. History append with sort by date DESC
    expect(history.first().getText()).toMatch(/2 \+ 4/);
  });



});
