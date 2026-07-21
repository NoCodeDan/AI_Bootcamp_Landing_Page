/* Treehouse 28-Day AI Bootcamp — landing page interactions */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     "Who this bootcamp is for" — expanding photo slider
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

    // Carousel (Slick): 1 card + dots + swipe at <=963px, where the
    // expanding photo slider no longer fits; the slider shows above that.
    if (window.jQuery && jQuery.fn.slick) {
      var $who = jQuery(slider);
      var mqMobile = window.matchMedia('(max-width: 963px)');
      var syncSlick = function () {
        if (mqMobile.matches) {
          if (!$who.hasClass('slick-initialized')) {
            $who.slick({ infinite: true, arrows: false, dots: true, slidesToShow: 1, slidesToScroll: 1 });
          }
        } else if ($who.hasClass('slick-initialized')) {
          $who.slick('unslick');
        }
      };
      syncSlick();
      if (mqMobile.addEventListener) { mqMobile.addEventListener('change', syncSlick); }
      else if (mqMobile.addListener) { mqMobile.addListener(syncSlick); }
    }
  }
})();
