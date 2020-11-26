const nodeoutlook = require("nodejs-nodemailer-outlook");

const send = (reply, incharge) => {
  nodeoutlook.sendEmail({
    auth: {
      user: "legal202020@outlook.com",
      pass: "chilelegal2020",
    },
    from: "legal202020@outlook.com",
    to: reply,
    subject: "Respuesta de Chile Legal!",
    html: `<p> Hemos recibido tu mensaje. Tu solicitud ha sido asignada a <b> ${incharge} </b>. </p>
    <p>Para tener una mayor información de nuestro equipo y áreas a las que prestan soporte, igresa al siguiente link:</p>
         <p><b><a href="https://www.accenture.com/cl-es">Chile legal-Santiago</a></b></p>
         <br><br><br>
         
         <img href="./img/logo-accenture.jpeg" alt="" />`,

    text: "This is text version!",
    replyTo: "",
    attachments: [],
    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i),
  });
};

const noChargeEmail = (reply) => {
  console.log("noChargeEmail");
  nodeoutlook.sendEmail({
    auth: {
      user: "legal202020@outlook.com",
      pass: "chilelegal2020",
    },
    from: "legal202020@outlook.com",
    to: reply,
    subject: "Respuesta de Chile Legal!",
    html: `<p>Hemos recibido tu solicitud y estamos asignando tu requerimiento. </p>
    <p>Para tener una mayor información de nuestro equipo y áreas a las que prestan soporte, igresa al siguiente link:</p>
         <p><b><a href="https://www.accenture.com/cl-es">Chile legal-Santiago</a></b></p>
         <br><br><br>
         
         <img href="./img/logo-accenture.jpeg" alt="" />`,
    text: "This is text version!",
    replyTo: "",
    attachments: [],
    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i),
  });
};

const sendEmailIncharge = (destination, subject, attachments, html, reply) => {
  nodeoutlook.sendEmail({
    auth: {
      user: "legal202020@outlook.com",
      pass: "chilelegal2020",
    },
    from: "legal202020@outlook.com",
    to: destination,
    subject: subject,
    html: html,
    attachments: attachments,
    replyTo: reply,
    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i),
  });
};

const sendEmailTwoIncharge = (
  destination,
  subject,
  attachments,
  html,
  reply,
  destination2
) => {
  console.log(destination2);
  nodeoutlook.sendEmail({
    auth: {
      user: "legal202020@outlook.com",
      pass: "chilelegal2020",
    },
    from: "legal202020@outlook.com",
    to: destination2 + ", " + destination,
    subject: subject,
    html: html,
    attachments: attachments,
    replyTo: reply,
    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i),
  });
};
module.exports = {
  send,
  sendEmailIncharge,
  noChargeEmail,
  sendEmailTwoIncharge,
};
