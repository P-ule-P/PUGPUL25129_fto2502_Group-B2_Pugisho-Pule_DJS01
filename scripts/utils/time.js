/**
 * Convert ISO date to "Updated X time ago" format.
 * @param {string} isoDate
 * @returns {string}
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
