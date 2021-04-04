$(document).ready(function() {

    //выбираем значение инпута и вставлеям в заголовок выпадающего меню
    $('input[name=type]').change(function () {
        $(".color__type").text(this.value);
    })
   // показываем/скрываем список выбора формы
    $('.color__head').on('click', function () {
        $('.color__drop-list').toggleClass('showDropList');
    })
    // имитируем клик на иконку цвета при открывании выбора формы чтобы получить первый url
    $(document).one('mousemove', function(){
        $('.color__ordinary-box').find('.color__ordinary-img').first().addClass('isActiveColor').click();
    })

// показываем детальную картинку
    function changeColors() {
        let colorName;
        const round = 'kryg';
        const square = 'kvadrat';
        const heating = 'romb';
        // получаем название кружочка
        function imageName() {
            $('.color__ordinary-img').each(function () {
                $(this).on('click', function () {
                    $('.color__ordinary-img').removeClass('isActiveColor'); // убираем активный класс у всех кружочков
                    $(this).addClass('isActiveColor'); // добавляем активный класс кружочку на который кликнули
                        // убираем лишнее из названия
                        let src = $(this).attr('src').split('/');
                        let colorNameIcon = src[src.length - 1].split('.')[0].replace(/\.*/, '');
                        colorName = colorNameIcon;
                    // меняем url детальной картинки при клике на кружочек
                    if($('#modelTypeRound').is(':checked')){
                        detailPhotoClear();
                        $('.color__left img').attr("src", `./assets/images/detail/${ colorName }_${ round }.png`);
                    }else if($('#modelTypeSquare').is(':checked')){
                        detailPhotoClear();
                        $('.color__left img').attr("src", `./assets/images/detail/${ colorName }_${square}.png`);
                    }else if($('#modelTypeHeating').is(':checked')){
                        detailPhotoClear();
                        $('.color__left img').attr("src", `./assets/images/detail/${ colorName }_${heating}.png`);
                    }
                })
            })
        }
        imageName();

        // Выбор типа Круглый/ Квадратный/ Отопительный
        function selectType() {
            // при клике меняем url детальной картинки
            $('#modelTypeRound').on("click", function () {
                detailPhotoClear();
                $('.color__left img').attr("src", `./assets/images/detail/${ colorName }_${ round }.png`);
            });
            $('#modelTypeSquare').on("click", function () {
                detailPhotoClear();
                $('.color__left img').attr("src", `./assets/images/detail/${ colorName }_${square}.png`);
            });
            $('#modelTypeHeating').on("click", function () {
                detailPhotoClear();
                $('.color__left img').attr("src", `./assets/images/detail/${ colorName }_${heating}.png`);
            });
        }
        selectType();

        //очищаем детальную картинку
        function detailPhotoClear() {
            $(".color__left img").removeAttr("src");
        }
    }
    changeColors();

    //выбираем цветовые группы strange

    $('.color__group-choose').each(function(index){
        $(this).on('click', function(){
            $('.color__group-choose').removeClass('isActiveGroupTab'); // убираем обводку таба
            $('.color__number').removeClass('isActiveGroup'); //убираем контент
            $(this).addClass('isActiveGroupTab'); // добавдяем обводку таба
            // выводим контент
            if(index === 0){
                $('.color__strange-10').addClass('isActiveGroup');
                $('.color__strange-10').find('.color__ordinary-img').first().addClass('isActiveColor').click();
            }else if( index === 1){
                $('.color__strange-20').addClass('isActiveGroup');
                $('.color__strange-20').find('.color__ordinary-img').first().addClass('isActiveColor').click();
            }else if( index === 2){
                $('.color__strange-30').addClass('isActiveGroup');
                $('.color__strange-30').find('.color__ordinary-img').first().addClass('isActiveColor').click();
            }
        })
    })
//табы выбора Норм цвета  / strange
    // функция сброса значений
    function clearColorTab() {
        $('.color__box').hide(); // убираем блок с контентом
        $('.color__tab').removeClass('isActiveTab'); // убираем цвет кнопки
    }

    function ColorTabs() {
        // таб норм цвета
        $('#ordinary').on('click', function () {
            clearColorTab();
            $(this).addClass('isActiveTab');
            $('.color__strange').hide();
            $('.color__ordinary').show();
            $('.color__ordinary-box').find('.color__ordinary-img').first().addClass('isActiveColor').click(); // имитируем клик по первому кружку для получения url
        });
        // таб strange
        $('#strange').on('click', function () {
            clearColorTab();
            $(this).addClass('isActiveTab');
            $('.color__ordinary').hide();
            $('.color__strange').show();
            $('.color__strange-box').find('.color__ordinary-img').first().addClass('isActiveColor').click(); // имитируем клик по первому кружку для получения url
            $('.color__strange-box').find('.isActiveGroup .color__ordinary-img').first().addClass('isActiveColor').click(); // имитируем клик по первому кружку для получения url
        });
    }
    ColorTabs();
});