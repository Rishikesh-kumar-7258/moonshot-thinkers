// Variables used in the program

HEADING = [`Our Ambition`, `Our Goals`];
PARA = [`Our goal is <span class="fw-bolder">"Education Reach Everywhere"</span>. To help everyone to get
education and
apply it in the real
world to
solve the real world problems and do value addition things to society so that we can grow and
develop as a Species.
And our goal is also related with <span class="fw-bolder">17 Sustainable Development Goals of United
    Nation</span> so that
we can help and contribute
in Human growth and the betterment of us all.
We are here to provide materials of different colleges also.`,

    `We are here to provide you the best material.
Here you can find the materials of many subjects, assignments, practicals of many different
colleges.
So that you can enhance your knowledge and here you can learn many other things like <span class="fw-bolder">video
    editing and
    photo editing</span> which can help you in <span class="fw-bolder">side hustling</span>. And we
are providing the materials
for coding also for the future
preparations. Here you can go with the curriculum of top colleges so that you can prepare with
competitive exams.`
];

A_HEADING = [`Study Materials`, `Side Hustle`];
A_PARA = [
    `Get all syllabus and assignment here and rock ur exam`,
    `Explore yourself, Learn and then Earn`
];
HREF = ['./subjects/home.html', '#'];
DUMMY_TEXT = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ratione recusandae tempora tenetur quod
repellat nihil. Repudiandae, sunt? Doloribus, laborum?`

PROFILE = {
    "1": {
        "name": "Adarsh Saurav",
        "source": "static/images/profiles/i1.jpeg",
        "para": "Hi I'm <b>Adarsh Saurabh</b> from <b>MoonShot Thinkers</b>. I'm greatly indulged with learning and building things which can help me and the world.",
        "linkedin": "https://www.linkedin.com/in/adarsh-saurabh-b27492145/",
        "email": "mailto:adarshsaurabh1396@gmail.com"
    },
    "2": {
        "name": "Rishikesh Kumar",
        "source": "static/images/profiles/i2.jpeg",
        "para": "Hello,I am <b>Rishikesh Kumar</b>.A first year computer science student. Enthusiastic about development and Coding.Loves to solve real life problems.",
        "linkedin": "https://www.linkedin.com/in/rishikesh-kumar-b62b22201/",
        "email": "mailto:rishi7258prince@gmail.com"

    },
    "3": {
        "name": "Devi Priya",
        "source": "static/images/profiles/i3.jpg",
        "para": "How do you do, I'm<b> Devipriya</b>,a passionate web and graphic designer.I love design. I'm passionate about creating things.Beginner",
        "linkedin": "https://www.linkedin.com/in/devipriya-vaddepally-750347201/",
        "email": "mailto:devipriyavaddepally@gmail.com"

    },
    "4": {
        "name": "Kishan Kumar Seth",
        "source": "static/images/profiles/i4.jpeg",
        "para": " Hi, I am <b>Kishan Kumar Seth</b> from <b>MoonShot Thinkers</b>.I am very enthusiastic and hardworking person.Learning new things daily to improve myself and to solve the real world problems.",
        "linkedin": "https://www.linkedin.com/in/kishan-kumar-seth-abc",
        "email": "mailto:kkseth412@gmail.com"

    },
}

$(function () {

    console.log("This is working just fine");

    // Making the cards for the ambitions and gools
    for (let i = 0, card_number = HEADING.length; i < card_number; i++) {
        document.querySelectorAll('section')[0].innerHTML
            += Home_page_card(HEADING[i], PARA[i]);
    } 
    // Making cards for links 
    for (let i = 0, card_number = A_HEADING.length;
        i < card_number; i++) {
        document.querySelectorAll('section')[1].innerHTML += A_card(HREF[i], A_HEADING[i], A_PARA[i]);
    } 
    // Making profile cards 
    for (let i = 0; i < 4; i++) {
        document.querySelector('footer section').innerHTML += Profile_maker(PROFILE[`${i + 1}`]["source"], PROFILE[`${i + 1}`]["name"], PROFILE[`${i + 1}`]["para"],
            PROFILE[`${i + 1}`]["linkedin"], PROFILE[`${i + 1}`]["email"]);
    }
}) 

function Home_page_card(heading, para) {
    child = `<div class="col border shadow animate__animated animate__fadeInDown hvr-sweep-to-right hvr-round-corners">
    <h1 class="text-decoration-underline">${heading}</h1>
    <p>${para}</p>
    </div>`;

    return child;
}

function A_card(href, h2, para) {
    child = `<a href="${href}"
        class="col d-flex p-2 border border-primary shadow bg-info bg-gradient animate__animated animate__fadeInDown">
        <h2 class="fw-bolder">${h2}</h2>
        <p>${para}</p>
    </a>`;

    return child;
}

function Profile_maker(src, name, para, linkedin, email) {
    child = `<div class="col-sm-6 p-0">
                <div class="row text-center border">
                    <div class="col-sm-6 border">
                        <img src=${src} alt=${name} class="img-fluid">
                        <p>${name}</p>
                    </div>

                    <div class="col-sm-6 border">
                        <h4>About Me</h4>
                        <p>${para}</p>
                        <a href=${linkedin} class="btn btn-primary">LinkedIn</a>
                        <a href=${email} class="btn btn-primary">Email</a>
                    </div>
                </div>
            </div>`;
    return child;
}