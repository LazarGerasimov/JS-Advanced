class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    
    loadingVegetables(vegetables) {
        
       for (let i = 0; i < vegetables.length; i++) {
            let [type, quantity, price] = vegetables[i].split(" ");
            
            let veg = this.availableProducts.find(v => v.type == type);
            
            if (!veg) {
                this.availableProducts.push({
                    "type": type,
                    "quantity": Number(quantity),
                    "price": Number(price)
                });
            } else {
                veg.quantity += Number(quantity);
                    if (veg.price < Number(price)) {
                        veg.price = Number(price);
                    }
            }     
       }

        let result = [];

        this.availableProducts.forEach(x => result.push(x.type));
        
        return `Successfully added ${result.join(", ")}`
    }

    buyingVegetables(selectedProducts) {

        let totalPrice = 0;

        for (let i = 0; i < selectedProducts.length; i++) {
            let [type, quantity] = selectedProducts[i].split(" ");
            
            let veg = this.availableProducts.find(v => v.type == type);
            //console.log(veg.quantity)
            if (!veg) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            //console.log(`${type} - ${veg.quantity} - ${quantity}`)
            if (veg.quantity < Number(quantity)) {          // double check that shit WRONG ASNWER
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            let currentVegPrice = Number(quantity) * veg.price;
            veg.quantity -= Number(quantity);
            totalPrice += currentVegPrice;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {

        let veg = this.availableProducts.find(v => v.type == type);

        if (!veg) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (quantity >= veg.quantity) {
            veg.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }

        veg.quantity -= Number(quantity);

        return `Some quantity of the ${type} has been removed.`
    }

    revision() {

        let result = [];
        result.push(`Available vegetables:`);

        let sorted = this.availableProducts
        .sort((a, b) => a.price - b.price)
        .forEach(x => result.push(`${x.type}-${x.quantity}-$${x.price}`));

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join("\n");

    }

} //class closing bracket



let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));










