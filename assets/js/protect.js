// Disable right click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable copy shortcuts
document.addEventListener("keydown", function (e) {
  if (
    (e.ctrlKey || e.metaKey) &&
    ["c", "x", "s", "u", "a"].includes(e.key.toLowerCase())
  ) {
    e.preventDefault();
  }
});
