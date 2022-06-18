function autoEngineeringCompany(arr) {

    let carRegister = {};

    arr.forEach(element => {
        let [brand, model, quantity] = element.split(' | ');

        if (!carRegister.hasOwnProperty(brand)) {
            carRegister[brand] = {};
        }

        if (!carRegister[brand].hasOwnProperty(model)) {
            carRegister[brand][model] = 0;
        }

        carRegister[brand][model] += Number(quantity);
    })

    
    for (let brand in carRegister) {
        
        console.log(brand);

        Object.entries(carRegister[brand])
        .forEach(element => console.log('###' + element[0] +' -> ' + element[1]));
    }


}
autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);