$(document).ready((e) => {
    $("#loginBtn").on('click', (e) => {
        e.preventDefault();

        let tempEmail = $('#lemail').val();
        let tempPassword = $('#lpass').val();

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: tempEmail,
                password: tempPassword
            }),
        })
        .then((res) => res.json())
        .then(data => console.log(data))
        .catch(() => {
            console.log('Erro');
        });
    });
})

$(document).ready((e) => {
    $("#registarBtn").on('click', (e) => {
        e.preventDefault();

        let tempEmail = $('#remail').val();
        let tempPassword = $('#rpass').val();
        let tempUsername = $('#username').val();

        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: tempEmail,
                password: tempPassword,
                username: tempUsername
            }),
        })
        .then((res) => res.json())
        .then(data => console.log(data))
        .catch(() => {
            console.log('Erro');
        });
    });
})