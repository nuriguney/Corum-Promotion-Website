const loginForm = document.getElementById("loginform");
const loginButton = document.getElementById("loginbuton");
function delay (time) {return new Promise (resolve => setTimeout(resolve,time))}

loginButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.pwd.value;

    if (username === "ead" && password === "ead1") {
        alert("Giriş Başarılı");
        await delay (1000);
        window.location="./index.html";
    } else {
        alert("Giriş Başarısız");
        await delay (1000);
        window.location="./login.html";
    }
})
