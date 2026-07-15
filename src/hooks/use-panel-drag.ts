import type React from "react";
import { type RefObject, useRef, useState } from "react";

const CLOSE_HEIGHT_RATIO = 0.4;
const SWIPE_UP_VELOCITY = 0.5;

interface DragState {
  startY: number;
  lastY: number;
  lastTime: number;
  velocity: number;
}

export function usePanelDrag(
  panelRef: RefObject<HTMLDivElement | null>,
  onClose: () => void,
) {
  const [height, setHeight] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const restingHeight = useRef(0);
  const maxHeight = useRef(0);
  const currentHeight = useRef(0);
  const dragState = useRef<DragState | null>(null);

  const reset = () => {
    setHeight(null);
    setAnimating(false);
  };

  const animateClose = () => {
    setHeight(0);
    setAnimating(true);
    setTimeout(() => {
      reset();
      onClose();
    }, 200);
  };

  const snapBack = () => {
    setHeight(restingHeight.current);
    setAnimating(true);
    setTimeout(reset, 200);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    const panel = panelRef.current;
    if (!panel) return;
    restingHeight.current = panel.getBoundingClientRect().height;
    maxHeight.current = Math.min(
      window.innerHeight * 0.85,
      restingHeight.current * 2.5,
    );
    currentHeight.current = restingHeight.current;
    const y = e.touches[0].clientY;
    dragState.current = { startY: y, lastY: y, lastTime: Date.now(), velocity: 0 };
    setHeight(restingHeight.current);
    setAnimating(false);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragState.current) return;
    const y = e.touches[0].clientY;
    const now = Date.now();
    const dt = now - dragState.current.lastTime;
    if (dt > 0) {
      dragState.current.velocity = (y - dragState.current.lastY) / dt;
    }
    dragState.current.lastY = y;
    dragState.current.lastTime = now;
    const delta = y - dragState.current.startY;
    const h = Math.min(
      maxHeight.current,
      Math.max(0, restingHeight.current + delta),
    );
    currentHeight.current = h;
    setHeight(h);
  };

  const onTouchEnd = () => {
    if (!dragState.current) return;
    const { velocity } = dragState.current;
    dragState.current = null;

    if (
      velocity < -SWIPE_UP_VELOCITY ||
      currentHeight.current < restingHeight.current * CLOSE_HEIGHT_RATIO
    ) {
      animateClose();
    } else {
      snapBack();
    }
  };

  const dragProps = { onTouchStart, onTouchMove, onTouchEnd } as const;

  const style: React.CSSProperties | undefined =
    height !== null
      ? { height: `${height}px`, transition: animating ? "height 200ms ease-out" : "none" }
      : undefined;

  return { dragProps, style };
}
