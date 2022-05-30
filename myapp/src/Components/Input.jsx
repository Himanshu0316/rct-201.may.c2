

export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <input className={`input`} type={type} size={size} onChange={onChange}/>
     
    </div>
  );
};
