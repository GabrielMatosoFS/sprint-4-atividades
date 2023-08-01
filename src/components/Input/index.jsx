export const Input = ({ label, id, type, placeholder, value, setValue }) => {
   return (
      <div>
         <label htmlFor={id}>{label}</label>
         <input
            type={type}
            placeholder={placeholder}
            id={id}
            name={id}
            value={value}
            onChange={(e) => setValue(e.target.value)}
         />
      </div>
   );
};
