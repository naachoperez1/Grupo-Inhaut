const boxes = document.querySelectorAll('.tercer-div');

window.addEventListener('scroll', fadeInElements);

function fadeInElements() {
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight) {
      box.style.opacity = '1';
    } else {
      box.style.opacity = '0';
    }
  });
}

// Llama a la función una vez para asegurarse de que los elementos visibles se muestren al principio
fadeInElements();
