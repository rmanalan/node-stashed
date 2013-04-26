var Handlebars = require('handlebars');
var colors = require('colors');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

exports = module.exports = function(opts){
  opts = _.extend({
    templateExt: ".hbs",
    templateDir: path.join(__dirname, './templates'),
    colors: true
  }, opts);

  function loadTemplate(name, cb){
    try{
      return fs.readFileSync(path.join(opts.templateDir,name+opts.templateExt)).toString();
    } catch(err) {
      console.log("Error:", err)
    }
  }

  function registerHelper(style){
    Handlebars.registerHelper(style, function(options) {
      return colors[style](options.fn(this));
    });
  }

  return function render(templateName){
    var ctx = {};
    var stripStyles = false;
    [].concat(Array.prototype.slice.call(arguments)).slice(1).forEach(function(p){
      if (typeof p === 'boolean') {
        stripStyles = p;
      } else if (typeof p === 'object') {
        ctx = p;
      }
    });
    for(style in colors){
      registerHelper(style);
    };
    var renderedStr = Handlebars.compile(loadTemplate(templateName))(ctx);
    return stripStyles ?
      renderedStr.stripColors() : renderedStr;
  }
}