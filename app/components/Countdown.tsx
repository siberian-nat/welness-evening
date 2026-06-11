"use client";

import { useEffect, useMemo, useState } from "react";

const EVENT_TIME = new Date("2026-06-27T18:30:00+02:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const distance = Math.max(0, EVENT_TIME - Date.now());

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const parts = useMemo(
    () => [
      ["days", timeLeft.days],
      ["hours", timeLeft.hours],
      ["minutes", timeLeft.minutes],
      ["seconds", timeLeft.seconds],
    ],
    [timeLeft],
  );

  return (
    <div className="countdown" aria-label="Countdown to the wellness evening">
      {parts.map(([label, value]) => (
        <div className="countdown__item" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
