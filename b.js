var s = [];
if (/ja/i.test(navigator.browserLanguage || navigator.language || navigator.userLanguage)) {
	s.push('<a href="http://www29.atwiki.jp/xfinder/">X-Finder まとめサイト</a><br />');
	s.push('<a href="https://tablacus.github.io/explorer.html">アドオンで拡張できるエクスプローラ互換のタブ型ファイラー Tablacus Explorer</a><br />');
} else {
	s.push('<a href="https://tablacus.github.io/explorer_en.html">A tabbed file manager with Add-on support. Tablacus Explorer</a><br />');
}
document.write(s.join(""));
