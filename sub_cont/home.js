SUBJECT_NAME = sessionStorage.getItem('subject');
document.title = `Subject | ${SUBJECT_NAME}`;

document.querySelector('header').innerHTML += `<h1 class="fw-bolder">${SUBJECT_NAME}</h1>`;

// class Books{

//     constructor(name, img_src, buy_link){
//         this.name = name;
//         this.img_src = img_src;
//         this.buy_link = buy_link;
//     }
// }

// let Mathematics = [];
// Mathematics.push(new Books("Higher Engineering Mathematics", "https://images-na.ssl-images-amazon.com/images/I/61AnHkiZtzL.jpg", "https://www.amazon.in/Higher-Engineering-Mathematics-B-S-Grewal/dp/8193328493"));

// // switch (SUBJECT_NAME) {
// //     case "Mathematics":
// //         show_subject(Mathematics);
// //         break;
// //     case "Physics":
// //         show_subject(Physics);
// //         break;
// //     case "BEEE":
// //         show_subject(Physics);
// //         break;
// //     case "Physics":
// //         show_subject(Physics);
// //         break;
// //     case "Physics":
// //         show_subject(Physics);
// //         break;

// //     default:
// //         break;
// // }

// variable which contains all the books
BOOKS = {
    "Mathematics" : {
        "1" : {
                "name" : "Higher Engineering Mathematics",
                "img_src" : "https://images-na.ssl-images-amazon.com/images/I/61AnHkiZtzL.jpg",
                "buy_link" : "https://www.amazon.in/Higher-Engineering-Mathematics-B-S-Grewal/dp/8193328493"
            },
        "2" : {
                "name" : "Higher Engineering Mathematics",
                "img_src" : "https://images-na.ssl-images-amazon.com/images/I/61AnHkiZtzL.jpg",
                "buy_link" : "#"
            },
    },
    "Physics" : {
        "1" : {
            "name" : "Higher Engineering Mathematics",
            "img_src" : "https://images-na.ssl-images-amazon.com/images/I/61AnHkiZtzL.jpg",
            "buy_link" : "#"
        },
        "2" : {
            "name" : "Higher Engineering Mathematics",
            "img_src" : "https://images-na.ssl-images-amazon.com/images/I/61AnHkiZtzL.jpg",
            "buy_link" : "#"
        },
    }
}

// variable which contains all the tutorial videos
TUTORIALS = {
    "Mathematics" : {
        "1" : {
            "link" : "https://www.youtube.com/playlist?list=PLs5_Rtf2P2r5Z9eX1nZ1BwjYCVBQjibN8",
            "img_src" : "https://i.ytimg.com/vi/0WCel-zgkns/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCPvdjGvzePQenK4T2vrmiyTNEd7w",
            "name" : "Engineering Mathematics"
        }
    }
}

// Adding books to the pages
for (let i = 0; i < 2; i++)
{
    book = BOOKS[`${SUBJECT_NAME}`][`${i+1}`];
    document.getElementById('book_section').innerHTML += books(book["img_src"], book["name"], book["buy_link"]);
}

// Addding tutorials to the page
for (let i = 0; i < 1; i++)
{
    playlist = TUTORIALS[`${SUBJECT_NAME}`][`${i+1}`];
    document.getElementById("playlist_section").innerHTML += books(playlist["img_src"], playlist["name"], playlist["link"])
}

// Function for returning making books card
function books(img_src, name, buy_link)
{
    let child = `<a href="${buy_link}" data-book="${name}" class="sub_book">
                    <img src="${img_src}" alt="${name}">
                    <h6 class="fw-bolder text-center">${name}</h6>
                </a>`;
    
    return child;
}

$('.sub_book').click(function(){
    sessionStorage.setItem("book", $(this).data("book"));
})