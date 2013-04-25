# stashed

[Handlebars](handlebarsjs.com) templates for CLIs! Now you can groom your stash on the command line too. Now with [colors](https://npmjs.org/package/colors)!

If you're building a CLI and want to keep the nasty string manipulations out your well crafted code, use this.

## Usage

First add `stashed` to your deps or install manually:

    npm i stashed

Next:

    var stashed = require('stashed');
    var render = stashed({
      templateDir: "./templates"
    });

    console.log(render('basics'));

    console.log(render('with_binds',{
      answer: "two",
      name: "Rich"
    }));

Inside `./templates/basics.hbs`, you'll find:

    {{#rainbow}}Skittles, taste the rainbow{{/rainbow}}

Which will render this in your terminal:

![Rainbows!](http://f.cl.ly/items/1F1n1X191S2a1V0m3P3K/Screen%20Shot%202013-04-25%20at%2012.26.42%20AM.png)

Inside `./templates/with_binds.hbs`, you'll find:

    This template has some binds:

      1 + 1 = {{answer}}

    Hello {{#inverse}}{{name}}{{/inverse}}!

This will render:

![Binds](http://f.cl.ly/items/3R412c1O1R090p021J0R/Screen%20Shot%202013-04-25%20at%2012.31.08%20AM.png)

## Supported colors and styles

Stashed uses [@marak](https://twitter.com/marak)'s awesome [colors.js](https://github.com/Marak/colors.js). Stashed exposes colors.js' colors and styles as Handlebars helpers:

* bold
* underline
* italic
* inverse
* grey
* black
* yellow
* red
* green
* blue
* white
* cyan
* magenta
* rainbow
* zebra
* zalgo

To use these, all you have to do is wrap your text with `{{#style}}text{{/style}}`. You can nest styles too.

## Contribute

Go nuts, but don't forget to send me some [pull requests](https://github.com/rmanalan/node-stashed)!