// Small interaction: clicking a gallery photo opens it full-screen.
document.querySelectorAll(".photos img").forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position:fixed; inset:0; z-index:9999; background:rgba(0,0,0,.92);
      display:flex; align-items:center; justify-content:center; padding:20px; cursor:zoom-out;
    `;
    const big = document.createElement("img");
    big.src = img.src;
    big.style.cssText = "max-width:95%;max-height:95%;object-fit:contain;border-radius:14px;";
    overlay.appendChild(big);
    overlay.addEventListener("click", () => overlay.remove());
    document.body.appendChild(overlay);
  });
});
