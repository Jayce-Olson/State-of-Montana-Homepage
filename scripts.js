const contact = (e) => {
  let email1 = document.getElementById("email").value;
  let email2 = document.getElementById("confirm-email").value;
  //  return if required fields not filled. I do not require a question.
  if (document.getElementById("first-name").value == "") return;
  if (document.getElementById("last-name").value == "") return;
  if (email1 == "") return;

  if (email1 === email2) {
    alert("Youre messesage has been sent. Thank you for visiting Montana.com!");
    location.reload();
    return;
  }
  alert("Emails do not match. The message was not sent.");
};
