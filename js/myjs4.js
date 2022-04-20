var data;
var html="";
var c=0;

$(document).ready(function() {
	getData();
	
	
		
		$("#bt").click(function(){
			$("#scr1").html(c+"/"+data.length);
			if(c<10) 
			{
				
				$("#myModal").modal("show");
				
			}
			if(c>10 && c<=15) 
			{	
				
				$("#myModal1").modal("show");
				
			}
			if(c>15) 
			{
				
				$("#myModal2").modal("show");
				
			}
		});
	
});


function getData() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
	  
	data=  JSON.parse(this.responseText);
	
	for (i=0;i<data.length;i++)
		{	
			html+="<div id='tt1'>";
			html+="<center>";
			html+="<p>"+data[i].question+"</p>";
				for(g=0;g<data[i].answer.length;g++)
					{	
						cor=0;
						clcor="";
						if(data[i].correct==g+1)
							
						{ 
							cor=1;
							clcor="cor"+i;
						}
						
						html+="<table>";
						html+="<tr class='"+clcor+"'><td class='tds'>"+data[i].answer[g]+"</td><td><button id='ok"+i+"_"+g+"' cor="+cor+" rw="+i+" cw="+g+">&nbsp;&nbsp;</button></td><td><span class='glyphicon glyphicon-ok' id='k"+i+"_"+g+"'  style='display:none;'></span><span class='glyphicon glyphicon-remove' id='t"+i+"_"+g+"' style='display:none;'></span></td></tr>";
						html+="</table>";
						
					
					}
					
			html+="</div>";
			html+="</center>";
			html+="<hr id='r1'>";
		}
		
	 $("#test").html(html);
	 $("#bt").css("display","block");
	 
	 for (i=0;i<data.length;i++)
		{
			data[i].press=0;
			for(g=0;g<data[i].answer.length;g++)
				
				{
						$("#ok"+i+"_"+g).click(function(){
							
								if(data[$(this).attr("rw")].press==0)
								{
									if($(this).attr('cor')==1)
										
									{
										rw=$(this).attr("rw");
										cw=$(this).attr("cw");
										$(this).css("display","none");
										$("#k"+rw+"_"+cw).css("display","block");
										$("#k"+rw+"_"+cw).parent().parent().css("background-color","green");
										c++;
									}
									
									else
										
									{
										rw=$(this).attr("rw");
										cw=$(this).attr("cw");
										$(this).css("display","none");
										$("#t"+rw+"_"+cw).css("display","block");
										$("#t"+rw+"_"+cw).parent().parent().css("background-color","red");
									
										$(".cor"+rw).css("background-color","green");
										$(".cor"+rw).find("button").css("display","none");
										$(".cor"+rw+" span:nth-child(1)").css("display","block");
									}
								
									data[$(this).attr("rw")].press=1;
								}
								
						
						});

						
				}
		}
    }
  xhttp.open("GET", "d2t.json", true);
  xhttp.send();
}