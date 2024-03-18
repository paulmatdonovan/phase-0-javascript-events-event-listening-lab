function addingEventListener() {
    const input = document.getElementByClassName('one');

    function clickAlert() {
        alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert);
}


