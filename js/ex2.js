/**
 * Khối 1:Inputs
 *   radioDad, radioMom, radioSis, radioBro
 * 
 * Khối 2:
 *   B1: Tạo hàm kiểm tra giá trị của biến who xem là ai và xuất ra lời chào tương ứng
 *   B2: Gắn hàm vào sự kiện click button
 *   B3: Trong hàm : lấy giá trị từ radio
 *   B4: Trong hàm : kiểm tra giá trị biến who
 *   B5: TRong Hàm: Thông báo kết quả lên UI
 * 
 * Khối 3:Output
 *      xuất ra lời chào đúng đối tượng
 *    
 * 
 */


function checkMember(radioDad, radioMom, radioBro, radioSis) {
    var mem ="";
    if (radioDad.checked) {
        mem = "Bố";
    } 
    else if (radioMom.checked) {
        mem = "Mẹ";
    }
    else if (radioBro.checked) {
        mem = "Anh";
    }
    else if (radioSis.checked) {
        mem = "Chị";
    }
    else {
        alert("Ban la ai?")
    }
    return mem;
}
function greeting() {
    var radioDad = document.getElementById("father");
    var radioMom = document.getElementById("mother");
    var radioBro = document.getElementById("brother");
    var radioSis = document.getElementById("sister");
    var mem = checkMember(radioDad, radioMom, radioBro, radioSis);
    document.getElementById("txtGreeting").value = "Xin chào " + mem; 
}
document.getElementById("get").onclick = function () {
    greeting();
}