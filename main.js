const form = document.getElementById('form-numero');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroBeneficiario = document.getElementById('numero-beneficiario');
    if(numeroBeneficiario.value <= 50) {
        alert("O número tem que ser maior que 50!");
    }  else {
        alert("Tudo certo")
    }
})

console.log(form);

