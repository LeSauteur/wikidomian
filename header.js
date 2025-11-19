// header.js - вставка шапки
document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
    <header class="header">
        <div class="container">
            <div class="top-bar">
                <div class="logo-section">
                    <a href="index.html" class="logo-link">
                        <img src="https://i.postimg.cc/sQN2Zcy7/logo.png" alt="Домиан" class="logo-img">
                    </a>
                    <div class="logo-subtitle">СЕТЬ АГЕНТСТВ НЕДВИЖИМОСТИ</div>
                </div>
                <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 15px;">
                    <div class="social-links">
                        <a href="https://vk.com/domian_ru" class="btn secondary">ВКонтакте</a>
                        <a href="https://t.me/Domian_main" class="btn secondary">Телеграм</a>
                    </div>
                </div>
            </div>
            
            <div class="nav-container">
                <nav class="main-nav">
                    <a href="index.html" class="nav-item">Главная</a>
                    <a href="instructions.html" class="nav-item">Инструкции</a>
                    <a href="franchise-folder.html" class="nav-item">Франшизная папка</a>
                    <a href="calculators.html" class="nav-item">Калькуляторы</a>
                    <a href="training.html" class="nav-item">Обучение</a>
                    <a href="services.html" class="nav-item">Полезные сервисы</a>
                </nav>
            </div>
        </div>
    </header>
    `;
    
    // Вставляем шапку в начало body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
