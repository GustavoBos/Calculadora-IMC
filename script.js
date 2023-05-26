document.getElementById("imcForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var weight = parseFloat(document.getElementById("peso").value);
    var height = parseFloat(document.getElementById("altura").value) / 100; // Converter altura para metros
  
    if (weight > 0 && height > 0) {
      var imc = weight / (height * height);
      var result = document.getElementById("result");
      result.innerHTML = "Seu IMC é: " + imc.toFixed(2);
  
      var message = "";
      if (imc < 18.5) {
        message = "Abaixo do peso ideal.";
      } else if (imc >= 18.5 && imc < 25) {
        message = "Peso ideal.";
      } else if (imc >= 25 && imc < 30) {
        message = "Sobrepeso.";
      } else {
        message = "Obesidade.";
      }
  
      result.innerHTML += "<br>" + message;
    } else {
      alert("Por favor, insira valores válidos para peso e altura.");
    }
  });
  