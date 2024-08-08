let obj = {
    name: 'Fazliddin',
    surname: 'Quvatboyev',
    address: 'Jizzax',
    activies: {
        box: false,
        workOut: true,
        readingBook: {
            favoriteBook: 'Atomic habits'
        }
    },
    university: 'SAMBHRAM'
};

function copier(value) {
    if (value === null || typeof value !== 'object') 
        return value;
    
    if(Array.isArray(value))
        return value.push(copier);


    let freeObj = {};
    for (const key in value) 
        freeObj[key] = value[key];
    

    return freeObj;
}

let result = copier(obj);
console.log(result === obj);



