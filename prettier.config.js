/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	singleQuote: true,
	semi: false,
	trailingComma: 'none',
	printWidth: 100,
	singleAttributePerLine: true,
	plugins: ['prettier-plugin-svelte'],
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte'
			}
		}
	]
}
