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
    const sumArray = []
    const result = []

    //filters out original event
    const otherEvents = eventData.filter((event) => event.id !== parseInt(number))

    //find other events with the same type
    const sameType = otherEvents.filter((event) => event.type === eventType)
    //[a, b, c, d]
    //run through the array
    //set the first date to be MAX DATE
    //compare MAX DATE with the next item in the array
    //If the next item is larger than MAX DATE
    //next item becomes the new MAX DATE
    //push MAX DATE onto result array
    //filter out MAX DATE object from array

    const datesArray = []
    for (let i = 0; i < sameType.length; i++) {
        datesArray.push(Date.parse(sameType[i].date));
        datesArray.sort().reverse();

    }
    //check if datesArray is larger than 3 
    //if its larger run this shit
    //if its not, just return the array
    datesArray.forEach((date) => {
        let newDate = new Date(date);
        let dateString = ("0" + (newDate.getUTCMonth() + 1)).slice(-2) + "-" + ("0" + newDate.getUTCDate()).slice(-2) + "-" + newDate.getUTCFullYear()
        sumArray.push(sameType.find((event) => event.date === dateString))
    })

    if (sumArray.length > 3) {
        for (let i = 0; i < 3; i++) {
            result.push(sumArray[i])
        }

        return result;
    }
    else {

        return sumArray;
    }

}