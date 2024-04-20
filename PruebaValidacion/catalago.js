class Catalogo {
    constructor() {
        this._solicitud = null;
        this._planTrabajo = null;
        this._cartaRecomendacion = null;
    }
    setSolicitud(solicitud) {
        this._solicitud = solicitud;
    }

    setPlanTrabajo(planTrabajo) {
        this._planTrabajo = planTrabajo;
    }

    setCartaRecomendacion(cartaRecomendacion) {
        this._cartaRecomendacion = cartaRecomendacion;
    }
}
const documento1 = new Documento("Documento 1", "Folio 1", "ID 1", "Estado 1", "2024-04-18", "Observaciones 1", true);
const alumno1 = new Alumno(documento1);
const catalogo1 = new Catalogo();
catalogo1.setSolicitud(1);
catalogo1.setPlanTrabajo(2);
catalogo1.setCartaRecomendacion(3);