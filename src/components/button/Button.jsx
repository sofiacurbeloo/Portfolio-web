import { Arrow, Github, Paper, Gmail } from '@/icons/Icons';


// Iconos
const iconMap = {
  github: Arrow,
  open: Github,
  paper: Paper,
  gmail: Gmail,
};

function Button({ type, href, children, variant }) {
  const Icon = iconMap[variant];

  return ( 
    <a className={`btn-${type}`} href={href} target='_blank' rel='noopener noreferrer'>
      {children}
      {Icon && <Icon />}
    </a>
  );
}

export default Button;
