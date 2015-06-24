function buildUrlQuery(query) {
  var queryItems = [];
  for (var q in query) {
    queryItems.push(q + '=' + encodeURIComponent(query[q] || ''));
  }

  return queryItems.join('&');
}

function _open(url) {
  window.open(url, "_blank", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=500");
}
