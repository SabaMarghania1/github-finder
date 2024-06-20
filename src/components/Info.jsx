export default function Info({info, logo}) {
  return (
    <div style={!info ? {opacity: 0.5} : {}} className="info-box">
      <img src={logo} alt="Logo" className="light" />
      <p className="info">{info || 'Not Available'}</p>
    </div>
  );
}
