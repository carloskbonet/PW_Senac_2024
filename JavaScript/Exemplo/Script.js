var sendButton;
// Inputs
var inputName = document.getElementById("name");
var inputBirthDate = document.getElementById("birth");
// Output
var response = document.getElementById("response");

function SendMessage() {
    // Nome e Data de nascimento digitados pelo usuário
    let name = inputName.value;
    let birth = inputBirthDate.value;

    // Data atual / Data de nascimento do usuário
    let currentDate = new Date().getUTCFullYear();
    let birthDate = new Date(birth).getUTCFullYear();

    // Validação do nome
    if ( name.length < 3 ) {
        alert("Nome inválido. Mínimo de 3 letras.");
        return;
    }

    console.log(`${currentDate} / ${birthDate}`);

    // Validação da data
    let idade = currentDate - birthDate;

    if ( idade < 1 ) {
        alert("Data inválida.");
        return;
    }

    console.log(idade);

    // Validar se o usuário é Criança / Adolescente / Adulto / Idoso
    var lifeStage;

    // and = &&     or = ||
    if ( idade < 12 ) {
        lifeStage = "Criança";
    }

    if ( idade >= 12 && idade < 18 ) {
        lifeStage = "Adolescente";
    }

    if ( idade >= 18 && idade < 60 ) {
        lifeStage = "Adulto(a)";
    }

    if ( idade >= 60 ) {
        lifeStage = "Idoso(a)";
    }

    // Output
    response.textContent = `Olá, ${name}. O usuário é: ${lifeStage}`;
}