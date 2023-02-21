const bar=document.getElementById('bar');
const btn=document.getElementById('btn');
const nav=document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
    if (btn){
        btn.addEventListener('click',()=>{
            nav.classList.remove('active')
        })
}
function sendEmail()
    Email.send({
        Host : "smtp.gmail.com",
        Username : "rainstar254@gmail.com",
        Password : "issac2023",
        To : 'nterep4@mail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "name:" + document.getElementById("name").value
        +"br Email:" + document.getElementById("email").value 
        +"br subject:" + document.getElementById("subject").value
        +"br massage:" + document.getElementById("massage").value
    }).then(
      message => alert("Thank you for your message")
    );
    