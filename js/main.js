// đầu vào :
// grabX1
const GRABX_1 = 8000;
const GRABX_2 = 7500;
const GRABX_3 = 7000;
const GRABX_WAIT = 2000;
// GRABSUv
const GRABX_SUV_1 = 9000;
const GRABX_SUV_2 = 8500;
const GRABX_SUV_3 = 8000;
const GRABX_SUV_WAIT = 3000;

// GRABBLACK
const GRABX_BLACK_1 = 10000;
const GRABX_BLACK_2 = 9500;
const GRABX_BLACK_3 = 9000;
const GRABX_BLACK_WAIT = 3500;

// bien dat san
var moneyKm_1 = 0;
var moneyKm_2 = 0;
var moneyKm_3 = 0;
var moneyKm_4 = 0;
var totalMoney = 0;
var moneyWait = 0;

// nut tinh tien
document.getElementById("btnTinhtien").onclick = function () {
  var numberKm = document.getElementById("numberKm").value;
  var timeWait = document.getElementById("timeWait").value;
  var typeCar = gettypeCar();
  console.log(typeCar);

  switch (typeCar) {
    case "grab X":
      // tinh tien grabX
      tinhtienChitiet(
        numberKm,
        timeWait,
        GRABX_WAIT,
        GRABX_1,
        GRABX_2,
        GRABX_3
      );

      break;
    case "grab SUV":
      tinhtienChitiet(
        numberKm,
        timeWait,
        GRABX_SUV_WAIT,
        GRABX_SUV_1,
        GRABX_SUV_2,
        GRABX_SUV_3
      );

      break;
    case "grab Black":
      tinhtienChitiet(
        numberKm,
        timeWait,
        GRABX_BLACK_WAIT,
        GRABX_BLACK_1,
        GRABX_BLACK_2,
        GRABX_BLACK_3
      );

      break;

    default:
      alert("please choose type of car!");
      break;
  }
  //   in ket qua
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = totalMoney;
};

// lay loai xe
function gettypeCar() {
  var grabX = document.getElementById("grabX");
  var grabSuv = document.getElementById("grabSUV");
  var grabBlack = document.getElementById("grabBlack");
  var typeCar = "";
  if (grabX.checked) {
    typeCar = "grab X";
  } else if (grabSuv.checked) {
    typeCar = "grab SUV";
  } else if (grabBlack.checked) {
    typeCar = "grab Black";
  }
  return typeCar;
}

// tinh tien cho
function countMoneyWait(timeWait, giaCho) {
  var kq = 0;
  if (timeWait >= 3) {
    kq = Math.floor(timeWait / 3) * giaCho;
  }
  return kq;
}

// tinh tien xe

function tinhKm_1(numberKm, giaKm) {
  var kq = numberKm * giaKm;
  return kq;
}

function tinhKm_2(numberKm, giaKm) {
  var kq = (numberKm - 1) * giaKm;
  return kq;
}

function tinhKm_3(numberKm, giaKm) {
  var kq = (numberKm - 19) * giaKm;
  return kq;
}

// tinh tien chi tiet

function tinhtienChitiet(
  numberKm,
  timeWait,
  moneyWait,
  giaKm_1,
  giaKm_2,
  giaKm_3
) {
  moneyWait = countMoneyWait(timeWait, GRABX_WAIT);

  if (0 <= numberKm && numberKm <= 1) {
    moneyKm_1 = tinhKm_1(numberKm, giaKm_1);
    totalMoney = moneyKm_1 + moneyWait;
  } else if (1 < numberKm && numberKm <= 19) {
    moneyKm_1 = tinhKm_1(1, giaKm_1);
    moneyKm_2 = tinhKm_2(numberKm, giaKm_2);

    totalMoney = moneyKm_1 + moneyKm_2 + moneyWait;
  } else if (numberKm > 19) {
    moneyKm_1 = tinhKm_1(1, giaKm_1);
    moneyKm_2 = tinhKm_2(19, giaKm_2);
    moneyKm_3 = tinhKm_3(numberKm, giaKm_3);
    totalMoney = moneyKm_1 + moneyKm_2 + moneyKm_3 + moneyWait;
  }
}


// in hoa don
document.getElementById("btnHoadon").onclick = function () {
  var content = "";
  var numberKm = document.getElementById("numberKm").value;
  var timeWait = document.getElementById("timeWait").value;
  if (0 <= numberKm && numberKm <= 1) {
    content += "<tr>";
    content += "<td>Km dau tien</td>";
    content += "<td>" + numberKm + "</td>";
    content += "<td>" + GRABX_1 + "</td>";
    content += "<td>" + moneyKm_1 + "</td>";
    content += "</tr>";

    content += "<tr>";
    content += "<td>thoi gian cho</td>";
    content += "<td>" + timeWait + "</td>";
    content += "<td>" + GRABX_WAIT + "</td>";
    content += "<td>" + moneyWait + "</td>";
    content += "</tr>";

    content += "<tr>";
    content += "<td>tong tien</td>";
    content += "<td>" + totalMoney + "</td>";

    content += "</tr>";
    document.getElementById("tbody").innerHTML = content;
  } else if (1 <= numberKm && numberKm <= 19) {
    content += "<tr>";
    content += "<td>Km dau tien</td>";
    content += "<td>" + numberKm + "</td>";
    content += "<td>" + GRABX_1 + "</td>";
    content += "<td>" + moneyKm_1 + "</td>";
    content += "</tr>";

    content += "<tr>";
    content += "<td>thoi gian cho</td>";
    content += "<td>" + timeWait + "</td>";
    content += "<td>" + GRABX_WAIT + "</td>";
    content += "<td>" + moneyWait + "</td>";
    content += "</tr>";

    content += "<tr>";
    content += "<td>tong tien</td>";
    content += "<td>" + totalMoney + "</td>";

    content += "</tr>";
    document.getElementById("tbody").innerHTML = content;
  } else if (numberKm > 19) {
    content += "<tr>";
    content += "<td>Km dau tien</td>";
    content += "<td>" + numberKm + "</td>";
    content += "<td>" + GRABX_1 + "</td>";
    content += "<td>" + moneyKm_1 + "</td>";
    content += "</tr>";

    content += "<tr>";
    content += "<td>thoi gian cho</td>";
    content += "<td>" + timeWait + "</td>";
    content += "<td>" + GRABX_WAIT + "</td>";
    content += "<td>" + moneyWait + "</td>";
    content += "</tr>";

    content += "<tr>";
    content += "<td>tong tien</td>";
    content += "<td>" + totalMoney + "</td>";

    content += "</tr>";
    document.getElementById("tbody").innerHTML = content;
  }
};
