const scriptsToLoad = [
    '/Assets/JS/navbarLoader.js',
    '/Assets/JS/data.js',
    '/Assets/JS/varosbemutatoData.js',
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