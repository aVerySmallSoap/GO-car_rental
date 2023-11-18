document.querySelector("#form-login").addEventListener("submit", e => {
    e.preventDefault();
    let values = [];
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "./operations/LoginAuthentication.php", true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf8");
    document.querySelectorAll("[id*=form-]>.form-row>input:not([type=radio])").forEach(elem => {
        values.push(elem.value);
    });
    document.querySelectorAll("[id*=form-]>.form-row>input[type=radio]").forEach(elem => {
        if(elem.checked){
            values.push(elem.value);
        }
    });
    xhr.send(JSON.stringify(values));
})