let isModalOpen = false

var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = '0'
}

function hideMenu(){
    navLinks.style.right = '-200px'
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        // else{
        //     entry.target.classList.remove('show')
        // }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }

  function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
  
    // emailjs
    //   .sendForm(
    //     "service_m6xikb3",
    //     "template_hrhbd0p",
    //     event.target,
    //     "ivoXo6g3vlqMugLVm"
    //   )
//       .then(() => {
//         loading.classList.remove("modal__overlay--visible");
//         success.classList += " modal__overlay--visible";
//       })
//       .catch(() => {
//         loading.classList.remove("modal__overlay--visible");
//         alert(
//           "The email service is temporaraly unavailable. Please contact me directly at dexxcode1996@gmail.com"
//         );
//       });
//   
}
  