let RE_UPPERCASE = /[A-Z]/g;

function camel_to_kebab (str: string) {
	return str.replace(RE_UPPERCASE, '-$&').toLowerCase();
}


export function styleprops (props: Record<string, any>, opts: Options = {}) {
	let { kebabcase = true } = opts;

	let str = '';

	for (let key in props) {
		let v = props[key];
		if (!v) continue;

		let k = '--' + (kebabcase ? camel_to_kebab(key) : key);
		str += `${k}: ${v}; `;
	}

	return str.slice(0, str.length - 1);
}

export interface Options {
	kebabcase?: boolean,
}
