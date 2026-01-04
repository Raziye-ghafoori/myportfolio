import { useEffect, useRef } from "react";

interface SkillCircleProps {
  percent: number; 
  size?: number;   
  strokeWidth?: number; 
  color?: string; 
}

export const SkillCircle: React.FC<SkillCircleProps> = ({
  percent,
  size = 100,
  strokeWidth = 10,
  color = "blue",
}) => {
  const circleRef = useRef<SVGCircleElement | null>(null);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          circle.style.strokeDashoffset = offset.toString();
          observer.disconnect(); // فقط یک بار
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(circle);

    return () => observer.disconnect();
  }, [offset]);

  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#eee"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        ref={circleRef}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{
          transition: "stroke-dashoffset 1.5s ease-out",
        }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="20"
        fill="#fff"
      >
        {percent}%
      </text>
    </svg>
  );
};
