import { useState } from 'react';

const AlumnoForm = ({ recargarAlumnos }) => {

    // 1. Estado del formulario
    // Aquí guardamos todos los datos de los inputs
    // Los nombres deben coincidir con las columnas de Laravel/MySQL
    const [formulario, setFormulario] = useState({
        nombre: '',
        apellidos: '',
        dni: '',
        fecha_nacimiento: '',
        email: '',
        direccion: '',
        telefono: '',
        estado_matricula: 'matriculado'
    });

    // 2. Función universal para leer los inputs
    // Cada vez que escribimos en un input,
    // esta función actualiza automáticamente el estado
    const manejarCambio = (e) => {

        // Extraemos el name y value del input
        const { name, value } = e.target;

        // Actualizamos el estado
        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    // 3. Función para enviar los datos a Laravel
    const manejarEnvio = async (e) => {

        // Evita que la página se recargue
        e.preventDefault();

        try {

            // Enviamos los datos al API de Laravel
            const respuesta = await fetch(
                'http://127.0.0.1:8000/api/alumnos',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    // Convertimos el objeto a JSON
                    body: JSON.stringify(formulario)
                }
            );

            // Convertimos la respuesta a JSON
            const datos = await respuesta.json();

            // Si todo salió bien
            if (respuesta.ok) {

                alert('Alumno guardado exitosamente en la base de datos');

                // Limpiamos el formulario
                setFormulario({
                    nombre: '',
                    apellidos: '',
                    dni: '',
                    fecha_nacimiento: '',
                    email: '',
                    direccion: '',
                    telefono: '',
                    estado_matricula: 'matriculado'
                });

                // Recargamos la lista de alumnos desde App.jsx
                recargarAlumnos();

            } else {

                // Si Laravel devuelve errores de validación
                console.log('Errores de validación:', datos.errors);

                alert('Error al guardar. Revisa la consola para más detalles.');
            }

        } catch (error) {

            // Error de conexión con Laravel
            console.error('Error de conexión:', error);

            alert('No se pudo conectar con el servidor de Laravel.');
        }
    };

    return (
        <div className="card shadow-sm mb-4">

            {/* Header de la tarjeta */}
            <div className="card-header bg-dark text-white">
                <h5 className="mb-0">
                    Registrar Nuevo Alumno
                </h5>
            </div>

            {/* Body de la tarjeta */}
            <div className="card-body">

                {/* Formulario */}
                <form onSubmit={manejarEnvio}>

                    <div className="row g-3">

                        {/* INPUT NOMBRE */}
                        <div className="col-md-6">
                            <label className="form-label">
                                Nombres
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="nombre"
                                value={formulario.nombre}
                                onChange={manejarCambio}
                                required
                            />
                        </div>

                        {/* INPUT APELLIDOS */}
                        <div className="col-md-6">
                            <label className="form-label">
                                Apellidos
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="apellidos"
                                value={formulario.apellidos}
                                onChange={manejarCambio}
                                required
                            />
                        </div>

                        {/* INPUT DNI */}
                        <div className="col-md-4">
                            <label className="form-label">
                                DNI
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="dni"
                                value={formulario.dni}
                                onChange={manejarCambio}
                                required
                            />
                        </div>

                        {/* INPUT FECHA DE NACIMIENTO */}
                        <div className="col-md-4">
                            <label className="form-label">
                                Fecha de Nacimiento
                            </label>

                            <input
                                type="date"
                                className="form-control"
                                name="fecha_nacimiento"
                                value={formulario.fecha_nacimiento}
                                onChange={manejarCambio}
                                required
                            />
                        </div>

                        {/* INPUT EMAIL */}
                        <div className="col-md-4">
                            <label className="form-label">
                                Email
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formulario.email}
                                onChange={manejarCambio}
                                required
                            />
                        </div>

                        {/* SELECT ESTADO */}
                        <div className="col-md-4">
                            <label className="form-label">
                                Estado
                            </label>

                            <select
                                className="form-select"
                                name="estado_matricula"
                                value={formulario.estado_matricula}
                                onChange={manejarCambio}
                            >
                                <option value="matriculado">
                                    Matriculado
                                </option>

                                <option value="inactivo">
                                    Inactivo
                                </option>
                            </select>
                        </div>

                        {/* BOTÓN */}
                        <div className="col-12 text-end mt-3">

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                <i className="fas fa-save me-2"></i>
                                Guardar en MySQL
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AlumnoForm;