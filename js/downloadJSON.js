/**
 * Initiates download of specified data as a JSON text file
 * @function downloadJSON
 * @param  {Object}     [data={}]              The data to download
 * @param  {String}     [filename='data.json'] The name to give the file when it downloads.
 * @return {void}                            No return
 */
const downloadJSON = (data = {}, filename = 'data.json') => {

  const text = JSON.stringify(data, null, 2);

  // IE & Edge
  if (window.navigator.msSaveBlob) {

    const file = new Blob([text], { type: 'application/json' });

    window.navigator.msSaveBlob(file, filename);

  // Chrome & FF
  } else {

    const a = document.createElement('a');

    a.download = filename;
    a.href = `data:application/json;charset=utf-8,${encodeURIComponent(text)}`;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

  }
};

export default downloadJSON;
