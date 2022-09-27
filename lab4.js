// method to get value by selector
const $ = selector => document.querySelector(selector);

// console.log(document.querySelector('#tall-number').innerHTML += 1);

document.addEventListener("DOMContentLoaded", () => {
	// TODO: addEventListener for these methods
	$('#my-directions').addEventListener('click', () => {
		let textElement = $('#how-to');
		if (textElement.innerHTML === "") {
			textElement.innerHTML = "Press + button to add cup <br> press - button to remove a cup";
		} else {
			textElement.innerHTML = "";
		}

	});

	/** 
	-doAddSTallCup DONE
	-doRemoveTallCup DONE
	-doAddGrandeCup DONE
	-doRemoveGrandeCup DONE
	-doAddVentiCup DONE
	-doRemoveVentiCup DONE
	-doClearAll DONE
	-doOrder
	*/
});

// AddTallCupFunction
function addTall() {
	document.querySelector('#tall-number').value++;
	console.log('tall added');
}

document.querySelector('#add-tall').addEventListener('click', addTall);

// RemoveTallCupFunction

function removeTall() {
	document.querySelector('#tall-number').value--;
	console.log('tall removed');
}

document.querySelector('#remove-tall').addEventListener('click', removeTall);

//AddGrandeFunction

function addGrande() {
	document.querySelector('#grande-number').value++;
	console.log('grande added');
}

document.querySelector('#add-grande').addEventListener('click', addGrande);

//RemoveGrandeFunction

function removeGrande() {
	document.querySelector('#grande-number').value--;
	console.log('grande removed');
}

document.querySelector('#remove-grande').addEventListener('click', removeGrande);

//AddVentiFunction

function addVenti() {
	document.querySelector('#venti-number').value++;
	console.log('venti added');
}

document.querySelector('#add-venti').addEventListener('click', addVenti);

//RemoveVentiFunction

function removeVenti() {
	document.querySelector('#venti-number').value--;
	console.log('venti removed');
}

document.querySelector('#remove-venti').addEventListener('click', removeVenti);

//Clear Button Function

function clearFields() {
	document.querySelector('#tall-number').value = 0;
	document.querySelector('#grande-number').value = 0;
	document.querySelector('#venti-number').value = 0;
	document.querySelector('#order-complete').innerHTML = "";
}
document.querySelector('#clear-button').addEventListener('click', clearFields);

function orderComplete() {
	clearFields();
	document.querySelector('#order-complete').innerHTML = "ORDER COMPLETE";
}
document.querySelector('#complete-order').addEventListener('click', orderComplete);

//Price Function
function Price () {
	let tallAmmount = document.querySelector('#tall-number').value*2.95; 
	console.log(tallAmmount);
	let grandeAmmount = document.querySelector('#grande-number').value*3.65;
	console.log(grandeAmmount);
	let ventiAmmount = document.querySelector('#venti-number').value*4.15;
	console.log(ventiAmmount);

	 subtotal = tallAmmount+grandeAmmount+ventiAmmount;

	 document.querySelector('#price').value = subtotal.toFixed(2);
}
document.querySelector('#add-tall').addEventListener('click', Price);
document.querySelector('#remove-tall').addEventListener('click', Price);
document.querySelector('#add-grande').addEventListener('click', Price);
document.querySelector('#remove-grande').addEventListener('click', Price);
document.querySelector('#add-venti').addEventListener('click', Price);
document.querySelector('#remove-venti').addEventListener('click', Price);
document.querySelector('#clear-button').addEventListener('click', Price);

//Total Amount Function
function GrandTotal () {
	subtotal = document.querySelector('#price').value;
	tax = 1.0938;
	total = subtotal*tax;
	document.querySelector('#total-amount').value = total.toFixed(2);


}
document.querySelector('#add-tall').addEventListener('click', GrandTotal);
document.querySelector('#remove-tall').addEventListener('click', GrandTotal);
document.querySelector('#add-grande').addEventListener('click', GrandTotal);
document.querySelector('#remove-grande').addEventListener('click', GrandTotal);
document.querySelector('#add-venti').addEventListener('click', GrandTotal);
document.querySelector('#remove-venti').addEventListener('click', GrandTotal);
document.querySelector('#clear-button').addEventListener('click', GrandTotal);

