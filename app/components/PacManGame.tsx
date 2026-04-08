"use client";

import { useEffect, useRef } from "react";

export function PacManGame() {
  const canvasRef = useRef(null);
  const pacmanImage = new Image();
  pacmanImage.src = "/sprites/pacman-sprite.png";

  useEffect(() => {
    const ONE_SECOND = 1000;
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    const context = canvas?.getContext("2d");
    let lastKeyDown: string | undefined = undefined;
    const pacman = {
      x: 100,
      y: 340,
      speed: 3,
      angle: 0,
      scale: { x: 1, y: 1 },
      frames: [
        { x: 0, y: 0, w: 70, h: 68 },
        { x: 70, y: 0, w: 70, h: 68 },
        { x: 140, y: 0, w: 70, h: 68 },
      ],
    };

    window.addEventListener("keydown", (e) => {
      const { code } = e;

      lastKeyDown = code;
    });

    let currentFrame = 0;
    let frame = pacman.frames[currentFrame];

    if (!canvas) return;

    canvas.width = 1920;
    canvas.height = 1080;

    let lastTime = 0;

    const update = (time: number, elapsed: number) => {
      if (elapsed >= ONE_SECOND / 10) {
        lastTime = time;

        currentFrame =
          currentFrame < pacman.frames.length - 1 ? currentFrame + 1 : 0;
        frame = pacman.frames[currentFrame];
      }

      if (lastKeyDown == "KeyW") {
        pacman.y -= pacman.speed;
        pacman.angle = 90;
        pacman.scale = { x: 1, y: 1 };
      }

      if (lastKeyDown == "KeyS") {
        pacman.y += pacman.speed;
        pacman.angle = -90;
        pacman.scale = { x: 1, y: 1 };
      }

      if (lastKeyDown == "KeyA") {
        pacman.x -= pacman.speed;
        pacman.angle = 80;
        pacman.scale = { x: 1, y: -1 };
      }

      if (lastKeyDown == "KeyD") {
        pacman.x += pacman.speed;
        pacman.angle = 0;
        pacman.scale = { x: 1, y: 1 };
      }
    };
    const render = () => {
      context?.clearRect(0, 0, canvas.width, canvas.height);

      context?.save();
      context?.translate(pacman.x + 70 / 2, pacman.y + 68 / 2);
      context?.scale(pacman.scale.x, pacman.scale.y);
      context?.rotate((pacman.angle * 180) / Math.PI);

      context?.drawImage(
        pacmanImage,
        frame.x,
        frame.y,
        frame.w,
        frame.h,
        -70 / 2,
        -68 / 2,
        70,
        68,
      );

      context?.restore();
    };

    const loop = (time: number) => {
      const elapsed = time - lastTime;

      update(time, elapsed);
      render();

      requestAnimationFrame(loop);
    };

    loop(0);
  }, [pacmanImage]);

  return (
    <div className="absolute top-0 left-0 h-full w-full">
      <canvas
        ref={canvasRef}
        className="h-full w-full [image-rendering:pixelated]"
      ></canvas>
    </div>
  );
}
