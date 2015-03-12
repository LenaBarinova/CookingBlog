'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('LenasCookingBlog', function() {

  browser.get('index.html');

  it('should automatically redirect to recipe list', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/recipes");
  });

});
