//Bài 108
// function highlight ([first,...strings],...value){
//   return value.reduce(
//     (acc,curr)=>[...acc,`<span>${curr}</span>`,strings.shift()],
//     [first]
//   ).join('')
// }
// var brand = 'F8';
// var course = 'Javascript';
// const html = highlight`Học lập trình ${course}tại Website ${brand} end !`;
// console.log(html)
// -------------

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const tabActive = $('.tab-item.active');
const line = $('.line')
line.style.left = tabActive.offsetLeft+'px'
line.style.width = tabActive.offsetWidth+'px'

tabs.forEach((tab,index)=>{
  const pane =panes [index]

  tab.onclick = function(){
    $('.tab-pane.active').classList.remove('active')
    $('.tab-item.active').classList.remove('active')

    line.style.left = this.offsetLeft+'px'
    line.style.width = this.offsetWidth+'px'

   this.classList.add('active')
   pane.classList.add('active')
  }
})


