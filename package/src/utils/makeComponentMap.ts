export function makeComponentMap(
    components: Record<string, string>
) {
    return Object.entries(components)
                    .map(([name, path]) => `export { default as ${name} } from '${path}';`)
                    .join('\n');
}