var N;
var x=1;
var enable;
var e;
var i;
var j;
var k;
var y=0;


function check()
 
{
	e=0;
	
	for(i=0;i<N;i++)
	for(j=0;j<N;j++)
	{
		
		if($("#c_"+i+"_"+j).css("background-color")=="rgb(255, 0, 0)") e++;
	}
		return e;
		
}

function clear() 
{

	for(i=0;i<N;i++)
		{
			for(j=0;j<N;j++)
			{
				if($("#c_"+i+"_"+j).text()=="")
				{
					$("#c_"+i+"_"+j).css("background-color","white");
				}
			}
		}

}



function clear2() 
{

	for(i=0;i<N;i++)
		{
			for(j=0;j<N;j++)
			{
				if($("#c_"+i+"_"+j).css("background-color")=="rgb(255, 0, 0)" )
				{
					$("#c_"+i+"_"+j).css("background-color","white");
				}
			}
		}

}



	function restart()

	{
		$("#f2").hide(1000);
		$("#f1").show(1000);
		x=1;
	}
	
	function back()
	
{	
	maxi_old=0;
	maxj_old=0;
	if(x>2)
	{		
			for(k=0;k<2;k++)
			{
				max=0;
				maxi=-1;
				maxj=-1;
				
				for(i=0;i<N;i++)
				{
					for(j=0;j<N;j++)
					{
						if($("#c_"+i+"_"+j).text()/1>max)
						{
							
							maxi=i; 
							maxj=j;
							max=$("#c_"+i+"_"+j).text()/1;
							
						}
					}
				}
				
				x=max;
				
				for(i=0;i<N;i++)
				{
					for(j=0;j<N;j++)
					{
						if($("#c_"+i+"_"+j).text()/1==max-1)
						{
							
							maxi_old=i; 
							maxj_old=j;
							
						}
					}
				}
			}
	
	
		$("#c_"+maxi+"_"+maxj).text("");
		$("#c_"+maxi+"_"+maxj).css("background-color","white");
		var ev = jQuery.Event("click");
	x=max-1
	y=1;
		$("#c_"+maxi_old+"_"+maxj_old).trigger(ev);
	}	
		
}
	
	


$(document).ready(function(){
	
	$("#myModal1").modal("show");
		  
	$("#bt").click(function() {

		$("#b1").click(function(){
			N=$("#n1").val();
			$("#f1").hide(1000);
			let s="<table class=tb1 border=1>";
			
					for(var i=0;i<N;i++)
						{
						
							s+="<tr>";
								for(var j=0;j<N;j++)
									{
									
										s+="<td id=c_"+i+"_"+j+" ii="+i+" jj="+j+" class=cells></td>";
									
									}
							s+="</tr>";
						}
				s+="<table>";
				s+="<button onclick='restart()' class=bts>Restart</button><button onclick='back()' class=bts>Back</button>";
			
			$("#f2").html(s);
			$("#f2").show(1000);
		
		
		$(".cells").click(function(){
				
				if(x==1)
					{
						enable=true;
					}
					
				else
					{
						if($(this).css("background-color")=="rgb(255, 0, 0)")
							{
								enable=true;
							}
						else
							{
								enable=false;
							}
					}
				
				if(y==1)
				{
					clear2();
					y=0;
					enable=true;
				}
				if(enable)
				
				{
						clear();
						
						$(this).css("background-color","cyan");
						i=$(this).attr("ii")/1;
						j=$(this).attr("jj")/1;
						
						$(this).text(x);
						
						
						
						if($("#c_"+i+"_"+(j+3)).text()=="")
						
							{
								$("#c_"+i+"_"+(j+3)).css("background-color","red");
								
							}
							
						if($("#c_"+i+"_"+(j-3)).text()=="")
						
							{
								$("#c_"+i+"_"+(j-3)).css("background-color","red");
								
							}
							
						if($("#c_"+(i+3)+"_"+j).text()=="")
						
							{
								$("#c_"+(i+3)+"_"+j).css("background-color","red");
								
							}
							
						if($("#c_"+(i-3)+"_"+j).text()=="")
						
							{
								$("#c_"+(i-3)+"_"+j).css("background-color","red");
								
							}
						
						if($("#c_"+(i+2)+"_"+(j+2)).text()=="")
						
							{
								$("#c_"+(i+2)+"_"+(j+2)).css("background-color","red");
								
							}
							
						if($("#c_"+(i+2)+"_"+(j-2)).text()=="")
						
							{
								$("#c_"+(i+2)+"_"+(j-2)).css("background-color","red");
								
							}
							
						if($("#c_"+(i-2)+"_"+(j+2)).text()=="")
						
							{
								$("#c_"+(i-2)+"_"+(j+2)).css("background-color","red");
								
							}
							
						if($("#c_"+(i-2)+"_"+(j-2)).text()=="")
						
							{
								$("#c_"+(i-2)+"_"+(j-2)).css("background-color","red");
							
							}
							
							if(check()==0)
								
							{	
								$("#myModal").modal("show");
								$("#score").html("Your score is =" +x);
							}
					x++
				}
			
			});
				
			});
	});
});