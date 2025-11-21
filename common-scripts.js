// common-scripts.js - общие скрипты для всех страниц

// Функция для загрузки HTML компонентов
function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
            // После загрузки компонента, инициализируем необходимые скрипты
            if (file.includes('header')) {
                initializeHeader();
            }
        })
        .catch(error => {
            console.error('Error loading component:', error);
            // Если компонент не загрузился, показываем сообщение
            document.getElementById(id).innerHTML = '<div style="padding: 20px; text-align: center; color: red;">Ошибка загрузки компонента</div>';
        });
}

// Инициализация шапки
function initializeHeader() {
    // Мобильное меню
    const submenuItems = document.querySelectorAll('.has-submenu');
    
    submenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const submenu = this.querySelector('.submenu');
                if (submenu) {
                    submenu.classList.toggle('active');
                    this.classList.toggle('active');
                }
            }
        });
    });
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            submenuItems.forEach(item => {
                if (!item.contains(e.target)) {
                    const submenu = item.querySelector('.submenu');
                    if (submenu) {
                        submenu.classList.remove('active');
                        item.classList.remove('active');
                    }
                }
            });
        }
    });
    
    // Смена цитат
    const businessQuotes = [
        "Ваш успех определяется вашей настойчивостью",
        "Лидерство — это не титул, это действие и пример",
        "Инвестируйте в знания — это приносит наибольшие дивиденды",
        "Успех — это движение от неудачи к неудаче без потери энтузиазма",
        "Единственный способ сделать великую работу — любить то, что вы делаете",
        "Не ждите подходящего момента — создавайте его",
        "Ваше время ограничено, не тратьте его, живя чужой жизнью",
        "Инновации отличают лидера от догоняющего",
        "Самый большой риск — не рисковать вообще",
        "Мечты не работают, пока не работаешь ты",
        "Успех — это 10% вдохновения и 90% пота",
        "Каждая сложная ситуация содержит в себе возможности",
        "Ваша сеть контактов — это ваш чистый капитал",
        "Лучшее время посадить дерево было 20 лет назад. Следующий лучший момент — сейчас",
        "Качество — это не случайность, это результат умственных усилий"
    ];

    function rotateQuotes() {
        const quoteElement = document.querySelector('.quote-text');
        if (!quoteElement) return;
        
        let currentIndex = 0;
        quoteElement.textContent = businessQuotes[currentIndex];
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % businessQuotes.length;
            
            // Анимация смены
            quoteElement.style.opacity = '0';
            quoteElement.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                quoteElement.textContent = businessQuotes[currentIndex];
                quoteElement.style.opacity = '1';
                quoteElement.style.transform = 'translateY(0)';
            }, 300);
            
        }, 5000); // 5 секунд
    }
    
    rotateQuotes();
}

// Загрузка всех компонентов при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, существуют ли контейнеры перед загрузкой
    if (document.getElementById('header-container')) {
        loadComponent('header-container', 'header.html');
    }
    
    if (document.getElementById('footer-container')) {
        loadComponent('footer-container', 'footer.html');
    }
});
