(function(){
 
  var c = document.createElement('canvas');
  var cx = c.getContext('2d');
  var images = document.querySelectorAll('.rollover');
  var all = images.length;
  var pixels = null;
  var ox = 0;
  var oy = 0;

  while (all--) {
    images[all].addEventListener('mouseenter', copyimage, false);
    images[all].addEventListener('mousemove', hover, false);
    images[all].addEventListener('mouseleave', resetimg, false);
  }

  function copyimage(ev) {
    var img = ev.target;
    c.width = img.offsetWidth;
    c.height = img.offsetHeight;
    cx.drawImage(img, 0, 0, img.offsetWidth, img.offsetHeight);
    pixels = cx.getImageData(0, 0, c.width, c.height);
    ox = img.offsetLeft;
    oy = img.offsetTop;
  }

  function resetimg(ev) {
    ev.target.classList.remove('over');
  }

  function hover(ev) {
    if (pixelcolour(ev.clientX-ox,ev.clientY-oy).a === 0) {
      ev.target.classList.remove('over');
    } else {
      ev.target.classList.add('over');
    }
  }

  function pixelcolour(x, y) {
    var index = ((y * (pixels.width * 4)) + (x * 4));
    return {
      r:pixels.data[index],
      g:pixels.data[index + 1],
      b:pixels.data[index + 2],
      a:pixels.data[index + 3]
    };
  }

})();