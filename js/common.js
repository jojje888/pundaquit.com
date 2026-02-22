async function loadHtmlModule(elementId, filePath) {
    const response = await fetch(filePath);
    if (response.ok) {
        const htmlText = await response.text();
        let el = document.getElementById(elementId);
        if (el) {
            document.getElementById(elementId).insertAdjacentHTML('afterbegin', htmlText);
        }
        else {
            //document.getElementById(elementId).innerHTML = 'Page not found.';
            console.error('id "' + elementId + '" not found.');
        }
    }
    else {
        document.getElementById(elementId).innerHTML = 'Page not found.';
    }
}

function loadEvent(url, place_holder_id) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(place_holder_id).innerHTML = html;
        });
}

