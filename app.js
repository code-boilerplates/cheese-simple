/* global Cheese */

var index = Cheese.request('static/index.html');

Cheese.route('/', function () {
  return index;
});
