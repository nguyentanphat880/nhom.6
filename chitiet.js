home = document.getElementById("backhome");
backhome.addEventListener("click", () => {
    window.location.href = "index.html";
});

const dulieunhan = JSON.parse(localStorage.getItem("dulieutrangchu"));

function hienthichitiet(data) {
    if (!data) {
        document.body.innerHTML = "<p>Không tìm thấy dữ liệu địa điểm</p>";
        return;
    }

    let chitietcontainer = document.getElementById("noidung");
    if (!chitietcontainer) {
        chitietcontainer = document.createElement("div");
        chitietcontainer.id = "noidung";
        document.body.appendChild(chitietcontainer);
    }
    
    chitietcontainer.innerHTML = `
        <h1>${data.tendv}</h1>
        <img src="${data.anh}" alt="${data.tendv}" style="width: 100%; max-width: 500px;">
        <p>${data.tt1}</p>
        <div id="image-gallery" style="display: flex; gap: 10px; flex-wrap: wrap;"></div>
    `;
}

window.addEventListener('DOMContentLoaded', () => {
    hienthichitiet(dulieunhan);
});
