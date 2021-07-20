function countAllFromTown (regNumber, town){
    var list = regNumber.split(',');
    let count  = 0;
    var AllFromTown  = [];
    for (var i = 0; i < list.length; i++){
      var newList = list[i].trim();
      if (newList.includes(town)){
        count++;
       
      }
    
    }
    return count ;
  
  };