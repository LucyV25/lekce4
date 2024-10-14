/*const jmeno = "      Lucie    "
const heslo = "wefewefewfw"
const rodneCislo = "552211/0052"
const telCislo = "111555222"
console.log(jmeno)
console.log(jmeno.trim())
console.log(heslo.length)
const castHesla= heslo.slice(0,4)
console.log(castHesla)
console.log(heslo.indexOf("wf"))
console.log(rodneCislo.slice(rodneCislo.indexOf("/")+1, rodneCislo.indexOf("/") + 5))
console.log(jmeno.toLowerCase())
console.log(jmeno.toUpperCase())
console.log(telCislo.padStart(13, "+420"))



const zprava = `
<h1>Ahoj svete</h1>
<p>Tve dnesni stastne cislo je ${Math.floor(Math.random() * 1000)}</p>

<p>Tvoje mys je prave na souradnicich ${100 * 100}</p>
`


document.body.innerHTML = zprava

/*

const title = "Harry Potter a Ohnivý pohár"
document.body.innerHTML += "<h1>Vlastnosti a metody</h1>"
document.body.innerHTML += "<p>Počet znaků: " + title.length +"</p>"
document.body.innerHTML += "<p>" + title.toUpperCase() +"</p>"
document.body.innerHTML += "<p>" + title.slice(0,5) +"</p>"
document.body.innerHTML += "<p>Posledních pět písmen: " + title.slice(-5) + "</p>";

document.body.innerHTML += "<h1>E-maily</h1>"
const emailZadan = prompt("Zadej email")
const email = {
    emailPrompt: emailZadan,
       
}
const atIndex = email.emailPrompt.indexOf("@")
const prvniCastEmailu= email.emailPrompt.slice(0, atIndex)
const druhaCastEmailu= email.emailPrompt.slice(atIndex+1)
console.log(prvniCastEmailu)
console.log(druhaCastEmailu)
const parsedEmail = {
    userName: prvniCastEmailu,
    domain: druhaCastEmailu,
};
console.log(parsedEmail)

document.body.innerHTML += "<p>Uživatelské jméno: " + parsedEmail.userName + "</p>"
document.body.innerHTML += "<p>Doména: " + parsedEmail.domain + "</p>"

const vek = 18

// < <= > >= === !== 
if(vek >= 18) {
  document.body.innerHTML = "<h1>Vitej na strance s nejlepsim alkoholem v CR</h1>"

  const kategorie = prompt("Jakou kategorii alkoholu si prejes? (pivo, vino, tvrde)")

  if(kategorie.toLowerCase() === "pivo") {
    document.body.innerHTML += "<p>Mame nejlepsi piva, treba StaroBrno </p>"
  } else if(kategorie.toLowerCase() === "vino") {
    document.body.innerHTML += "<p>Mame nejlepsi cervena, bila a mozna i jinak barevna vina</p>"
  } else if(kategorie.toLowerCase() === "tvrde") {
    document.body.innerHTML += "<p>Mame nejlepsi Becherovku, odebira od nas i Zeman</p>"
  } else {
    document.body.innerHTML += "<p>Error 404: alkohol not found</p>"
  }
} else {
  document.body.innerHTML = "<h1>Na tuto stranku nemuzes vstoupit</h1>"
}


const vek = 18
const pravda = true
const nepravda = false

const pizzerie = {
  pizza1: "Hawaii",
  pizza1Roznaska: true,
}

if(pizzerie.pizza1Roznaska) {
  document.body.innerHTML = "<p>Ano, tuto pizzu rozvazime</p>"
}

if(pravda === true) {
  console.log("Proslo to")
}

if(pravda) {
  console.log("Proslo to")
}
*/
/*
document.body.innerHTML += "<h1>Doručování</h1>"
const ulice = prompt("Zadej ulici")
const cisloDomu = prompt("Zadej číslo domu")
const mesto = prompt("Zadej město")
const psc = prompt("Zadej PSČ")
const adresa = {
    ulice:ulice,
    cisloDomu:cisloDomu,
    mesto:mesto,
    psc:psc
}
document.body.innerHTML += `<address>
  <p>${adresa.ulice} ${adresa.cisloDomu}</p>
  <p>${adresa.psc} ${adresa.mesto}</p>
</address>`
*/
/*
document.body.innerHTML += "<h1>Registrace na očkování</h1>"
const jmeno = prompt("Zadej krestni jmeno")
const prijmeni = prompt("Zadej prijmeni")
const vek = Number(prompt("Zadej věk"))
const heslo= prompt("Zadej heslo")
const person = {
    jmeno: jmeno + " " + prijmeni,
    vek: vek,
    heslo:heslo,
    
}
document.body.innerHTML += "<p>Jmeno: " + person.jmeno +"</p>"
document.body.innerHTML += "<p>Prijmeni: " + person.vek +"</p>"
if (vek>=65) {
    document.body.innerHTML += "<h1>věk v pořádku</h1>"
    if (person.heslo.length<8) {
        document.body.innerHTML += "<h1>slabé heslo</h1>"
        }
    }
else {
    document.body.innerHTML += "<h1>nízký věk</h1>"
}

*/
document.body.innerHTML += "<h1>Cena vstupenky</h1>"
const vek = Number(prompt("Zadej věk"))
const plnaCena = 12
let cena = 0
if (vek<6) {
    cena = 0
}
else if(vek >=6 && vek <=26){
    cena = plnaCena*0.65
}
else if(vek >=27 && vek <=64){
    cena = plnaCena
}
else{
    cena=plnaCena*0.5
}
cena = Math.round(cena)
document.body.innerHTML += `<p>Cena vstupenky: ${cena} €</p>`