$(document).ready(function () {
    $('#run-demo').click(function () {
        // Reset highlights
        $('.highlight').removeClass('highlight');
        $('#result').empty();

        // 1. children()
        $('#parent-list').children().addClass('highlight');
        $('#result').append("<p>1. Highlighted direct children of #parent-list</p>");

        // 2. find()
        $('#parent-list').find('li').eq(2).addClass('highlight');
        $('#result').append("<p>2. Found and highlighted the 3rd li element</p>");

        // 3. parent()
        $('li:contains("Subitem 1.1")').parent().addClass('highlight');
        $('#result').append("<p>3. Highlighted parent of 'Subitem 1.1'</p>");

        // 4. siblings()
        $('li:contains("Item 2")').siblings().addClass('highlight');
        $('#result').append("<p>4. Highlighted siblings of 'Item 2'</p>");

        // 5. next() and prev()
        $('li:contains("Item 2")').next().addClass('highlight');
        $('li:contains("Item 2")').prev().addClass('highlight');
        $('#result').append("<p>5. Highlighted next and previous siblings of 'Item 2'</p>");

        // 6. closest()
        $('li:contains("Subitem 2.1")').closest('ul').addClass('highlight');
        $('#result').append("<p>6. Highlighted closest ul to 'Subitem 2.1'</p>");
    });
});