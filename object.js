//add objects of 10 differnt element

const zipobjects ={element1:"Alpha", element2:42, element3:true, element4:[1,2,3,4], element5:{"nested":"value"}, 
element6:null, element7:"Random String", element8:3.14, element9:false, element10:[4,6,6]  };
console.log(zipobjects);

// delete 2 elements

delete zipobjects.element3;
delete zipobjects.element10;
console.log(zipobjects);

//add 3 elements

zipobjects.name ="omega";
zipobjects.value ="Another Value";
zipobjects.number =100;
console.log(zipobjects);

// print elements and length

console.log("length:",
    Object.keys(zipobjects).length
);
