// main.js - CHỦ ĐỀ HẢI SẢN

/* ======================
   DANH SÁCH 1 – HẢI SẢN CAO CẤP
   ====================== */
const dshaisan1 = [
    {
        id: "tomhum",
        tendv: "Tôm hùm Alaska",
        anh: "ảnh/tomhumalaska.jpg",
        tt1: "Tôm hùm Alaska cao cấp, thịt chắc, ngọt tự nhiên, giàu dinh dưỡng.",
        gia: "3200000",
        category: "Hải sản cao cấp",
        folder: "./ảnh/tomhum",
        imgCount: 1,
    },
    {
        id: "cuabien",
        tendv: "Cua biển Cà Mau",
        anh: "ảnh/cuabiencamau.jpg",
        tt1: "Cua biển tươi sống, nhiều gạch, thịt chắc, đánh bắt trong ngày.",
        gia: "900000",
        category: "Hải sản cao cấp",
        folder: "./ảnh/cua",
        imgCount: 1,
    },
    {
        id: "cahoi",
        tendv: "Cá hồi Nauy",
        anh: "ảnh/cahoinauy.jpg",
        tt1: "Cá hồi Nauy tươi, giàu Omega 3, thích hợp sashimi và nướng.",
        gia: "1500000",
        category: "Hải sản cao cấp",
        folder: "./ảnh/cahoi",
        imgCount: 1,
    },
    {
        id: "cuaalaska",
        tendv: "cua alaska",
        anh: "ảnh/cuaalaska.jpg",
        tt1: " là loại hải sản thượng hạng được săn đón nhờ kích thước khủng và hương vị thịt ngọt lành từ vùng biển lạnh băng giá. ",
        gia: "2500000",
        category: "Hải sản cao cấp",
        folder: "./ảnh/cuaalaska",
        imgCount: 1,
    },
    {
        id: "cangu",
        tendv: "Cá ngừ",
        anh: "ảnh/cangu.jpg",
        tt1: "Đây là loại hải sản có giá trị kinh tế và dinh dưỡng cao, được ưa chuộng với nhiều lợi ích sức khỏe. .",
        gia: "5000000",
        category: "Hải sản cao cấp",
        folder: "./ảnh/cangu",
        imgCount: 1,
    },
    {
        id: "trungcatam",
        tendv: "trứng cá tầm",
        anh: "ảnh/trungcatam.jpg",
        tt1: "món ăn dành cho dới đại gia có rất nhiều chất béo.",
        gia: "100000000",
        category: "Hải sản cao cấp",
        folder: "./ảnh/trungcatam",
        imgCount: 1,
    },
    {
        id: "trungcahoi",
        tendv: "trứng cá hồi",
        anh: "ảnh/trungcahoi.jpg",
        tt1: "nó có thể chế biến thành các món ăn như,sushi,sashimi hoặc ăn trực tiếp.",
        gia: "1000000",
        category: "Hải sản cao cấp",
        folder: "./ảnh/trungcahoi",
        imgCount: 1,
    },
    {
        id: "cuanhen",
        tendv: "cua nhện",
        anh: "ảnh/cuanhen.jpg",
        tt1: "là loài cua lớn nhất hành tinh với sải chân có thể đạt tới gần 4 mét. Chúng là một loại hải sản được ưa chuộng nhờ thịt ngon và bổ dưỡng.",
        gia: "2000000",
        category: "Hải sản cao cấp",
        folder: "./ảnh/cuanhen",
        imgCount: 1,
    },
    {
        id: "haufinedeclaire",
        tendv: "hàu fine de clarie",
        anh: "ảnh/haufinedeclaire.jpg",
        tt1: "Loại hàu cao cấp có nguồn gốc từ Pháp, nổi tiếng với hương vị tinh tế, vị mặn nhẹ của nước biển và hậu vị ngọt kéo dài..",
        gia: "1500000",
        category: "Hải sản cao cấp",
        folder: "./ảnh/haufinedeclaire",
        imgCount: 1,
    },

];

/* ======================
   DANH SÁCH 2 – HẢI SẢN ĐÔNG LẠNH
   ====================== */
const dshaisan2 = [
    {
        id: "mucong",
        tendv: "Mực ống đông lạnh",
        anh: "ảnh/mucongdonglanh.jpg",
        tt1: "Mực ống đông lạnh, giữ nguyên độ tươi, thích hợp chiên và nướng.",
        gia: "700000",
        category: "Hải sản đông lạnh",
        folder: "./ảnh/muc",
        imgCount: 1,
    },
    {
        id: "bachtuoc",
        tendv: "Bạch tuộc đông lạnh",
        anh: "ảnh/bachtuotdonglanh.jpg",
        tt1: "Bạch tuộc đông lạnh, thịt dai giòn, thích hợp xào và nướng.",
        gia: "800000",
        category: "Hải sản đông lạnh",
        folder: "./ảnh/bachtuoc",
        imgCount: 1,
    },
    {
        id: "tomdonglanh",
        tendv: "Tôm đông lạnh",
        anh: "ảnh/tomdonglanh.jpg",
        tt1: "Tôm đông lạnh tiện lợi, phù hợp cho bữa ăn gia đình.",
        gia: "450000",
        category: "Hải sản đông lạnh",
        folder: "./ảnh/tom",
        imgCount: 1,
    },
     {
        id: "catuyetdonglanh",
        tendv: "cá tuyết đông lạnh",
        anh: "ảnh/catuyetdonglanh.jpg",
        tt1: "Cá tuyết đông lạnh là loại hải sản cao cấp, thường được cấp đông sâu (\(-18^{\circ }C\) hoặc thấp hơn) ngay sau khi đánh bắt để giữ nguyên hương vị.",
        gia: "450000",
        category: "Hải sản đông lạnh",
        folder: "./ảnh/catuyetdonglanh",
        imgCount: 1,
    },
    {
        id: "cahoidonglanh",
        tendv: "cá hồi đông lạnh",
        anh: "ảnh/cahoidonglanh.jpg",
        tt1: "Cá hồi đông lạnh là một lựa chọn phổ biến, tiện lợi và vẫn giàu dinh dưỡng.",
        gia: "250000",
        category: "Hải sản đông lạnh",
        folder: "./ảnh/cahoidonglanh",
        imgCount: 1,
    },
     {
        id: "tomtitdonglanh",
        tendv: "tôm tít đông lạnh",
        anh: "ảnh/tomtitdonglanh.jpg",
        tt1: "đông lạnh làm cho tôm tít dữ được hương vị khi vừa mới đánh bát làm cho nó thêm ngon.",
        gia: "200000",
        category: "Hải sản đông lạnh",
        folder: "./ảnh/tomtitdonglanh",
        imgCount: 1,
    },
    {
        id: "cangudonglanh",
        tendv: "cá ngừ đông lạnh",
        anh: "ảnh/cangudonglanh.jpg",
        tt1: "Cá ngừ đông lạnh là lựa chọn phổ biến, tiện lợi và vẫn giữ được hương vị thơm ngon nếu được bảo quản và chế biến đúng cách.",
        gia: "700000",
        category: "Hải sản đông lạnh",
        folder: "./ảnh/cangudonglanh",
        imgCount: 1,
    },
    {
        id: "chancuatuyetdonglanh",
        tendv: "chân cua tuyết đông lạnh",
        anh: "ảnh/chancuatuyetdonglanh.jpg",
        tt1: "Chân cua tuyết đông lạnh là lựa chọn phổ biến nhờ giá thành hợp lý và tiện lợi, thường được đóng gói theo dạng cụm đã hấp chín và cấp đông ngay khi đánh bắt.",
        gia: "720000",
        category: "Hải sản đông lạnh",
        folder: "./ảnh/chancuatuyetdonglanh",
        imgCount: 1,
    },
    {
        id: "mucladonglanh",
        tendv: "mực lá đông lạnh",
        anh: "ảnh/mucladonglanh.jpg",
        tt1: "Mực lá đông lạnh được ưa chuộng nhờ thịt dày và hương vị thơm ngon đặc trưng.",
        gia: "480000",
        category: "Hải sản đông lạnh",
        folder: "./ảnh/mucladonglanh",
        imgCount: 1,
    },
];

/* ======================
   DANH SÁCH 3 – HẢI SẢN TƯƠI SỐNG
   ====================== */
const dshaisan3 = [
    {
        id: "ghexanh",
        tendv: "Ghẹ xanh sống",
        anh: "ảnh/ghexanhsong.jpg",
        tt1: "Ghẹ xanh sống, thịt chắc, ngọt, hấp hoặc nấu lẩu rất ngon.",
        gia: "600000",
        category: "Hải sản tươi sống",
        folder: "./ảnh/ghe",
        imgCount: 1,
    },
    {
        id: "cuasong",
        tendv: "Cua sống loại 1",
        anh: "ảnh/cuasongloai1.jpg",
tt1: "Cua sống loại 1, nhiều thịt, nhiều gạch, giao nhanh trong ngày.",
        gia: "850000",
        category: "Hải sản tươi sống",
        folder: "./ảnh/cuasong",
        imgCount: 1,
    },
    {
        id: "hausu",
        tendv: "Hàu sữa tươi",
        anh: "ảnh/hausuatuoi.jpg",
        tt1: "Hàu sữa tươi béo ngậy, giàu kẽm, thích hợp ăn sống hoặc nướng.",
        gia: "500000",
        category: "Hải sản tươi sống",
        folder: "./ảnh/hau",
        imgCount: 1,
    },
     {
        id: "tomhumbong",
        tendv: "tôm hùm bông",
        anh: "ảnh/tomhumbong.jpg",
        tt1: "tôm hùm bông hay còn gọi là tôm hùm sao, được mệnh danh là vua của các loại tôm hùm nhờ kích thước lớn, thịt chắc ngọt.",
        gia: "1000000",
        category: "Hải sản tươi sống",
        folder: "./ảnh/tomhumbong",
        imgCount: 1,
    },
     {
        id: "cangudaiduong",
        tendv: "cá ngừ đại dương",
        anh: "ảnh/cangudaiduong.jpg",
        tt1: "Đặc sản vùng biển miền Trung thường dùng làm gỏi hoặc steak.",
        gia: "1000000",
        category: "Hải sản tươi sống",
        folder: "./ảnh/cangudaiduong",
        imgCount: 1,
    },
    {
        id: "cakiem",
        tendv: "cá kiếm",
        anh: "ảnh/cakiem.jpg",
        tt1: "có thịt chắc, vị ngọt và không có xương dăm, rất thích hợp cho các bữa cơm gia đình.",
        gia: "1000000",
        category: "Hải sản tươi sống",
        folder: "./ảnh/cakiem",
        imgCount: 1,
    },
     {
        id: "caduoiden",
        tendv: "cá đuối đen",
        anh: "ảnh/caduoiden.jpg",
        tt1: "được giới sành ăn đánh giá là vua của các loài cá đuối nhờ sự khác biệt rõ rệt so với các loại cá đuối thông thường.",
        gia: "180000",
        category: "Hải sản tươi sống",
        folder: "./ảnh/caduoiden",
        imgCount: 1,
    },
    {
        id: "ocmongtay",
        tendv: "ốc móng tay",
        anh: "ảnh/ocmongtay.jpg",
        tt1: "là loại hải sản thân mềm hai mảnh vỏ, nổi tiếng với vị ngọt, thịt giòn dai và hình dáng thon dài như móng tay.",
        gia: "100000",
        category: "Hải sản tươi sống",
        folder: "./ảnh/ocmongtay",
        imgCount: 1,
    },
    {
        id: "ochuong",
        tendv: "ốc hương",
        anh: "ảnh/ochuong.jpg",
        tt1: "là một loại ốc biển có giá trị kinh tế và dinh dưỡng cao, nổi tiếng với thịt dai, ngọt và mùi thơm đặc trưng.",
        gia: "90000",
        category: "Hải sản tươi sống",
        folder: "./ảnh/ochuong",
        imgCount: 1,
    },
];

/* ======================
   DANH SÁCH 4 – HẢI SẢN BÁN CHẠY
   ====================== */
const dshaisan4 = [
    {
        id: "sodiep",
        tendv: "Sò điệp Nhật Bản",
        anh: "ảnh/sodiepnhatban.jpg",
        tt1: "Sò điệp Nhật cao cấp, thịt mềm ngọt, giàu dinh dưỡng.",
        gia: "1800000",
        category: "Hải sản bán chạy",
        folder: "./ảnh/sodiep",
        imgCount: 1,
    },
    {
        id: "ngheusong",
        tendv: "Nghêu sống",
        anh: "ảnh/ngheusong.jpg",
        tt1: "Nghêu sống tươi, ngọt nước, thích hợp nấu canh và hấp sả.",
        gia: "200000",
        category: "Hải sản bán chạy",
        folder: "./ảnh/ngheu",
        imgCount: 1,
    },
    {
        id: "sohuyet",
        tendv: "Sò huyết",
        anh: "ảnh/sohuyet.jpg",
        tt1: "Sò huyết tươi, giàu sắt, chế biến được nhiều món ngon.",
        gia: "350000",
        category: "Hải sản bán chạy",
        folder: "./ảnh/sohuyet",
        imgCount: 1,
    },
    {
        id: "tomcangxanh",
        tendv: "tôm càng xanh",
        anh: "ảnh/tomcangxanh.jpg",
        tt1: "là loại tôm nước ngọt lớn nhất, nổi bật với đôi càng dài màu xanh đặc trưng và thịt chắc, ngọt, dai.",
        gia: "55000",
        category: "Hải sản bán chạy",
        folder: "./ảnh/tomcangxanh",
        imgCount: 1,
    },
    {
        id: "baongu",
        tendv: "bào ngư",
        anh: "ảnh/baongu.jpg",
        tt1: "được ví như nhân sâm của đại dương nhờ giá trị dinh dưỡng vượt trội và hương vị đặc trưng.",
        gia: "250000",
        category: "Hải sản bán chạy",
        folder: "./ảnh/baongu",
        imgCount: 1,
    },
    {
        id: "cachep",
        tendv: "cá chép",
        anh: "ảnh/cachep.jpg",
        tt1: "Thịt cá chép ngọt, dai, giàu dinh dưỡng (protein, collagen, axit amin).",
        gia: "50000",
        category: "Hải sản bán chạy",
        folder: "./ảnh/cachep",
        imgCount: 1,
    },
    {
        id: "cathu",
        tendv: "cá thu",
        anh: "ảnh/cathu.jpg",
        tt1: "Cá thu là nguồn thực phẩm tuyệt vời cung cấp nhiều dưỡng chất thiết yếu cho cơ thể.",
        gia: "50000",
        category: "Hải sản bán chạy",
        folder: "./ảnh/cathu",
        imgCount: 1,
    },
     {
        id: "cadieuhong",
        tendv: "cá diêu hồng",
        anh: "ảnh/cadieuhong.jpg",
        tt1: "đây là loại cá nước ngọt cực kỳ phổ biến trong mâm cơm Việt nhờ thịt trắng, ngọt, ít xương và lành tính.",
        gia: "35000",
        category: "Hải sản bán chạy",
        folder: "./ảnh/cadieuhong",
        imgCount: 1,
    },
    {
        id: "hen",
        tendv: "hến",
        anh: "ảnh/hen.jpg",
        tt1: "Hến là thực phẩm bổ dưỡng,có rất ít chất béo bù lại co rất nhiều vitamin và khoáng chất.",
        gia: "20000",
        category: "Hải sản bán chạy",
        folder: "./ảnh/hen",
        imgCount: 1,
    },
];

/* ======================
   HÀM HIỂN THỊ SẢN PHẨM
   ====================== */
function renderProducts(list, containerId, cardClass, nameClass) {
    const container = document.getElementById(containerId);
    if (!container) return;

    list.forEach(product => {
        const card = document.createElement("div");
        card.classList.add(cardClass);

        card.innerHTML = `
            <img src="${product.anh}" alt="${product.tendv}">
            <div class="${nameClass}">${product.tendv}</div>
            <div class="gia">${parseInt(product.gia).toLocaleString('vi-VN')} VNĐ</div>
        `;

        card.addEventListener("click", () => {
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "product-detail.html";
        });

        container.appendChild(card);
    });
}

/* ======================
   GỌI HIỂN THỊ
   ====================== */
renderProducts(dshaisan1, "danhsach1", "ten-card1", "ten1");
renderProducts(dshaisan2, "danhsach2", "ten-card2", "ten2");
renderProducts(dshaisan3, "danhsach3", "ten-card3", "ten3");
renderProducts(dshaisan4, "danhsach4", "ten-card4", "ten4");

// Hiển thị danh sách 1
const hienthidsdv1 = document.getElementById("danhsach1");
if (hienthidsdv1) {
    dshoa1.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("ten-card1");
        
        card.innerHTML = `
            <img src="${product.anh}" alt="${product.tendv}">
            <div class="ten1">${product.tendv}</div>
            <div class="gia">${parseInt(product.gia).toLocaleString('vi-VN')} VNĐ</div>
        `;
        
        card.addEventListener("click", () => {
            // Lưu sản phẩm vào localStorage
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            // Chuyển đến trang chi tiết
            window.location.href = "product-detail.html";
        });
        
        hienthidsdv1.appendChild(card);
    });
}

// Hiển thị danh sách 2
const hienthidsdv2 = document.getElementById("danhsach2");
if (hienthidsdv2) {
    dshoa2.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("ten-card2");
        
        card.innerHTML = `
            <img src="${product.anh}" alt="${product.tendv}">
            <div class="ten2">${product.tendv}</div>
<div class="gia">${parseInt(product.gia).toLocaleString('vi-VN')} VNĐ</div>
        `;
        
        card.addEventListener("click", () => {
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "product-detail.html";
        });
        
        hienthidsdv2.appendChild(card);
    });
}

// Hiển thị danh sách 3
const hienthidsdv3 = document.getElementById("danhsach3");
if (hienthidsdv3) {
    dshoa3.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("ten-card3");
        
        card.innerHTML = `
            <img src="${product.anh}" alt="${product.tendv}">
            <div class="ten3">${product.tendv}</div>
            <div class="gia">${parseInt(product.gia).toLocaleString('vi-VN')} VNĐ</div>
        `;
        
        card.addEventListener("click", () => {
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "product-detail.html";
        });
        
        hienthidsdv3.appendChild(card);
    });
}

// Hiển thị danh sách 4
const hienthidsdv4 = document.getElementById("danhsach4");
if (hienthidsdv4) {
    dshoa4.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("ten-card4");
        
        card.innerHTML = `
            <img src="${product.anh}" alt="${product.tendv}">
            <div class="ten4">${product.tendv}</div>
            <div class="gia">${parseInt(product.gia).toLocaleString('vi-VN')} VNĐ</div>
        `;
        
        card.addEventListener("click", () => {
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "product-detail.html";
        });
        
        hienthidsdv4.appendChild(card);
    });
}