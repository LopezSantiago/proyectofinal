export class DatosServicio{
    private datos:Object={email:"" ,id:"" ,nombre:"" ,tel:"" ,usrname:""};

    setObjeto(Aux:Object){
        this.datos=Aux;
    }
    getObjeto(){
        return this.datos;
    }

}