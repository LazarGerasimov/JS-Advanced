class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
        
    }

    addPlant(plantName, spaceRequired) {
        
        if (this.spaceAvailable < spaceRequired) {
            throw new Error(`Not enough space in the garden.`);
        } 

        this.spaceAvailable -= spaceRequired;
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });

        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {

        if (quantity <= 0) {   // early exits should be on the top
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        const plant = this.plants.find(p => p.plantName == plantName);     // works with normal for loop as well

        if (plant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe) {           // double check
            throw new Error(`The ${plantName} is already ripe.`);
        }

    
        plant.ripe = true;         // referes row 19
        plant.quantity += quantity;           // will work with = only as plant can ripe only once

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }

    }

    harvestPlant(plantName) {

        const plantIndex = this.plants.findIndex(p => p.plantName == plantName);   // works like indexOf

        if (plantIndex == -1) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        const plant = this.plants[plantIndex];

        if (plant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        this.plants.splice(plantIndex, 1);
        this.storage.push({
            plantName,
            quantity: plant.quantity
        });
        this.spaceAvailable += plant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;

    }

    generateReport() {

        const plantAsString = this.plants.map(p => p.plantName).sort((a, b) => a.localeCompare(b));                         // !!!

        const plantsRow = `Plants in the garden: ${plantAsString.join(", ")}`;

        let storageRow = `Plants in storage: The storage is empty.`

        if (this.storage.length > 0) {
            const storageAsString = this.storage.map(p => `${p.plantName} (${p.quantity})`);
            storageRow = `Plants in storage: ${storageAsString.join(", ")}`
        }
        

        return [
            `The garden has ${this.spaceAvailable} free space left.`,
            plantsRow,
            storageRow
        ].join('\n');
    }


}


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('olive', 50));

