const GenerateYear = () => {

  const year = new Date().getFullYear();
  const el = document.querySelector('.copyright-year');
  
  el.textContent = `${year}`;

  return el;
}

export default GenerateYear();