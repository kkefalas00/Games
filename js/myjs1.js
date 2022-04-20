var game=1;
var clock;
var c=0;
var allc=0;
var A=[];
var X={"i":0,"j":0, "sxima":"fab fa-mandalorian", "color":"red", "width":"24pt"};
var E=[
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"},
		{"i":0,"j":0, "sxima":"fas fa-ghost", "color":"black"}
		
		
		];
var DOWN=40, LEFT=37, RIGHT=39, UP=38;


function move(k)
	{
		if(game==1)
		{
			 ii=X.i;
			 jj=X.j;
			 
			 
			 if(k==DOWN)  ii=ii+1;
			 if(k==UP)    ii=ii-1;
			 if(k==LEFT)  jj=jj-1;
			 if(k==RIGHT) jj=jj+1;
			 
			 if((ii>=0 && ii<=14) && (jj>=0 && jj<=14))
				{
					
					
				 if(A[ii][jj]==0 || A[ii][jj]==1.1)
				 
				 {	
					if(A[ii][jj]==1.1)
					{
						c++;
						if(c==allc)
						{
							
							$("#myModal1").modal("show");
							$("#score2").html(c);
							clearInterval(clock);
							game=0;
						}
					}
				 
					A[X.i][X.j]=0;
					 A[ii][jj]=2;
					 X.i=ii;
					 X.j=jj;
				 }
				}
			
		}
	}
	
	function moveE(e)
	
	{
		 D=[DOWN,LEFT,RIGHT,UP];
		 
		 
		 ii=E[e].i;
		 jj=E[e].j;
		 
		 mind=1000000;
		 mini=-1;
		 
		for(id=0;id<19;id++)
		
			{
				
				ii=E[e].i;
				jj=E[e].j;
					
				k=D[id];
					
				 if(k==DOWN)  ii=ii+1;
				 if(k==UP)    ii=ii-1;
				 if(k==LEFT)  jj=jj-1;
				 if(k==RIGHT) jj=jj+1;
				 
				 
				 
				 if((ii>=0 && ii<=14) && (jj>=0 && jj<=14))
					{
					 	
					 if(A[ii][jj]==0 || A[ii][jj]==1.1 || A[ii][jj]==2 )
					 
						 {
							d=Math.abs(X.i-ii)+Math.abs(X.j-jj)
							
							if(d<mind)
							
								{
									mind=d;
									mini=id;
								}
						 }
					 
					}
			}
		
		if(mini!=-1)
			{
				ii=E[e].i;
				jj=E[e].j;
				
					k=D[mini];
						
					 if(k==DOWN)  ii=ii+1;
					 if(k==UP)    ii=ii-1;
					 if(k==LEFT)  jj=jj-1;
					 if(k==RIGHT) jj=jj+1;
			
				if((ii>=0 && ii<=14) && (jj>=0 && jj<=14))
			 
					{
						
						 if(A[ii][jj]==0 ||A[ii][jj]==1.1 || A[ii][jj]==2 )
						 
						 {
							 A[E[e].i][E[e].j]=0;
							 A[ii][jj]=e+3;
							 E[e].i=ii;
							 E[e].j=jj;
						 }
					}
				
			}
	}

	function draw() 
	
	{
		s="<center>";
		s+="<table id=p>";
		for(var i=0;i<15;i++)
			{
				
				s+="<tr>";
					for(var j=0;j<15;j++)
						{
							if(A[i][j]==1.1){ s+="<td id=c"+i+"_"+j+" class=cells style='text-align:center; font-size:20pt; font-weight:bold;color:red'>.</td>";
							allc++;
							}
							if(A[i][j]==0) s+="<td id=c"+i+"_"+j+" class=cells ></td>";
							if(A[i][j]==1) s+="<td id=c"+i+"_"+j+" class=cells style='background-color:blue;'></td>";
							if(A[i][j]==2) s+="<td id=c"+i+"_"+j+" class=cells><span class='"+X.sxima+"' style='color:"+X.color+"; font-size:"+X.width+"'></span></td>";
							if(A[i][j]>2) s+="<td id=c"+i+"_"+j+" class=cells><span class='"+E[A[i][j]-3].sxima+"' style='color:"+E[A[i][j]-3].color+"'></span></td>";
						}
			
			} s+="</tr>";
		
		
		s+="</table>"; 
		s+="</center>";
		$("#pista").html(s);
		
		for(i=0;i<19;i++)
			{
				if(E[i].i==X.i && E[i].j==X.j)
					{		
							
							
							$("#myModal").modal("show");
							$("#score").html(c);
							clearInterval(clock);
							game=0;
							
					}		
					
			
			}
		
		
	
	}

$(document).ready(function(){
		
		$("#bt").click(function() {
		location.reload();
		});
	
		$("#myModal2").modal("show");
		  
		$("#bt2").click(function() {
		
		
	
		
	for(var i=0;i<15;i++)
		{
			A[i]=[];
				
				for(var j=0;j<15;j++)
				{
					A[i][j]=1.1;
				}
			
		} 
		
		

			for(i=0;i<30;i++)
			{
				ii=Math.floor(Math.random()*15);
				jj=Math.floor(Math.random()*15);
				A[ii][jj]=1;
				
			
			}
			
			while(true)
				{
					ii=Math.floor(Math.random()*15);
					jj=Math.floor(Math.random()*15);
					if(A[ii][jj]==0 || A[ii][jj]==1.1)
						{
							X.i=ii;
							X.j=jj;
							A[ii][jj]=2;
							break;
						}
				}
				for(i=0;i<19;i++)
				{
					while(true)
					{
					
						ii=Math.floor(Math.random()*15);
						jj=Math.floor(Math.random()*15);
						if(A[ii][jj]==0 || A[ii][jj]==1.1)
							{
								E[i].i=ii;
								E[i].j=jj;
								A[ii][jj]=i+3;
								break;
							}
					}
				}
					
				draw();
		
		clock=setInterval(function(){
			
			for(e=0;e<19;e++)
				{
					
					moveE(e);
				
				}
			draw();
		},1000);
		
		
		$("body").keydown(function(event){
		k=event.which;
		move(k);
		draw();
		
		});
		
		
	});	
		
});
	