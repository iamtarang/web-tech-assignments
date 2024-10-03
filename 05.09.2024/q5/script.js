$(document).ready(function () {
    $('#load-data').click(function () {
        $.getJSON('./MOCK_DATA.json', function (data) {
            $('#json-data').html('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
        }).fail(function () {
            $('#json-data').html('Error: Unable to load JSON data');
        });
    });
});