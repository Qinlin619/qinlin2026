import React, { useState, useEffect, useCallback } from 'react';

const RIPPLE_DURATION_MS = 520;
// 雨滴 32×32，热点在顶端 (16,2)，几何中心约在 (16,14)，即尖端下方 12px
const RAINDROP_CENTER_OFFSET_Y = 12;

function RippleEffect() {
  const [ripples, setRipples] = useState([]);

  const handleClick = useCallback((e) => {
    const id = Date.now();
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX, y: e.clientY + RAINDROP_CENTER_OFFSET_Y }
    ]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, RIPPLE_DURATION_MS);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);

  return (
    <div className="ripple-container" aria-hidden="true">
      {ripples.map((r) => (
        <div
          key={r.id}
          className="ripple"
          style={{ left: r.x, top: r.y }}
        >
          <span className="ripple-ring" />
          <span className="ripple-ring" />
          <span className="ripple-ring" />
        </div>
      ))}
    </div>
  );
}

export default RippleEffect;
