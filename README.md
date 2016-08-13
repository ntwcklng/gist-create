# gist-create

Create an anonymous gist:
```javascript
const gistCreate = require('gist-create');

gistCreate.new({
  "description": "new created gist",
  "public": false,
  "files": {
    "index.js": {
      "content": "console.log('hello');"
    }
  }
}).then((res) => {
  console.log(res); // https://gist.github.com/21b4508b21e073fa6d309e724dcacac7
});
```