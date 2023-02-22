ScrollReveal({ 
  reset: true ,
  distance:'60px',
  duration:1500,
  delay:400,
});
ScrollReveal().reveal('.servicer-content .col', { delay: 50, origin: 'bottom', interval:'200' });
ScrollReveal().reveal('.features-container .features', { delay: 50, origin: 'left', interval:'200' });
ScrollReveal().reveal('.landingRe1', { delay: 300, origin: 'top' });
ScrollReveal().reveal('.landingRe2', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.landingRe3', { delay: 100, origin: 'bottom' });
function changeAboutContent(aboutMenu) {
  let aboutUs_list = document.querySelectorAll('.aboutUs-listCol');
  let about_menu = document.querySelector(aboutMenu).attributes.id.value;
  let aboutUs_Content = document.querySelector('.aboutContent');
  for (let i= 0 ; i< aboutUs_list.length; i++ ) {
    aboutUs_list[i].classList.remove('active');
  }
  if (about_menu == 'process'){
    document.querySelector(aboutMenu).classList.add('active');
    aboutUs_Content.innerHTML= `
    <div class="aboutUs-process" id="proCont">
    <img src="../static/NEW QC/New folder/2196475.jpg" alt="">
    <div class="col">
      <span class="header">Process</span>
      <span>We use the latest tools to manage each task to achieve the best performance.</span>
      <h3>Benefits of process productivity tools for your business.</h3>
      <div class="features-container">
        <div class="features">
          <i class="fa-solid fa-check"></i>
          <span>Improve the quality of work</span>
        </div>
        <div class="features">
          <i class="fa-solid fa-check"></i>
          <span>Mobility and remote working</span>
        </div>
        <div class="features">
          <i class="fa-solid fa-check"></i>
          <span>Easy performance tracking</span>
        </div>
        <div class="features">
          <i class="fa-solid fa-check"></i>
          <span>Save your data in one place</span>
        </div>
        <div class="features">
          <i class="fa-solid fa-check"></i>
          <span>Security</span>
        </div>
        <div class="features">
          <i class="fa-solid fa-check"></i>
          <span>Time-efficient</span>
        </div>
      </div>
    </div>
  </div>
    `
    ScrollReveal().reveal('.features-container .features', { delay: 50, origin: 'left', interval:'200' });
  }else if(about_menu == 'delivery') {
    document.querySelector(aboutMenu).classList.remove('active');
    document.querySelector(aboutMenu).classList.add('active');
    aboutUs_Content.innerHTML= `
    <div class="aboutUs-delivery" id="delCont">
    <div class="col">
      <span class="header">Delivery</span>
      <span>We commit to deliver the projects & meet the deadline, but we keep quality in mind.</span>
      <div class="features-container">
        <div class="features">
          <i class="fa-solid fa-check"></i>
          <span>Deliver faster</span>
        </div>
        <div class="features">
          <i class="fa-solid fa-check"></i>
          <span>Manage drivers more easily</span>
        </div>
        <div class="features">
          <i class="fa-solid fa-check"></i>
          <span>Grow your business</span>
        </div>
        <div class="features">
          <i class="fa-solid fa-check"></i>
          <span>Reduce wasted time</span>
        </div>
        <div class="features">
          <i class="fa-solid fa-check"></i>
          <span>Manage peak periods</span>
        </div>
        <div class="features">
          <i class="fa-solid fa-check"></i>
          <span>Time-efficient</span>
        </div>
      </div>
    </div>
    <img src="../static/NEW QC/New folder/courier-service-g558c2850e_1920.png" alt="">
  </div>
    `
    ScrollReveal().reveal('.features-container .features', { delay: 50, origin: 'left', interval:'200' });
  }else if(about_menu == 'chooseUs') {
    document.querySelector(aboutMenu).classList.add('active');
    aboutUs_Content.innerHTML= `
    <div class="aboutUs-why"  id="chooseCont">
    <div class="col">
      <span class="header">WHY CHOOSE US</span>
      <span>We do our best to understand your needs, adding you on the process using the best.</span>
      <div class="features-container">
        <div class="features whyRe1">
          <i class="fa-solid fa-users-rays"></i>
          <span>Expert Engineers</span>
        </div>
        <div class="features whyRe1">
          <i class="fa-solid fa-hands-asl-interpreting"></i>
          <span>Quality</span>
        </div>
        <div class="features whyRe2">
          <i class="fa-solid fa-paintbrush"></i>
          <span>Great Design</span>
        </div>
        <div class="features whyRe2">
          <i class="fa-solid fa-person-dots-from-line"></i>
          <span>Quick Response</span>
        </div>
      </div>
    </div>
    <img src="../static/NEW QC/New folder/4105836_2171719(1).jpg" alt="">
  </div>
  `
    ScrollReveal().reveal('.whyRe1', { delay: 200, origin: 'left' });
    ScrollReveal().reveal('.whyRe2', { delay: 100, origin: 'right' });
  }else if(about_menu == 'team') {
    document.querySelector(aboutMenu).classList.add('active');
    aboutUs_Content.innerHTML= `
    <div class="aboutUs-ourTeam"  id="teamCont">
    <div class="col">
      <span class="header">Meet Our Team</span>
      <div class="features-container">
        <div class="features cart1">
          <img src="../static/NEW QC/Our team/IMG_20230208_060323.jpg" alt="">
          <span>Team leader</span>
          <span>Mahmoud Hossam</span>
          <span>Senior Oracle Developer </span>
          <div class="links-container">
            <a href="">
              <i class="fa-brands fa-linkedin" ></i>
            </a>
            <a href="">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <div class="features cart1">
          <img src="../static/NEW QC/Our team/IMG_20230208_040856.jpg" alt="">
          <span>Mosaab A.raof</span>
          <span>Web Designer </span>
          <div class="links-container">
            <a href="">
              <i class="fa-brands fa-linkedin" ></i>
            </a>
            <a href="">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="">
              <i class="fa-solid fa-globe"></i>
            </a>
          </div>
        </div>
        <div class="features cart1">
          <img src="../static/NEW QC/Our team/IMG_20230208_052100.jpg" alt="">
          <span>Mostafa Elsonbaty</span>
          <span>Front-end Web Developer </span>
          <div class="links-container">
            <a href="">
              <i class="fa-brands fa-linkedin" ></i>
            </a>
            <a href="">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="">
              <i class="fa-solid fa-globe"></i>
            </a>
          </div>
        </div>
        <div class="features cart1">
          <img src="../static/NEW QC/Our team/IMG_20230208_040505.jpg" alt="">
          <span>Ahmad Hossam</span>
          <span>Back-end Web Developer </span>
          <div class="links-container">
            <a href="">
              <i class="fa-brands fa-linkedin" ></i>
            </a>
            <a href="">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="">
              <i class="fa-solid fa-globe"></i>
            </a>
          </div>
        </div>
        <div class="features cart1">
          <img src="../static/NEW Qc/Our team/IMG_20230208_040839.jpg" alt="">
          <span>Mahmoud Elsonbaty</span>
          <span>Back-end Web Developer </span>
          <div class="links-container">
            <a href="">
              <i class="fa-brands fa-linkedin" ></i>
            </a>
            <a href="">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="">
              <i class="fa-solid fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
    ScrollReveal().reveal('.features-container .features', { delay: 50, origin: 'left', interval:'200' });
  }
}

// scroll active class

var sections = document.querySelectorAll('section');
onscroll= function (){
  var scrollPosition = document.documentElement.scrollTop;
  sections.forEach( section => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight*0.5 
      && scrollPosition < section.offsetTop + section.offsetHeight- section.offsetHeight*0.25 )
      {
        var currentId = section.attributes.id.value;
        removeAllActiveClasses();
        addActiveClass(currentId);
      }
    
  })
}
var removeAllActiveClasses = function () {
  document.querySelectorAll('.header_link').forEach( el => {
    el.classList.remove('active');
  })
}
var addActiveClass = function(id) {
  var selector = `.header_link[href="#${id}"]`;
  document.querySelector(selector).classList.add('active');
}

// end scroll active class 

// swiper js

let bodyWidth = document.body.clientWidth;
console.log (bodyWidth)
if (bodyWidth<1200) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}else {
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}


// end swiper js 
