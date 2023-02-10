const schemeSrcs = new Map([
    ['scheme-man-f', ['img/man1.png']],
    ['scheme-man-s', ['img/man2.png', 'img/man3.png']],
    ['scheme-woman-f', ['img/woman1.png']],
    ['scheme-woman-s', ['img/woman2.png', 'img/woman3.png']],
    ['scheme-woman-v', ['img/woman4.png', 'img/woman5.png']],
]);

const schemes = document.querySelectorAll('.scheme');

const schemeRadioMarkup = `
    <input type="radio" name="select" id="option-1" checked>
    <input type="radio" name="select" id="option-2">
        <label for="option-1" class="option option-1">
            <div class="dot"></div>
            <span>Student</span>
        </label>
        <label for="option-2" class="option option-2">
            <div class="dot"></div>
            <span>Teacher</span>
        </label>`;

const schemeRadio = document.createElement('div');

schemeRadio.classList.add('scheme-radio');
schemeRadio.innerHTML = schemeRadioMarkup;


schemes.forEach(item => {
    if (schemeSrcs.get(item.id).length == 2){
        item.before(schemeRadio);
    }
});
