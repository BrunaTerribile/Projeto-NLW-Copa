
function createGame(team1, time, team2){
  return `
  <li>
    <img src="./assets/icon-${team1}.svg" alt="Bandeira do ${team1}" />
    <strong>${time}</strong>
    <img src="./assets/icon-${team2}.svg" alt="Bandeira da ${team2}" />
  </li>
  `
}

function createCard(date, day, games){
  return `
  <div class="card">
    <h2> ${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="Logo da NLW" />
  </header>

  <main id="cards">
    ${createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia"))}
    ${createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland"))}
    ${createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))}
  </main>
`
