/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
        });

         it('url are defined', function() {
           for (var i = 0; allFeeds.length > i; i++) {
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url.length).not.toBe(0);
           }
         });

         it('name are defined', function() {
           for (var i = 0; allFeeds.length > i; i++) {
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name.length).not.toBe(0);
           }
         });
    });

    describe('The menu', function() {
      it('are hidden', function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });

      it('are hidden on click', function() {
        // Click event
        var clicked = false;
        $('.menu-icon-link').on('click', function() {
          clicked = !clicked;
        });
        // Clicked once
        expect($('body').hasClass('menu-hidden') && clicked).toBe(false);

        // Clicked twice
        expect($('body').hasClass('menu-hidden') && !clicked).toBe(true);
      });
    });

    describe('Initial Entries', function() {
      beforeEach(function(done) {
        loadFeed(0, function(){
          done();
        });
      });

      it('at least a .entry element', function (done){
        expect($('.entry').length).toBeGreaterThan(0);
        done();
      });
    });

    describe('New Feed Selection', function() {
      var entries = $('.entry').length;
      beforeEach(function(done) {
        loadFeed(0, function(){
          done();
        });
      });

      it('increase entries', function (done){
        expect($('.entry').length).toBeGreaterThan(entries);
        done();
      });
    });
}());
