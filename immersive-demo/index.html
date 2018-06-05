<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Be Prepared</title>

    <style>
        /* Always set the map height explicitly to define the size of the div
 * element that contains the map. */

        #map {
            height: 100%;
        }

        /* Optional: Makes the sample page fill the window. */

        html,
        body {
            height: 100%;
            margin: 0;
            padding: 0;
        }

        .map-controls {
            position: absolute;
            bottom: 2em;
            left: 2em;
            z-index: 111;
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" />
</head>

<body>
    <div class="map-controls">
        <button class="massive red ui button js-do-test-btn">
            Become A Preparedness Champion
        </button>
    </div>

    <div id="do-test-modal" class="ui modal">
        <i class="close icon"></i>
        <div class="header">
            Become a community ambassoder
        </div>
        <div class="content">
            <form class="ui form">
                <div class="field">
                    <label>First Name</label>
                    <input type="text" name="first-name" placeholder="First Name">
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name">
                </div>
                <div class="field">
                    <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" class="hidden">
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
            </form>
        </div>
        <div class="actions">
            <div class="ui black deny button js-cancel-form">
                Cancel
            </div>
            <div class="ui positive right labeled icon button js-submit-form">
                Submit
                <i class="checkmark icon"></i>
            </div>
        </div>
    </div>
    <div id="map"></div>

    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.js"></script>
    <!-- Replace the value of the key parameter with your own API key. -->


    <script>
        function initMap() {
            var myLatLng = { lat: -25.363, lng: 131.044 };

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: myLatLng
            });

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hello World!'
            });

            var ballaratLatLng = { lat: -37.5621587, lng: 143.8502556 };
            var ballarat = new google.maps.Marker({
                position: ballaratLatLng,
                map: map,
                title: 'Hello World!'
            });

            var two = new google.maps.Marker({
                position: { lat: -38.5621587, lng: 145.8502556 },
                map: map,
                title: 'Hello World!'
            });

            var three = new google.maps.Marker({
                position: { lat: -37.5621587, lng: 143.5302556 },
                map: map,
                title: 'Hello World!'
            });

            var four = new google.maps.Marker({
                position: { lat: -37.8621587, lng: 143.5302556 },
                map: map,
                title: 'Hello World!'
            });

            $('.js-do-test-btn').click(function () {
                $('.ui.modal')
                    .modal('show')
                    ;
            })

            var callLifx = function (color) {
                console.log('color', color);

                $.ajax({
                    url: 'https://api.lifx.com/v1/lights/d073d5331586/state',
                    type: 'PUT',
                    data: {
                        "power": "on",
                        "fast": false,
                        "color": color
                    },
                    success: function (result) {
                        console.log('success', result);

                        // Do something with the result
                    },
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', 'Bearer c47b609e23b90e6f83d3544b83690cc9bd8c3106f72c4dbc5aaf0b921e5cbc98');
                    }
                });
            }

            $('.js-cancel-form').click(function () {
                callLifx("#FFFFFF");
            })

            $('.js-submit-form').click(function () {
                $('.ui.modal').modal('close');

                var bendigoLatLong = { lat: -37.5621587, lng: 143.6302556 };
                var bendigo = new google.maps.Marker({
                    position: bendigoLatLong,
                    map: map,
                    title: 'Hello World!',
                    icon: 'pin.png'
                });

                map.setZoom(8);
                map.panTo(bendigo.position);

                callLifx("#55AADD saturation:0.5");
            })
        }

    </script>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBzJamYJibeJGvJFnHGDT8p9kkvU9wsa1Q&callback=initMap">
    </script>

</body>

</html>