class Documento{
    _nombre;
    _folio;
    _id;
    _estado;
    _fechaEnvio;
    _observaciones;
    _editado;

    constructor(_nombre,_folio,_id,_estado,_fechaEnvio,_observaciones,_editado){
        this._nombre=_nombre;
        this._folio=_folio;
        this._id=_id;
        this._estado=_estado;
        this._fechaEnvio=_fechaEnvio;
        this._observaciones=_observaciones;
        this._editado=_editado;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(_nombre){
        this._nombre=_nombre;
    }

    get folio(){
        return this._folio;
    }
    set folio(_folio){
        this._folio=_folio;
    }

    get id(){
        return this._id;
    }
    set id(_id){
        this._id=_id;
    }
    get estado(){
        return this._estado;
    }
    set estado(_estado){
        this._estado=_estado;
    }

    get fechaEnvio(){
        return this._fechaEnvio;
    }
    set fechaEnvio(_fechaEnvio){
        this._fechaEnvio=_fechaEnvio;
    }

    get observaciones(){
        return this._observaciones;
    }
    set observaciones(_observaciones){
        this._observaciones=_observaciones;
    }

    get editado(){
        return this._editado;
    }
    set editado(_editado){
        this._editado=_editado;
    }
}
   