var se = "21.11.1";

CalcVersion = function (s) {
	var r = 0;
	var res = /(\d+)\.(\d+)\.(\d+)/.exec(s);
	if (res) {
		r = res[1] * 10000 + res[2] * 100 + (res[3] - 0);
	}
	return (['00000', r].join("")).substr(-6);
}

var sen = CalcVersion(se);
var dl = document.getElementById("dl").innerHTML.replace(/\(.*/, "");
var str = /[ァ-ヶ]/.test(dl) ? "安定版 " : "Stable Edition ";
var s = '<a class="btn btn-secondary btn-sm" data-toggle="collapse" href="#collapseSE" role="button" aria-expanded="false" aria-controls="collapseSE">' + str + se + '</a>';
s += '<div class="collapse" id="collapseSE">';
s += '<a href="https://github.com/tablacus/TablacusExplorer/releases/tag/' + se + '">GitHub</a><br>';
s += '<a href="https://github.com/tablacus/TablacusExplorer/releases/download/' + se + '/te' + sen + '.zip">' + dl + '</a><br>';
s += '</div>';
document.write(s);
