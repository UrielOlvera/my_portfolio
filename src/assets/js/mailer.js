document.addEventListener("DOMContentLoaded", () => {
    const formContact = document.getElementById("form-contact")

    formContact.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const email = document.getElementById("email").value;
        const name = document.getElementById("name").value;
        const message = document.getElementById("msg").value;

        const formData = {
          email,
          name,
          message,
        };
    
        handleMail(formData)
      });
})

const handleMail = (formData) => {
    // TODO
    console.log("data from handle func:", formData);
}

// TODO funcion para notificar si el correo se envio correctamente o fallo