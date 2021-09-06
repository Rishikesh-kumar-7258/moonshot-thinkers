
class Book{
    constructor(name, img_src, buy_link)
    {
        this.name = name;
        this.img_src = img_src;
        this.buy_link = buy_link;
    }
};

BOOKS_LIST = [];


function books(img_src, name, buy_link)
{
    let child = `<a href="${buy_link}" data-book="${name}" class="sub_book">
                    <img src="${img_src}" alt="${name}">
                    <h6 class="fw-bolder text-center">${name}</h6>
                </a>`;
    
    return child;
}