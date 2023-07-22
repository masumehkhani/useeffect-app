
interface Props {
    children: string;
    type?: 'button' | 'reset' | 'submit';
  }
  
  const Button = ({ children, type = 'button' }: Props) => {
    return (
      <button type={type}>
        {children}
      </button>
    );
  };
  
  export default Button;
  
