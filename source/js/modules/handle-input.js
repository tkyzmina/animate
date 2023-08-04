const form = document.querySelector(".promo__form");
export const handleInput = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validate()) {
      form.reset();
    }
  });
};

const validate = () => {
  let isValid = true;
  const input = form.querySelector("input");
  input.classList.remove("input-field__input-error");

  if (input.value.trim().length < 4 || input.value.trim().length > 12) {
    input.classList.add("input-field__input-error");
    isValid = false;
  } else {
    let valudationResult = useRegex(input.value.trim());
    if (valudationResult) {
      input.classList.add("input-field__input-error");
      isValid = false;
    }
  }
  return isValid;
};

function useRegex(input) {
  let regex = /[!@#\$%\^&\*\(\)]/gm;
  return regex.test(input);
}
