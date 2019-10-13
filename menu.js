readdata();

		function related(clicked, menuitem){

			var countclick=clicked;
			var menuclicked=menuitem;
        var jsonData=menudata();
        
    var counter = jsonData.menu[menuclicked].related[countclick];
    console.log(jsonData2+"yes"+counter);

    for (var i = 0; i < counter.choices.length; i++) {
    	var jsonData2 = jsonData.menu[menuclicked].related[countclick].choices[i];
    console.log(counter.choices.length);
    var counter2=i;
    var related = $(document.createElement('div'))
         .attr("class", 'divrelatedchoices');
         // var like = $(document.createElement('div'))
         // .attr("id", '' + counter2);
     related.after().html('<input type="checkbox"  name="" id="relatedchoice'+counter2+'">'+jsonData2.name+'');
       related.appendTo("#relatedchoices"+countclick); 
      }
		}
		function likes(clicked){ 
        var countclicks=0;
        console.log("countclicks"+countclicks);
        if(countclicks>1){}else{	
			var countclick=clicked;
        var jsonData=menudata();        
    var counter = jsonData.menu[countclick];
    //console.log(jsonData2+"yes"+counter);
    for (var i = 0; i < counter.related.length; i++) {
    	var jsonData2 = jsonData.menu[countclick].related[i];
    console.log(counter.related.length);
    var counter2=i;
    var related = $(document.createElement('div'))
         .attr("class", 'divrelated');
         var like = $(document.createElement('div'))
         .attr("id", 'divlike' + counter2);
         if(i==0){
         	like.after().html('You might also like:</br> ');
         	like.appendTo("#relateddi"+countclick);
         }
     related.after().html('<input type="checkbox" onclick="related('+counter2+','+countclick+');" name="" id="related'+counter2+'">'+jsonData2.name+'<div id="relatedchoices'+counter2+'"></div>');
       related.appendTo("#relateddi"+countclick); 
      }
      countclicks++;
  }
  }
  function sort(clicked){
	var countclick=clicked;
        var jsonData=menudata();        
    var counter = jsonData.menu[countclick];
    console.log(jsonData2+"yes"+counter);

      for (var i = 0; i < counter.choices.length; i++) {
    	var jsonData2 = jsonData.menu[countclick].choices[i];
    console.log(counter.choices.length);
    var counter2=i;
    var choices = $(document.createElement('div'))
         .attr("class", 'divchoices');    

     choices.after().html(' <input type="checkbox" onclick="likes('+countclick+');" name="" id="choices'+counter2+'">'+jsonData2.name+'');
       choices.appendTo("#choicesdi"+countclick); 
      }    
       // alert(countclick);
			//alert("clicked"+countclick+" "+counter.name);
		}
		function readdata(){
			var jsonData=menudata();
			//var menuItems = JSON.stringify(jsonData);
		for (var i = 0; i < jsonData.menu.length; i++) {
		    var counter = jsonData.menu[i];
		    console.log(jsonData.menu.length);
		    //alert(counter.name);
		    var counter2=i;
		    var newimage = $(document.createElement('div'))
		         .attr("id", 'menu' + counter2);
		     newimage.after().html(' <input type="checkbox" onclick="sort('+counter2+');" name="" id="menu'+counter2+'">'+counter.name+'<div id="choicesdi'+counter2+'"></div><div id="relateddi'+counter2+'"></div>');
		       newimage.appendTo("#cafemenus");		   
		}
		}
function menudata(){
	var  myMessage= {"menu":[  {       name: 'Salad', choices: [         { name: 'Santa Fe' },         { name: 'Greek' },         { name: 'Asian' },       ],       related: [         {           name: 'Dressing',           choices: [             { name: 'Italian' },             { name: 'Blue Cheese' },             { name: 'Ranch' },           ]         },         {           name: 'Bread',           choices: [             { name: 'Italian' },             { name: 'Flat' },             { name: 'Sourdough' },           ]         }       ]     }, {       name: 'Entree',       choices: [         { name: 'Steak' },         { name: 'Salmon' },         { name: 'Rice' },       ],       related: [       ]     }, {       name: 'Soup',       choices: [         { name: 'Minestrone' },         { name: 'Hot and sour' },         { name: 'Miso' },       ],       related: [         {           name: 'Bread',           choices: [             { name: 'Breadsticks'}           ]         }       ]     } ] };
			var jsonData =myMessage;
	return jsonData;
}


	