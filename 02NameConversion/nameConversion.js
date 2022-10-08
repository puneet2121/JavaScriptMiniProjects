document.addEventListener("click",input)

//Snake case
const snakeCase = string => {
  return string.replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('_');
};
//Camal case
const camalize = function camalize(str) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

//parsal case

function toPascalCase(string) {
  return `${string}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}

const kebabCaseS = (string) => {
  const kebabCase = string => string
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, '-')
      .toLowerCase();

  const newText = kebabCase(string);
  return newText
};

const kebabCase = string => string
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase();



//function execution
function input() {
  let inputName = document.getElementById('text').value
  document.getElementById('camel-case').innerText = camalize(inputName);  
  document.getElementById('snake-case').innerText = snakeCase(inputName);
  document.getElementById('kebab-case').innerText = toPascalCase(inputName);
  document.getElementById('kebab-case').innerText = kebabCase(inputName);
  document.getElementById('screaming-kebab-case').innerText = kebabCaseS(inputName);
}




