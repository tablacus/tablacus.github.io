var strURL = "https://api.github.com/repos/tablacus/%1/releases/latest";

function ReadVersion(strID)
{
	var xmlobj = createHttpRequest();
	if (xmlobj) {
		if (document.getElementById && window.JSON) {
			if (typeof(xmlobj.onload) != "undefined") {
				xmlobj.onload = function() {
					var json = JSON.parse(xmlobj.responseText)
					document.getElementById(strID).innerHTML = 'Version ' + json.tag_name;
				}
			} else {
				xmlobj.onreadystatechange = function() 
				{ 
					if (xmlobj.readyState == 4) {
						if (xmlobj.status == 200) {
							var json = JSON.parse(xmlobj.responseText)
							document.getElementById(strID).innerHTML = 'Version ' + json.tag_name;
						}
					}
				}
			}
			xmlobj.open("GET", strURL.replace(/%1/, strID), true);
			xmlobj.send(null);
		}
	}
}

function createHttpRequest()
{
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else if (window.navigator.platform.match(new RegExp("mac", "i"))) {
		return null;
	} else if (window.ActiveXObject) {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			return new ActiveXObject("Microsoft.XMLHTTP");
		}
	} else {
		return null;
	}
}

ReadVersion("TablacusExplorer");
ReadVersion("TablacusContextMenu");
ReadVersion("TablacusScriptControl");
