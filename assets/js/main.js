function init() {
    const semaforo = document.getElementById('semaforo');
    const buttons = document.getElementById('buttons')
    let colorIndex;
    let intervalId;

    const changeColor = () => {
        const colors = {
            red: 'yellow',
            yellow: 'green',
            green: 'red'
        };

        const color = colors[colorIndex];
        setColor[color]();
        colorIndex = color;
    };

    const stopAutomatic = () => {
        clearInterval(intervalId);
    };
   
    const setColor = {
        red: () => semaforo.src = './assets/img/vermelho.png',
        yellow: () => semaforo.src = './assets/img/amarelo.png',
        green: () => semaforo.src = './assets/img/verde.png',
        automatic: () => intervalId = setInterval(changeColor, 1000)
    };

    function trafficLght(e) {
        stopAutomatic();
        const tagId = e.target.id;
        setColor[tagId]();
        if (tagId != 'automatic') {
            colorIndex = tagId
        }
    }

    buttons.addEventListener('click', trafficLght)
};

init();