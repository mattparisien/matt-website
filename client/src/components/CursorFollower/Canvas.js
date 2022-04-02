import React, { useEffect, } from "react";

function Canvas() {
	

	useEffect(() => {
		const canvas = document.getElementById("scene");
		const ctx = canvas.getContext("2d");

		let width = (canvas.width = window.innerWidth);
		let height = (canvas.height = window.innerHeight);

		let x = width / 2;
		let ballX = x;

		let y = height / 2;
		let ballY = y;

		function lerp(start, end, t) {
			return start * (1 - t) + end * t;
		}

		window.addEventListener("mousemove", e => {
			x = e.clientX;
			y = e.clientY;
		});

		function moveBall() {
			ctx.clearRect(0, 0, width, height);
			ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
			ballX = lerp(ballX, x, 0.1);
			ballY = lerp(ballY, y, 0.1);
			ctx.beginPath();
			ctx.arc(ballX, ballY, 50, 0, 2 * Math.PI);
			ctx.fill();

			requestAnimationFrame(moveBall);
		}

		moveBall();
	}, []);

	return <canvas className='o-scene' id="scene"></canvas>;
}

export default Canvas;
