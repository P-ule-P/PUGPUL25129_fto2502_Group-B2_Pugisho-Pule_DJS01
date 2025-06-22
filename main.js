import { podcasts, genres, seasons } from "./scripts/initialData/data.js";
import { showModal } from "./scripts/UI/modal.js";
import { formatTimeAgo } from "./scripts/utils/time.js";

/**
 * Utility to get genre names by podcast's genre ID array.
 * @param {number[]} genreIds
 * @returns {string[]}
 */
function mapGenreIdsToNames(genreIds) {
  return genreIds.map((id) => {
    const genre = genres.find((g) => g.id === id);
    return genre?.title || "Unknown";
  });
}

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
