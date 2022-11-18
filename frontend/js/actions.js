const getOrders = async () => {
    const response = await fetch('http://localhost:3000/getAllOrders');
    const orders = await response.json();
    console.log(orders)
}

const getcustomers = async () => {
    const response = await fetch('http://localhost:3000/getAllCustomers');
    const customers = await response.json();
    console.log(customers)
}

const addOrders = async () => {
    const addOrders = await fetch('http://localhost:3000/addOrders', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Custid": "abcd",
            "orderId": "abcd",
            "Ordername": "abcd",
            "Orderprice": "abcd",
            "orderDate": "12-12-2022",
            "deliveryDate": "12-12-2022"
        })
    }).catch(err => console.log(err));
    const content = await addOrders.json();
    if (content.process) {
        console.log('process done',content.message)
    } else {
        console.log('something ',content.message)
    }
}

const addCustomer = async () => {
    const addCustomer = await fetch('http://localhost:3000/addCustomers', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Custid": "2212",
            "custFirstName": "pqer",
            "custSecondName": "fghj",
            "custEmail": "ghjk",
            "custPhone": "1232334222",
            "custAddress": "bhjk"

        })
    }).catch(err => console.log(err));
    const content = await addCustomer.json();
    if (content.process) {
        console.log('process done')
    } else {
        console.log('duplicate value')
    }
}




const addExpense = async () => {
    const addExpense = await fetch('http://localhost:3000/addExpenses', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "expense_type": "abc",
            "amount": "abc",
            "expenseDate": "12-12-2022"
        })
    }).catch(err => console.log(err));
    const content = await addExpense.json();
    if (content.process) {
        console.log('process done')
    } else {
        console.log('something ')
    }
}

const deleteOrder = async () => {
    const deleteOrder = await fetch('http://localhost:3000/deleteOrders', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "orderid":"abcd"
        })
    }).catch(err => console.log(err));
    const content = await deleteOrder.json();
    if (content.process) {
        console.log('Data deleted')
    } else {
        console.log('duplicate value')
    }
}

const deleteCustomer = async () => {
    const deleteCustomer = await fetch('http://localhost:3000/deleteCustomer', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "custid":"1223"
        })
    }).catch(err => console.log(err));
    const content = await deleteCustomer.json();
    if (content.process) {
        console.log('Data deleted')
    } else {
        console.log('duplicate value')
    }
}

getOrders();