// var regExUser = /[a-z]{5,12}/gi;

// var regExUser2 = new RegExp(/[a-z]{5,12}/, 'ig');

const inputs = document.querySelectorAll('input');

const patterns = {
  telephone: /^\d{11}$/,
}

// validation funciton
function validate(field, regEx) {
  console.log(regEx.test(field.value), field);
}

inputs.forEach(input => input.addEventListener('keyup', (e => {
  // console.log(e.target.attributes.name.value);
  validate(e.target, patterns[e.target.attributes.name.value]);
})))