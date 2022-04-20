var s="";
var A=[];
var ST=[];
var SU=0;
var mem="";
var mi; 
var mj;
var c=36;
var ad=new Audio("music/1.mp3");
var ad1=new Audio("music/2.mp3");
var ad2=new Audio("music/3.mp3");
var clock;
var tm=0;

function move()

{
	tm++
	
	
}

$(document).ready(function(){
	
for (i=0;i<6;i++)
	{
		ST[i]=[];
		for (j=0;j<6;j++)
		{
			ST[i][j]=0;
			
		}
		
	}
	
	for (i=1;i<=18;i++)
	{
		A.push(i+".jpg");
		A.push(i+".jpg");
		
	}
	for (i=0;i<300;i++)
	{
		var k1=Math.floor(Math.random()*36);
		var k2=Math.floor(Math.random()*36);
		tmp=A[k1];
		A[k1]=A[k2];
		A[k2]=tmp;
		
	}
	
	
	
	
	$("#myModal").modal("show");
	
		
	$("#bt1").click(function(){
		ad1.play();
		clock=setInterval(function(){move()},1000);	
		$("#cl").html(clock+ "sec");
		$("#cl").css("display","block");
		
	
				
				var s="<Center><div >";
				
					k=0;
					for(var i=0;i<6;i++)
						{
						
							s+="<div class=row1>";
								for(var j=0;j<6;j++)
									{
									
										s+="<div class='divs' id=c_"+i+"_"+j+" ii="+i+" jj="+j+" >";
										s+="<img id=i_"+i+"_"+j+" src='images/"+A[k]+"'>";
										s+="</div>";
										k++;
									}
							s+="</div>";
						}
				s+="</div></center>";
			
			$("#stage").html(s);
				
		
				
							
								
								
									$(".divs").click(function(){
										
									i1=$(this).attr("ii");
									j1=$(this).attr("jj");
									
									if(ST[i1][j1]==0)
									{
										
									
										if(SU==0)  
										{
											ad.play();
											SU=1; mem=$("#i_"+i1+"_"+j1).attr("src");
											ST[i1][j1]=1;
											mi=i1;mj=j1;
											$("#i_"+i1+"_"+j1).show();
											
											}
											
										else {
											
											if(mem!=$("#i_"+i1+"_"+j1).attr("src"))
											{
												ad.play();
												$("#i_"+i1+"_"+j1).show(1000, function(){
													
												$("#i_"+i1+"_"+j1).hide(1000);
												$("#i_"+mi+"_"+mj).hide(1000);

																		
													ST[i1][j1]=0;
													ST[mi][mj]=0;
													SU=0;
								
												});
												
												
											}
											
											else
												
											{
												
												ST[i1][j1]=1;
												SU=0;
												
												$("#i_"+i1+"_"+j1).show(1000, function(){
												
													$("#c_"+i1+"_"+j1).css("opacity","0");
													$("#c_"+mi+"_"+mj).css("opacity","0");
													ad2.play();	
												});
													
												c=c-2;
												
													if(c==0) 
													{
														clearInterval(clock);
														$("#tim1").html(tm+"sec");
														$("#myModal2").modal("show");
														
													}
											}
											
										}
											
											
											
									}
										
									
									
									
												
											
									});
									
								
								
					
					
				
		});
		
		
});
	
	
	
	
	
