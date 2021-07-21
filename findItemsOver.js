function findItemsOver(itemList, availItem){
    const list = [];
    for(var i in itemList){
      if(itemList[i].qty > availItem) list.push(itemList[i])
    }
    console.log(list)
    return list
  };