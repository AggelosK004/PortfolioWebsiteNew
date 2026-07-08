import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './LiveProjectButton.css';

interface LiveProjectButtonProps {
  href?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ href, className = '' }) => {
  const circleRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLAnchorElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const activeTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const layout = () => {
      const circle = circleRef.current;
      const container = containerRef.current;
      if (!circle || !container) return;

      const rect = container.getBoundingClientRect();
      const { width: w, height: h } = rect;
      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`
      });

      const label = container.querySelector('.btn-label') as HTMLElement | null;
      const hoverLabel = container.querySelector('.btn-label-hover') as HTMLElement | null;

      if (label) gsap.set(label, { y: 0 });
      if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

      tlRef.current?.kill();
      const tl = gsap.timeline({ paused: true });
      const ease = 'power3.easeOut';

      tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

      if (label) {
        tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
      }

      if (hoverLabel) {
        gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 });
        tl.to(hoverLabel, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
      }

      tlRef.current = tl;
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleEnter = () => {
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease: 'power3.easeOut',
      overwrite: 'auto'
    });
  };

  const handleLeave = () => {
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(0, {
      duration: 0.2,
      ease: 'power3.easeOut',
      overwrite: 'auto'
    });
  };

  return (
    <a
      ref={containerRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`live-project-button inline-flex items-center justify-center rounded-full border-2 border-[#0C0C0C] text-[#0C0C0C] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base ${className}`}
    >
      <span className="hover-circle" aria-hidden="true" ref={circleRef} />
      <span className="label-stack">
        <span className="btn-label">Live Project</span>
        <span className="btn-label-hover" aria-hidden="true">Live Project</span>
      </span>
    </a>
  );
};
