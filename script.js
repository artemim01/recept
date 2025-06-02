document.addEventListener('DOMContentLoaded', function() {
    // Define the recipe mappings
    const recipes = {
        'млинці': 'mlynci.html',
        'борщ': 'borsch.html',
        'сирники': 'syrnyky.html',
        'омлет': 'omlet.html',
        'котлети': 'kotlety.html',
        'картопля з грибами': 'kartoplia.html',
        'вареники': 'varenyky.html',
        'голубці': 'holubtsi.html',
        'деруни': 'deruny.html',
        'пампушки': 'pampushky.html',
        'крученики': 'krucheniky.html',
        'печеня': 'печеня.html',
        'куліш': 'куліш.html',
        'сало': 'сало.html',
        'паляниця': 'паляниця.html',
        'капуста': 'капуста.html',
        'гречка': 'гречка.html',
        'плов': 'плов.html',
        'зрази': 'зрази.html',
        'олів’є': 'олів\'є.html',
        'вінегрет': 'вінегрет.html',
        'буженина': 'буженина.html',
        'шпундра': 'шпундра.html',
        'юшка': 'юшка.html',
        'квас': 'квас.html',
        'узвар': 'узвар.html',
        'медовик': 'медовик.html',
        'наполеон': 'наполеон.html',
        'кисіль': 'кисіль.html',
        'торт': 'торт.html',
        'компот': 'компот.html',
        'кисломолочний сир': 'кисломолочний_сир.html',
        'млинці з сиром': 'млинці_з_сиром.html',
        'пиріжки': 'пиріжки.html',
        'ковбаса': 'ковбаса.html',
        'сирна паска': 'сирна_паска.html',
        'суп': 'суп.html',
        'биточки': 'биточки.html',
        'курячі стегенця': 'курячі_стегенця.html',
        'чахохбілі': 'чахохбілі.html',
        'локшина': 'локшина.html',
        'м’ясо по-французьки': 'м\'ясо_по-французьки.html',
        'запіканка': 'запіканка.html',
        'плов з куркою': 'плов_з_куркою.html',
        'овочеве рагу': 'овочеве_рагу.html',
        'салат з буряка': 'салат_з_буряка.html',
        'салат з капусти': 'салат_з_капусти.html',
        'оселедець під шубою': 'оселедець_під_шубою.html',
        'смажена риба': 'смажена_риба.html',
        'квасоля тушкована': 'квасоля_тушкована.html',
        'пшоняна каша': 'пшоняна_каша.html',
        'пельмені': 'пельмені.html',
        'холодець': 'холодець.html',
        'сирники з родзинками': 'сирники_з_родзинками.html'
    };

    // Check if search bar already exists
    if (!document.querySelector('.search-container')) {
        // Create search bar
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <input type="text" id="searchInput" placeholder="Пошук рецептів..." />
            <button id="searchButton">Шукати</button>
        `;

        // Insert search bar above filters
        const filtersDiv = document.querySelector('.filters');
        if (filtersDiv) {
            filtersDiv.parentNode.insertBefore(searchContainer, filtersDiv);
        }
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (recipes[query]) {
            window.location.href = recipes[query];
        } else {
            alert('Рецепт не знайдено. Спробуйте іншу назву.');
        }
    }

    // Search on button click
    searchButton.addEventListener('click', performSearch);

    // Search on Enter key press
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});