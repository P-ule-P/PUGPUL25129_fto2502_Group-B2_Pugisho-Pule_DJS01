/**
 * @file storage.js
 * @description Utility functions for interacting with localStorage.
 * Encapsulates browser API usage for reuse and testability.
 */
/**
 * Saves any serializable value to localStorage under the given key.
 *
 * @function saveToStorage
 * @param {string} key - The storage key.
 * @param {any} value - The value to store (will be JSON.stringified).
 * @returns {void}
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
