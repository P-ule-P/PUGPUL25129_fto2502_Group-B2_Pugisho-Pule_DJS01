import { seasons } from "../initialData/data.js";
import { genres } from "../initialData/data.js";

/**
 * Displays a modal with detailed podcast information.
 * @function showModal
 * @param {Object} podcast - The podcast object to display in the modal.
 * @returns {void}
 */
export function showModal(podcast) {
  const modal = document.getElementById("podcastModal");
  modal.classList.remove("hidden");

  document.getElementById("modalTitle").textContent = podcast.title;
  document.getElementById("modalImage").src = podcast.image;
  document.getElementById("modalDescription").textContent = podcast.description;
  document.getElementById(
    "modalUpdated"
  ).textContent = `📅 Last updated: ${new Date(
    podcast.updated
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;

  const genreLabels = podcast.genres.map((id) => {
    const genre = genres.find((g) => g.id === id);
    return `<span class="tag">${genre?.title || "Unknown"}</span>`;
  });
  document.getElementById("modalGenres").innerHTML = genreLabels.join("");

  const seasonObj = seasons.find((s) => s.id === podcast.id);
  const seasonList = seasonObj?.seasonDetails || [];
  const modalSeasons = document.getElementById("modalSeasons");

  modalSeasons.innerHTML = seasonList
    .map(
      (s) => `
    <div>
      <strong>${s.title}</strong> — ${s.episodes} episodes
    </div>
  `
    )
    .join("");

  document.querySelector(".close-modal").onclick = () => {
    modal.classList.add("hidden");
  };
}
