/**
 * Save a value in local storage
 * @param {string} key
 * @param {any} value
 */
export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Load a value from local storage
 * @param {string} key
 * @returns {any}
 */
export function loadFromStorage(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}

/**
 * Remove a value from local storage
 * @param {string} key
 */
export function removeFromStorage(key) {
  localStorage.removeItem(key);
}
