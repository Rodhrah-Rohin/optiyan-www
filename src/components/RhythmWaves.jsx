import React, { useEffect, useRef } from 'react';

const RhythmWaves = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const mouse = { x: -1000, y: -1000 };
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        const lines = [];
        const lineCount = 12;

        for (let i = 0; i < lineCount; i++) {
            lines.push({
                y: (i / lineCount) * canvas.height,
                amplitude: 20 + Math.random() * 30,
                speed: 0.001 + Math.random() * 0.002,
                phase: Math.random() * Math.PI * 2,
                thickness: 0.5 + Math.random() * 0.5,
                opacity: 0.05 + Math.random() * 0.1
            });
        }

        const draw = (time) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            lines.forEach((line, index) => {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 180, 0, ${line.opacity})`;
                ctx.lineWidth = line.thickness;

                const points = [];
                const step = 20;

                for (let x = 0; x <= canvas.width + step; x += step) {
                    // Base sine wave
                    let waveY = Math.sin(x * 0.002 + time * line.speed + line.phase) * line.amplitude;

                    // Mouse interaction (pulling lines towards mouse)
                    const dist = Math.sqrt((x - mouse.x) ** 2 + (line.y + waveY - mouse.y) ** 2);
                    const influence = Math.max(0, 1 - dist / 400);

                    const targetY = line.y + waveY + (mouse.y - (line.y + waveY)) * influence * 0.3;

                    if (x === 0) {
                        ctx.moveTo(x, targetY);
                    } else {
                        ctx.lineTo(x, targetY);
                    }
                }

                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw(0);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: -1,
                opacity: 0.6
            }}
        />
    );
};

export default RhythmWaves;
