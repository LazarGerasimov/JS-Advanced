class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.listOfParticipants = [];
        this.priceForTheCamp = {
            child: 150,                    // works with 'child' etc.
            student: 300,
            collegian: 500
        };
        
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {       // or (!this.priceForTheCamp[condition])
            throw new Error(`Unsuccessful registration at the camp.`);
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        let participant = this.listOfParticipants.find(p => p.name == name);

        if (participant == undefined) {    // or this.listOfParticipants.some(x => x.name == name)    // returns true/false
            this.listOfParticipants.push({
                name,                                                      // takes the value from the function params
                condition,
                power: 100,
                wins: 0
            });
            return `The ${name} was successfully registered.`
        } else {
            return `The ${name} is already registered at the camp.`
        }
    }

    unregisterParticipant(name) {
        
        let participantIndex = this.listOfParticipants.findIndex(p => p.name == name);    // !!!!

        if (participantIndex == -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } 

        this.listOfParticipants.splice(participantIndex, 1);                           // works as well
        //this.listOfParticipants = this.listOfParticipants.filter(x => x.name != name);  // both work

        return `The ${name} removed successfully.`
    
    } 

    timeToPlay(typeOfGame, participant1, participant2) {

        // let player1 = this.listOfParticipants.find(p => p.name == participant1);                 // Pay attention
        // let player2 = this.listOfParticipants.find(p => p.name == participant2);

        // let participant1Index = this.listOfParticipants.findIndex(p => p.name == participant1);
        // let participant2Index = this.listOfParticipants.findIndex(p => p.name == participant2);

        let player1 = this.listOfParticipants.find(p => p.name == participant1);
        //let player2 = this.listOfParticipants.find(p => p.name == participant2); do not initiate at that stage as he might not be present

        if (typeOfGame == 'Battleship') {
           
            if (!player1) {                      // or if(player1 == undefined)
                throw new Error(`Invalid entered name/s.`)
            }

            player1.power += 20;

            return `The ${participant1} successfully completed the game ${typeOfGame}.`

        } else if (typeOfGame == 'WaterBalloonFights') {

            let winnerName = ''
            let player2 = this.listOfParticipants.find(p => p.name == participant2);

            if (!player2) {
                throw new Error('Invalid entered name/s.')
            }

            if (player1.condition != player2.condition) {
                throw new Error("Choose players with equal condition.");
            }

            if (player1.power > player2.power) {
                player1.wins++; 
                winnerName = player1.name
            } else if (player1.power < player2.power) {
                player2.wins++  
                winnerName = player2.name  
            } else {
                return `There is no winner.`;
            }

            return `The ${winnerName} is winner in the game ${typeOfGame}.`
        }    
    }    // timeToPlay closing bracket

    
    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)

        let numberOfParticipants = this.listOfParticipants.length;
        //let winnersAsString = this.listOfParticipants.map(p => p.wins).sort((a, b) => a - b);  not tested
        let sortedArray = this.listOfParticipants
        .sort((a, b) => b.wins - a.wins)
        .forEach(x => {
            result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`)
        });

        
        return result.join("\n");
       
    }
    
}


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));










