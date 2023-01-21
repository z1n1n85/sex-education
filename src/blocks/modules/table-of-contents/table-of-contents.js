const table_dropdown_btn = document.querySelector('.table-of-contents__dropdown-btn');
const table_chapter_container = document.querySelector('.table-of-contents__chapter-container');

table_dropdown_btn.addEventListener("click", function (){
    if(table_chapter_container.classList.contains('table-of-contents__chapter-container--open')){
        table_chapter_container.classList.remove('table-of-contents__chapter-container--open');
        table_dropdown_btn.textContent = '↓↓↓';
    }else {
        table_chapter_container.classList.add('table-of-contents__chapter-container--open');
        table_dropdown_btn.textContent = '↑↑↑';
    }
})
