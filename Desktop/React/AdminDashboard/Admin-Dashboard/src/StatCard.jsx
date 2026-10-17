function StatCard({ title, value, icon }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <div>{icon}</div>
            <h4>{title}</h4>
            <h2>{value}</h2>
        </div>
    )
}
export default StatCard;