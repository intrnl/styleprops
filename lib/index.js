let RE_UPPERCASE = /[A-Z]/g;

function camel_to_kebab (str) {
	return str.replace(RE_UPPERCASE, '-$&').toLowerCase();
}

export function styleprops (props = {}, { kebabcase = true } = {}) {
	let str = '';

	for (let key in props) {
		let v = props[key];
		if (!v) continue;

		let k = '--' + (kebabcase ? camel_to_kebab(key) : key);
		str += `${k}: ${v}; `;
	}

	return str.slice(0, str.length - 1);
}
