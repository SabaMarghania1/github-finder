export default function Info({info, logo, theme}) {
  return (
    <div className="info-box">
      <span className="info-logo">{logo}</span>
      <p className="info">{info}</p>
    </div>
  );
}
