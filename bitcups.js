function recurse(element)
{
    if (element.childNodes.length > 0) 
        for (var i = 0; i < element.childNodes.length; i++) 
            recurse(element.childNodes[i]);

    if (element.nodeType == Node.TEXT_NODE) 
        doSomething(element);
}
var html = document.getElementsByTagName('html')[0];
recurse(html);

function doSomething(el) {
	var txt = el.nodeValue;
	el.nodeValue = txt.replace(/bit([\-\ ]?)coin/ig,"Coffee\$1Cup").replace(/btc/ig,"CUP");
}

