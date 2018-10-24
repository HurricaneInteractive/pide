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
    timeObject.hours + ' hours ' +
    timeObject.mins + ' mins '
  ;

  if (days === 0) {
    timeString =
      timeObject.hours + ' hours ' +
      timeObject.mins + ' mins '
    ;
  }

  if (hours === 0) {
    timeString =
      timeObject.mins + ' mins '
    ;
  }
  

  if (type === 'track') {
    timeString = timeObject.mins + ':' + timeObject.seconds;
  }

  return {'timeObject': timeObject, 'timeString': timeString}
}