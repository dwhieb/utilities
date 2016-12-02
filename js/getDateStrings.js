/**
 * Takes a Date object or an ISO date string and returns an object with a human-readable date (standard US format), as well as an ISO-formatted string appropriate for use in a `datetime` attribute.
 * @param  {Object|String} date A Date object or a date string
 * @return {Object}             An object with two properties: `datetime` and `dateString`
 */
const getDateStrings = date => {

  const d = new Date(date);

  return {
    datetime: d.toISOString().slice(0, 10),
    dateString: d.toLocaleDateString('en-US', {
      year:  'numeric',
      month: 'long',
      day:   'numeric',
    }),
  };

};

export default getDateStrings;
