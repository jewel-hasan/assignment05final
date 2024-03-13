function buttonClickedA1(){clickSeat('a1'); }
function buttonClickedA2(){clickSeat('a2');}
function buttonClickedA3(){clickSeat('a3');}
function buttonClickedA4(){clickSeat('a4');}

const basicPrice = 550;

function clickSeat(seat){
   const ticketClicked = document.getElementById(seat);
    ticketClicked.classList.toggle('bg-green-600');

const seatTable = document.getElementById('seat-table');
const tbodyEl = document.getElementById('seat-table-body');

const seatName = document.getElementById(seat).innerText;
const classType = 'ECONOMY';
const priceTaka = 550;

const addRow = `
                <tr>
                <td>${seatName}</td>
                <td>${classType}</td>
                <td>${priceTaka}</td>
                </tr>
                `

tbodyEl.innerHTML += addRow;

document.getElementById('total-price').innerText = basicPrice;
const discountPrice = 0;
const grandTotal = basicPrice - discountPrice;
document.getElementById('grand-price').innerText = grandTotal;
}

const nameEl = document.getElementById('name');


const buttonEl = document.getElementById('next-button');

if (nameEl.value === 0){
    const addClass = 'bg-green';
    buttonEl.classList.add(addClass);
}
else{
    const addClass2 = 'bg-white';
    buttonEl.classList.add(addClass2);
}
