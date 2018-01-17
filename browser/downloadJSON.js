/**
 * Initiates download of specified data as a JSON text file
 * @function downloadJSON
 * @param  {Object} [data={}]              The data to download
 * @param  {String} [filename='data.json'] The name to give the file when it downloads.
 */
export default function downloadJSON(data = {}, filename = `data.json`) {

  const text = JSON.stringify(data, null, 2);

  // IE & Edge
  if (window.navigator.msSaveBlob) {

    const file = new Blob([text], { type: `application/json` });

    window.navigator.msSaveBlob(file, filename);

  // Chrome & FF
  } else {

    const a = document.createElement('a');

    a.download      = filename;
    a.href          = `data:application/json;charset=utf-8,${encodeURIComponent(text)}`;
    a.type          = `text/plain`;
    a.style.display = `none`;
    a.click();

  }

}
