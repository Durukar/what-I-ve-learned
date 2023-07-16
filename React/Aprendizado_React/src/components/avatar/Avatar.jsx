import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src = 'https://svgsilh.com/svg/1751217-009688.svg'}) {
  return (
    <img 
      className={ hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} />
  );
}