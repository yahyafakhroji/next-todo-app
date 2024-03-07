import style from './card.module.scss';

export default function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`${style.card} ${className || ''}`}>{children}</div>;
}
