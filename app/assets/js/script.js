const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const gender = getSelectedValue('gender');
    const age = getInputNumberValue('age');
    const weight = getInputNumberValue('weight');
    const height = getInputNumberValue('height');
    const activity_level = getSelectedValue('activity_level');


    const tmb = (
        gender === 'female'
            ? (
                Math.round(655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
            )
            : (
                Math.round(66 + (13.7 * weight) + (5 * height) - (6.8 * age))
            )
    );

    const maintenance = Math.round(tmb * Number(activity_level));

    const loseWeight = (maintenance - 450);
    const gainWeight = (maintenance + 450);

    const layout = `
    <h2>Aqui está o resultado:</h2>

    <div class="result-content">
      <ul>
        <li>
          Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
        </li>
        <li>
          Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
        </li>
        <li>
          Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
        </li>
      </ul>
    </div>
    `;

    const result = document.getElementById('result');

    result.innerHTML = layout;
};

function getSelectedValue(id) {
    //function to get the value of a select

    const select = document.getElementById(id);

    return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
    //function to get the value of a input and transform into a number

    return Number(document.getElementById(id).value);
}