/* 
This script grabs the showcase-message element from html
and scrolls diffent titles or roles that I play in my 
personal and professional life
*/

const flashTitles = () => {
  let showcaseMessage = document.querySelector('.showcase-message');
  let titles = ['Web Developer', 'Father', 'Hockey Fan'];

  // loop through titles array
  // set each index value from array to showcaseMessage every 1.25 seconds
  titles.forEach((title, idx) => {
      setTimeout(() => {
      showcaseMessage.textContent = `${title}`;
    }, idx * 1250);
  });
}

// instatiate flashTitles for immediate action
flashTitles();

// call flashTitles every 3x speed of titles.forEach loop
setInterval(flashTitles, 3750);