function showMap(coordinates, placeName) {
    ymaps.ready(function () {
        const [latitude, longitude] = coordinates.split(',');
        const map = new ymaps.Map('map', {
            center: [latitude, longitude],
            zoom: 14
        });
        map.geoObjects.add(new ymaps.Placemark([latitude, longitude], { balloonContent: placeName }));
        map.container.fitToViewport();
    });
}

initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [37.588144, 55.733842],

                // Уровень масштабирования
                zoom: 10
            }
        }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
}

function closeMap() {
    const mapModal = document.getElementById('map-modal');
    mapModal.style.display = 'none';
    document.getElementById('map').innerHTML = '';
}