
const finish = {};

// Элементы формы, ввод число, выбор единиц измерения, поле с результатом
const input = document.querySelector('#input');
const inputSelect = document.querySelector('#inputSelect');

const result = document.querySelector('#result');
const select = document.querySelector('#select');

getCurrencies();

async function getCurrencies() {

	const response = await fetch('unit1.json');
	const data = await response.json();
	const finishElement = await data;
	

	
	finish.distance = finishElement.distance;
	
};

console.log(finish.distance)

input.oninput = converValue;
select.oninput = converValue;

// Функция конвертации
// Конвертация в сантиметры, и из сантиметров
function converValue() {
	result.value = ((parseFloat(input.value) * finish.distance[inputSelect.value].Unit.Centimeters.Value) / finish.distance[select.value].Unit.Centimeters.Value).toFixed(6);
	
	
};

