const timeStamp = document.getElementById("time");

function updateTime() {
  if (!timeStamp) return;
  timeStamp.textContent = `${Date.now()} ms`;
}

updateTime();
setInterval(updateTime, 1000);

const hamburger = document.querySelector(".hamburger");
const sideBar = document.querySelector(".sidebar");
const iconClose = document.querySelector(".close");
const logo = document.querySelector(".inspo-mobile");

hamburger.addEventListener("click", () => {
  sideBar.style.display = "flex";
  logo.style.display = "none";
  hamburger.style.display = "none";
  iconClose.style.display = "flex";
});

iconClose.addEventListener("click", () => {
  sideBar.style.display = "none";
  logo.style.display = "flex";
  hamburger.style.display = "flex";
  iconClose.style.display = "none";
});

//form validation start

const btnSubmit = document.querySelector(".btn");
if (btnSubmit) {
  const successMessage = document.querySelector(".success");
  const inputs = document.querySelectorAll("input[type=text], input[type=email]");
  const textArea = document.querySelector("textarea");
  const errorMessage = document.querySelectorAll(".error-message");

  const validInputs = () => {
    let allValid = true;

    inputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        errorMessage[index].style.display = "none";
        input.style.borderBottom = "1px solid Green";
      });

      if (input.value.trim() === "") {
        errorMessage[index].style.display = "flex";
        input.style.borderBottom = "1px solid Red";
        allValid = false;

        setTimeout(() => {
          errorMessage[index].style.display = "none";
        }, 3000);
      } else {
        errorMessage[index].style.display = "none";
      }
    });

    const emailInput = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
      showError("Please enter a valid email");
      }

    const textAreaError = errorMessage[errorMessage.length - 1];
    if (textArea.value.trim().length < 10) {
      textAreaError.style.display = "flex";
      textArea.style.borderBottom = "1px solid Red";
      allValid = false;

      setTimeout(() => {
        textAreaError.style.display = "none";
      }, 3000);
    } else {
      textAreaError.style.display = "none";
      textArea.style.borderBottom = "1px solid Green";
    }

    if (allValid) {
      successMessage.style.display = "flex";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);

      textArea.value = "";
      inputs.forEach((input) => (input.value = ""));
    }
  };

  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    validInputs();
  });
}

//form validation end

// About page start
const slides = document.querySelectorAll(".about-section");
const previous = document.querySelector(".arrow-left");
const next = document.querySelector(".arrow-right");

if (slides.length && previous && next) {
  let currentIndex = 0;

  const nextSlide = (index) => {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
    currentIndex = index;
  };

  previous.addEventListener("click", () => {
    if (currentIndex <= 0) nextSlide(slides.length - 1);
    else nextSlide(currentIndex - 1);
  });

  next.addEventListener("click", () => {
    if (currentIndex >= slides.length - 1) nextSlide(0);
    else nextSlide(currentIndex + 1);
  });
}

// About page end

