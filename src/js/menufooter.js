const sites = ['menu.html', 'footer.html'];
let header = 'menu.html';
let footer = 'footer.html';
for (let i = 0; i < sites.length; i++) {
  let xhr = new XMLHttpRequest();
  console.log(sites[i]);
  xhr.open('GET', sites[i], true);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById('menu_' + (i+1)).innerHTML = this.responseText;
    }
  };
  xhr.send();
}