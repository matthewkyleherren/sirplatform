/**
 * Port of BAO.Utils.getOffsetTop
 * Recursively calculates an element's offset from the top of the document body.
 */
export function getOffsetTop(
  el: HTMLElement | null,
  parent: HTMLElement = document.body,
  offsetTop = 0,
): number {
  if (!el || isNaN(el.offsetTop)) {
    return offsetTop
  }

  offsetTop += el.offsetTop

  if (el.offsetParent === parent || !el.offsetParent) {
    return offsetTop
  }

  return getOffsetTop(el.offsetParent as HTMLElement, parent, offsetTop)
}
