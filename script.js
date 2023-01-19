AOS.init();
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Box1 for Semester 1
let box1 = document.getElementById("box1");
function openBox1() {
    box1.classList.add("open-box1");
}
function closeBox1() {
    box1.classList.remove("open-box1");
}

//Box2 for Semester 2
let box2 = document.getElementById("box2");
function openBox2() {
    box2.classList.add("open-box2");
}
function closeBox2() {
    box2.classList.remove("open-box2");
}

//Box3 for Semester 3
let box3 = document.getElementById("box3");
function openBox3() {
    box3.classList.add("open-box3");
}
function closeBox3() {
    box3.classList.remove("open-box3");
}

//Box 4 for CSE semester 4
let box4 = document.getElementById("box4");
function openBox4() {
    box4.classList.add("open-box4");
}
function closeBox4() {
    box4.classList.remove("open-box4");
}

//Box 5 for CSE semester 5
let box5 = document.getElementById("box5");
function openBox5() {
    box5.classList.add("open-box5");
}
function closeBox5() {
    box5.classList.remove("open-box5");
}

let box6 = document.getElementById("box6");
function openBox6() {
    box6.classList.add("open-box6");
}
function closeBox6() {
    box6.classList.remove("open-box6");
}

$("#inline-popups").magnificPopup({
    delegate: "a",
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr("data-effect");
        },
    },
    midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
