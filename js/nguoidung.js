
$(document).ready(function(){
    $("#sidebarCollapse").click(function(){
        $("#sidebar").toggleClass('active');
    });
});

var submitadd = document.getElementById("submit");
 var dataArray = [];

//     đăng ký sự kiện
     if(submitadd != null){
         submitadd.addEventListener("click", function(event){
             event.preventDefault();
             var inputText = document.querySelectorAll("input[type='text'],input[type='number'],input[type='file'],select");
             var item = {};
        //Kiem tra du lieu nhap
             for (var i = 0; i < inputText.length; i++) {
                var _key = inputText[i].id;
                var _val = inputText[i].value;
                if (_val != "") {
                    item[_key] = _val;
                 
                }
            }
             console.log(item);
             location.href ="nguoidung.html";
             _add(item);
         });
     }

function _add(item){
    //Lay du lieu tu localStorage
    var dsnhanvienJSON = localStorage.Nguoi_dung;
    // /Ep kieu tu chuoi (JSON) sang JS object [{},{},{}]
    var dsnhanvienObject =  JSON.parse(dsnhanvienJSON);
    console.log(dsnhanvienObject);
      //Them du lieu vua duoc nhap vao danh sach nguoi dung (Javascript Object)  [{},{},{},          {}]
      dsnhanvienObject = dsnhanvienObject.concat(item);
      console.log(dsnhanvienObject);
      //Convert du lieu thanh String va vao localStorage
      localStorage.Nguoi_dung = JSON.stringify(dsnhanvienObject);
}
/**
 * Chuyen doi du lieu dang co thanh dang String tr td
 * @param {Danh sach Nguoi dung} dataArray
 */
 function html(dataArray) {
    var html;
    if (dataArray.length > 0) {

        for (var i = 0; i < dataArray.length; i++) {
            if (dataArray[i] === undefined) dataArray[i] = "";
            if (dataArray[i].ten === undefined) dataArray[i].ten = "";
            if (dataArray[i].gioi_tinh === undefined) dataArray[i].gioi_tinh = "";
            if (dataArray[i].ngay_tao === undefined) dataArray[i].ngay_tao = "";
            if (dataArray[i].vai_tro === undefined) dataArray[i].vai_tro = "";
            if (dataArray[i].trang_thai === undefined) dataArray[i].trang_thai= "";
       
            if (html === undefined) html = "";
            html += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + dataArray[i].ten + "</td>" +
                "<td>" + dataArray[i].gioi_tinh + "</td>" +
                "<td>" + dataArray[i].ngay_tao + "</td>" +
                "<td>" + dataArray[i].vai_tro + "</td>" +
                "<td>" + dataArray[i].trang_thai + "</td>" +
            
                '<td>' + '<button class="btn btn-danger" onclick="xoa(' + i + ')"> Xóa </button>'+'<button class="btn btn-success " onclick="sua(' + i + ')"  data-toggle="modal" data-target="#exampleModalCenter"> Sửa </button>';
            "</tr>"
        }
    } else {
        html = `
                <tr>
                    <td colspan="10" style="text-align: center">Chưa có người dùng nào hết !!! </td>
                </tr>
            `;
    }
    return html;
}

/***
 * Hien thi du lieu len giao dien (HTML)
 */
function _loadData() {
    //Xet Danh sach nhan vien da co trong localStorage hay chua. Neu chua co thi tao no
    if (!localStorage.Nguoi_dung) {
        //du lieu o dang mang (Array)
        localStorage.Nguoi_dung = JSON.stringify([]);
    }
    //Ep keieu JSON string sang Javascript Object (Mang - Array)
    dataArray = JSON.parse(localStorage.Nguoi_dung);

    setTimeout(function () {
        // $("tbody").html(html(dataArray)); 
        document.querySelector("tbody").innerHTML = html(dataArray);
    }, 250);

}

function xoa(index) {
    dataArray = JSON.parse(localStorage.Nguoi_dung);
   dataArray.splice(index, 1);
   localStorage.Nguoi_dung = JSON.stringify(dataArray);
   _loadData();
}

_loadData();
function sua(index) {
    document.getElementById("submit").style.display = "none";
    document.getElementById("delet").style.display = "none";
    document.getElementById("modal-loading2").style.display = "block";
    document.querySelector("#exampleModalLongTitle > span.stt").innerHTML = index;
    for(var i=0;i<dataArray.length;i++){
        if(i==index){
            var manhanvien = dataArray[i];
            $("#ten").val(manhanvien.ten)
            $("#gioi_tinh").val(manhanvien.gioi_tinh)
            $("#ngay_tao").val(manhanvien.ngay_tao)
            $("#vai_tro").val(manhanvien.vai_tro)
            $("#trang_thai").val(manhanvien.trang_thai)
        
        }
    }
    
}

function savesua() {
    index = parseInt($(".stt").html());
    dataArray = JSON.parse(localStorage.Nguoi_dung);
    for(var i=0;i<dataArray.length;i++){
        if(i==index){
            dataArray[i].ten = $("#ten").val(); 
            dataArray[i].gioi_tinh = $("#gioi_tinh").val();
            dataArray[i].ngay_tao = $("#ngay_tao").val();
            dataArray[i].vai_tro = $("#vai_tro").val();
            dataArray[i].trang_thai = $("#trang_thai").val();      
        }
    }
    localStorage.Nguoi_dung = JSON.stringify(dataArray);
    location.href ="nguoidung.html";
    _loadData();
}
function closee(){
    location.reload();
}
$(document).ready(function(){
    $("#close").click(function(){
        location.reload();
     
    });
    
});

//tim kiem
// function myFunction() {
//     var input, filter, table, td, p, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.querySelector("tbody");
//     td = table.getElementsByTagName("td");
//     for (i = 0; i < td.length; i++) {
//         p = td[i].getElementsByTagName("p")[0];
//         txtValue = p.textContent || p.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//   }

