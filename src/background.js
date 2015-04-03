function extractPrefix(valueObject) {
	return valueObject.command_prefix === undefined ? '' : valueObject.command_prefix;
}

chrome.browserAction.onClicked.addListener(function(e) {
	chrome.tabs.query({}, function(tabs) {
		var urls = tabs.map(function(t) { return t.url; }).join(',');
		chrome.storage.sync.get('command_prefix', function(value) {
			var command = extractPrefix(value) + ' ' + urls;
			document.oncopy = function(event) {
				event.clipboardData.setData("text/plain", command);
				event.preventDefault();
			};
			document.execCommand("Copy", false, null);
		});
	});
});