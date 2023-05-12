function getEle(id) {
    return document.getElementById(id);
}


// khai báo mảng
var listNumber = [];

/**
 *   Add Number
 */
getEle("btnThemSo").onclick = function () {

    // Dome tới thẻ imput # NhapSo lấy value
    var number = getEle("NhapSo").value * 1;

    // Thêm phần tử vào mảng listNumber
    listNumber.push(number);

    getEle("footerCard").innerHTML = listNumber;

};


/**
 * Tổng Số Dương
 * 0. Tạo biến tích lũy total = 0
 * 1. Duyệt mảng  listNumber
 * 2. Kiếm tra phần tử trong mảng là số dương
 * 3. Nếu true => tích lũy phần tử vô biến total 
 * 4. Show kết quả
 */

getEle("btnTongSoDuong").onclick = function () {
    if (listNumber.length === 0) {
        return;
    }

    var total = 0;

    for (var i = 0; i < listNumber.length; i++) {
        var item = listNumber[i];
        if (item > 0) {
            total += item
        }
    }
    getEle("footerCard1").innerHTML = ("Tổng số dương: " + total);
}

/**
 * Dếm số dương
 * 0. Tạo biến tích lũy count = 0
 * 1. Duyệt mảng  listNumber
 * 2. Kiếm tra phần tử trong mảng là số dương ( lớn hơn 0)
 * 3. Nếu true => tăng biến count 1 đơn vị
 * 4. Show kết quả
 */


getEle("btnDemSoDuong").onclick = function () {
    if (listNumber.length === 0) {
        return;
    }

    var count = 0;

    for (i = 0; i < listNumber.length; i++) {

        var item = listNumber[i];
        if (item > 0) {
            count += 1;
        }
    }
    getEle("footerCard1").innerHTML = ("Số dương: " + count);

}

/**
 * Tìm Số Nhỏ Nhất
 */

getEle("btnSoNhoNhat").onclick = function () {
    if (listNumber.length === 0) {
        return;
    }

    var min = listNumber[0];

    for (i = 1; i < listNumber.length; i++) {
        if (min > listNumber[i])
            min = listNumber[i];
    }
    getEle("footerCard1").innerHTML = ("Số nhỏ nhất: " + min);

}


/**
 * Tìm Số dương Nhỏ Nhất
 */

var CacSoDuong = 0;


getEle("btnSoDuongNhoNhat").onclick = function () {
    if (listNumber.length === 0) {
        return;
    }


    for (i = 0; i < listNumber.length; i++) {

        if (listNumber[i] > 0) {
            CacSoDuong = listNumber[i];
        }
    }

    for (i = 0; i < listNumber.length; i++) {
        if (CacSoDuong > listNumber[i] && listNumber[i] > 0) {
            CacSoDuong = listNumber[i]
        }
    }
    getEle("footerCard1").innerHTML = ("Số dương nhỏ nhất: " + CacSoDuong);

}



/**
 * Tìm Số chẵn cuối cùng
 */

var lastEven = 0;

getEle("btnSoChanCuoiCung").onclick = function () {
    if (listNumber.length === 0) {
        return;
    }


    for (i = 0; i < listNumber.length; i++) {
        if (listNumber[i] % 2 == 0) {
            lastEven = listNumber[i];
        }
    }
    getEle("footerCard1").innerHTML = ("Số chẵn cuối cùng: " + lastEven);
}


/**
 * Đổi chỗ 2 giá trị trong mảng theo vị trí 
 */





/**
 * Sắp xếp mảng theo thứ tự tăng dần.
 */

getEle("btnSapXep").onclick = function () {
    if (listNumber.length === 0) {
        return;
    }


    listNumber.sort(function (a, b) { return a - b });

    getEle("footerCard1").innerHTML = ("Mảng sau khi sắp xếp: " + listNumber);

}


/**
 * Tìm Số Nguyên Đầu Tiên
 */








/**
 * Đếm Số Nguyên
 */

getEle("btnDemSoNguyen").onclick = function () {
    if (listNumber.length === 0) {
        return;
    }

    var count = 0;

    for (i = 0; i < listNumber.length; i++) {

        var item = listNumber[i];
        if (item >= 0) {
            count += 1;         
        }else if (item <= 0) {
            count += 1;
        }
    }
    getEle("footerCard1").innerHTML = ("Số dương: " + count);

}


/**
 * So Sánh
 */

