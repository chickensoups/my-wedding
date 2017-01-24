angular.module('wedding-app')
    .controller('AlbumController', function() {
        var self = this;

        this.images = [{
            name: '1.jpg',
            text: 'Được yêu, một sự kiện quan trọng biết bao! Yêu, càng trọng đại hơn nữa! Vì yêu, trái tim trở nên can đảm. Nó chỉ còn toàn những gì thuần khiết, chỉ dựa vào những gì cao thượng và lớn lao.'
        }, {
            name: '2.jpg',
            text: 'Chân lý cuối cùng của ở cuộc đời này là tình yêu có nghĩa là sống và sống là yêu.'
        }, {
            name: '3.jpg',
            text: 'Ái tình không nhìn bằng mắt mà bằng tâm hồn. Vì vậy, nhân loại khắc họa Thần Tình ái có hai cánh nhưng con mắt mù lòa'
        }, {
            name: '4.jpg',
            text: 'Love begins with a smile, grows with a kiss, and ends with a teardrop. Tình yêu bắt đầu với nụ cười, lớn lên với nụ hôn, và kết thúc bằng giọt nước mắt.'
        }, {
            name: '5.jpg',
            text: 'Yêu có nghĩa là đối xử với một ai đó tốt hơn tất cả mọi người, tốt hơn với cả chính bản thân mình.'
        }, {
            name: '6.jpg',
            text: 'Bạn sẽ phải tìm đến ai khi người duy nhất có thể khiến bạn ngừng rơi lệ lại là người khiến bạn khóc?'
        }, {
            name: '7.jpg',
            text: 'Em nhớ anh khi điều gì đó thật sự tốt đẹp xảy ra, bởi anh là người em muốn chia sẻ. Em nhớ anh khi điều gì đó làm em sầu não, bởi anh là người rất hiểu em. Em nhớ anh khi em cười và khóc, bởi em biết anh có thể giúp em nhân lên nụ cười vào lau đi nước mắt. Lúc nào em cũng nhớ anh, nhưng em nhớ anh nhất khi em thao thức trong đêm, nghĩ về tất cả những khoảng thời gian tuyệt vời mà chúng ta ở bên nhau.'
        }, {
            name: '8.jpg',
            text: 'Trên thế gian này chẳng có vị thần nào đẹp hơn thần mặt trời, chẳng có ngọn lửa nào kỳ diệu hơn ngọn lửa tình yêu.'
        }, {
            name: '9.jpg',
            text: 'Hãy để cho người chết đi tìm sự bất tử trong danh vọng và những người sống đi tìm sự bất tử trong tình yêu.'
        }, {
            name: '10.jpg',
            text: 'Không có tình yêu vĩnh cửu mà chỉ có những giây phút vĩnh cửu của tình yêu. Có thể ăn nửa bữa, nửa đêm nhưng không thể đi nửa đường chân lý, yêu bằng nửa trái tim.'
        }, {
            name: '11.jpg',
            text: 'Một ngày anh sẽ yêu em như em yêu anh, một ngày anh sẽ nghĩ về em như em nghĩ về anh, một ngày anh sẽ khóc vì em như em khóc vì anh, một ngày anh sẽ muốn em... nhưng em sẽ không cần anh nữa.'
        }, {
            name: '12.jpg',
            text: 'Có một nghịch lí: Hạnh phúc thật sự chỉ đến khi bạn biết mạnh dạn cho đi – chứ ko phải nắm giữ thật chặt.'
        }, {
            name: '13.jpg',
            text: 'Thường người ta nói mối tình đầu là mối tình đẹp nhất nhưng mối tình cuối cùng mới thực sự là mối tình bất diệt.'
        }, {
            name: '14.jpg',
            text: 'Tình yêu là sự rung cảm của một tâm hồn khi gặp một tâm hồn đồng điệu, là sự hòa nhịp của hai trái tim, làm người ta nhìn thấy mọi vật tươi đẹp hơn.'
        }, {
            name: '15.jpg',
            text: 'Khi một tâm hồn mở ra để đón tình yêu thì bỗng dưng có hàng ngàn cách để biểu lộ tình yêu ấy. Khi hai người yêu nhau, họ không nhìn nhau mà họ cùng nhìn về một hướng.'
        }];
    });
