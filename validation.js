// var regExUser = /[a-z]{5,12}/gi;

// var regExUser2 = new RegExp(/[a-z]{5,12}/, 'ig');

const inputs = document.querySelectorAll('input');

const patterns = {
  telefone: /^\d{11}$/,
}

inputs.forEach(input => input.addEventListener('keyup', (e => {
  console.log(e.target.attributes.name.value);
})))