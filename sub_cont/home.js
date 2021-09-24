const SUBJECT_NAME = sessionStorage.getItem('subject');
document.title = `Subject | ${SUBJECT_NAME}`;

document.querySelector('header').innerHTML += `<h1 class="fw-bolder">${SUBJECT_NAME}</h1>`;

// variable which contains all the books
const BOOKS = {
    "Mathematics": [
        {
            "name": "Higher Engineering Mathematics",
            "img_src": "../static/images/BookImages/mathematics.jpg",
            "buy_link": "https://www.amazon.in/Higher-Engineering-Mathematics-B-S-Grewal/dp/8193328493"
        },
        {
            "name": "Higher Engineering Mathematics",
            "img_src": "../static/images/BookImages/mathematics.jpg",
            "buy_link": "#"
        },
        {
            "name": "Higher Engineering Mathematics",
            "img_src": "../static/images/BookImages/mathematics.jpg",
            "buy_link": "#"
        },
        {
            "name": "Higher Engineering Mathematics",
            "img_src": "../static/images/BookImages/mathematics.jpg",
            "buy_link": "#"
        },
        {
            "name": "Higher Engineering Mathematics",
            "img_src": "../static/images/BookImages/mathematics.jpg",
            "buy_link": "#"
        },
    ],
    "Physics": [
        {
            "name": "Higher Engineering Mathematics",
            "img_src": "../static/images/BookImages/mathematics.jpg",
            "buy_link": "#"
        },
        {
            "name": "Higher Engineering Mathematics",
            "img_src": "../static/images/BookImages/mathematics.jpg",
            "buy_link": "#"
        },
    ],
    "C Programming": [
        {
            "name": "Higher Engineering Mathematics",
            "img_src": "../static/images/BookImages/mathematics.jpg",
            "buy_link": "#"
        },
        {
            "name": "Higher Engineering Mathematics",
            "img_src": "../static/images/BookImages/mathematics.jpg",
            "buy_link": "#"
        },
    ],
}

// variable which contains all the tutorial videos
const TUTORIALS = {
    "Mathematics": [
        {
            "link": "https://www.youtube.com/playlist?list=PLs5_Rtf2P2r5Z9eX1nZ1BwjYCVBQjibN8",
            "img_src": "https://i.ytimg.com/vi/0WCel-zgkns/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCPvdjGvzePQenK4T2vrmiyTNEd7w",
            "name": "Engineering Mathematics"
        }
    ]
}

// Adding books to the pages
const RenderCard = (img, title, extra=null) => 
{
    return (
        `<div class="vpCard">
            <img src=${img} alt=${title} class="img-fluid">
            <p class="text-center">${title}</p>
        </div>`
    )
}
let show_objects = parseInt($(".books").width() / 200);
let book_st = 0;

window.addEventListener("resize", function(){
    
    show_objects = parseInt($(".books").width() / 200);
    render_books(book_st);
})

const render_books = (book_st) =>
{
    let books_section = document.querySelector(".books");
    books_section.innerHTML = "";
    for (let i = book_st; i < book_st + show_objects; i++)
    {
        let book = BOOKS[SUBJECT_NAME][i];
        books_section.innerHTML += RenderCard(book["img_src"], book["name"], book["buy_link"]);
    
    }
}

$('.left').click(() => 
{
    book_st += show_objects;
    book_st = book_st >= BOOKS[SUBJECT_NAME].length ? BOOKS[SUBJECT_NAME].length - show_objects : book_st;
    render_books(book_st);
})
$('.right').click(() => 
{
    book_st -= show_objects;
    book_st = (book_st < 0) ? 0 : book_st;
    render_books(book_st);
})

render_books(book_st)

$('.sub_book').click(function () {
    sessionStorage.setItem("book", $(this).data("book"));
})