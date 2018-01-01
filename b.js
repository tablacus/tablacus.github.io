var s = [];
if (/ja/i.test(navigator.browserLanguage || navigator.language || navigator.userLanguage)) {
	s.push('<a href="http://www29.atwiki.jp/xfinder/">X-Finder まとめサイト</a><br />');
	s.push('<a href="https://tablacus.github.io/explorer.html">アドオンで拡張できるエクスプローラ互換のタブ型ファイラー Tablacus Explorer</a><br />');
} else {
	s.push('<a href="https://tablacus.github.io/explorer_en.html">A tabbed file manager with Add-on support. Tablacus Explorer</a><br />');
}

s.push('<div style="float: left"><iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=amazonsale&f=ifr&linkID=f9f6cd14a85e68ea1a75c622436f3b49&t=xfinder-22&tracking_id=xfinder-22" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe></div>');
s.push('<div style="float: left"><!-- Rakuten Widget FROM HERE --><script type="text/javascript">rakuten_design="slide";rakuten_affiliateId="018001d9.90afadb3.05327cee.b211e14e";rakuten_items="ranking";rakuten_genreId=0;rakuten_size="336x280";rakuten_target="_blank";rakuten_theme="gray";rakuten_border="off";rakuten_auto_mode="off";rakuten_genre_title="off";rakuten_recommend="on";</script><script type="text/javascript" src="https://xml.affiliate.rakuten.co.jp/widget/js/rakuten_widget.js"></script><!-- Rakuten Widget TO HERE --></div>');
document.write(s.join(""));

//Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-248061-1', 'auto');
  ga('send', 'pageview');
