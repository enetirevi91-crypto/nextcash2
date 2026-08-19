import React from 'react';
import './App.css';

const TG_URL = "https://t.me/NexCash_manager";
const TG_CHANNEL = "https://t.me/+wX7Lv5b7iBE3NzRi";

function ShieldIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 3l8 3v6c0 4.5-3.5 8.5-8 9-4.5-.5-8-4.5-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ClockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function PercentIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <line x1="19" y1="5" x2="5" y2="19" />
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
    </svg>
  );
}

function LockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 018 0v3" />
      <circle cx="12" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
}

function TelegramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.5 3.5L2.5 11l5.5 2 2 6 3-3.5 5 4 3.5-16zM10 14l8-7-10 6.5z" />
    </svg>
  );
}

function ShieldCheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 3l8 3v6c0 4.5-3.5 8.5-8 9-4.5-.5-8-4.5-8-9V6l8-3z" />
    </svg>
  );
}

function ZapIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

function GlobeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18" />
    </svg>
  );
}

function UserIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function MessageIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M21 12a8 8 0 01-8 8H4l2-3a8 8 0 1115-5z" />
    </svg>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="feature">
      {icon}
      <div>
        <div className="feature-title">{title}</div>
        <div className="feature-desc">{desc}</div>
      </div>
    </div>
  );
}

function AdvantageCard({ icon, title, desc, color = "blue" }) {
  return (
    <div className={`advantage-card ${color}`}>
      <div className="advantage-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function StepCard({ num, icon, title, desc, color = "blue" }) {
  return (
    <div className="step-card">
      <div className={`step-num ${color}`}>{num}</div>
      <div className="step-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function TelegramButton({ children, size = "md" }) {
  const sizeClass = size === "lg" ? "btn-lg" : size === "sm" ? "btn-sm" : "btn-md";
  return (
    <a href={TG_URL} target="_blank" rel="noopener noreferrer" className={`telegram-btn ${sizeClass}`}>
      <TelegramIcon className="tg-icon" />
      {children}
    </a>
  );
}

function App() {
  return (
    <div className="page">
      <div className="bg-glow-blue" />
      <div className="bg-glow-green" />
      <div className="bg-lines" />
      <div className="bg-particles" />
      <div className="bg-glow-bottom" />

      <header className="header">
        <div className="header-inner">
          <img src="/logo.png" alt="NexCash" className="header-logo" />
          <TelegramButton size="sm">Написать в Telegram</TelegramButton>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-rings">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="ring ring-3" />
            <div className="ring ring-4" />
            <div className="blast" style={{ '--angle': '0deg', width: '400px', top: '10%', left: '20%', animationDelay: '0s' }} />
            <div className="blast" style={{ '--angle': '45deg', width: '350px', top: '25%', left: '70%', animationDelay: '0.7s' }} />
            <div className="blast" style={{ '--angle': '90deg', width: '500px', top: '15%', left: '50%', animationDelay: '1.3s' }} />
            <div className="blast" style={{ '--angle': '135deg', width: '380px', top: '40%', left: '15%', animationDelay: '2.1s' }} />
            <div className="blast" style={{ '--angle': '180deg', width: '450px', top: '35%', left: '80%', animationDelay: '0.4s' }} />
            <div className="blast" style={{ '--angle': '225deg', width: '320px', top: '55%', left: '30%', animationDelay: '1.8s' }} />
            <div className="blast" style={{ '--angle': '270deg', width: '480px', top: '60%', left: '65%', animationDelay: '2.5s' }} />
            <div className="blast" style={{ '--angle': '315deg', width: '360px', top: '70%', left: '20%', animationDelay: '0.9s' }} />
            <div className="blast" style={{ '--angle': '30deg', width: '420px', top: '75%', left: '75%', animationDelay: '1.5s' }} />
            <div className="blast" style={{ '--angle': '75deg', width: '340px', top: '85%', left: '40%', animationDelay: '2.8s' }} />
            <div className="blast" style={{ '--angle': '120deg', width: '460px', top: '90%', left: '10%', animationDelay: '0.2s' }} />
            <div className="blast" style={{ '--angle': '165deg', width: '390px', top: '95%', left: '55%', animationDelay: '2.2s' }} />
          </div>
          <div className="hero-inner">
            <img src="/mogo.png" alt="NexCash" className="hero-emblem" />
            <h1 className="hero-title">
              ОБМЕН <span className="title-blue">В</span> <span className="title-gradient">ИСПАНИИ</span>
            </h1>
            <p className="hero-subtitle">
              Обмен <span className="green-text">USDT</span> на наличные и наличных на <span className="green-text">USDT</span><br />
              по лучшему курсу
            </p>
            <div className="hero-features">
              <Feature
                icon={<ShieldIcon className="feature-icon" />}
                title="Только при личной встрече"
                desc="Перевод активов только при встрече"
              />
              <Feature
                icon={<ClockIcon className="feature-icon" />}
                title="Быстро и удобно"
                desc="Минимум времени, максимум комфорта"
              />
              <Feature
                icon={<PercentIcon className="feature-icon" />}
                title="Выгодный курс"
                desc="Актуальный курс и лучшие условия"
              />
            </div>
            <div className="hero-cta">
              <TelegramButton size="lg">Написать в Telegram</TelegramButton>
              <p className="cta-sub">Быстрый ответ и консультация</p>
            </div>
          </div>
        </section>

        <section className="safety-banner">
          <div className="safety-left">
            <ShieldCheckIcon className="safety-icon" />
            <div>
              <h2 className="safety-title">ПЕРЕВОД АКТИВОВ ТОЛЬКО ПРИ ВСТРЕЧЕ</h2>
              <p className="safety-text white">Мы ценим вашу безопасность!</p>
              <p className="safety-text gray">Все операции проводятся только при личной встрече.</p>
            </div>
          </div>
          <div className="safety-right">
            <LockIcon className="lock-icon" />
          </div>
        </section>

        <section className="advantages-section">
          <h2 className="section-title">
            <span className="title-line" />
            НАШИ ПРЕИМУЩЕСТВА
            <span className="title-line" />
          </h2>
          <div className="advantages-grid">
            <AdvantageCard
              icon={<PercentIcon className="adv-icon" />}
              title="Без скрытых комиссий"
              desc="Прозрачные условия без дополнительных платежей"
              color="blue"
            />
            <AdvantageCard
              icon={<ZapIcon className="adv-icon" />}
              title="Быстро и удобно"
              desc="Оперативный обмен в удобное для вас время и месте"
              color="green"
            />
            <AdvantageCard
              icon={<GlobeIcon className="adv-icon" />}
              title="Лучшие курсы в Испании"
              desc="Мы предлагаем одни из самых выгодных курсов"
              color="blue"
            />
            <AdvantageCard
              icon={<UserIcon className="adv-icon" />}
              title="Индивидуальный подход"
              desc="Подберём лучшее решение именно для вас"
              color="green"
            />
          </div>
        </section>

        <section className="steps-section">
          <h2 className="section-title">
            <span className="title-line" />
            КАК ЭТО РАБОТАЕТ
            <span className="title-line" />
          </h2>
          <div className="steps-grid">
            <StepCard num={1} icon={<MessageIcon className="step-icon-svg" />} title="Связь" desc="Напишите нам в Telegram для обсуждения деталей" color="blue" />
            <ArrowRightIcon className="step-arrow" />
            <StepCard num={2} icon={<ClockIcon className="step-icon-svg" />} title="Встреча" desc="Договариваемся о месте и времени встречи" color="green" />
            <ArrowRightIcon className="step-arrow" />
            <StepCard num={3} icon={<PercentIcon className="step-icon-svg" />} title="Обмен" desc="Проводим обмен активов только при встрече" color="blue" />
            <ArrowRightIcon className="step-arrow" />
            <StepCard num={4} icon={<ShieldCheckIcon className="step-icon-svg" />} title="Безопасность" desc="Гарантируем вашу безопасность и конфиденциальность" color="green" />
          </div>
        </section>

        <section className="bottom-cta">
          <div className="bottom-cta-inner">
            <div className="bottom-cta-left">
              <div className="cta-circle">
                <TelegramIcon className="cta-tg-icon" />
              </div>
              <div>
                <h2 className="cta-title">ГОТОВЫ К ОБМЕНУ?</h2>
                <p className="cta-desc">Напишите нам в Telegram</p>
                <p className="cta-fast">Ответим быстро!</p>
              </div>
            </div>
            <TelegramButton size="lg">Перейти в Telegram</TelegramButton>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span className="copyright">© 2024 NexCash. Все права защищены.</span>
          <a href={TG_CHANNEL} target="_blank" rel="noopener noreferrer" className="footer-tg">
            <TelegramIcon className="footer-tg-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;