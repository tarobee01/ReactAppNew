import React, { useState, useEffect, useRef } from 'react';

const SubScreen = ({ setActivePage, date }) => {
  const canvasRef = useRef(null);
  const [startTime, setStartTime] = useState(8);
  const [endTime, setEndTime] = useState(10);
  const [color, setColor] = useState('#e6c229');
  const [title, setTitle] = useState('遊び');

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const radius = 100;
    const startAngle = ((startTime - 6) / 24) * Math.PI * 2;
    const endAngle = ((endTime - 6) / 24) * Math.PI * 2;

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(radius, radius, radius, 0, Math.PI * 2);
    context.fillStyle = '#e0e0e0';
    context.fill();

    context.beginPath();
    context.moveTo(radius, radius);
    context.arc(radius, radius, radius, startAngle, endAngle);
    context.closePath();
    context.fillStyle = color;
    context.fill();

    const textRadiusOuter = radius * 1.1;
    const textRadiusInner = radius * 0.7;

    const textXStart = radius + textRadiusOuter * Math.cos(startAngle);
    const textYStart = radius + textRadiusOuter * Math.sin(startAngle);

    context.font = '12px Arial';
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(startTime.toString(), textXStart, textYStart);

    const textXEnd = radius + textRadiusOuter * Math.cos(endAngle);
    const textYEnd = radius + textRadiusOuter * Math.sin(endAngle);

    context.fillText(endTime.toString(), textXEnd, textYEnd);

    const textAngle = (startAngle + endAngle) / 2;
    const textX = radius + textRadiusInner * Math.cos(textAngle);
    const textY = radius + textRadiusInner * Math.sin(textAngle);

    context.font = '16px Arial';
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(title, textX, textY);

    context.beginPath();
    context.arc(radius, radius, 5, 0, Math.PI * 2);
    context.fillStyle = 'red';
    context.fill();
  }, [startTime, endTime, color, title]);

  return (
    <div>
      <h1>ここはサブ画面です</h1>
      <h3>選択された日付: {date}</h3>
      <canvas ref={canvasRef} width={200} height={200} />
      <button onClick={() => setActivePage('main')}>もどる</button>
    </div>
  );
};

export default SubScreen;
