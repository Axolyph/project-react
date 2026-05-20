// src/components/AlumnoCard.jsx
import { useState } from 'react';
import './AlumnoCard.css';
import escuelaname from '../assets/escuelaname.png';

const AlumnoCard = ({ nombre, carrera, estado:  estadoInicial }) => {

    const [estado, setEstado] = useState(estadoInicial);

    // Lógica simple para cambiar el color del badge según el estado
    const badgeColor = estado === 'Matriculado' ? 'bg-success' : 'bg-secondary';

    const cambiarEstado = () => {
        if (estado === 'Matriculado') {
            setEstado ('Inactivo');
        }else   {
            setEstado ('Matriculado');
        }
    };
    
    return (
        <div className="col-md-4 mb-4">
            <div className="card alumno-card shadow-sm h-100">
                <div className="card-body">
                    <h5 className="card-title text-primary">
                        {nombre}
                    </h5>
                    <img src={ escuelaname } alt="Alumno" className='img-fluid rounded mb-3' />
                    <h6 className="card-subtitle mb-3 text-muted">
                        {carrera}
                    </h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className={`badge ${badgeColor}`}>
                            {estado}
                        </span>
                        <div>
                            <button className="btn btn-sm btn-outline-warning me-2" onClick={cambiarEstado}>
                                Cambiar Estado
                            </button>
                            <button className="btn btn-sm btn-outline-warning me-2">
                                Editar
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumnoCard;