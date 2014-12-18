var Handlebars = require('handlebars');
var colors = require('colors');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

exports = module.exports = function(opts){
  opts = _.extend({
    templateExt: ".hbs",
    templateDir: path.join(__dirname, './templates'),
    noColors: false
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

  for(style in colors){
    registerHelper(style);
  };
  for(style in colors.styles){
    registerHelper(style);
  };

  return function render(templateName,context){
    var ctx = {};
    if (typeof context === 'object') ctx = context;
    var renderedStr = Handlebars.compile(loadTemplate(templateName))(ctx);
    return opts.noColors ?
      colors.stripColors(renderedStr) : renderedStr;
  }
}