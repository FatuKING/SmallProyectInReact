export function Card ({ img, name, onClick, isActive }) {
  return (
    <div className={`panel ${isActive ? 'active' : ''}`} onClick={onClick} style={{ backgroundImage: `url(${img})` }}>
      <h3>{name}</h3>
    </div>
  )
}
