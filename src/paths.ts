/** Resolve local links and public assets under the configured hosting path. */
export function sitePath(path: string) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}
