//bài tập 1: tìm số nguyên dương nhỏ nhất sao cho: 1+2+...>10000
function timSoNguyenDuongNhoNhat () {
    //lay du lieu nguoi dùng
    var nhapSoBatKi = document.getElementById("nhapSo1").value * 1;
    // console.log(nhapSoBatKi);
    // bước xử lí:
    var ketQua = 0;
    while (nhapSoBatKi <10000) {
        nhapSoBatKi += 1 ;
        ketQua ++;

    }
    document.getElementById("ketQua1").innerHTML = ketQua;
}

// bài tập 2:hãy giải bài tập vòng lặp: viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + ...x^n ( xử dụng vòng lặp và hàm)

function cauHai () {

    var soX = document.getElementById("nhapSoX").value * 1;
    var soN = document.getElementById("nhapSoN").value * 1;

    // các bước xử lý :
    var tinhTong = 0;

    for(var i=1;i <= soN;i++) {
       
        tinhTong += Math.pow(soX,i);
    }

    console.log(tinhTong);
    document.getElementById("ketQuaHai").innerHTML = tinhTong;
}





// bài tập3 : Nhập vào n. Tính giai thừa 1*2*...n
document.getElementById('btnTinhGiaiThua').onclick = function () {
  // input: number
  var nhapSo = Number(document.getElementById('nhapSo3').value);
  // output: giaThua = 1;
  var giaiThua = 1;

  var giaTri = 1;

while(giaTri <= nhapSo) {
    //bước xử lí
    giaiThua *= giaTri;
    giaTri ++;

}
document.getElementById('ketQua3').innerHTML = giaiThua;

}


// bài tập 4 :Viết chương trình khi click vào button tạo ra 10 thẻ div. div chẵn bg đỏ và lẻ bg xanh 
function bai4() {

    var bienDiv = document.querySelectorAll("#ketQua4 .div");

    for(var i = 0;i <= 10;i++){
        if(i % 2 == 0){
            bienDiv[i].style.background = "red";
        } else{
            bienDiv[i].style.background = "blue";
        }
    }
}


