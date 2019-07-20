if (window.marked) {
    MakeMarkDown();
} else {
    MainWindow.OpenHttpRequest("http://cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked.min.js", "", SetMarkDown);
}

function SetMarkDown(xhr, url, arg1)
{
    new Function(xhr.get_responseText ? xhr.get_responseText() : xhr.responseText)();
}

function MakeMarkDown()
{
    var FV = GetFolderView();
    var src = api.PathSearchAndQualify(FV.FolderItem.Path + "\\..\\..\\..\\TablacusExplorerAddons.wiki");
    var dest = FV.FolderItem.Path;

    var ado = api.CreateObject("ads");
    ado.charset = 'utf-8';
    ado.Open();
    ado.LoadFromFile(fso.BuildPath(dest, "_template.html"));
    var template = ado.ReadText();
    ado.Close();

    var wfd = api.Memory("WIN32_FIND_DATA");
	var hFind = api.FindFirstFile(fso.BuildPath(src, "*.md"), wfd);
    var bFind = hFind != INVALID_HANDLE_VALUE;
	while (bFind) {
		if (!/^\.\.?|^_/.test(wfd.cFileName)) {
            var ado = api.CreateObject("ads");
            ado.charset = 'utf-8';
            ado.Open();
            ado.LoadFromFile(fso.BuildPath(src, wfd.cFileName));
            var md = ado.ReadText();
            md = md.replace(/\(https:\/\/github\.com\/tablacus\/TablacusExplorerAddons\/wiki\/([a-z0-9\-_]+)\)/g, "(./$1.html)");
            ado.Close();
            var body = marked(md);
            var res = /<h1[^>]*>(.*?)<\/h1>/i.exec(body);
            var title = res ? res[1] : "";
            var id = wfd.cFileName.toLowerCase().replace(/\.md$/, "");
            if (id == "home") {
            	id = "index";
            }
            var html = template.replace("<!--title-->", title).replace("<!--body-->", body).replace("<!--id-->", id);
            var fn = fso.BuildPath(dest, id + ".html");
            var ado = api.CreateObject("ads");
            ado.CharSet = "utf-8";
            ado.Open();
            ado.WriteText(html);
            ado.SaveToFile(fn, adSaveCreateOverWrite);
            ado.Close();
		}
        bFind = api.FindNextFile(hFind, wfd);
	}
	api.FindClose(hFind);
    alert("OK");
}

