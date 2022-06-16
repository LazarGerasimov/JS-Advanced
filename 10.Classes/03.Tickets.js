function ticketSorter(tickets, sortingBy) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    tickets.map((el) => {                                          // works with for of as well
        let [destination, price, status] = el.split("|");
        price = Number(price);
        result.push(new Ticket(destination, price, status));
        //console.log(price)
    })

    //.forEach(x => console.log(x)) 

    result.sort((a,b) => {
        if (sortingBy == 'destination') {
            return a.destination.localeCompare(b.destination);
        } else if (sortingBy == 'status') {
            return a.status.localeCompare(b.status);
        } else if (sortingBy == 'price') {
            return a.price - b.price;
        }
    });

    return result;

}
ticketSorter(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
)