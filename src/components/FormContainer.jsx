const FormContainer = ({ children }) => {
  return (
    <div style={{ maxWidth: '600px', margin: '100px auto', padding: '20px', border: '1px solid goldenrod', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      {children}
    </div>
  );
};

export default FormContainer;
