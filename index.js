
import inquirer from 'inquirer';

import qr from 'qr-image'




inquirer
  .prompt([
    {name: "insert the URL: "}
  ])
  .then((answers) => {
    const qr_svg = qr.image('I love QR!');
    console.log(qr_svg);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
