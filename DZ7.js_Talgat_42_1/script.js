    class Cars {
        constructor(options) {
            this.model = options.model;
            this.colors = options.colors;
            this.wheels = options.wheels;
        }
        start() {
            console.log(this.model + "  Заведена");
        }
    }

    class Bmw extends Cars {
        constructor(options) {
            super(options);
            this.power = options.power;
        }
    }

    const bmw = new Bmw ({
        model: "M5 F90",
        colors: "white",
        wheels: 4,
        power: "600hp",
    })

    console.log(bmw);
    bmw.start();

    class Mercedes extends Cars {
        constructor(options) {
            super(options);
            this.weight = options.weight;
        }
    }

    const mercedes = new Mercedes({
        model: "Cls 63",
        colors: "black",
        wheels: 4,
        weight: "1940kg",
    })

    console.log(mercedes);
    mercedes.start();

    class Audi extends Cars {
        constructor(options) {
            super(options);
            this.petrol = options.petrol;
        }
    }

    const audi = new Audi({
        model: "Rs6",
        colors: "silver",
        wheels: 4,
        petrol: "АИ 95",
    })

    console.log(audi);
    audi.start();

    class TrafficLight {
        constructor() {
            this.red = document.querySelector(".red");
            this.yellow = document.querySelector(".yellow");
            this.green = document.querySelector(".green");
        }
        setLight() {
            this.clearLights();

            switch (svet.toLowerCase()) {
                case 'красный':
                    this.red.classList.add('active');
                    alert("Stop!");
                    break;
                case 'жёлтый':
                    this.yellow.classList.add('active')
                    alert("Wait!");
                    break;
                case 'зелёный':
                    this.green.classList.add('active');
                    alert("Go!");
                    break;
                default:
                    alert("Введите только цвета светафора!");
            }
        }
        clearLights() {
            this.red.classList.remove('active');
            this.yellow.classList.remove('active');
            this.green.classList.remove('active');
        }
    }

    const trafficLight = new TrafficLight();
    const svet = prompt("Введите цвет светофора:");
    trafficLight.setLight(svet);

