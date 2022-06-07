newFunction();



function newFunction() {
    "version";
    "0.2.0",
        "configurations";[
            {
                "type": "pwa-chrome",
                "request": "launch",
                "name": "Launch Chrome against localhost",
                "url": "http://localhost:8080",
                "webRoot": "${workspaceFolder}"
            }
        ];


    const canvas = document.getElementById('Matrix');
    const context = canvas.getContext('2d');

    canvas.widhth = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アカサタナマヤャラワガザダバパイィシキチヒヌツフテセソコケェゥウルグズゼゾヲゴブプビヂジ';
    const latin = 'ABCDEFGHIJKLMNOPQRSTWVYZ';
    const nums = '0123456789';

    const alphabet = katakana + latin + nums;

    const fontSize = 10;
    const columns = canvas.widhth / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }

    const draw = () => {

        context.fillStyle = '#0F0';
        context.font = fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };

    setInterval(draw, 100);
}

