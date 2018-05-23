//EventEmitter class
class EventEmitter {
    constructor() {
        this.event = {};
    }

    //EventPlay = Event added - callback = function added
    on(eventPlay, callback) {  
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
    off(eventPlay, callback) {
        if (this.event[eventPlay]) {
            //If the event exist and there are more than one
            if (this.event[eventPlay].length > 0) { 
                //I find the function that corresponds to the event
                let deleteEvent = this.event[eventPlay].indexOf(callback);
                //I eliminated this function.
                this.event[eventPlay].splice(deleteEvent,1);   
            } else if (this.event[eventPlay] && this.event[eventPlay].length) {
                //If the event does not exist
                console.log('Unknown event')
            } else {
                //If the event exist but not more than one, i delete it
                let deleteEvent = this.event[eventPlay].indexOf(callback);
                this.event[eventPlay].splice(deleteEvent,1);  
                delete this.event[eventPlay];
            } 
        } else {
            console.log('The event you want to turn off is undefined.');
        }         
    }
    
    //Receive the event that want to emitt
    emit(events) {
        if (this.event[events]) {
            //Assign to the variable the arrangement of events
            let eventsEmitted = this.event[events];
            //If the variable is empty or has no elements
            if (!eventsEmitted || !eventsEmitted.length) {
                console.log('The event is empty');
            }
            //Execute the function with the event I want to emit
            eventsEmitted.forEach((getEvents) => {
                if (!getEvents) {
                    console.log('The callback does not exist');
                } else {
                    getEvents(events);
                }
            });
        } else {
            console.log('The event you want to emmit is undefined.')
        }
    }
}