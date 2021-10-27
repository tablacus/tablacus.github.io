var pr = "21.10.27";

CalcVersion = function (s) {
	var r = 0;
	var res = /(\d+)\.(\d+)\.(\d+)/.exec(s);
	if (res) {
		r = res[1] * 10000 + res[2] * 100 + (res[3] - 0);
	}
	return (['00000', r].join("")).substr(-6);
}

var prn = CalcVersion(pr);
if (prn > CalcVersion(document.getElementById("ver").innerHTML)) {
	var dl = document.getElementById("dl").innerHTML.replace(/\(.*/, "");
	var str = /[ァ-ヶ]/.test(dl) ? "プレリリース版 " : "Pre-release Edition ";
	var s = '<a class="btn btn-secondary btn-sm" data-toggle="collapse" href="#collapseEA" role="button" aria-expanded="false" aria-controls="collapseEA">' + str + pr + '</a>';
	s += '<div class="collapse" id="collapseEA">';
	s += '<a href="https://github.com/tablacus/TablacusExplorer/releases/tag/' + pr + '">GitHub</a><br>';
	s += '<a href="https://github.com/tablacus/TablacusExplorer/releases/download/' + pr + '/te' + prn + '.zip">' + dl + '</a><br>';
	s += '</div>';
	document.write(s);
}
