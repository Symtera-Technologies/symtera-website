/**
 * The ported content carries inline markup (`<b>`, `&amp;`, `&nbsp;`) that the
 * prototype rendered with dangerouslySetInnerHTML. These helpers keep that
 * behaviour, including the prototype's <b> → styled <strong> substitution.
 *
 * All strings come from the checked-in content files, never from user input.
 */

/** Replace <b> with the prototype's styled <strong>, coloured per surface. */
export function bold(s: string, color: string): string {
  return s
    .replace(/<b>/g, `<strong style="color:${color};font-weight:500">`)
    .replace(/<\/b>/g, '</strong>');
}

/** Body copy on a dark surface. */
export const boldOnDark = (s: string) => bold(s, '#F4F7FA');

/** Body copy on the light section. */
export const boldOnLight = (s: string) => bold(s, '#101C2B');

/** Strip tags — used for plain-text summaries such as the products index. */
export const stripTags = (s: string) => s.replace(/<[^>]+>/g, '');

/** Decode the few named entities the content uses, for metadata/alt text. */
export const decode = (s: string) =>
  stripTags(s)
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
