// var regExUser = /[a-z]{5,12}/gi;

// var regExUser2 = new RegExp(/[a-z]{5,12}/, 'ig');

const inputs = document.querySelectorAll('input');

const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
}

// validation funciton
function validate(field, regEx) {
  if(regEx.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}

inputs.forEach(input => input.addEventListener('keyup', (e => {
  validate(e.target, patterns[e.target.attributes.name.value]);
})))