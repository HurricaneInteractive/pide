export function convertDurationToString(milliseconds, type){
  
  function checkForTheZero(n) {
    return (n < 10 ? '0' : '') + n;
  }

  let days = Math.trunc(milliseconds / (1000*60*60*24));
  let r_days = ((milliseconds / (1000*60*60*24)) - days);

  let hours = Math.trunc(r_days * 24);
  let r_hours = ((r_days * 24) - hours);
  
  let mins = Math.trunc(r_hours * 60);
  let r_mins = ((r_hours * 60) - mins);

  let seconds = checkForTheZero(
    Math.trunc(r_mins * 60)
  );

  if (type === "track"){
    mins = Math.trunc(milliseconds / 60000);
    r_mins = ((milliseconds / 60000) - mins);
    seconds = checkForTheZero(Math.trunc(r_mins * 60))
  }

  let timeObject = {
    "days": days,
    "hours": hours,
    "mins": mins,
    "seconds": seconds
  }

  let timeString =
    timeObject.days + ' days ' +
    timeObject.hours + ' hrs ' +
    timeObject.mins + ' m '
  ;

  if (days === 0) {
    timeString =
      timeObject.hours + ' hrs ' +
      timeObject.mins + ' m '
    ;
  }

  if (hours === 0) {
    timeString =
      timeObject.mins + ' m '
    ;
  }
  

  if (type === 'track') {
    timeString = timeObject.mins + ':' + timeObject.seconds;
  }

  return {'timeObject': timeObject, 'timeString': timeString}
}


// --------------------------------------------------------------


export function compressArray(original) {
 
  let compressed = [];
  let compressedObjectGlobal = {};
  let arrayCopy = original.slice(0);
 
  for (let i = 0; i < original.length; i++) {
 
    let myCount = 0;	
    for (let w = 0; w < arrayCopy.length; w++) {
      if (original[i] === arrayCopy[w]) {
        myCount++;
        delete arrayCopy[w];
      }
    }
    if (myCount > 0) {
      if (original[i] !== null) {
        compressed.push(original[i]);
        const pushToObj = {
          [original[i]]: {
            'value': original[i],
            'count': myCount
          }
        }
        const oldObj = compressedObjectGlobal;
        const compressedObject = Object.assign(oldObj, pushToObj);
        compressedObjectGlobal = compressedObject;
      }
    }
  }
  return {'array': compressed, 'obj': compressedObjectGlobal};
};