function carFactory(car) {

    let newObj = {};
    let newObjPower;
    let newObjVolume;
    let newObjColor = car.color;
    let newObjCarriage = car.carriage;
    let newObjWheelSize = car.wheelsize;

    newObj.model = car.model

    if (car.power <= 90) {
        newObjPower = 90;
        newObjVolume = 1800;
        newObj.engine = {
            power: newObjPower,
            volume: newObjVolume
        }
    } else if (car.power > 90 && car.power <= 120) {
        newObjPower = 120;
        newObjVolume = 2400;
        newObj.engine = {
            power: newObjPower,
            volume: newObjVolume
        }
    } else if (car.power > 120) {
        newObjPower = 200;
        newObjVolume = 3500;
        newObj.engine = {
            power: newObjPower,
            volume: newObjVolume
        }
    }

    newObj.carriage = {
        type: newObjCarriage,
        color: newObjColor
    }

    if (newObjWheelSize % 2 == 0) {
        newObjWheelSize = newObjWheelSize - 1;
    }

    newObj.wheels = [newObjWheelSize, newObjWheelSize, newObjWheelSize, newObjWheelSize]


    return newObj;

}
carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);