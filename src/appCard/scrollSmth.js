function scrollSmooth(info) {
  var offset = document.getElementById(info).offsetTop;

  window.scroll({
    top: offset - 100,
    behavior: "smooth",
  });
}
export default scrollSmooth;
