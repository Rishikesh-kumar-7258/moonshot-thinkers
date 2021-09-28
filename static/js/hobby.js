let show_objects = parseInt($(".content").width() / 200);
let book_st = 0;

window.addEventListener("resize", function(){
    
    show_objects = parseInt($(".content").width() / 200);
    render_books(book_st);
})

$('.right').click(() => 
{
    book_st = book_st + show_objects > BOOKS[SUBJECT_NAME].length ? book_st : book_st + show_objects;
    render_books(book_st);
})
$('.left').click(() => 
{
    book_st -= show_objects;
    book_st = (book_st < 0) ? 0 : book_st;
    render_books(book_st);
})

render_books(book_st)