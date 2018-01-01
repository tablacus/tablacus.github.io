var strID2 = "ele_tcm";
var strURL2 = "http://www.eonet.ne.jp/~gakana/tablacus/contextmenu_en.html";

var xmlobj = createHttpRequest();
if (xmlobj) {
	if (document.getElementById) {
		document.write('<span id="' + strID2 + '"></span>');

		if (typeof(xmlobj.onload) != "undefined") {
			xmlobj.onload = function() 
			{ 
				setResponseText(strID2, xmlobj.responseText);
			}
		}
		else {
			xmlobj.onreadystatechange = function() 
			{ 
				if (xmlobj.readyState == 4) {
					if (xmlobj.status == 200) {
						setResponseText(strID2, xmlobj.responseText);
					}
				}
			}
		}
		xmlobj.open("GET", strURL2, true);
		xmlobj.send(null);
	}
}

function setResponseText(strID2, s)
{
	if (s) {
		if (s.match(/<\/big>([\w\W]*?)<a href/i)) {
			document.getElementById(strID2).innerHTML = RegExp.$1.replace(/<.*?>/g, " ");
		}
	}
}

function createHttpRequest()
{
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if (window.navigator.platform.match(new RegExp("mac", "i"))) {
		return null;
	}
	else if (window.ActiveXObject) {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			return new ActiveXObject("Microsoft.XMLHTTP");
		}
	} 
	else {
		return null;
	}
}
