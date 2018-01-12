(function () {
  var doc = window.document;
  var docEl = doc.documentElement;
  var styleOld = docEl.getAttribute('style');
  var setRem;
  window.setRem = setRem = function () {
    var w = docEl.getBoundingClientRect().width;
    if (w > 750) {
      w = 750;
    }
    var v = (w / 7.5).toFixed(1);
    var fontSize = 'font-size:' + v + 'px';
    var styleNew;
    if (styleOld) {
      if (styleOld[styleOld.length - 1] !== ';') {
        styleNew = styleOld + '' + fontSize;
      } else {
        styleNew = styleOld + '' + fontSize;
      }
    } else {
      styleNew = fontSize;
    }
    styleNew += ';margin:0 auto;max-width:750px;';
    docEl.setAttribute('style', styleNew);
  }
  setRem();
  window.addEventListener('resize', window.setRem, false);
})();
