import style from './style.module.scss';

export default function Header() {
  return (
    <header className={style.header}>
      <span className={style.title}>Task Management App</span>
    </header>
  );
}
