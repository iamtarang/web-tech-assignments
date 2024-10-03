$(document).ready(function () {
    $('#search-button').click(function () {
        const searchTerm = $('#search-input').val();
        if (!searchTerm) {
            alert('Please enter a search term');
            return;
        }

        const apiUrl = 'https://en.wikipedia.org/w/api.php';
        const params = {
            action: 'query',
            list: 'search',
            srsearch: searchTerm,
            format: 'json',
            origin: '*'
        };

        $.ajax({
            url: apiUrl,
            data: params,
            dataType: 'json',
            success: function (data) {
                displayResults(data.query.search);
            },
            error: function (xhr, status, error) {
                $('#search-results').html('<p>Error fetching data. Please try again.</p>');
                console.error('Error:', error);
            }
        });
    });

    function displayResults(results) {
        const resultsContainer = $('#search-results');
        resultsContainer.empty();

        if (results.length === 0) {
            resultsContainer.html('<p>No results found.</p>');
            return;
        }

        results.forEach(function (result) {
            const resultHtml = `
                <div class="result-item">
                    <h3><a href="https://en.wikipedia.org/?curid=${result.pageid}" target="_blank">${result.title}</a></h3>
                    <p>${result.snippet}</p>
                </div>
            `;
            resultsContainer.append(resultHtml);
        });
    }
});