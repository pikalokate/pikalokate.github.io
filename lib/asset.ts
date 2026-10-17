// Prefix a file from /public with the site's base path (needed on GitHub Pages).
export const asset = (path: string) => `${process.env.BASE_PATH ?? ""}${path}`
