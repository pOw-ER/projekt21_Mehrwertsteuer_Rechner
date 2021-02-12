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
      mehrwertsteuerBetrag19 = zahl.value*19/100;
      mehrwertsteuer.innerHTML = mehrwertsteuerBetrag19.toFixed(2)
      summe19 = zahl.value*1+ mehrwertsteuerBetrag19*1
      nettoBruttoBetrag.innerHTML = summe19.toFixed(2)
    }
    else{
      mehrwertsteuerBetrag7 = zahl.value *7/100;
      mehrwertsteuer.innerHTML = mehrwertsteuerBetrag7.toFixed(2)
      summe7 = zahl.value*1+ mehrwertsteuerBetrag7*1
      nettoBruttoBetrag.innerHTML = summe7.toFixed(2)
    }
  } else{
    betrag.innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro"
    resultParagraph.innerHTML = "Nettobetrag"
    if(prozent19){
      nettoBetrag19 = zahl.value/1.19
      nettoBruttoBetrag.innerHTML = nettoBetrag19.toFixed(2)
      mehrwertsteuerBetrag19_2 = zahl.value-nettoBetrag19
      mehrwertsteuer.innerHTML = mehrwertsteuerBetrag19_2.toFixed(2)
    }
    else{
      nettoBetrag7 = zahl.value/1.07
      nettoBruttoBetrag.innerHTML = nettoBetrag7.toFixed(2)
      mehrwertsteuerBetrag7_2 = zahl.value-nettoBetrag7
      mehrwertsteuer.innerHTML = mehrwertsteuerBetrag7_2.toFixed(2)
    }
  }


}

