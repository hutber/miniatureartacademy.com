export function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&/g, '&#038;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export function encodeHtml(unsafe) {
  return unsafe
    .replace(/&#8211;/g, '-')
    .replace(/&#8221;/g, '"')
    .replace(/&#8220;/g, '"')
    .replace(/&quot;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
}
