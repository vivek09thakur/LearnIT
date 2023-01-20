
AOS.init();
window.addEventListener("scroll",function(){
    const header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


let pick=document.getElementById("box1");
function openBox1(){
    pick.classList.add("open-box1");
}
function closeBox1(){
    pick.classList.remove("open-box1");
}



let fundamental=document.getElementById("box2");
function openBox2(){
    fundamental.classList.add("open-box2");
}
function closeBox2(){
    fundamental.classList.remove("open-box2");
}



let version=document.getElementById("box3");
function openBox3(){
    version.classList.add("open-box3");
}
function closeBox3(){
    version.classList.remove("open-box3");
}



let build=document.getElementById("box4");
function openBox4(){
    build.classList.add("open-box4");
}
function closeBox4(){
    build.classList.remove("open-box4");
}



let repo=document.getElementById("box5");
function openBox5(){
    repo.classList.add("open-box5");
}
function closeBox5(){
    repo.classList.remove("open-box5");
}

let pro1=document.getElementById("box6");
function openBox6(){
    pro1.classList.add("open-box6");
}
function closeBox6(){
    pro1.classList.remove("open-box6");
}

let pro2=document.getElementById("pro2");
function openPro2(){
    pro2.classList.add("open-pro2");
}
function closePro2(){
    pro2.classList.remove("open-pro2");
}

let pro3=document.getElementById("pro3");
function openPro3(){
    pro3.classList.add("open-pro3");
}
function closePro3(){
    pro3.classList.remove("open-pro3");
}

let pro4=document.getElementById("pro4");
function openPro4(){
    pro4.classList.add("open-pro4");
}
function closePro4(){
    pro4.classList.remove("open-pro4");
}

let pro5=document.getElementById("pro5");
function openPro5(){
    pro5.classList.add("open-pro5");
}
function closePro5(){
    pro5.classList.remove("open-pro5");
}


$("#inline-popups").magnificPopup({
delegate: "a",
removalDelay: 500, //delay removal by X to allow out-animation
callbacks: {
beforeOpen: function () {
    this.st.mainClass = this.st.el.attr("data-effect");
}
},
midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
