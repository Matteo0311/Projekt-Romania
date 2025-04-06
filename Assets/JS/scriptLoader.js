const scriptsToLoad = [
    '/Assets/js/navbarLoader.js',
    '/Assets/js/data.js',
    '/Assets/js/varosbemutatoData.js',
];

function loadScripts(scriptList) {
    scriptList.forEach((script) => {
        const scriptElement = document.createElement('script');
        scriptElement.src = script;
        scriptElement.onload = () => console.log(`Betöltve: ${script}`);
        scriptElement.onerror = () => console.error(`Sikertelen betöltés: ${script}`);
        document.head.appendChild(scriptElement);
    });
}

loadScripts(scriptsToLoad);