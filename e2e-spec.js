
describe('Walkthrough E2E Tests', function () {

	var expectedMsg = 'Angular 2 App';


  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
