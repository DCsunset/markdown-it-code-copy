const MarkdownIt = require('markdown-it');

const renderer = new MarkdownIt()
	.use(require('../index'));

console.log(renderer.render(`
\`\`\`js
function test(ok) {
	if (ok)
		return '<pre class="hljs"></pre>';
	return '<pre class="hljs"></pre>';
}
\`\`\`
`));
