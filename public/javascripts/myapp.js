myappJs = (function() {
  "use strict";

  function myappJs() {
    myappJs.init();
  }

  myappJs.init = function() {
    console.log('Init');
    return false;
  }

  myappJs.save = function() {
    console.log('Save');
    return false;
  }

  

  return myappJs;
})();