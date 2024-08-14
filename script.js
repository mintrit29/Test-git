$(document).ready(function () {
    $('.info .box img').on('mouseover', function (e) {
        // Lấy thông tin src và alt của ảnh
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');

        // Tạo một bản sao của ảnh với kích thước lớn hơn
        var preview = $('<div id="preview"></div>');
        var image = $('<img src="' + src + '">');
        var caption = $('<p>' + alt + '</p>');

        preview.append(image);
        preview.append(caption);
        $('body').append(preview);

        // Thêm hiệu ứng grayscale cho ảnh gốc
        $(this).addClass("gray");

        // Hiển thị ảnh preview
        $("#preview").fadeIn(300);
    });

    $('.info .box img').on('mousemove', function (e) {
        // Cập nhật vị trí của ảnh preview dựa trên vị trí chuột
        $("#preview").css({
            top: (e.pageY - 10) + "px",
            left: (e.pageX + 30) + "px"
        });
    });

    $('.info .box img').on('mouseleave', function () {
        // Xóa hiệu ứng grayscale và ảnh preview khi chuột rời đi
        $(this).removeClass("gray");
        $("#preview").remove();
    });
});

// Darkmode