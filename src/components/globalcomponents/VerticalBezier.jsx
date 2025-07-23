'use client';

import { useEffect, useRef } from 'react';

export default function VerticalBezier() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 100;
    canvas.height = 500;

    // Clear before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // === Draw the Bezier Curve ===
    ctx.beginPath();
    ctx.moveTo(50, 0); // Start top-middle
    ctx.bezierCurveTo(20, 150, 80, 350, 50, 500); // Curve path
    ctx.strokeStyle = '#E0E0E0';
    ctx.lineWidth = 2;
    ctx.stroke();

    // === Draw the Marker on the Curve ===
    const markerY = 150;
    const markerHeight = 40;

    ctx.strokeStyle = '#FFB100';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(47, markerY);         // Slight left offset for alignment
    ctx.lineTo(47, markerY + markerHeight);
    ctx.stroke();
  }, []);

  return (
    <canvas ref={canvasRef} className="block" />
  );
}
