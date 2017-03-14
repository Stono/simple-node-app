'use strict';
var App    = require('../lib/simple-node-app');

describe('simple-node-app', () => {

  before(() => {
  });

  after(() => {
  });

  beforeEach(() => {
  });

  afterEach(() => {
  });

  it('Should be awesome', () => {
    let app = new App();
    let result = app.execute();
    result.should.eql('awesome');
  });

});
