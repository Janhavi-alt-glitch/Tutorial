fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json(); //converted to object
   }).then((objectdata)=>{
    console.log(objectdata[0].title);
    let tabledata="";
    objectdata.map((value)=>{
        tabledata=`<h1>${values.title}</h1>`;
    });
    document.getElementById("#table_body").innerHTML=tabledata;

   })
   