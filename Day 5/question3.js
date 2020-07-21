const urls = [
    'https://jsonplaceholder.typicode.com/todos'
];

async function getTodos() {
    const promises = urls.map(async(url, idx) =>
        console.log(`Received Todo ${idx+1}:`, await fetch(url))
    );

    await Promise.all(promises);

    console.log('Finished!');
}

getTodos();