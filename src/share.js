function Share() {
  $('body').on('click', '.js-social-share', function() {
    var $btn = $(this),
      type = $btn.data('network'),
      appkey = $btn.data('appkey'),
      params = $btn.closest('.js-social-share-params').data();

    var url = '';
    params.appkey = appkey;
    switch (type) {
      case 'weibo':
        url = weibo(params);
        _open(url);
        break;
      case 'qzone':
        url = qzone(params);
        _open(url);
        break;
      case 'qq':
        url = qq(params);
        _open(url);
        break;
      case 'douban':
        _open(douban(params));
        break;
      case 'renren':
        _open(renren(params));
        break;
      case 'weixin':
        weixin($btn, params);
        break;
    }
  });
}
