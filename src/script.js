const copyBtn = document.querySelector(`#copyToClipBoard`);

function copyFunction() {
  navigator.clipboard.writeText(`anastasiiatrubachova1@gmail.com`);
  alert("Email copied!");
}
copyBtn.addEventListener(`click`, copyFunction);

const sendBtn = document.querySelector(`#btn-send`);

function sendFunction(event) {
  event.preventDefault();
  const name = document.querySelector(`#name`).value;
  const email = document.querySelector(`#email`).value;
  const subject = document.querySelector(`#subject`).value;
  const message = document.querySelector(`#message`).value;
  const body =
    `name: ` + name + `<br/> email:` + email + `<br/> message: ` + message;
  Email.send({
    SecureToken: "2c9b081e-8e5b-4029-b2cb-c006776d7a4a",
    To: "anastasiiatrubachova1@gmail.com",
    From: "anastasiiatrubachova1@gmail.com",
    Subject: subject,
    Body: body,
  }).then((message) => alert("Message sent succesfully!"));
}

sendBtn.addEventListener(`click`, sendFunction);
