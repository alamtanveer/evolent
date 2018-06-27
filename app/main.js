var app = {
    initialize: function() {
        var self = this;
        self.render();
    },
    render: function() {
        var self = this;
        self.creationOfDomElements();
    },
    creationOfDomElements: function() {
        var self = this;
        var contents = "";
        contents += "<div id='wrapper'>";
			contents += "<h1>Contact Information</h1>";		        	                      
        	contents += "<form action=''>";				
        	contents += "<table>";		
        		contents += "<tr>";
        			contents += "<td>First Name :</td>";
        			contents += "<td><input class='txtBox' id='fName' type='text' required></td>";
        		contents += "</tr>";
        		contents += "<tr>";
        			contents += "<td>Last Name :</td>";
        			contents += "<td><input class='txtBox' id='lName' type='text' required></td>";
        		contents += "</tr>";
        		contents += "<tr>";
        			contents += "<td>Email :</td>";
        			contents += "<td><input class='txtBox' id='email' type='email' required></td>";
        		contents += "</tr>";
        		contents += "<tr>";
        			contents += "<td>Phone Number :</td>";
        			contents += "<td><input class='txtBox' id='cellNumber' type='number' required></td>";
        		contents += "</tr>";
        		contents += "<tr>";
        			contents += "<td>Status :</td>";
        			contents += "<td><input class='txtBox' id='status' type='text' required></td>";
        		contents += "</tr>";
        		contents += "<tr>";
        			contents += "<td></td>";
        			contents += "<td><input id='btnAdd' type='submit' value='Add'></td>";
        		contents += "</tr>";
        	contents += "</table>";
        	contents += "</form>";
        	contents += "<input id='btnUpdate' type='submit' value='Update' onclick='btnUpdate(event)'>";
        contents += "</div>";
        document.body.innerHTML = contents;        
        self.setEvents();
    },
    setEvents: function() {        
        var self = this;        
        var contents="";
        contents += "<div id='displayList'>";
        contents += "<table id='list' border='1'>";
        		contents += "<tr>";
        			contents += "<th>First Name</th>";	
        			contents += "<th>Last Name</th>";
        			contents += "<th>Email</th>";
        			contents += "<th>Phone Number</th>";
        			contents += "<th>Status</th>";        			
        			contents += "<th></th>";         			       			
        		contents += "</tr>";
        	contents += "</table>";
    	contents += "</div>";

    	document.getElementById('wrapper').innerHTML +=contents;
		
         /*clear Textbox*/
        function clearTextBox(){        	
        	var textBox = document.getElementsByClassName('txtBox');
        	for (var i = 0; i < textBox.length; i++) {
        		textBox[i].value="";
        	}
        }
        /*To add record*/
        document.getElementById('btnAdd').addEventListener('click',function(event){         	
        	var firstName, lastName, email, cellNumber, status, data;
        	firstName=document.getElementById('fName').value;
        	lastName=document.getElementById('lName').value;
        	email=document.getElementById('email').value;
        	cellNumber=document.getElementById('cellNumber').value;
        	status=document.getElementById('status').value;        	

        	data ="<tr><td>"+firstName+"</td><td>"+lastName+"</td><td>"+email+"</td><td>"+cellNumber+"</td><td>"+status+"</td><td><input type='button' value='Delete' onclick='btnDelete(event)'><input type='button' value='Edit' onclick='btnEdit(event)'></td></tr>"
        	
        	/*Make TextBox Blank after Add*/
        	if (firstName !="" && lastName !="" && email !="" && cellNumber !="" && status !=""){
	        	document.getElementById('displayList').style.display='block';
	        	document.querySelector('#list > tbody').innerHTML +=data;	        	
	        	clearTextBox();
	        	document.getElementById('displayList').style.display="block";
        	}
        	
        });
               
        /*To delete the records*/
        btnDelete=function(event){
        	event.target.closest('tr').remove();
        	if(document.querySelectorAll('#list tr').length<2){
        		document.getElementById('displayList').style.display="none";
        		clearTextBox();
	        	document.getElementById('btnAdd').style.display='block';
    			document.getElementById('btnUpdate').style.display='none';
        	}        	
    	};

    	self.rowIndex=null;

    	/*To edit the records*/    	
        btnEdit=function(event){        	        	
        	var rec=event.target.closest('tr');
        	self.rowIndex=rec.rowIndex;
        	document.getElementById('fName').value =rec.cells[0].textContent;
        	document.getElementById('lName').value =rec.cells[1].textContent;
        	document.getElementById('email').value =rec.cells[2].textContent;
        	document.getElementById('cellNumber').value =rec.cells[3].textContent;
        	document.getElementById('status').value =rec.cells[4].textContent;
        	document.getElementById('btnUpdate').style.display='block';
        	document.getElementById('btnAdd').style.display='none';
    	};

    	/*To Update the records*/
    	btnUpdate=function(event){
    		var rowNum=app.rowIndex;
    		var selectedRow=document.querySelectorAll('#list tr')[rowNum];
    		document.querySelectorAll('#list tr')[rowNum].cells[0].textContent =document.getElementById('fName').value; 
    		document.querySelectorAll('#list tr')[rowNum].cells[1].textContent = document.getElementById('lName').value;
    		document.querySelectorAll('#list tr')[rowNum].cells[2].textContent = document.getElementById('email').value;
    		document.querySelectorAll('#list tr')[rowNum].cells[3].textContent = document.getElementById('cellNumber').value;
    		document.querySelectorAll('#list tr')[rowNum].cells[4].textContent = document.getElementById('status').value;    		
    		document.getElementById('btnAdd').style.display='block';
    		document.getElementById('btnUpdate').style.display='none';
        	clearTextBox();        	
    	}

    }

}