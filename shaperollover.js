(function(){

  var c = document.createElement('canvas');
  var cx = c.getContext('2d');
  var images = document.querySelectorAll('.rollover');
  var all = images.length;
  var ox = 0;
  var oy = 0;

  while (all--) {
    images[all].addEventListener('mouseover', copyimage, false);
    images[all].addEventListener('mousemove', hover, false);
    images[all].addEventListener('mouseout', resetimg, false);
  }

  function copyimage(ev) {
    var img = ev.target;
    c.width = img.offsetWidth;
    c.height = img.offsetHeight;
    cx.drawImage(img, 0, 0, img.offsetWidth, img.offsetHeight);
    ox = img.offsetLeft;
    oy = img.offsetTop;
  }

  function resetimg(ev) {
    ev.target.classList.remove('over');
  }

  function hover(ev) {
    var x = ev.clientX - ox;
    var y = ev.clientY - oy;
    var pixelcolour = cx.getImageData(x, y, 1, 1);
    if (pixelcolour.data[3] === 0) {
      ev.target.classList.remove('over');
    } else {
      ev.target.classList.add('over');
    }
  }

})();