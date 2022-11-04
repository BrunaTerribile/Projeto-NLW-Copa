function createGame(team1, time, team2){
  return `
  <li>
    <img src="./assets/icon=${team1}.svg" alt="Bandeira do ${team1}" />
    <strong>${time}</strong>
    <img src="./assets/icon=${team2}.svg" alt="Bandeira da ${team2}" />
  </li>
  `
}

let delay = -0.3
function createCard(date, day, games){
  delay += 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2> ${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("united states", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "7:00", "saudi arabia") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("morocco", "7:00", "croatia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa rica") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "7:00", "cameroon") +
      createGame("uruguay", "10:00", "south korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("wales", "7:00", "iran") +
      createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "ecuador") +
      createGame("england", "16:00", "united states")
  ) +
  createCard(
    "26/12",
    "sábado",
    createGame("tunisia", "7:00", "australia") +
      createGame("poland", "10:00", "saudi arabia") +
      createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "7:00", "costa rica") +
      createGame("belgium", "10:00", "morocco") +
      createGame("croatia", "13:00", "canada") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "7:00", "serbia") +
      createGame("south korea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("ecuador", "7:00", "senegal") +
      createGame("netherlands", "10:00", "qatar") +
      createGame("iran", "13:00", "united states") +
      createGame("wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "7:00", "france") +
      createGame("australia", "10:00", "denmark") +
      createGame("poland", "13:00", "argentina") +
      createGame("saudi arabia", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "7:00", "belgium") +
      createGame("canada", "10:00", "morocco") +
      createGame("japan", "13:00", "spain") +
      createGame("costa rica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("south korea", "7:00", "portugal") +
      createGame("ghana", "10:00", "uruguay") +
      createGame("serbia", "13:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  )
