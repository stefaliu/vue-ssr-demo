/**
 * Format string
 */
String.prototype.format = function() {
  let args = arguments;
  return this.replace(/\{(\d+)\}/g, function(a, index) {
    return args[index] || a
  })
}

/**
 * Replace all occurrences
 */
String.prototype.replaceAll = function(search, replacement) {
    let target = this;
    return target.replace(new RegExp(search, 'g'), replacement)
}

/**
 * Generate UUID
 */
export function getUuid () {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
  })
}
