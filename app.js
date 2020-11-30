const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    // formに入力してenter押しても何も起こらない
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // インプットの値を取得
    // trim()→削除したい対象文字列の前後の空白を削除する
    // スペースや改行など
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === "") {
        // エラーを表示
        // エラークラスを追加
        setErrorFor(username, "ユーザー名が空白です");
    } else {
        // サクセスクラスを追加
        setSuccesFor(username);
    }

    if(emailValue === "") {
        setErrorFor(email,"メールアドレスが空白です")
    } 
    
    // else ifを追加
    else {
        setSuccesFor(email);
    }

    if(passwordValue === "") {
        setErrorFor(password,"パスワードが空白です")
    } else {
        setSuccesFor(password);
    }

    if(password2Value === "") {
        setErrorFor(password2,"パスワードが空白です")
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2,"パスワードが一致しません")
    }else {
        setSuccesFor(password2);
    }
}

function setErrorFor(input,message) {
    // ここでなぜinput.parentElemntにしてるのか謎
    const formControl = input.parentElement; //inputの親要素.form-controlのこと
    const small = formControl.querySelector("small");

    // smallにエラーメッセージを表示
    small.innerText = message;

    // エラークラスを追加
    formControl.className = "form-control error";
}

function setSuccesFor(input,message) {
    const formControl = input.parentElement; //inputの親要素.form-controlのこと
    formControl.className = "form-control succes";
}

function isEmail(email) {
    return 
}