var daylaSo = 1;
switch (daylaSo) {
  case 1:
    console.log("day la so 1");
    break;
  case 2:
    console.log("day la so 2");

  default:
    console.log("cant read");
    break;
}

// funtion goi ham co the tai su dung
// ham k co tham so
function xuatThongtin() {
  // than ham- noi dung ham
  var daylaSo = 2;

  console.log("hello");
}

// goi ham
xuatThongtin();

function showInfor() {
  var ten = "Duc";
  console.log("Long" + ten);
}
showInfor();
showInfor();

function showInfor(names) {
  console.log("Long" + names);
}

names = " Nguyen";
showInfor(names);

// ham co tham so
function showInfor1(names, age) {
  console.log("Long" + names + " Tuoi " + age);
}

showInfor1(" dep trai", 15);

// tao ham tinh tong ko co tham so

function tinhTong() {
  var so1 = 1;
  var so2 = 2;
  var tongla = so1 + so2;
  console.log("tong la: " + tongla);
}
tinhTong();

function tinhTongthamso(a, b) {
  var total = a + b;
  console.log("tong la " + total);
}

tinhTongthamso(12, 4);

function tinhHieuthamso(a, b) {
  var hieu = a - b;
  console.log("hieu la " + hieu);
}

tinhHieuthamso(50, 12);

function tinhLuong(soNgaylam, luongngay) {
  var tong = soNgaylam * luongngay;
  return tong;
}
salary = tinhLuong(30, 500);
console.log(salary);

// ham litteral
var demoFunction = function () {
  // than ham
  console.log("demoFunction");
};

demoFunction();

function demoClick() {
  console.log("btnClick");
}

// callback function
// document.getElementById("btnClick").onclick=demoClick;

document.getElementById("btnClick").addEventListener("click", function () {
  console.log("btnClick");
});

document.getElementById("btnTaothe").onclick = function () {
  // tao the button new bao vao ben trong the div
  var btnNew =
    "<button onclick='demoNewclick()' class='btn btn-danger'>long dep trai</button>";
  document.getElementById("divContent").innerHTML = btnNew;
};

function demoNewclick() {
  console.log("btnNewclick");
}


// viet ham kiem tra so chan le
function kiemtraSochanle(n){

  if(n%2==0){
   return true;
  } else {
    return false;
  }
}


document.getElementById("txtCheck").onclick=function(){
  var number = document.getElementById("txtNumber").value;
  console.log(number);
  var status=kiemtraSochanle(number)

  if(status){
    document.getElementById("footer_check").innerHTML="day la so chan"
  } else{
    document.getElementById("footer_check").innerHTML="day la so le"
  }
}


// grab
// grab X1