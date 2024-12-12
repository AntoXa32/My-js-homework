const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
};

form.addEventListener("submit", onFormSubmit);
