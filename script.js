let votes = {};

function castVote(candidate) {
  if (votes.hasOwnProperty(candidate)) {
    votes[candidate]++;
    alert(`You voted for ${candidate}!`);
  } else {
    alert("Invalid candidate!");
  }
}

function updateResults() {
  const resultsDiv = document.getElementById("resultsOutput");
  resultsDiv.innerHTML = "";

  for (const [candidate, count] of Object.entries(votes)) {
    const resultLine = document.createElement("p");
    resultLine.textContent = `${candidate}: ${count} votes`;
    resultsDiv.appendChild(resultLine);
  }
}

function resetVotes() {
  for (let candidate in votes) {
    votes[candidate] = 0;
  }
  alert("Votes have been reset!");
}

function addCandidate(candidate) {
  if (!votes.hasOwnProperty(candidate)) {
    votes[candidate] = 0;
    resetVotes();
    alert(`${candidate} has been added and votes have been reset!`);
    updateCandidateButtons();
  } else {
    alert(`${candidate} already exists!`);
  }
}

function removeCandidate(candidate) {
  if (votes.hasOwnProperty(candidate)) {
    delete votes[candidate];
    resetVotes();
    alert(`${candidate} has been removed and votes have been reset!`);
    updateCandidateButtons();
  } else {
    alert(`${candidate} does not exist!`);
  }
}

function resetCandidates() {
  votes = {};
  alert("All candidates have been reset!");
  updateCandidateButtons();
  updateResults();
}

function findWinners() {
  let maxVotes = 0;
  let winners = [];

  for (const [candidate, count] of Object.entries(votes)) {
    if (count > maxVotes) {
      maxVotes = count;
      winners = [candidate];
    } else if (count === maxVotes) {
      winners.push(candidate);
   