//Creating a new visitor 

function createVisitor (names,age,tickedID) {
    
    var newVisitor = {
        // names: null,
        // age: age,
        // ticketID:null,
    };

    newVisitor.names = names;
    newVisitor.age = age;
    newVisitor.ticketID = tickedID;

    return newVisitor;
};

console.log(createVisitor('Verena Nardi', 45 , 'H322AZ123'));

//Revoking the ticket
const revokeTicket = (thatOne) => {
    thatOne.ticketID = null;
    return thatOne;
}

const visitor = createVisitor('Verena Nardi', 45, 'H322AZ123');
console.log(revokeTicket(visitor));


// Determine the ticket status
function ticketStatus (tickets, ticketID) {
    const ticketOwner = tickets[ticketID];

    if (ticketOwner === undefined) {
        return 'Unknown ticket id';
    }
    else if (ticketOwner === null) {
        return 'Not Sold'
    }
    else {
        return `Sold to ${ticketOwner}`
    };
};

const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
};
 
console.log(ticketStatus(tickets, 'RE90VAW7'));
console.log(ticketStatus(tickets, '0H2AZ123'));
console.log(ticketStatus(tickets, '23LA9T41'));


//Ticket status
function simpleTicketStatus (tickets, ticketID) {
    const ticketOwner = tickets[ticketID];

    if (ticketOwner === undefined) {
        return 'Invalid ticket !!!';
    }
    else if (ticketOwner === null) {
        return 'Invalid ticket !!!';
    }
    else {
        return `${ticketOwner}`;
    };
}



console.log(simpleTicketStatus(tickets, 'RE90VAW7'));
console.log(simpleTicketStatus(tickets, '0H2AZ123'));
console.log(simpleTicketStatus(tickets, '23LA9T41'));


//Looks if the version of the GTC that was signed by the visitor
function gtcVersion(visitorNew) {
    return visitorNew.gtc?.version;
};

const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
      signed: true,
      version: '2.1',
    },
};

console.log(gtcVersion(visitorNew));
  
const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    
};


console.log(gtcVersion(visitorOld));


