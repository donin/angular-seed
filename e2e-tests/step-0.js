'use sctrict';

describe('angularJS Tutorial step0',function(){
  it('should open the app',function(){
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });

  it('should check math result',function(){
    expect(element(by.id('mathResult')).getText()).toEqual('3');
  });
});
