function heroicInventory(input) {

    let result = [];

    for (let hero of input) {
        let tokens = hero.split(" / ");
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2];
        if (items) {
            items = tokens[2].split(", ");
        } else {
            items = [];
        }

        result.push({ name, level, items })

    }

    let dataJSON = JSON.stringify(result);
    console.log(dataJSON)

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);