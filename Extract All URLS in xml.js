function getAlllinks() {
  let urlgiven=window.location.origin
  let x = document.getElementsByTagName("span")
  let urlList = [];
  for(i=0; x.length > i; i++) {
      let text = x[i].textContent;
      if(text.indexOf(urlgiven) !== -1) {
          urlList.push(text);
  }
      }
  let text = '';
urlList.forEach(i => {
   text = text ? `${text}
${i}` : i;
})
console.log(text);
}
