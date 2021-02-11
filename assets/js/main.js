let bruttoNetto = document.getElementById('brutto-netto').checked

let prozent7 = document.getElementById('prozent7')
let betrag = document.getElementById('betrag')
let zahl = document.getElementById('number')
let resultParagraph = document.getElementById('result-parg')
let mehrwertsteuer = document.getElementById('mwst-betrag')
let nettoBruttoBetrag = document.getElementById('brutto-netto-betrag')

function changeKlasse(){
  let nettoBrutto = document.getElementById('netto-brutto').checked
  let prozent19 = document.getElementById('prozent19').checked
  console.log(nettoBrutto);

  if (nettoBrutto){
    betrag.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro<span>*</span>"
    resultParagraph.innerHTML = "Bruttobetrag (Endpreis)"
    if(prozent19){
      mehrwertsteuerBetrag19 = zahl.value *19/100;
      mehrwertsteuer.innerHTML = mehrwertsteuerBetrag19
      nettoBruttoBetrag.innerHTML = zahl.value*1+ mehrwertsteuerBetrag19*1
    }
    else{
      mehrwertsteuerBetrag7 = zahl.value *7/100;
      mehrwertsteuer.innerHTML = mehrwertsteuerBetrag7
      nettoBruttoBetrag.innerHTML = zahl.value*1+ mehrwertsteuerBetrag7*1
    }
  } else{
    betrag.innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro"
    resultParagraph.innerHTML = "Nettobetrag"
    if(prozent19){
      mehrwertsteuer.innerHTML = zahl.value *19/100;
    }
    else{
      mehrwertsteuer.innerHTML = zahl.value *7/100;
    }
  }


}

