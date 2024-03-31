import {marked} from "marked";
import katex from "katex";

const latex = {
	extensions: [
		{
			name: 'latex',
			level: 'block',
			start(src) {
				return src.indexOf('\\');
			},
			tokenizer(src) {
				const rule = /^\\\[(.+?)\\\]/;
				const match = rule.exec(src);

				if (match) {
					// console.log(match)
					return {
						type: 'latex',
						raw: match[0],
						text: match[1],
						displayMode: false,
						html: '' // will be replaced in walkTokens
					};
				}
			},
			renderer(token) {
				return token.html;
			}
		},
		{
			name: 'latex',
			level: 'block',
			start(src) {
				return src.indexOf('\\');
			},
			tokenizer(src) {
				const rule = /^\\\((.*?)\\\)/;
				const match = rule.exec(src);

				if (match) {
					return {
						type: 'latex',
						raw: match[0],
						text: match[1],
						displayMode: false,
						html: '' // will be replaced in walkTokens
					};
				}
			},
			renderer(token) {
				return token.html;
			}
		},
		{
			name: 'latex',
			level: 'inline',
			start(src) {
				return src.indexOf('$');
			},
			tokenizer(src) {
				const rule = /^\$(.+?)\$/;
				const match = rule.exec(src);

				if (match) {
					// console.log(match)
					return {
						type: 'latex',
						raw: match[0],
						text: match[1],
						displayMode: true,
						html: '' // will be replaced in walkTokens
					};
				}
			},
			renderer(token) {
				return token.html;
			}
		},
		{
			name: 'latex',
			level: 'block',
			start(src) {
				return src.indexOf('$');
			},
			tokenizer(src) {
				const rule = /^\$\$(.+?)\$\$/;
				const match = rule.exec(src);

				if (match) {
					// console.log(match)
					return {
						type: 'latex',
						raw: match[0],
						text: match[1],
						displayMode: false,
						html: '' // will be replaced in walkTokens
					};
				}
			},
			renderer(token) {
				return token.html;
			}
		}],
	// async: true, // needed to tell marked to return a promise
	async walkTokens(token) {
		if (token.type === 'latex') {
			// console.log(token)
			token.html = katex.renderToString(token.text, {throwOnError: false, displayMode: token.displayMode})
		}
	}
};

marked.use(latex)

export {marked}