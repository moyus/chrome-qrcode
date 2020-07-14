var input = document.getElementById('input');
var btn = document.getElementById('btn');
var qrcode = new QRCode(document.getElementById("code"), {
	width: 200,
  height: 200
});

btn.addEventListener('click', function () {
  qrcode.makeCode(input.value);
});

chrome.tabs.query({ active:true, currentWindow:true }, function(tabs) {
  var url = tabs && tabs.length ? tabs[0].url : '';
  if (url.indexOf('http') === 0) {
    input.value = url;
    qrcode.makeCode(url);
  }
});
