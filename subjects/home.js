HREF = "../sub_cont/home.html";

class Subject{

    constructor(name, img_src){
        this.name = name;
        this.img_src = img_src;
    }
} 

// Array to contain all the subjects
SUBJECTS = [];

// Making new subject using the subject class and pushing it to the subjects array
const maths = new Subject("Mathematics", "../static/images/subject_photos/mathematics-png.jpg");
SUBJECTS.push(maths);

const physics = new Subject("Physics", "../static/images/subject_photos/physics-doodles-lettering-education-vector-illustration-physics-doodles-lettering-135625483.jpg");
SUBJECTS.push(physics);

const bee = new Subject("BEEE", "../static/images/subject_photos/beee.jpg");
SUBJECTS.push(bee);

const info_tech = new Subject("Information Technology", "../static/images/subject_photos/it.jpg");
SUBJECTS.push(info_tech);

const eng_graphics = new Subject("Engineering Graphics", "../static/images/subject_photos/english1.png")
SUBJECTS.push(eng_graphics);

SUBJECTS.forEach(e => {
    console.log(e);
})

// Adding subject cards to the html page 
SUBJECTS.forEach(element => {
    document.querySelector('main').innerHTML += subject_card(element.img_src, element.name, HREF);
});

function subject_card(src, name, href) {
    let child = `<article class="row bg-success shadow p-3">
                    <div class="col">
                        <img src="${src}" alt="Image">
                    </div>
                    <div class="col text-center d-flex p-3">
                        <h2 class="fw-bolder" style="min-width:200px;">${name}</h2>
                        <a href="${href}" class="btn" role="button" data-sub="${name}">Explore</a>
                    </div>
                </article>`;
        
    return child;
}

$(function(){
    $('a.btn').click(function()
    {
        sessionStorage.setItem("subject", $(this).data('sub'));
    })
})