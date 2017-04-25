(function() {

  const perfect = [
    `Perfect score! Woohoo!`,
    `Perfect scores are the best!`,
    `Perfect! Woot!`,
    `Perfect score! Ever consider becoming a linguist?`,
  ];

  const great = [
    `Awesome job!`,
    `Fantastic!`,
    `Great job!`,
    `Rocked it!`,
  ];

  const good = [
    `Nicely done!`,
    `Good job!`,
    `Well done!`,
    `Good work!`,
  ];

  // variables
  const parts  = 7;
  const total  = 20;
  const regexp = new RegExp(/[0-9]{1,2}(\.[0-9]{1,2})? \/ [0-9]{1,2}/g); // e.g. 1.25 / 4

  // run script
  const editor = document.getElementById(`id_assignfeedbackcomments_editoreditable`);
  const text   = editor.innerText;
  const matches = text.match(regexp);

  if (matches.length !== parts) {
    console.log(matches);
    throw new Error(`Wrong number of matches.`);
  }

  const points = matches
    .map(mark => mark.split(` `)[0])
    .map(mark => Number(mark))
    .reduce((a, b) => a + b, 0);

  console.log(`Total points: ${points}`);

  const grade = document.getElementById(`id_grade`);
  grade.value = points;

  const percent = points / total * 100;

  console.log(`Percent: ${percent}%`);

  if (percent >= 75) {

    if (percent === 100) var comments = perfect;
    else if (percent >= 90) var comments = great;
    else var comments = good;

    const comment = comments[Math.floor(Math.random() * comments.length)];

    editor.innerHTML = `
      <b style="color: rgb(0, 112, 192);">${comment}</b>
      <br>
      <br>
      ${editor.innerHTML}
    `;

  }

})();
