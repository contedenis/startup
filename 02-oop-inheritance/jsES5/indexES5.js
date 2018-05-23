"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Actor class
var Actor = function Actor(name, age) {
    _classCallCheck(this, Actor);

    this.name = name;
    this.age = age;
};
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//EventEmitter class
var EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.event = {};
    }

    //EventPlay = Event added - callback = function added


    _createClass(EventEmitter, [{
        key: 'on',
        value: function on(eventPlay, callback) {
            //If the event exists within the object
            if (this.event[eventPlay]) {
                //Evaluate if it is associated with the same function
                if (this.event[eventPlay].indexOf(callback) != -1) {
                    console.log('Its already exists');
                } else {
                    //If not, I assigned the new function
                    this.event[eventPlay].push(callback);
                }
            } else {
                //If not exist, i create the event as an array, and i assigned the function
                this.event[eventPlay] = [callback];
            }
        }

        //Receive the event to be deleted with the function

    }, {
        key: 'off',
        value: function off(eventPlay, callback) {
            if (this.event[eventPlay]) {
                //If the event exist and there are more than one
                if (this.event[eventPlay].length > 0) {
                    //I find the function that corresponds to the event
                    var deleteEvent = this.event[eventPlay].indexOf(callback);
                    //I eliminated this function.
                    this.event[eventPlay].splice(deleteEvent, 1);
                } else if (this.event[eventPlay] && this.event[eventPlay].length) {
                    //If the event does not exist
                    console.log('Unknown event');
                } else {
                    //If the event exist but not more than one, i delete it
                    var _deleteEvent = this.event[eventPlay].indexOf(callback);
                    this.event[eventPlay].splice(_deleteEvent, 1);
                    delete this.event[eventPlay];
                }
            } else {
                console.log('The event you want to turn off is undefined.');
            }
        }

        //Receive the event that want to emitt

    }, {
        key: 'emit',
        value: function emit(events) {
            if (this.event[events]) {
                //Assign to the variable the arrangement of events
                var eventsEmitted = this.event[events];
                //If the variable is empty or has no elements
                if (!eventsEmitted || !eventsEmitted.length) {
                    console.log('The event is empty');
                }
                //Execute the function with the event I want to emit
                eventsEmitted.forEach(function (getEvents) {
                    if (!getEvents) {
                        console.log('The callback does not exist');
                    } else {
                        getEvents(events);
                    }
                });
            } else {
                console.log('The event you want to emmit is undefined.');
            }
        }
    }]);

    return EventEmitter;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: "log",
        value: function log(info) {
            console.log("The event '" + info + "' has emitted");
        }
    }]);

    return Logger;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_EventEmitter) {
    _inherits(Movie, _EventEmitter);

    function Movie(title, year, duration) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

        _this.title = title;
        _this.year = year;
        _this.duration = duration;
        _this.cast = [];
        return _this;
    }

    _createClass(Movie, [{
        key: 'play',
        value: function play() {
            this.emit('play');
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.emit('stop');
        }
    }, {
        key: 'resume',
        value: function resume() {
            this.emit('resume');
        }
    }, {
        key: 'addCast',
        value: function addCast(newCast) {
            var _this2 = this;

            if (Array.isArray(newCast)) {
                newCast.forEach(function (value, index) {
                    _this2.cast.push(value);
                });
            } else {
                this.cast.push(newCast);
            }
        }
    }]);

    return Movie;
}(EventEmitter);
"use strict";

var Social = {
    like: function like(friendName) {
        console.log(friendName + " likes " + this.title);
    },
    share: function share(friendName) {
        console.log(friendName + " share " + this.title);
    }
};
'use strict';

var Batman = new Movie('Batman', 1900, 32);
var Log = new Logger();
Batman.on('play', Log.log);
Batman.on('stop', Log.log);
Batman.off('play', Log.log);
Batman.off('asd', Log.log);
Batman.play();
Batman.stop();
console.log(Batman.event);

var Will = new Actor('Will Smith', 22);
var OtherActors = [new Actor('Brad Pitt', 33), new Actor('Leonardo Di Caprio', 44)];
Batman.addCast(Will);
Batman.addCast(OtherActors);
console.log(Batman.cast);

Object.assign(Batman, Social);
Batman.like('Pedro');
Batman.share('Juan');
