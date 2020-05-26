const lights = document.querySelectorAll(".light")

class TrafficLight {
    constructor() {
        this.count = 0;
        this.light = 0;
        this.currentState = new Red(this);
    }

    change(state) {
        if (++this.count >= 10) return;
        this.currentState = state;

        for (let light of lights) {
            light.classList.remove("glowing")
        }

        let color = getComputedStyle(lights[this.light]).getPropertyValue("background").split(")")[0] + ")"
        console.log(`color: ${color}`)
        lights[this.light].classList.toggle("glowing")

        // console.log(lights[this.light].style.background)
        document.documentElement.style
            .setProperty('--glowing-color', color);



        console.log(this.light)
        this.light++
        if (this.light > 2) {
            this.light = 0
        }

        state.switch(state)

    }

    start() {
        this.currentState.switch(this.currentState);
    }
}

function wow({ light }) {
    return light
}

class Red {
    constructor(light) {
        this.light = light
    }

    switch({ light }) {

        setTimeout(() => {
            light.change(new Green(light))
        }, 2000)
    }
}

class Green {
    constructor(light) {
        this.light = light
    }

    switch({ light }) {

        setTimeout(() => {
            light.change(new Yellow(light))
        }, 2000)
    }
}

class Yellow {
    constructor(light) {
        this.light = light
    }

    switch({ light }) {
        setTimeout(() => {
            light.change(new Red(light))
        }, 1000)
    }
}

function run() {
    let light = new TrafficLight();
    light.start();

    log.show();
}

run()