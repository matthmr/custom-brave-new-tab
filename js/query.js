var stdengine, localengine;

localengine = stdengine = 'google';

var engineQueryForm = {
    'google': 'search?q=%s',
    'duckduckgo': '?q=%s',
    'bing': 'search?q=%s'
};

var engineUrl = {
    'google': 'www.google.com',
    'duckduckgo': 'duckduckgo.com',
    'bing': 'www.bing.com'
};

var setEngine = (id) => {
    localengine=
    document.getElementById('query-field-choose-engine-button').innerHTML=
    document.getElementById('query-field-choose-engine-list').children[id].innerHTML
}

function loadEngines() {
    let node,text,i=0;
    for (url in engineUrl) {
        node = document.createElement("a");
        node.setAttribute('href', `javascript:setEngine(${i++});`);
        text = document.createTextNode(url);
        node.appendChild(text);
        document.getElementById("query-field-choose-engine-list").appendChild(node);
    }
    document.getElementById('query-field-choose-engine-button').innerHTML=localengine;
}