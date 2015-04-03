document.addEventListener('DOMContentLoaded', function() {
	chrome.storage.sync.get('command_prefix', function(value) {
		if(value.command_prefix !== undefined) {
			document.getElementById('command-prefix').value = value.command_prefix;
		}
	});
	
	document.getElementById('save-button').addEventListener('click', function() {
		chrome.storage.sync.set({'command_prefix': document.getElementById('command-prefix').value});
	});
});

