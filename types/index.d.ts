export type CSSProperties = Record<string, any>;

export interface Options {
	kebabcase?: boolean,
}

export function styleprops (props: CSSProperties, opts?: Options): string;
