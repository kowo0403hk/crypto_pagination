export const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (
        entry.target.classList.contains("title") ||
        entry.target.classList.contains("card")
      ) {
        entry.target.classList.add("show");
        return;
      } else {
        entry.target.classList.add("right");
        entry.target.classList.add("slide");
        return;
      }
    }
  });
});
