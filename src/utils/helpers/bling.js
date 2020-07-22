const blingjs = () => {
  // Mimic JQuery API to shorthand querySelector and querySelectorAll
  window.$ = document.querySelector.bind(document);
  window.$$ = document.querySelectorAll.bind(document);

  // Shorthand addEventListener to
  // $('.elem').on('click',handleClick);
  Node.prototype.on = window.on = function(name, fn) {
    this.addEventListener(name, fn);
  };

  // nodelist to array to have the all the nice array methods map, reducer etc..
  NodeList.prototype.__proto__ = Array.prototype;
  NodeList.prototype.on = function(name, fn) {
    this.forEach(function(elem, i) {
      elem.on(name, fn);
    });
  };
};

export default blingjs;
