var stdengine, localengine;

localengine = stdengine = 'google';

var engineQueryForm = {
    'google': '/search?q=',
    'duckduckgo': '/?q=',
    'bing': '/search?q=',
    'youtube': '/results?search_query=',
    'url': ''
};

var engineUrl = {
    'google': 'https://www.google.com',
    'duckduckgo': 'https://duckduckgo.com',
    'bing': 'https://www.bing.com',
    'youtube': 'https://www.youtube.com',
    'url': ''
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
        document.getElementById('query-field-choose-engine-list').appendChild(node);
    }
    document.getElementById('query-field-choose-engine-button').innerHTML=localengine;
}

function gotoQuery() {
    let form;
    form = document.getElementById('query-field-text-write-input').value;
    form = (localengine != 'url')? encodeURIComponent(form): form;
    window.location.href = `${engineUrl[localengine]}${engineQueryForm[localengine]}${form}`;
}
