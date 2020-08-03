import pkg from './package.json';


/** @type {import('rollup').RollupOptions} */
let config = {
	input: 'lib/index.js',
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'esm' },
	],
};

export default config;
