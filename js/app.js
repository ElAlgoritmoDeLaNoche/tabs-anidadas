const buttons = document.querySelectorAll("button");
const sections = document.querySelectorAll(".content");

/* A function that is being called on each button. */
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    const id = btn.id;
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    const req = document.getElementsByClassName(`content${id}`);
    req[0].classList.add("active");
  })
})

// SUB-MENU 1

const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')
const option5 = document.getElementById('option5')
const content1 = document.getElementById('content1')
const content2 = document.getElementById('content2')
const content3 = document.getElementById('content3')
const content4 = document.getElementById('content4')
const content5 = document.getElementById('content5')

let chose = 1

const changeOption = () => {
  if (chose == 1) {
    option1.classList.value = 'option option-active',
      content1.classList.value = 'content content-active'
  } else {
    option1.classList.value = 'option',
      content1.classList.value = 'content '
  }

  if (chose == 2) {
    option2.classList.value = 'option option-active',
      content2.classList.value = 'content content-active'
  } else {
    option2.classList.value = 'option',
      content2.classList.value = 'content'
  }

  if (chose == 3) {
    option3.classList.value = 'option option-active',
      content3.classList.value = 'content content-active'
  } else {
    option3.classList.value = 'option',
      content3.classList.value = 'content '
  }

  if (chose == 4) {
    option4.classList.value = 'option option-active',
      content4.classList.value = 'content content-active'
  } else {
    option4.classList.value = 'option',
      content4.classList.value = 'content '
  }

  if (chose == 5) {
    option5.classList.value = 'option option-active',
      content5.classList.value = 'content content-active'
  } else {
    option5.classList.value = 'option',
      content5.classList.value = 'content '
  }
}

option1.addEventListener('click', () => {
  chose = 1
  changeOption()
})

option2.addEventListener('click', () => {
  chose = 2
  changeOption()
})

option3.addEventListener('click', () => {
  chose = 3
  changeOption()
})

option4.addEventListener('click', () => {
  chose = 4
  changeOption()
})

option5.addEventListener('click', () => {
  chose = 5
  changeOption()
})