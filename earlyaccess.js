var ea = "20.11.25";

CalcVersion = function (s) {
	var r = 0;
	var res = /(\d+)\.(\d+)\.(\d+)/.exec(s);
	if (res) {
		r = res[1] * 10000 + res[2] * 100 + (res[3] - 0);
	}
	return (['00000', r].join("")).substr(-6);
}

var ean = CalcVersion(ea);
if (ean > CalcVersion(document.getElementById("ver").innerHTML)) {
	var dl = document.getElementById("dl").innerHTML.replace(/\(.*/, "");
	var str = /[ァ-ヶ]/.test(dl) ? "アーリーアクセス版 " : "Early Access Version ";
	var s = '<a class="btn btn-danger btn-sm" data-toggle="collapse" href="#collapseEA" role="button" aria-expanded="false" aria-controls="collapseEA">' + str + ea + '</a>';
	s += '<div class="collapse" id="collapseEA">';
	s += '<a href="https://github.com/tablacus/TablacusExplorer/releases/tag/' + ea + '">GitHub</a><br>';
	s += '<a href="https://github.com/tablacus/TablacusExplorer/releases/download/' + ea + '/te' + ean + '.zip">' + dl + '</a><br>';
	s += '</div>';
	document.write(s);
}
