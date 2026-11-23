import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const getTarget = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime();
};
const pad = (n) => String(n).padStart(2, "0");
const PromoCountdown = () => {
  const [remaining, setRemaining] = useState(() => getTarget() - Date.now());
  useEffect(() => {
    const id = setInterval(() => setRemaining(getTarget() - Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const total = Math.max(0, Math.floor(remaining / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return (
    <p className="promo-countdown">
      <span><Clock size={14} />Válido até fim do mês — termina em</span>
      <strong>{days}d {pad(hours)}h {pad(minutes)}m {pad(seconds)}s</strong>
    </p>
  );
};
export default PromoCountdown;
