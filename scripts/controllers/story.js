angular.module('wedding-app')
    .controller('StoryController', function() {
        var self = this;

        var badgeClasss = ['info', 'warning', 'danger', 'primary', 'success'];

        // optional: not mandatory (uses angular-scroll-animate)
        this.animateElementIn = function($el) {
            $el.removeClass('timeline-hidden');
            $el.addClass('bounce-in');
        };

        // optional: not mandatory (uses angular-scroll-animate)
        this.animateElementOut = function($el) {
            $el.addClass('timeline-hidden');
            $el.removeClass('bounce-in');
        };

        this.events = [{
            showed: true,
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-check',
            title: '30/05/2014',
            content: 'Lần đầu tiên gặp em.',
            img: 'start.png'
        }, {
            showed: true,
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-asterisk',
            title: '01/07/2014',
            content: 'Em thơm trộm anh sau đó chạy gần chết =.=',
            img: 'cheek.png'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-heart',
            title: '13/07/2014',
            content: 'First kiss',
            img: 'kiss.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-glass',
            title: '30/07/2014',
            content: 'Em làm cho anh một hộp cơm tuyệt đẹp kỉ niệm 2 tháng quen nhau nhưng rất tiếc là nhầm ngày :))',
            img: 'hopcom.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-fullscreen',
            title: '02/09/2014',
            content: 'Đi xem bắn pháo hoa tại hồ Văn Quán',
            img: 'phaohoa.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-flash',
            title: '15/09/2014',
            content: 'Ngày tỏ tình hj hj',
            img: 'totinh.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-tree-conifer',
            title: '24/12/2014',
            content: 'Noel đầu tiên cùng nhau',
            img: '01-noel-2014.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-home',
            title: '07 tháng Giêng năm Ất Mùi',
            content: 'Lần đầu tiền anh đến nhà em + đi chơi chợ Viềng + nhà thờ đá',
            img: 'phatdiem1.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-camera',
            title: '06/2015',
            content: 'Anh đưa em đi chụp ảnh kỷ yếu',
            img: '00-kyyeu1.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-bullhorn',
            title: '09/2015',
            content: 'Khai trương Dream House Long Biên',
            img: 'khaitruong-dhhd.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-plane',
            title: '10/11/2015',
            content: 'Dắt nhau sang Trung Quốc',
            img: 'trungquoc.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-bell',
            title: '24/12/2015',
            content: 'Nodel thứ 2 tại nhà anh',
            img: 'noelthu2.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-tint',
            title: '07 tháng Giêng năm Bính Thân',
            content: 'Về nhà em chơi + đi du lịch Tràng An',
            img: 'trangan.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-share',
            title: '05/2016',
            content: 'Anh cùng em đi chơi tại đền thượng Ba Vì, Thành cổ Sơn Tây (lần đầu tiên lên trời)',
            img: 'quocgiabavi.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-certificate',
            title: '07/2016',
            content: 'Đi du lịch Sầm Sơn',
            img: 'samson3.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-gift',
            title: '09/2016',
            content: 'Em tặng anh con Jen',
            img: 'conjen.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-random',
            title: '10/2016',
            content: 'Chia tay chị Phương (chị Phương bỏ cuộc chơi về với chồng)',
            img: 'chiataychiphuong.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-fire',
            title: '10/2016',
            content: 'Em đi làm tóc mới (cắt, uốn, xấy hấp các kiểu)',
            img: 'suatoc.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-user',
            title: '10/2016',
            content: '2 đứa đi khám sức khỏe',
            img: 'khamsuckhoe.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-tags',
            title: '05/11/2016',
            content: 'Anh kéo gia đình đi đặt cơi trầu tại nhà em',
            img: 'giamtrau.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-registration-mark',
            title: '15/11/2016',
            content: 'Đăng ký kết hôn',
            img: 'signup.gif'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-plus',
            title: '17/11/2016',
            content: 'Lễ cưới tại nhà thờ',
            img: 'lecuoi.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-picture',
            title: '12/2016',
            content: 'Đi chụp anh cưới',
            img: 'dichupanhcuoi.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-bell',
            title: '24/12/2016',
            content: 'Noel cuối cùng trước khi cưới nhau',
            img: 'noel-2016.jpg'
        }, {
            badgeClass: badgeClasss[Math.floor(Math.random() * badgeClasss.length)],
            badgeIconClass: 'glyphicon-forward',
            title: 'Feature...',
            content: 'To be continue...!',
            img: 'continued.jpg'
        }];
    });
