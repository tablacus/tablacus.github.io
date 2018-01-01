if (/^\?\d+/.test(location.search)) {
	document.cookie = 'refresh=1';
	location.replace(location.href.replace(location.search, ""));
} else {
	var ck = document.cookie.split(/;\s*/);
	for (var i in ck) {
		if (ck[i] == 'refresh=1') {
			document.cookie = 'refresh=';
			location.reload(true);
		}
	}
}
