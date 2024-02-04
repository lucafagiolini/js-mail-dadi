
const emailList = ["francorossi@gmail.com", "mariablu@gmail.com", "alessiagiallo@gmail.com"];
console.log(emailList);

// 
document.querySelector("#submit-btn").addEventListener("click", userClearance);
function userClearance() {

    // raccolgo l'email inserita dall'utente
    let userEmail = document.querySelector("#email-input").value;
    console.log("user-email " + userEmail);

    // pusho l'email inserita dall'utente nella lista emailList
    emailList.push(userEmail);
    console.log(emailList);

    // lista email autorizzate

    // controllo se l'email inserita dall'utente è presente nella lista emailList
    for (let i = 0; i < emailList.length; i++) {
        if (userEmail === emailList[i]) {
            console.log("email autorizzata");
            // document.querySelector("#email-input").value = "";
            // document.querySelector("#email-input").style.border = "1px solid green";
            // document.querySelector("#email-input").style.color = "green";
            // document.querySelector("#email-input").placeholder = "email autorizzata";
            document.querySelector("#result-box").classList.remove("d-none")
            document.querySelector("#form").classList.add("d-none")
            return;

        }
    }
}



