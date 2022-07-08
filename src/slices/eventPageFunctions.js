import eventData from '../data/events.json'

export function getEventData() {
    return eventData;
}

export function getEvent(number) {
    return eventData.filter((event) => event.id === parseInt(number));
}

//1
export function getOtherEvents(number) {
    const eventType = eventData[number].type;
    const result = []

    //filters out original event
    const otherEvents = eventData.filter((event) => event.id !== parseInt(number))

    //find other events with the same type
    const sameType = otherEvents.filter((event) => event.type === eventType)
    console.log(sameType)
    //[a, b, c, d]
    //run through the array
    //set the first date to be MAX DATE
    //compare MAX DATE with the next item in the array
    //If the next item is larger than MAX DATE
    //next item becomes the new MAX DATE
    //push MAX DATE onto result array
    //filter out MAX DATE object from array

    const datesArray = []
    console.log(sameType.length)
    for (let i = 0; i < sameType.length; i++) {
        datesArray.push(Date.parse(sameType[i].date));
        datesArray.sort();

    }
    console.log(datesArray)
    //check if datesArray is larger than 3 
    //if its larger run this shit
    //if its not, just return the array
    if (datesArray.length > 3) {
        for (let i = 0; i < 3; i++) {

            var newDate = new Date(datesArray[datesArray.length - i - 1]);
            var dateString = ("0" + (newDate.getUTCMonth() + 1)).slice(-2) + "-" + ("0" + newDate.getUTCDate()).slice(-2) + "-" + newDate.getUTCFullYear()


            console.log("Date String: " + dateString)
            result.push(sameType.find((event) => event.date === dateString))
        }
        console.log(result)
        return result;
    }
    else {
        return sameType;
    }
}