const objeto:Object={
   nombre:"Javi" ,edad:20,apellidos:"Perez Celada", //string number boolean
    amigos:[ //Object
        {
            nombre:"Felipe", edad:47, eventos:[{nombre2:"Hola"}]
        },
        {
            nombre:"Juan", edad:20
        },
    ]
}
const objeto2:Object={
    nombre:"Javi",edad:20,apellidos:"Pepe",
    amigos:[
        {
            nombre:"Felipe", edad:47
        },
        {
            nombre:"Juan", edad:20
        },
        
    ]
}

const coche:Object={
    puertas:2, color:"Rojo",
    conductores:[{
        nombre:"Javier",carnet:"Coche", otroCarnet:[{nombre:"Moto"}]
    },
    {
        nombre2:"Pepito",carnet:"Coche", otroCarnet:[{nombre:"Camion"}]
    }]
}


const deepPrint=(a:Object):void=>{
    let l:string[]=Object.keys(a)
    l.forEach(key=>{
        if(Array.isArray(a[key])){ //"nombre"
            console.log(`${key}:`) 
            for(let i of a[key]){
                
               deepPrint(i)
            }
        }else if(typeof (a[key]!="object")){ //!Objeto
            console.log(`${key}: ${a[key]}`)
        }
  })
}

const deepEqual=(a:Object, b:Object, i:number):boolean=>{
    let c:string[]=Object.keys(a)
    let d:string[]=Object.keys(b)
    if(Object.keys(a).length!=Object.keys(b).length){
        return false
    }else{
        if(i===Object.keys(a).length){
            return true;
        }else{
            if(c[i]!=d[i]){
                return false;
            }
            if(Array.isArray(a[c[i]])){
                 for(let v=0;v<a[c[i]].length;v++){
                   return deepEqual(a[c[i]][v],b[d[i]][v],0)
                }
            }
            }
    i+=1;
    return deepEqual(a,b,i);
    }
}

const deepClone=(a:Object):Object=>{
    
  let copia:Object={} //nombre:"Javi"
  for(let i in a){
      let valor = a[i] 
     
      if(typeof (valor != "object")){
          
          copia[i]=valor
      }else{
          copia[i]=deepClone(valor)
      }

  }

 deepPrint(copia)
  return copia
}

const objeto3 = deepClone(coche)
console.log(deepEqual(objeto3,objeto2,0))
console.log("======================")
deepClone(coche)
console.log("======================")
deepPrint(objeto)
console.log("======================")
console.log(deepEqual(objeto,objeto2,0))
