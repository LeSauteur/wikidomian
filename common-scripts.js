// Функция для принудительного применения критических стилей
function applyCriticalStyles() {
    // Принудительно применяем стили к логотипу
    const logos = document.querySelectorAll('.logo-img');
    logos.forEach(logo => {
        logo.style.maxHeight = '60px';
        logo.style.width = 'auto';
        logo.style.transform = 'none';
        logo.style.display = 'block';
    });
    
    // Принудительно применяем стили к красной полосе
    const headers = document.querySelectorAll('.header');
    headers.forEach(header => {
        if (header.style) {
            header.style.position = 'relative';
        }
    });
    
    // Принудительно применяем структуру top-row
    const topRows = document.querySelectorAll('.top-row');
    topRows.forEach(row => {
        row.style.display = 'flex';
        row.style.justifyContent = 'space-between';
        row.style.alignItems = 'center';
    });
}

// Обновите функцию loadComponent:
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
            
            // УДАЛЯЕМ ДУБЛИКАТЫ ПОСЛЕ ЗАГРУЗКИ КАЖДОГО КОМПОНЕНТА
            removeDuplicateElements();
            
            // ПРИМЕНЯЕМ КРИТИЧЕСКИЕ СТИЛИ
            setTimeout(applyCriticalStyles, 100);
            
            // После загрузки компонента, инициализируем необходимые скрипты
            if (file.includes('header')) {
                initializeHeader();
            }
        })
        .catch(error => {
            console.error('Error loading component:', error);
            document.getElementById(id).innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">Компонент загружается...</div>';
        });
}

// И в DOMContentLoaded добавьте:
document.addEventListener('DOMContentLoaded', function() {
    // УДАЛЯЕМ ДУБЛИКАТЫ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
    removeDuplicateElements();
    
    // Проверяем, существуют ли контейнеры перед загрузкой
    if (document.getElementById('header-container')) {
        loadComponent('header-container', 'header.html');
    }
    
    if (document.getElementById('footer-container')) {
        loadComponent('footer-container', 'footer.html');
    }
    
    // ФИНАЛЬНАЯ ПРОВЕРКА
    setTimeout(() => {
        removeDuplicateElements();
        applyCriticalStyles();
    }, 1000);
});
// common-scripts.js - общие скрипты для всех страниц

// Функция для удаления дублирующихся шапок и подвалов
function removeDuplicateElements() {
    // Удаляем дублирующиеся шапки (оставляем только первую)
    const headers = document.querySelectorAll('header.header');
    if (headers.length > 1) {
        console.log('Найдены дублирующиеся шапки, удаляем лишние...');
        for (let i = 1; i < headers.length; i++) {
            headers[i].remove();
        }
    }
    
    // Удаляем дублирующиеся подвалы (оставляем только первый)
    const footers = document.querySelectorAll('footer');
    if (footers.length > 1) {
        console.log('Найдены дублирующиеся подвалы, удаляем лишние...');
        for (let i = 1; i < footers.length; i++) {
            footers[i].remove();
        }
    }
    
    // Удаляем дублирующиеся баннер-ссылки (оставляем только первую)
    const bannerLinks = document.querySelectorAll('.banner-link');
    if (bannerLinks.length > 1) {
        console.log('Найдены дублирующиеся баннер-ссылки, удаляем лишние...');
        for (let i = 1; i < bannerLinks.length; i++) {
            bannerLinks[i].remove();
        }
    }
    
    // Удаляем дублирующиеся контакты франшизного отдела (оставляем только первый)
    const franchiseContacts = document.querySelectorAll('.franchise-contacts');
    if (franchiseContacts.length > 1) {
        console.log('Найдены дублирующиеся контакты, удаляем лишние...');
        for (let i = 1; i < franchiseContacts.length; i++) {
            franchiseContacts[i].remove();
        }
    }
}

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
            
            // УДАЛЯЕМ ДУБЛИКАТЫ ПОСЛЕ ЗАГРУЗКИ КАЖДОГО КОМПОНЕНТА
            removeDuplicateElements();
            
            // После загрузки компонента, инициализируем необходимые скрипты
            if (file.includes('header')) {
                initializeHeader();
            }
        })
        .catch(error => {
            console.error('Error loading component:', error);
            document.getElementById(id).innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">Компонент загружается...</div>';
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
        "Мечты не работают, пока не работаешь ты"
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
            
        }, 5000);
    }
    
    rotateQuotes();
}

// Загрузка всех компонентов при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // УДАЛЯЕМ ДУБЛИКАТЫ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ (на всякий случай)
    removeDuplicateElements();
    
    // Проверяем, существуют ли контейнеры перед загрузкой
    if (document.getElementById('header-container')) {
        loadComponent('header-container', 'header.html');
    }
    
    if (document.getElementById('footer-container')) {
        loadComponent('footer-container', 'footer.html');
    }
    
    // ФИНАЛЬНАЯ ПРОВЕРКА - удаляем дубликаты через секунду после загрузки
    setTimeout(removeDuplicateElements, 1000);
});
