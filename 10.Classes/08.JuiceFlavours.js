function juiceFlavours(arr) {

    let juices = {};
    let bottles = {};

    function createBottle(flavour) {
         if (juices[flavour] >= 1000) {
            if (!bottles.hasOwnProperty(flavour)) {
                bottles[flavour] = 0;
            }

            let numberOfBottles = Math.floor(juices[flavour] / 1000);
            bottles[flavour] += numberOfBottles;
            juices[flavour] -= numberOfBottles * 1000;
         }
    }

    for (let juice of arr) {
        let [flavour, quantity] = juice.split(' => ');
        
        if (!juices.hasOwnProperty(flavour)) {
            juices[flavour] = 0;
        }

        juices[flavour] += Number(quantity);
        createBottle(flavour);
    }



    for (let flavour in bottles) {
        console.log(flavour + ' => ' + bottles[flavour]);
    }


    

}
juiceFlavours(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);