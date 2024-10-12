let timer = 3600;

setInterval(() => {
    timer--;

    let hours = Math.floor(timer / 3600);
    let minutes = Math.floor((timer % 3600) / 60);
    let seconds = timer % 60;

    console.log(`${hours}h ${minutes}m ${seconds}s`);

    if(timer === 1800) {
        console.log('Залишилось 30 хвилин!');
    }
    
}, 1000)

// let timer = 60;

// setInterval(() => {
//     timer--;
//     console.log(timer);
    
//     if(timer === 30) {
//         console.log('Залишилось 30 секунд!');
//     }
    
// }, 1000);