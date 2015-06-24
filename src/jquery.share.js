$.fn.share = function () {
  return this.each(function() {
    var $container = $(this),
      instance;
    //initialize the Share.js
    instance = new Share($container);
    $container.data('share.js', instance);
  });
}
