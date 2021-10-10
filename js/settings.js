var formDiv, formSource;
var localstorage = window.localStorage;

var showBgOnlineForm = () => {
    formDiv = document.getElementById('settings-option-bg-online-choose');
    formSource = document.getElementById('settings-option-bg-online-choose-source');
    formDiv.style.display = 'inherit';
    formSource.focus();
}

function openCfg(bool) {
  document.getElementById('settings-sidebar').style.width = `${bool? 250: 0}px`;
  document.getElementsByTagName('body')[0].style.marginRight = `${bool? 250: 0}px`;
  (!bool)
  ?document.getElementById('settings-option-bg-online-choose').style.display = 'none'
  :0;
}

function updateBg() {
    if (!localstorage.userBackground && !localstorage.userOnlineBackground) {
    	document.getElementsByTagName('body')[0].style.backgroundImage=
    	'url(\'assets/bg.jpg\')';
    } else if (localstorage.userBackground) {
    	document.getElementsByTagName('body')[0].style.backgroundImage=
    	localstorage.userBackground;
    } else if (localstorage.userOnlineBackground) {
    	document.getElementsByTagName('body')[0].style.backgroundImage=
    	localstorage.userOnlineBackground;
    }
}

function setBg() {
    showBgOnlineForm();
    formSource = document.getElementById('settings-option-bg-online-choose-source');
    formSource.value='file://';
}

function delBg() {
    localstorage.getItem('userBackground')?
    localstorage.removeItem('userBackground'):0;

    localstorage.getItem('userOnlineBackground')?
    localstorage.removeItem('userOnlineBackground'):0;
}

function setBgOnline() {
    formSource = document.getElementById('settings-option-bg-online-choose-source');
    localstorage.setItem('userOnlineBackground', `url('${formSource.value}')`);
}