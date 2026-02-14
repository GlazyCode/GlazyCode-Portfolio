const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".certificate-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    if(!link.dataset.image) return; // skip if no image
    modal.style.display = "flex";
    modalImg.src = link.dataset.image;
  });
});

closeBtn.onclick = () => modal.style.display = "none";

modal.onclick = e => {
  if(e.target === modal) modal.style.display = "none";
};
