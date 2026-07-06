/* Treehouse 28-Day AI Bootcamp — landing page interactions */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     1. Sticky CTA bar — slides in after ~12% scroll depth
     --------------------------------------------------------- */
  var stickyBar = document.getElementById('stickyBar');
  if (stickyBar) {
    var onScroll = function () {
      var threshold = document.documentElement.scrollHeight * 0.12;
      var scrolled = window.scrollY > Math.max(600, threshold);
      if (scrolled) {
        if (!stickyBar.classList.contains('is-visible')) {
          stickyBar.hidden = false;
          stickyBar.classList.add('is-visible');
        }
      } else if (stickyBar.classList.contains('is-visible')) {
        stickyBar.classList.remove('is-visible');
        stickyBar.hidden = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------------------------------------------------------
     2. 28-day strip — one solid color per week (weekends included)
     --------------------------------------------------------- */
  var weekColors = [
    { bg: '#1EA7FD', fg: '#FFFFFF' },
    { bg: '#FFD23F', fg: '#1B2733' },
    { bg: '#5FCF80', fg: '#FFFFFF' },
    { bg: '#1B2733', fg: '#FFFFFF' }
  ];
  var weekNames = [
    'Week 1 · Foundations: Chat tools and prompting',
    'Week 2 · Foundations: Advanced prompting and builder tools',
    'Week 3 · Build your MVP',
    'Week 4 · Polish and launch your idea'
  ];
  var dayStrip = document.getElementById('dayStrip');
  if (dayStrip) {
    for (var i = 0; i < 28; i++) {
      var week = Math.floor(i / 7);
      var c = weekColors[week];
      var cell = document.createElement('div');
      cell.className = 'day-cell';
      cell.style.background = c.bg;
      cell.style.color = c.fg;
      cell.title = weekNames[week];
      cell.textContent = String(i + 1);
      dayStrip.appendChild(cell);
    }
  }

  /* ---------------------------------------------------------
     3. "Who this bootcamp is for" — expanding photo slider
     --------------------------------------------------------- */
  var whoData = [
    { label: 'AI curious',    desc: 'Heard a lot about AI, touched very little of it. The perfect starting point.', src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80' },
    { label: 'Career focused', desc: 'Adding real AI skills to your resume and your day job.', src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80' },
    { label: 'Generalists',   desc: 'Good at many things, ready to build with all of them.', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80' },
    { label: 'Indie hackers', desc: 'That side project idea has been waiting for exactly this.', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&crop=faces&w=900&h=1200&q=80' },
    { label: 'Creatives',     desc: 'Designers, writers, and makers who want working prototypes.', src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80' },
    { label: 'You!',          desc: "Whether you're technical or not, if you want to build, this is for you.", src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80' }
  ];
  var slider = document.getElementById('whoSlider');
  if (slider) {
    var cards = whoData.map(function (d, idx) {
      var card = document.createElement('div');
      card.className = 'who-card' + (idx === 0 ? ' is-active' : '');
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-pressed', idx === 0 ? 'true' : 'false');
      card.setAttribute('aria-label', d.label);

      var img = document.createElement('img');
      img.className = 'who-card__img';
      img.src = d.src;
      img.alt = d.label;
      img.loading = 'lazy';

      var scrim = document.createElement('div');
      scrim.className = 'who-card__scrim';

      var caption = document.createElement('div');
      caption.className = 'who-card__caption';
      var label = document.createElement('div');
      label.className = 'who-card__label';
      label.textContent = d.label;
      var desc = document.createElement('div');
      desc.className = 'who-card__desc';
      desc.textContent = d.desc;
      caption.appendChild(label);
      caption.appendChild(desc);

      var accent = document.createElement('div');
      accent.className = 'who-card__accent';

      card.appendChild(img);
      card.appendChild(scrim);
      card.appendChild(caption);
      card.appendChild(accent);

      var activate = function () {
        cards.forEach(function (el) {
          el.classList.remove('is-active');
          el.setAttribute('aria-pressed', 'false');
        });
        card.classList.add('is-active');
        card.setAttribute('aria-pressed', 'true');
      };
      card.addEventListener('click', activate);
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate();
        }
      });

      slider.appendChild(card);
      return card;
    });
  }
})();
