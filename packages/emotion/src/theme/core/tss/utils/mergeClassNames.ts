export function mergeClassNames<T extends Record<string, string>>(
  cx: (..._classNames: any) => string,
  classes: T,
  name: string
) {
  return Object.keys(classes).reduce((acc: any, className: any) => {
    acc[className] = cx(
      classes[className],
      name ? `rd-${name}-${className}` : null
    );
    return acc;
  }, {}) as T;
}
