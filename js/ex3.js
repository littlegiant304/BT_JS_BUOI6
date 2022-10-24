/**
 * Khối 1:Inputs
 *   num1, num2, num3
 * 
 * Khối 2:
 * 
 *   B1: Trong hàm : lấy giá trị từ input
 *   B2: Tạo hàm kiểm tra giá trị của biến num1,num2,num3 xem là số chẵn hay số lẻ
 *   B3: Gắn hàm vào sự kiện click button
 *   B4: Trong hàm: Thông báo kết quả lên UI
 * 
 * Khối 3:Output
 *      xuất ra số số chẵn và số số lẻ
 * 
 */
function checkNum() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    var le = 0;
    if (Number.isInteger(num1) && Number.isInteger(num2) && Number.isInteger(num3)) {
        if (num1%2 == 1) {
            le++;
        }
        if (num2%2 == 1) {
            le++;
        }
        if (num3%2 == 1) {
            le++;
        }
    }
    else{
        alert("Du lieu sai.")
    }
    document.getElementById("find").innerHTML = "Có "+ Number(3-le) + " số chẵn và "+ le + " số lẻ.";
}
document.getElementById("getResult").onclick = function() {
    checkNum();
}