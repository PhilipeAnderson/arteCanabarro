/* <Menu Hamburguer Open*/
let ham = document.querySelector(".hamburguer");
let hamMenu = document.querySelector(".hamburguer-menu");

ham.addEventListener('click', function() {
  if(hamMenu.style.display === "block") {
    hamMenu.style.display = "none"
  } else {
    hamMenu.style.display = "block"
  }
})
/* </Menu Hamburguer Open*/

/* </Menu Hamburguer Close*/
let hamClose = document.querySelector(".hamburguer-close");

hamClose.addEventListener('click', function() {
  if(hamMenu.style.display === "block"){
    hamMenu.style.display = "none"
  } else {
    hamMenu.style.display= "block"
  }
})
/* </Menu Hamburguer Close*/

/* <Modal */
let sqr = document.querySelector("#img-modal");
let des = document.querySelector("#des-modal");
let cri = document.querySelector("#cri-modal");
let art = document.querySelector("#art-modal");
let mod = document.querySelector("#mod-modal");
let val = document.querySelector("#mod-value");

function infoModal01() {
  let sqrCurrent01 = document.querySelector("#img01");
  let sqrCurrentWay01 = sqrCurrent01.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay01);

  des.innerHTML = `
    Olá Sou o texto do quadro 01 Olá Sou o texto do quadro 01
    Sou a descrição do quadro 01 Sou a descrição do quadro 01
    Olá Sou o texto do quadro 01 Olá Sou o texto do quadro 01
    Sou a descrição do quadro 01 Sou a descrição do quadro 01
    Olá Sou o texto do quadro 01 Olá Sou o texto do quadro 01
    Sou a descrição do quadro 01 Sou a descrição do quadro 01
    `;

  cri.innerHTML = `Jan/2020 - 01`;
  art.innerHTML = `Miguel Canabarro - 01`;
  mod.innerHTML = `Quadro a Óleo - 01`;
  val.innerHTML = `R$: 1100,00`;
}

function infoModal02() {
  let sqrCurrent02 = document.querySelector("#img02");
  let sqrCurrentWay02 = sqrCurrent02.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay02);

  des.innerHTML = `
    Olá Sou o texto do quadro 02 Olá Sou o texto do quadro 02
    Sou a descrição do quadro 02 Sou a descrição do quadro 02
    Olá Sou o texto do quadro 02 Olá Sou o texto do quadro 02
    Sou a descrição do quadro 02 Sou a descrição do quadro 02
    Olá Sou o texto do quadro 02 Olá Sou o texto do quadro 02
    Sou a descrição do quadro 02 Sou a descrição do quadro 02
    `;

    cri.innerHTML = `Jan/2020 - 02`;
    art.innerHTML = `Miguel Canabarro - 02`;
    mod.innerHTML = `Quadro a Óleo - 02`;
    val.innerHTML = `R$: 1200,00`; 
}

function infoModal03() {
  let sqrCurrent03 = document.querySelector("#img03");
  let sqrCurrentWay03 = sqrCurrent03.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay03);

  des.innerHTML = `
    Olá Sou o texto do quadro 03 Olá Sou o texto do quadro 03
    Sou a descrição do quadro 03 Sou a descrição do quadro 03
    Olá Sou o texto do quadro 03 Olá Sou o texto do quadro 03
    Sou a descrição do quadro 03 Sou a descrição do quadro 03
    Olá Sou o texto do quadro 03 Olá Sou o texto do quadro 03
    Sou a descrição do quadro 03 Sou a descrição do quadro 03
    `;

    cri.innerHTML = `Jan/2020 - 03`;
    art.innerHTML = `Miguel Canabarro - 03`;
    mod.innerHTML = `Quadro a Óleo - 03`;
    val.innerHTML = `R$: 1300,00`;
}

function infoModal04() {
  let sqrCurrent04 = document.querySelector("#img04");
  let sqrCurrentWay04 = sqrCurrent04.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay04);

  des.innerHTML = `
  Olá Sou o texto do quadro 04 Olá Sou o texto do quadro 04
  Sou a descrição do quadro 04 Sou a descrição do quadro 04
  Olá Sou o texto do quadro 04 Olá Sou o texto do quadro 04
  Sou a descrição do quadro 04 Sou a descrição do quadro 04
  Olá Sou o texto do quadro 04 Olá Sou o texto do quadro 04
  Sou a descrição do quadro 04 Sou a descrição do quadro 04
  `;

  cri.innerHTML = `Jan/2020 - 04`;
  art.innerHTML = `Miguel Canabarro - 04`;
  mod.innerHTML = `Quadro a Óleo - 04`;
  val.innerHTML = `R$: 1400,00`;
}

function infoModal05() {
  let sqrCurrent05 = document.querySelector("#img05");
  let sqrCurrentWay05 = sqrCurrent05.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay05);

  des.innerHTML = `
  Olá Sou o texto do quadro 05 Olá Sou o texto do quadro 05
  Sou a descrição do quadro 05 Sou a descrição do quadro 05
  Olá Sou o texto do quadro 05 Olá Sou o texto do quadro 05
  Sou a descrição do quadro 05 Sou a descrição do quadro 05
  Olá Sou o texto do quadro 05 Olá Sou o texto do quadro 05
  Sou a descrição do quadro 05 Sou a descrição do quadro 05
  `;

  cri.innerHTML = `Jan/2020 - 05`;
  art.innerHTML = `Miguel Canabarro - 05`;
  mod.innerHTML = `Quadro a Óleo - 05`;  
  val.innerHTML = `R$: 1500,00`;
}

function infoModal06() {
  let sqrCurrent06 = document.querySelector("#img06");
  let sqrCurrentWay06 = sqrCurrent06.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay06);

  des.innerHTML = `
  Olá Sou o texto do quadro 06 Olá Sou o texto do quadro 06
  Sou a descrição do quadro 06 Sou a descrição do quadro 06
  Olá Sou o texto do quadro 06 Olá Sou o texto do quadro 06
  Sou a descrição do quadro 06 Sou a descrição do quadro 06
  Olá Sou o texto do quadro 06 Olá Sou o texto do quadro 06
  Sou a descrição do quadro 06 Sou a descrição do quadro 06
  `;

  cri.innerHTML = `Jan/2020 - 06`;
  art.innerHTML = `Miguel Canabarro - 06`;
  mod.innerHTML = `Quadro a Óleo - 06`;  
  val.innerHTML = `R$: 1600,00`;
}

function infoModal07() {
  let sqrCurrent07 = document.querySelector("#img07");
  let sqrCurrentWay07 = sqrCurrent07.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay07);

  des.innerHTML = `
  Olá Sou o texto do quadro 07 Olá Sou o texto do quadro 07
  Sou a descrição do quadro 07 Sou a descrição do quadro 07
  Olá Sou o texto do quadro 07 Olá Sou o texto do quadro 07
  Sou a descrição do quadro 07 Sou a descrição do quadro 07
  Olá Sou o texto do quadro 07 Olá Sou o texto do quadro 07
  Sou a descrição do quadro 07 Sou a descrição do quadro 07
  `;

  cri.innerHTML = `Jan/2020 - 07`;
  art.innerHTML = `Miguel Canabarro - 07`;
  mod.innerHTML = `Quadro a Óleo - 07`;  
  val.innerHTML = `R$: 1700,00`;
}

function infoModal08() {
  let sqrCurrent08 = document.querySelector("#img08");
  let sqrCurrentWay08 = sqrCurrent08.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay08);

  des.innerHTML = `
  Olá Sou o texto do quadro 08 Olá Sou o texto do quadro 08
  Sou a descrição do quadro 08 Sou a descrição do quadro 08
  Olá Sou o texto do quadro 08 Olá Sou o texto do quadro 08
  Sou a descrição do quadro 08 Sou a descrição do quadro 08
  Olá Sou o texto do quadro 08 Olá Sou o texto do quadro 08
  Sou a descrição do quadro 058Sou a descrição do quadro 08
  `;

  cri.innerHTML = `Jan/2020 - 08`;
  art.innerHTML = `Miguel Canabarro - 08`;
  mod.innerHTML = `Quadro a Óleo - 08`;  
  val.innerHTML = `R$: 1800,00`;
}

function infoModal09() {
  let sqrCurrent09 = document.querySelector("#img09");
  let sqrCurrentWay09 = sqrCurrent09.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay09);

  des.innerHTML = `
  Olá Sou o texto do quadro 09 Olá Sou o texto do quadro 09
  Sou a descrição do quadro 09 Sou a descrição do quadro 09
  Olá Sou o texto do quadro 09 Olá Sou o texto do quadro 09
  Sou a descrição do quadro 09 Sou a descrição do quadro 09
  Olá Sou o texto do quadro 09 Olá Sou o texto do quadro 09
  Sou a descrição do quadro 09 Sou a descrição do quadro 09
  `;

  cri.innerHTML = `Jan/2020 - 09`;
  art.innerHTML = `Miguel Canabarro - 09`;
  mod.innerHTML = `Quadro a Óleo - 09`;  
  val.innerHTML = `R$: 1900,00`;
}

function infoModal10() {
  let sqrCurrent10 = document.querySelector("#img10");
  let sqrCurrentWay10 = sqrCurrent10.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay10);

  des.innerHTML = `
  Olá Sou o texto do quadro 10 Olá Sou o texto do quadro 10
  Sou a descrição do quadro 10 Sou a descrição do quadro 10
  Olá Sou o texto do quadro 10 Olá Sou o texto do quadro 10
  Sou a descrição do quadro 10 Sou a descrição do quadro 10
  Olá Sou o texto do quadro 10 Olá Sou o texto do quadro 10
  Sou a descrição do quadro 10 Sou a descrição do quadro 10
  `;

  cri.innerHTML = `Jan/2020 - 10`;
  art.innerHTML = `Miguel Canabarro - 10`;
  mod.innerHTML = `Quadro a Óleo - 10`;  
  val.innerHTML = `R$: 1010,00`;
}

function infoModal11() {
  let sqrCurrent11 = document.querySelector("#img11");
  let sqrCurrentWay11 = sqrCurrent11.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay11);

  des.innerHTML = `
  Olá Sou o texto do quadro 11 Olá Sou o texto do quadro 11
  Sou a descrição do quadro 11 Sou a descrição do quadro 11
  Olá Sou o texto do quadro 11 Olá Sou o texto do quadro 11
  Sou a descrição do quadro 11 Sou a descrição do quadro 11
  Olá Sou o texto do quadro 11 Olá Sou o texto do quadro 11
  Sou a descrição do quadro 11 Sou a descrição do quadro 11
  `;

  cri.innerHTML = `Jan/2020 - 11`;
  art.innerHTML = `Miguel Canabarro - 11`;
  mod.innerHTML = `Quadro a Óleo - 11`;  
  val.innerHTML = `R$: 1011,00`;
}

function infoModal12() {
  let sqrCurrent12 = document.querySelector("#img12");
  let sqrCurrentWay12 = sqrCurrent12.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay12);

  des.innerHTML = `
  Olá Sou o texto do quadro 12 Olá Sou o texto do quadro 12
  Sou a descrição do quadro 12 Sou a descrição do quadro 12
  Olá Sou o texto do quadro 12 Olá Sou o texto do quadro 12
  Sou a descrição do quadro 12 Sou a descrição do quadro 12
  Olá Sou o texto do quadro 12 Olá Sou o texto do quadro 12
  Sou a descrição do quadro 12 Sou a descrição do quadro 12
  `

  cri.innerHTML = `Jan/2020 - 12`;
  art.innerHTML = `Miguel Canabarro - 12`;
  mod.innerHTML = `Quadro a Óleo - 12`;  
  val.innerHTML = `R$: 1012,00`;
}

function infoModal13() {
  let sqrCurrent13 = document.querySelector("#img13");
  let sqrCurrentWay13 = sqrCurrent13.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay13);

  des.innerHTML = `
  Olá Sou o texto do quadro 13 Olá Sou o texto do quadro 13
  Sou a descrição do quadro 13 Sou a descrição do quadro 13
  Olá Sou o texto do quadro 13 Olá Sou o texto do quadro 13
  Sou a descrição do quadro 13 Sou a descrição do quadro 13
  Olá Sou o texto do quadro 13 Olá Sou o texto do quadro 13
  Sou a descrição do quadro 13 Sou a descrição do quadro 13
  `;

  cri.innerHTML = `Jan/2020 - 13`;
  art.innerHTML = `Miguel Canabarro - 13`;
  mod.innerHTML = `Quadro a Óleo - 13`;  
  val.innerHTML = `R$: 1013,00`;
}

function infoModal14() {
  let sqrCurrent14 = document.querySelector("#img14");
  let sqrCurrentWay14 = sqrCurrent14.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay14);

  des.innerHTML = `
  Olá Sou o texto do quadro 14 Olá Sou o texto do quadro 14
  Sou a descrição do quadro 14 Sou a descrição do quadro 14
  Olá Sou o texto do quadro 14 Olá Sou o texto do quadro 14
  Sou a descrição do quadro 14 Sou a descrição do quadro 14
  Olá Sou o texto do quadro 14 Olá Sou o texto do quadro 14
  Sou a descrição do quadro 14 Sou a descrição do quadro 14
  `;

  cri.innerHTML = `Jan/2020 - 14`;
  art.innerHTML = `Miguel Canabarro - 14`;
  mod.innerHTML = `Quadro a Óleo - 14`;  
  val.innerHTML = `R$: 1014,00`;
}

function infoModal15() {
  let sqrCurrent15 = document.querySelector("#img15");
  let sqrCurrentWay15 = sqrCurrent15.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay15);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal16() {
  let sqrCurrent16 = document.querySelector("#img16");
  let sqrCurrentWay16 = sqrCurrent16.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay16);

  des.innerHTML = `
  Olá Sou o texto do quadro 16 Olá Sou o texto do quadro 16
  Sou a descrição do quadro 16 Sou a descrição do quadro 16
  Olá Sou o texto do quadro 16 Olá Sou o texto do quadro 16
  Sou a descrição do quadro 16 Sou a descrição do quadro 16
  Olá Sou o texto do quadro 16 Olá Sou o texto do quadro 16
  Sou a descrição do quadro 16 Sou a descrição do quadro 16
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal17() {
  let sqrCurrent17 = document.querySelector("#img17");
  let sqrCurrentWay17 = sqrCurrent17.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay17);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal18() {
  let sqrCurrent18 = document.querySelector("#img18");
  let sqrCurrentWay18 = sqrCurrent18.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay18);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal19() {
  let sqrCurrent19 = document.querySelector("#img19");
  let sqrCurrentWay19 = sqrCurrent19.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay19);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal20() {
  let sqrCurrent20 = document.querySelector("#img20");
  let sqrCurrentWay20 = sqrCurrent20.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay20);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal21() {
  let sqrCurrent21 = document.querySelector("#img21");
  let sqrCurrentWay21 = sqrCurrent21.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay21);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal22() {
  let sqrCurrent22 = document.querySelector("#img22");
  let sqrCurrentWay22 = sqrCurrent22.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay22);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal23() {
  let sqrCurrent23 = document.querySelector("#img23");
  let sqrCurrentWay23 = sqrCurrent21.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay23);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal24() {
  let sqrCurrent24 = document.querySelector("#img24");
  let sqrCurrentWay24 = sqrCurrent24.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay24);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal21() {
  let sqrCurrent21 = document.querySelector("#img21");
  let sqrCurrentWay21 = sqrCurrent21.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay21);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal25() {
  let sqrCurrent25 = document.querySelector("#img25");
  let sqrCurrentWay25 = sqrCurrent25.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay25);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal26() {
  let sqrCurrent26 = document.querySelector("#img26");
  let sqrCurrentWay26 = sqrCurrent26.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay26);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal27() {
  let sqrCurrent27 = document.querySelector("#img27");
  let sqrCurrentWay27 = sqrCurrent27.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay27);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal28() {
  let sqrCurrent28 = document.querySelector("#img28");
  let sqrCurrentWay28 = sqrCurrent28.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay28);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal29() {
  let sqrCurrent29 = document.querySelector("#img29");
  let sqrCurrentWay29 = sqrCurrent29.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay29);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal30() {
  let sqrCurrent30 = document.querySelector("#img30");
  let sqrCurrentWay30 = sqrCurrent30.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay30);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal31() {
  let sqrCurrent31 = document.querySelector("#img31");
  let sqrCurrentWay31 = sqrCurrent31.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay31);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal32() {
  let sqrCurrent32 = document.querySelector("#img32");
  let sqrCurrentWay32 = sqrCurrent32.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay32);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal33() {
  let sqrCurrent33 = document.querySelector("#img33");
  let sqrCurrentWay33 = sqrCurrent33.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay33);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal34() {
  let sqrCurrent34 = document.querySelector("#img34");
  let sqrCurrentWay34 = sqrCurrent34.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay34);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal35() {
  let sqrCurrent35 = document.querySelector("#img35");
  let sqrCurrentWay35 = sqrCurrent35.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay35);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal36() {
  let sqrCurrent36 = document.querySelector("#img36");
  let sqrCurrentWay36 = sqrCurrent36.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay36);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal37() {
  let sqrCurrent37 = document.querySelector("#img37");
  let sqrCurrentWay37 = sqrCurrent37.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay37);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal38() {
  let sqrCurrent38 = document.querySelector("#img38");
  let sqrCurrentWay38 = sqrCurrent38.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay38);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal39() {
  let sqrCurrent39 = document.querySelector("#img39");
  let sqrCurrentWay39 = sqrCurrent39.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay39);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}

function infoModal40() {
  let sqrCurrent40 = document.querySelector("#img40");
  let sqrCurrentWay40 = sqrCurrent40.getAttribute('src');
  sqr.setAttribute('src', sqrCurrentWay40);

  des.innerHTML = `
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  Olá Sou o texto do quadro 15 Olá Sou o texto do quadro 15
  Sou a descrição do quadro 15 Sou a descrição do quadro 15
  `;

  cri.innerHTML = `Jan/2020 - 15`;
  art.innerHTML = `Miguel Canabarro - 15`;
  mod.innerHTML = `Quadro a Óleo - 15`;  
  val.innerHTML = `R$: 1015,00`;
}
/* </Modal */