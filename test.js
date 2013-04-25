var stashed = require('./index');

var render = stashed({
  templateDir: "./templates"
});

console.log(render('basics'));
console.log(render('with_binds',{
  answer: "two",
  name: "Rich"
}));