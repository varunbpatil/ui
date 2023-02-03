import JSONbig from 'json-bigint';

const JSONBigNative = JSONbig({
  useNativeBigInt: true,
  constructorAction: 'preserve',
});

export const parseWithBigInt = (content: string) =>
  JSONBigNative.parse(content);

export const stringifyWithBigInt = <T = unknown>(
  value: T,
  replacer?: (key: string, value: T) => T,
  space?: string | number,
) => JSONBigNative.stringify(value, replacer, space);
