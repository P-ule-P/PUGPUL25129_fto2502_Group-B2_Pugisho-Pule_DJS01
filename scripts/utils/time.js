/**
 * @file time.js
 * @description Utility to convert ISO date strings to human-readable relative time strings.
 */
/**
 * Converts an ISO date string into a relative "time ago" format like:
 * - "Updated 2 days ago"
 * - "Updated 5 weeks ago"
 * - "Updated just now"
 *
 * @function formatTimeAgo
 * @param {string} isoDate - A date string in ISO 8601 format.
 * @returns {string} A user-friendly relative time description.
 */
export function formatTimeAgo(isoDate) {
  const now = new Date();
  const past = new Date(isoDate);
  const diffMs = now - past;

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `Updated ${years} year${years > 1 ? "s" : ""} ago`;
  if (months > 0) return `Updated ${months} month${months > 1 ? "s" : ""} ago`;
  if (weeks > 0) return `Updated ${weeks} week${weeks > 1 ? "s" : ""} ago`;
  if (days > 0) return `Updated ${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `Updated ${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0)
    return `Updated ${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return `Updated just now`;
}
