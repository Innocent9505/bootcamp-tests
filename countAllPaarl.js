function countAllPaarl(string){
    var list = string.split(',');
    let count  = 0;
    var allPaarl = [];
    for (var i = 0; i < list.length; i++){
      if (list[i].includes('CJ') ==true){
        count++;
        allPaarl.push(list[i].trim());
       
      }
    
    }
    return count ;
  
  };