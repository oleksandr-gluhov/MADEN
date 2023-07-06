function handleResize() {
    var section_w = document.querySelector('.logo').offsetWidth;
    var tell_w = document.querySelector('.header__tell').offsetWidth;
    var soc_media = document.querySelector('.soc_media').offsetWidth;
    var tett_mar = section_w - (54 + tell_w);
    var soc_media = document.querySelector('.soc_media').style.marginLeft = tett_mar + "px";
}
handleResize()
window.addEventListener('resize', handleResize);