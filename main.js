import { podcasts, genres, seasons } from "./scripts/initialData/data.js";
import { showModal } from "./scripts/UI/modal.js";
import { formatTimeAgo } from "./scripts/utils/time.js";

/**
 * Maps genre ID numbers to their corresponding genre names.
 *
 * @function mapGenreIdsToNames
 * @param {number[]} genreIds - Array of genre IDs.
 * @returns {string[]} Array of genre name strings.
 */
function mapGenreIdsToNames(genreIds) {
  return genreIds.map((id) => {
    const genre = genres.find((g) => g.id === id);
    return genre?.title || "Unknown";
  });
}

/**
 * Renders a list of podcast cards into the main grid.
 *
 * @function renderPodcasts
 * @param {Object[]} list - Array of podcast objects.
 * @returns {void}
 */
function renderPodcasts(list) {
  const container = document.getElementById("podcastList");
  container.innerHTML = "";

  list.forEach((podcast) => {
    const card = document.createElement("div");
    card.className = "podcast-card";
    card.innerHTML = `
      <img src="${podcast.image}" alt="${podcast.title}" />
      <h3>${podcast.title}</h3>
      <p>📅 ${podcast.seasons} seasons</p>
      <div class="tags">
        ${mapGenreIdsToNames(podcast.genres)
          .map((g) => `<span class="tag">${g}</span>`)
          .join("")}
      </div>
      <p>${formatTimeAgo(podcast.updated)}</p>
    `;
    card.addEventListener("click", () => showModal(podcast));
    container.appendChild(card);
  });
}

/**
 * Populates the genre filter dropdown with available genres.
 *
 * @function populateGenreFilter
 * @returns {void}
 */
function populateGenreFilter() {
  const genreFilter = document.getElementById("genreFilter");
  genres.forEach((g) => {
    const option = document.createElement("option");
    option.value = g.title;
    option.textContent = g.title;
    genreFilter.appendChild(option);
  });
}

populateGenreFilter();
renderPodcasts(podcasts);
