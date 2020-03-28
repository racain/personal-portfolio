function FlashMessage() {
  let showcaseMessage = document.querySelector('.showcase-message');
  let titles = ['Web Developer', 'Father', 'Hockey Fan', 'Outdoorsman'];

  const setTitles = (titles) => {
    titles.forEach(title => {
      setInterval(() => {
        showcaseMessage.textContent = `${title}`;
      }, 3000);
    })
  }

  console.log(setTitles(titles));
}

export default FlashMessage;