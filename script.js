const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    /* Previne o comportamento padrão do evento submit do JS, ou seja,
    impede o recarregamento da página */
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        let description = '';

        value.classList.add('attention');
        
        document.getElementById('infos').classList.remove('hidden');
    
        if (bmi < 18.5){
            description = 'Mano!! vc esta abaixo do peso, o mundo da voltas! ';
        } 

        else if (bmi >= 18.5 && bmi <= 25) {
            description = "Ai é sucesso! peso ideal mano.";
            value.classList.remove('attention');
            value.classList.add('normal');
        }

        else if (bmi > 25 && bmi <= 30) {
            description = "Um pouquinho acima do peso, vamo buscar o ideal?";
        }

        else if (bmi > 30 && bmi <= 35) {
            description = "Aqui é obesidade ainda, mas vamos buscar o peso ideal";
        }

        else if (bmi > 35 && bmi <= 40) {
            description = "Bem acima do peso ainda, mas estamos progredindo!";
        }

        else {
            description = "Obesidade morbida, mas daqui pra frente é so progresso mano!";
        }

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;
    }
});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});
