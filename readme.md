# posthtml-path-prefix

Adds prefix to all paths in your HTML that are starting from root, which is useful when your site is not hosted at the root.

Add this plugin to your `posthtml.config.js` and configure the root directory where your site will be hosted at:

```js
const pathPrefix = require('posthtml-path-prefix')

module.exports = () => {
  return {
    plugins: [
      pathPrefix({ root: '/my-site' })
    ]
  }
}
```

Now process some HTML:

```js
const posthtml = require('posthtml')

const result = posthtml().process(`
  <script defer src="/script.js"></script>
  <link rel="stylesheet" href="/style.css">
  <a href="/">Home</a>
`, { sync: true })

console.log(result)
```

The above will log the following HTML

```html
<script defer src="/my-site/script.js"></script>
<link rel="stylesheet" href="/my-site/style.css">
<a href="/my-site">Home</a>
```

To skip prefixing for a certain element add the attribute `skip-prefix`:

```html
<!-- this will stay as-is -->
<a href="/another-root" skip-prefix>Home</a>
```
