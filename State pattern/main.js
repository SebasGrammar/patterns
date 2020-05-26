class TrafficLight {
    constructor() {
        this.count = 0;
        this.currentState = new Red(this);
    }

    change(state) {
        if (count++ >= 10) return;
        this.currentState = state;
        currentState.switch();
    }

    start() {
        currentState.switch();
    }
}

class Red {
    constructor(light) {
        this.light = light
    }

    switch() {
        // log.add()
        light.change(new Green(light))
    }
}

class Green {
    constructor(light) {
        this.light = light
    }

    switch() {
        light.change(new Yellow(light))
    }
}

class Yellow {
    constructor(light) {
        this.light = light
    }

    switch() {
        light.change(new Red(light))
    }
}


function run() {
    var light = new TrafficLight();
    light.start();
 
    //log.show();
}