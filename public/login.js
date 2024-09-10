document.addEventListener('DOMContentLoaded', () => {

document.getElementById('login').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('user_name').value;
    const password = document.getElementById('password').value;
try{
    const response = await fetch('http://127.0.0.1:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if(response.ok){
    document.getElementById('msg_log').innerText = data.message;}
    else{
        document.getElementById('msg_log').innerText = data.message;
    }
}
catch(error
){           document.getElementById('msg_log').innerText = `Error: ${data.message}`         }
});
});

document.addEventListener('DOMContentLoaded', () => {

document.getElementById('sing_up').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('s_user_name').value;
    const password = document.getElementById('s_password').value;
try{
    const response = await fetch('http://127.0.0.1:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({ username, password })
        
    });
console.log(username)
console.log(password)
    const data = await response.json();

    if(!response.ok){
    document.getElementById('msg_sg').innerText = data.message;}
    else{
        document.getElementById('msg_sg').innerText = data.message;}
    }

catch(error){
    document.getElementById('msg_sg').innerText =  `Error: ${data.message}` 
}

});
});
