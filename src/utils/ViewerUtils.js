export const printConsola = (datos)=>{
    console.log("Envio");
    console.log(datos);
}

export const transformJsonToArray = (jsonInput) => {
    return jsonInput.map(item => item.value);
};
export const buscaKeys =(arr_objetivos,arr_listado)=>{
    var resultado_busqueda = [];
    var cont = 0;
    if( arr_objetivos !=undefined  ){
      if(arr_listado.length && arr_objetivos.length){
        for(var i =0; i<arr_listado.length;i++){
          for(var j = 0; j<arr_objetivos.length; j++){
          //  console.log("valores arr y keys : "+arr_listado[i]+"  "+arr_objetivos[j]);
            if(arr_listado[i] === arr_objetivos[j] ){
              
              if(cont ==0){
                resultado_busqueda = [i];
                cont++;
              }
              else{
                resultado_busqueda.push(i);
    
              }
            }
          }
      }
     }
    }
    return resultado_busqueda;
}


export const consulta_filtro=(filtros,viewer)=>{
    return new Promise((resolve, reject) => {
        
        viewer.model.getBulkProperties([], filtros, (result) => {
            let test = result.filter(x => x.properties.length===filtros.length);
            let data = {};
            test.forEach(element => {
               // console.log("LONGITUD"+element.properties.length);
                
                if(element.properties.length == 1){
                   let key = element.properties[0].displayValue;
                //        console.log("valor propiedad");
                 //       console.log("Orden");
          
                //       console.log(element.properties[0].displayValue);

                    if (key in data) {
                        data[key].cantidad++;
                        data[key].dbIds.push(element.dbId);
                    } else {
                        let a = {
                            cantidad: 1,
                            dbIds: []
                        }
                        a.dbIds.push(element.dbId);
                        data[key] = a;
                    }
                }

                if(element.properties.length==2){
                    
                    if(element.properties[0].displayValue === element.properties[1].displayValue ){
                        let key  = element.properties[0].displayValue;

                    //console.log("valor propiedad 1"+ element.properties[0].displayValue);
                    //console.log("valor propiedad 2"+ element.properties[1].displayValue);

                        if (key in data) {
                            data[key].cantidad++;
                            data[key].dbIds.push(element.dbId);
                           
                        } else {
                            let a = {
                                cantidad: 1,
                                dbIds: []
                            }
                            a.dbIds.push(element.dbId);
                            data[key] = a;
                        }
                    }
                    
                }
                
            });
            resolve(data);
        }, (error) => {
            reject(error);
        });
    });
}
export const consulta_filtro3=(filtros)=>{
    return new Promise((resolve, reject) => {
        
        viewer.model.getBulkProperties([], filtros, (result) => {
            console.log("RESULTADO DE NIVELES");
            console.log(result);
            let test = result.filter(x => x.properties.length===filtros.length  );
            let data = {};
            test.forEach(element => {
               // console.log("LONGITUD"+element.properties.length);
                
                if(element.properties.length == 1 && element.properties[0].displayValue=='Revit Level'){
                   let key = element.properties[0].displayValue;
                //        console.log("valor propiedad");
                 //       console.log("Orden");
          
                //       console.log(element.properties[0].displayValue);

                    if (key in data) {
                        data[key].cantidad++;
                        data[key].dbIds.push(element.dbId);
                    } else {
                        let a = {
                            cantidad: 1,
                            dbIds: []
                        }
                        a.dbIds.push(element.dbId);
                        data[key] = a;
                    }
                }

            
                
            });
            resolve(data);
        }, (error) => {
            reject(error);
        });
    });
}

export const  busquedaElemento = (elemento, arreglo)=>{
    let elemento2 = quitarEspacios(elemento);
   
    for(var j = 0; j<arreglo.length;j++){
        console.log(elemento2);
        console.log(arreglo[j])
        if(elemento === arreglo[j]|| elemento2 === arreglo[j]){
          
            console.log("SIIIIIIII");
            return true;
        }
    }
}
export const  quitarEspacios=(cadena) =>{
        return cadena.replace(/\s+/g, '');
 }

export const  consulta_filtro2 =(filtros, viewer,filtros_selec_ha,filtros_selec_piso )=>{
    //    console.log("filtros properties antes");
          //   console.log(filtros);
     return new Promise((resolve, reject) => {
         
         viewer.model.getBulkProperties([], filtros, (result) => {
         //       console.log("filtros properties interior");
         //       console.log(filtros);
        //        console.log(result);
             let test = result.filter(x => x.properties.length===filtros.length);
             let data = {};
             test.forEach(element => {
         //           console.log("LONGITUD"+element.properties.length);
                 
                 if(element.properties.length == 1){
                    let key = element.properties[0].displayValue;
          //               console.log("valor propiedad"+ element.properties[0].displayValue);
 
                     if (key in data) {
                         data[key].cantidad++;
                         data[key].dbIds.push(element.dbId);
                     } else {
                         let a = {
                             cantidad: 1,
                             dbIds: []
                         }
                         a.dbIds.push(element.dbId);
                         data[key] = a;
                     }
                 }
 
                 if(element.properties.length==2){
                     console.log(element.properties[0]);
                     console.log(element.properties[1]);
                     console.log("seleccionados");
                     console.log(filtros_selec_ha);
                     console.log(filtros_selec_piso);
                     console.log("/////////");
                    // if(element.properties[0].displayValue === valor_fil1 && element.properties[1].displayValue === valor_fil2){
                    if(busquedaElemento(element.properties[0].displayValue,filtros_selec_ha)&&busquedaElemento(element.properties[1].displayValue,filtros_selec_piso) ){  
                        console.log("si entra");
                        let key  = element.properties[0].displayValue;
             //          console.log("ELEMENTO");
             //          console.log(element);
                     //console.log("valor propiedad 1"+ element.properties[0].displayValue);
                     //console.log("valor propiedad 2"+ element.properties[1].displayValue);
 
                         for(var t =0; t<filtros_selec_ha.length; t++){
                             if (filtros_selec_ha[t] in data) {
                                 data[filtros_selec_ha[t]].cantidad++;
                                 data[filtros_selec_ha[t]].dbIds.push(element.dbId);
                                
                             } else {
                                 let a = {
                                     cantidad: 1,
                                     dbIds: []
                                 }
                                 a.dbIds.push(element.dbId);
                                 data[filtros_selec_ha[t]] = a;
                             }
                         }
 
                         for(var t =0; t<filtros_selec_piso.length; t++){
                             if (filtros_selec_piso[t] in data) {
                                 data[filtros_selec_piso[t]].cantidad++;
                                 data[filtros_selec_piso[t]].dbIds.push(element.dbId);
                                
                             } else {
                                 let a = {
                                     cantidad: 1,
                                     dbIds: []
                                 }
                                 a.dbIds.push(element.dbId);
                                 data[filtros_selec_piso[t]] = a;
                             }
                         }
 
                         
                     }
                     
                 }
                 
             });
             resolve(data);
         }, (error) => {
             reject(error);
         });
     });
 }

 export const consulta_filtro_fechas =(filtros)=>{
    return new Promise((resolve, reject) => {
        
        viewer.model.getBulkProperties([], filtros, (result) => {
            let test = result.filter(x => x.properties.length===filtros.length);
            let data = {};
            test.forEach(element => {
               // console.log("LONGITUD"+element.properties.length);
                
                if(element.properties.length == 1){
                   let key = element.properties[0].displayValue;
                   //  console.log("valor propiedad"+ element.properties[0].displayValue);

                    if (key in data) {
                        data[key].cantidad++;
                        data[key].dbIds.push(element.dbId);
                    } else {
                        let a = {
                            cantidad: 1,
                            dbIds: []
                        }
                        a.dbIds.push(element.dbId);
                        data[key] = a;
                    }
                }

                if(element.properties.length==2){
                    
                   // if(element.properties[0].displayValue === valor_fil1 && element.properties[1].displayValue === valor_fil2){
                   if(busquedaElemento(element.properties[0].displayValue,filtros_selec_ha)&&busquedaElemento(element.properties[1].displayValue,filtros_selec_piso) ){  
                   let key  = element.properties[0].displayValue;

                    //console.log("valor propiedad 1"+ element.properties[0].displayValue);
                    //console.log("valor propiedad 2"+ element.properties[1].displayValue);

                        for(var t =0; t<filtros_selec_ha.length; t++){
                            if (filtros_selec_ha[t] in data) {
                                data[filtros_selec_ha[t]].cantidad++;
                                data[filtros_selec_ha[t]].dbIds.push(element.dbId);
                               
                            } else {
                                let a = {
                                    cantidad: 1,
                                    dbIds: []
                                }
                                a.dbIds.push(element.dbId);
                                data[filtros_selec_ha[t]] = a;
                            }
                        }

                        for(var t =0; t<filtros_selec_piso.length; t++){
                            if (filtros_selec_piso[t] in data) {
                                data[filtros_selec_piso[t]].cantidad++;
                                data[filtros_selec_piso[t]].dbIds.push(element.dbId);
                               
                            } else {
                                let a = {
                                    cantidad: 1,
                                    dbIds: []
                                }
                                a.dbIds.push(element.dbId);
                                data[filtros_selec_piso[t]] = a;
                            }
                        }

                        
                    }
                    
                }
                
            });
            resolve(data);
        }, (error) => {
            reject(error);
        });
    });
}

