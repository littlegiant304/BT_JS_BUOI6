/**
 * Khối 1:Inputs
 *   canh1, canh2, canh3
 * 
 * Khối 2:
 * 
 *   B1: Trong hàm : lấy giá trị từ input
 *   B2: Tạo hàm kiểm tra giá trị của biến canh1, canh2, canh3 xem có tạo thành tam giác được hay không
 *   B3: Gắn hàm vào sự kiện click button
 *   B4: Trong hàm: Thông báo kết quả lên UI
 * 
 * Khối 3:Output
 *      xuất ra kết quả dự đoán loại tam giác
 * 
 */
function triangle() {
    var loai = "";
    var a = Number(document.getElementById("canh1").value);
    var b = Number(document.getElementById("canh2").value);
    var c = Number(document.getElementById("canh3").value);
    if (a+b>c && a+c>b && b+c>a){
        if (a == b && a == c) {
            loai = "đều";
        }
        else if (a == b || a == c || b == c) {
            loai = "cân";
        }
        else if (a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b) {
            loai = "vuông";
        }
    }
    else{
        alert("Dữ liệu chưa đúng.")
    }
    document.getElementById("ketQuaDuDoan").innerHTML = "Hình tam giác " + loai;
}
document.getElementById("duDoan").onclick = function() {
    triangle();
}