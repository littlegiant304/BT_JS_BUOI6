/**
 * Khối 1:Inputs
 *   num1, num2, num3
 * 
 * Khối 2:
 *   B1: Tạo hàm sắp xếp 3 số
 *   B2: Gắn hàm vào sự kiện click button 
 *   B3: Trong hàm : lấy giá trị từ form
 *   B4: Trong hàm : sắp xếp
 *   B5: TRong Hàm: Thông báo kết quả lên UI
 * 
 * Khối 3:Output
 *    3 số đã sắp xếp xong
 *    
 * 
 */


function Sort() {
    var x = Number(document.getElementById("number1").value);
    var y = Number(document.getElementById("number2").value);
    var z = Number(document.getElementById("number3").value);
    if (x>y && x>z)
{
        if (y>z)
        {
            document.getElementById("txtResult").value = z + ", " + y + ", " +x;
        }
        else
        {
            document.getElementById("txtResult").value = y + ", " + z + ", " +x;
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
            document.getElementById("txtResult").value = z + ", " + x + ", " +y;
        }
        else
        {
            document.getElementById("txtResult").value = x + ", " + z + ", " +y;
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            document.getElementById("txtResult").value = y + ", " + x + ", " +z;
        }
        else
        {
            document.getElementById("txtResult").value = x + ", " + y + ", " +z;
        }
// alert (z + ", " + y + ", " +x)
}        
}
document.getElementById("btnSapXep").onclick = Sort;
