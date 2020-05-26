// class TrafficLight {
//     constructor() {
//         this.count = 0;
//         this.currentState = new Red(this);
//     }

//     change(state) {
//         if (this.count++ >= 10) return;
//         console.log(this.count)
//         this.currentState = state;
//         console.log(this.currentState)
//         // this.currentState.switch(this.currentState);
//         this.currentState.switch(this.currentState);
        
//         //console.log(this)
//     }

//     start() {
//         this.currentState.switch(this.currentState);
//         // console.log(this)
//         console.log(this.currentState)
//         console.log(this.currentState.switch)
//     }
// }

// class Red {
//     constructor(light) {
//         this.light = light // light is a reference to an object, then. Watch out! :D
//     }

//     log() {
//         console.log("LOW")
//     }

//     switch(light) {
//         log.add("Red --> for 1 minute");
//         // log.add()
//         console.log("UYU")
//         console.log(light)
//         console.log("DONe")
//         // light.change(new Green(light))
//         light.light.change(new Green(light.light))
//     }
// }

// class Green {
//     constructor(light) {
//         this.light = light
//     }

//     switch(light) {
//         log.add("Green --> for 1 minute");
//         //console.log(light)
//         // light.change(new Yellow(light))
//         light.light.change(new Yellow(light.light))
//         console.log(light.light)
//     }
// }

// class Yellow {
//     constructor(light) {
//         this.light = light
//     }

//     switch(light) {
//         log.add("Yellow --> for 10 seconds");
//         // light.change(new Red(light))
//         console.log(light)
//         light.light.change(new Red(light.light))
//     }
// }

// var log = (function () {
//     var log = "";
 
//     return {
//         add: function (msg) { log += msg + "\n"; },
//         show: function () { console.log(log); log = ""; }
//     }
// })();

// function run() {
//     let light = new TrafficLight();
//     light.start();
 
//     log.show();
// }

// run()

// var TrafficLight = function () { // We have a constructor over here.
//     var count = 0;
//     var currentState = new Red(this); 
 
//     this.change = function (state) {
//         // limits number of changes
//         if (count++ >= 10) return;
//         //console.log(currentState)
//         currentState = state;
//         currentState.go();
//     };
 
//     this.start = function () {
//         console.log(currentState)
//         currentState.go();
//     };
// }
 
// var Red = function (light) {
//     this.light = light; // light is === to TrafficLight every single time.
 
//     this.go = function () {
//         log.add("Red --> for 1 minute");
//         console.log(light)
//         light.change(new Green(light));
//     }
// };
 
// var Yellow = function (light) {
//     this.light = light;
 
//     this.go = function () {
//         log.add("Yellow --> for 10 seconds");
//         console.log(light)
//         console.log("NOW")
//         console.log(this.light)
//         light.change(new Red(light));
//     }
// };
 
// var Green = function (light) {
//     this.light = light;
 
//     this.go = function () {
//         log.add("Green --> for 1 minute");
//         console.log(light)
//         light.change(new Yellow(light));
//     }
// };
 
// // log helper
 
// var log = (function () {
//     var log = "";
 
//     return {
//         add: function (msg) { log += msg + "\n"; },
//         show: function () { console.log(log); log = ""; }
//     }
// })();
 
// function run() {
//     var light = new TrafficLight();
//     light.start();
 
//     log.show();
// }

// run()

// https://www.dofactory.com/javascript/state-design-pattern







// var TrafficLight = function () {
//     var count = 0;
//     var currentState = new Red(this);
 
//     this.change = function (state) {
//         // limits number of changes
//         if (count++ >= 10) return;
//         currentState = state;
//         currentState.go();
//     };
 
//     this.start = function () {
//         currentState.go();
//     };
// }
 
// var Red = function (light) {
//     this.light = light;
 
//     this.go = function () {
//         log.add("Red --> for 1 minute");
//         light.change(new Green(light));
//     }
// };
 
// var Yellow = function (light) {
//     this.light = light;
 
//     this.go = function () {
//         log.add("Yellow --> for 10 seconds");
//         light.change(new Red(light));
//     }
// };
 
// var Green = function (light) {
//     this.light = light;
 
//     this.go = function () {
//         log.add("Green --> for 1 minute");
//         light.change(new Yellow(light));
//     }
// };
 
// // log helper
 
// var log = (function () {
//     var log = "";
 
//     return {
//         add: function (msg) { log += msg + "\n"; },
//         show: function () { alert(log); log = ""; }
//     }
// })();
 
// function run() {
//     var light = new TrafficLight();
//     light.start();
 
//     log.show();
// }