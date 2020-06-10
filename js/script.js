
// Ended up opting for a different method, using just css

// // Slideshow function
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName('mySlides');
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1
//     }
//     slides[slideIndex - 1].style.display = 'block';
//     setTimeout(showSlides, 2000); // Change image every 2 seconds. Shown in MS can be changed.
// }

// QnA Function
var coll = document.getElementsByClassName("qaHead");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("qaActive");
        var qaContent = this.nextElementSibling;
        if (qaContent.style.maxHeight) {
            qaContent.style.maxHeight = null;
        } else {
            qaContent.style.maxHeight = qaContent.scrollHeight + "px";
        }
    });
}

// Modal function
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";

}

var modalSlideIndex = 1;
modalShowSlides(modalSlideIndex);

function modalPlusSlides(n) {
    modalShowSlides(modalSlideIndex += n);
}

function modalShowSlides(n) {
    var i;
    var modalSlides = document.getElementsByClassName("modalMySlides");
    if (n > modalSlides.length) {
        modalSlideIndex = 1
    }
    if (n < 1) {
        modalSlideIndex = modalSlides.length
    }
    for (i = 0; i < modalSlides.length; i++) {
        modalSlides[i].style.display = "none";
    }
    modalSlides[modalSlideIndex - 1].style.display = "block";
}