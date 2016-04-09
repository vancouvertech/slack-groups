var marked = require('marked');
var fs = require('fs');

fs.readFile('./README.md', 'utf8', function(err, data) {
  if (err) {
    throw err;
  }

  var template = fs.readFileSync('_layout.html', { encoding: 'utf8' });
  template = template.replace('__CONTENT__', marked(data));
  fs.writeFileSync('index.html', template);
});
