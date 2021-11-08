var teamElement = document.getElementById("teamName");
var teamWrapper = document.getElementById("wrapper");

class Team {
    constructor(name, primaryColor, secondaryColor){
        this.name = name;
        this.primaryColor = primaryColor;
        this.secondaryColor = secondaryColor;
    }
}

let cardinals = new Team("Arizona Cardinals", "#97233F", "black");
let falcons = new Team("Atlanta Falcons", "#A71930", "black");
let ravens = new Team("Baltimore Ravens", "#241773", "black");
let bills = new Team("Buffalo Bills", "#00338D", "#C60C30");
let panthers = new Team("Carolina Panthers", "#0085CA", "black");
let bears = new Team("Chicago Bears", "#0B162A", "#C83803");
let bengals = new Team("Cincinnati Bengals", "#FB4F14", "black");
let browns = new Team("Cleveland Browns", "#311D00", "#FF3C00");
let cowboys = new Team("Dallas Cowboys", "#003594", "#041E42");
let broncos = new Team("Denver Broncos", "#FB4F14", "#002244");
let lions = new Team("Detroit Lions", "#0076B6", "#B0B7BC");
let packers = new Team("Green Bay Packers", "#203731", "#FFB612");
let texans = new Team("Houston Texans", "#03202F", "#A71930");
let colts = new Team("Indianapolis Colts", "#002C5F", "#A2AAAD");
let jaguars = new Team("Jacksonville Jaguars", "#006778", "#D7A22A");
let chiefs = new Team("Kansas City Chiefs", "#E31837", "#FFB81C");
let raiders = new Team("Las Vegas Raiders", "black", "#A5ACAF");
let chargers = new Team("Los Angeles Chargers", "#0080C6", "#FFC20E");
let rams = new Team("Los Angeles Rams", "#003594", "#FFA300");
let dolphins = new Team("Miami Dolphins", "#008E97", "#FC4C02");
let vikings = new Team("Minnesota Vikings", "#4F2683", "#FFC62F");
let patriots = new Team("New England Patriots", "#002244", "#C60C30");
let saints = new Team("New Orleans Saints", "#D3BC8D", "black");
let giants = new Team("New York Giants", "#0B2265", "#A71930");
let jets = new Team("New York Jets", "#125740", "white");
let eagles = new Team("Philadelphia Eagles", "#004C54", "#A5ACAF");
let steelers = new Team("Pittsburgh Steelers", "#FFB612", "black");
let niners = new Team("San Francisco 49ers", "#AA0000", "#B3995D");
let seahawks = new Team("Seattle Seahawks", "#002244", "#69BE28");
let buccaneers = new Team("Tampa Bay Buccaneers", "#D50A0A", "black");
let titans = new Team("Tennessee Titans", "#0C2340", "#4B92DB");
let wft = new Team("Washington Football Team", "#773141", "#FFB612");

var teamsTwo = [];
teamsTwo.push(cardinals);
teamsTwo.push(falcons);
teamsTwo.push(ravens);
teamsTwo.push(bills);
teamsTwo.push(panthers);
teamsTwo.push(bears);
teamsTwo.push(bengals);
teamsTwo.push(browns);
teamsTwo.push(cowboys);
teamsTwo.push(broncos);
teamsTwo.push(lions);
teamsTwo.push(packers);
teamsTwo.push(texans);
teamsTwo.push(colts);
teamsTwo.push(jaguars);
teamsTwo.push(chiefs);
teamsTwo.push(raiders);
teamsTwo.push(chargers);
teamsTwo.push(rams);
teamsTwo.push(dolphins);
teamsTwo.push(vikings);
teamsTwo.push(patriots);
teamsTwo.push(saints);
teamsTwo.push(giants);
teamsTwo.push(jets);
teamsTwo.push(eagles);
teamsTwo.push(steelers);
teamsTwo.push(niners);
teamsTwo.push(seahawks);
teamsTwo.push(buccaneers);
teamsTwo.push(titans);
teamsTwo.push(wft);

var teamsIndex = Math.floor(Math.random() * (32 - 1) + 1);
teamElement.innerHTML = teamsTwo[teamsIndex].name;

teamElement.style.color = teamsTwo[teamsIndex].primaryColor;
teamWrapper.style.backgroundColor = teamsTwo[teamsIndex].secondaryColor;
teamWrapper.style.borderColor = teamsTwo[teamsIndex].primaryColor;
teamWrapper.style.borderWidth = 5; 

// var oneSeed = document.getElementById("oneSeed");
// var twoSeed = document.getElementById("twoSeed");

// var teamOne = Math.floor(Math.random() * (32 - 1) + 1);
// oneSeed.innerHTML = "1. " + teamsTwo[teamOne].name;
// var teamTwo = Math.floor(Math.random() * (32 - 1) + 1);
// twoSeed.innerHTML = "2. " + teamsTwo[teamTwo].name;

function newTeam(){
    location.reload();
}

// for (var i = 0; i < teamsTwo.length; i++){
//     document.createElement("h5");
//     document.createTextNode(i.name);
//     document.body.insertBefore(oneSeed);
// }