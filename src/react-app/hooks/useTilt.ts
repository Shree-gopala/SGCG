import { useCallback, useState, type CSSProperties, type MouseEvent } from "react";

export default function useTilt(strength = 5) {
  const [style, setStyle] = useState<CSSProperties>({});

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setStyle({
        transform: `perspective(900px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateY(-6px)`,
      });
    },
    [strength]
  );

  const onMouseLeave = useCallback(() => setStyle({}), []);

  return { style, onMouseMove, onMouseLeave };
}
