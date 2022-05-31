function townsToJSON(arr) {

    let result = [];

    class Town {
        constructor(town, latitude, longitude) {
            this.Town = town;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longitude);
        }
    }

    for (let i = 1; i < arr.length; i++) {      // skip first element
        let array = arr[i].split("|").map(t => t.trim()).filter(x => x.length !=0);
        let townName = array[0];
        let latitude = Number(array[1]).toFixed(2);
        let longitude = Number(array[2]).toFixed(2);

        let town = new Town(townName, latitude, longitude);
        result.push(town);
    }
    
    return JSON.stringify(result);

}
townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);