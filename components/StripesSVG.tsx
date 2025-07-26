"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const AnimatedDotOnPath = ({
	pathData,
	delay,
}: {
	pathData: string;
	delay: number;
}) => {
	const pathRef = useRef<SVGPathElement>(null);
	const [pathLength, setPathLength] = useState(0);
	const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		if (pathRef.current) {
			const length = pathRef.current.getTotalLength();
			setPathLength(length);
		}
	}, []);

	const [progress, setProgress] = useState(0);

	useEffect(() => {
		let frame: number;
		let start: number | null = null;
		const duration = 10000; // ms

		const animate = (timestamp: number) => {
			if (!start) start = timestamp;
			const elapsed = (timestamp - start + delay * 1000) % duration;
			const t = Math.abs(Math.sin((Math.PI * elapsed) / duration));
			setProgress(t);
			frame = requestAnimationFrame(animate);
		};

		frame = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(frame);
	}, [delay]);

	useEffect(() => {
		if (pathRef.current && pathLength > 0) {
			const point = pathRef.current.getPointAtLength(progress * pathLength);
			setDotPosition({ x: point.x, y: point.y });
		}
	}, [progress, pathLength]);

	return (
		<>
			<path
				ref={pathRef}
				d={pathData}
				stroke="#6366f1"
				strokeWidth="2"
				fill="none"
			/>
			{pathLength > 0 && (
				<circle r={5} fill="white" cx={dotPosition.x} cy={dotPosition.y} />
			)}
		</>
	);
};

const StripesSVG = ({ flip = false }: { flip?: boolean }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="4000"
			height="2000"
			preserveAspectRatio="none"
			viewBox="0 0 4000 2000"
			className={`absolute z-[-1] size-full opacity-20 ${
				flip ? "bottom-0 right-0 -scale-y-100" : "left-0 top-0 -scale-x-100"
			}`}
		>
			<g mask='url("#SvgjsMask1051")' fill="none">
				<AnimatedDotOnPath
					pathData="M3297.54-313.94C2824.1-80.47 2838.25 1393.58 2154.57 1461.47 1470.89 1529.36 1583.08 1211.47 1011.6 1211.47 440.11 1211.47 161.12 1460.02-131.37 1461.47"
					delay={0}
				/>
				<AnimatedDotOnPath
					pathData="M1865.79-130.07C1640.06-92.93 1804.65 385.22 1164.62 457.87 524.58 530.52 177.15 1320.27-237.73 1357.87"
					delay={4}
				/>
				<AnimatedDotOnPath
					pathData="M3144.75-89.26C2599.58-13.77 2391.85 1198.31 1403.37 1257.65 414.88 1316.99 117.74 1791.5-338.02 1797.65"
					delay={2}
				/>
				<AnimatedDotOnPath
					pathData="M2850.59-304.04C2309.78-207.33 2044.57 1136.04 1194.96 1140.99 345.35 1145.94-13.4 474.06-460.67 460.99"
					delay={3}
				/>
				<AnimatedDotOnPath
					pathData="M1461.9-116.84C1150.8 89.02 1316.36 1196.85 770.63 1205.54 224.91 1214.23-231.34 580.81-611.9 565.54"
					delay={5}
				/>
			</g>
			<defs>
				<mask id="SvgjsMask1051">
					<rect width="4000" height="2000" fill="#ffffff"></rect>
				</mask>
			</defs>
		</svg>
	);
};

export default StripesSVG;
