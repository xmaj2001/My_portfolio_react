

function Skill({ titulo = "Habilidade", volume ="1%" }) {
    const stylevolume = {
        width: volume
    }
    return (
        <>
            <h6>{titulo}</h6>
            <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={stylevolume} aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </>
    )
}

export default Skill;