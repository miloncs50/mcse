// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInBackQ:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*h*(4*f*h-8*h+8*f-3)},easeOutBackQ:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(4*h*f*h-12*h*h+16*h*f-13*h+6*f)},easeInBackQ2:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*h*(1.5*f*h-2.5*h+5*f-3)},easeOutBackQ2:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(1.5*h*f*h-5*h*h+10*h*f-12*h+6.5*f)}});function ws_louvers(f,q,g){var h=jQuery,m=h(this),a=f.cols||10,F=2.5,c=2,t=f.perspective||2000,s=g.find(".ws_list"),E=[],b=5,v={},n=h("<div>").addClass("ws_effect ws_louvers").appendTo(g),p=f.support.transform&&f.support.transition&&f.support.perspective,o=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/WOW Slider/g.test(navigator.userAgent);var w=[];n.css({position:"absolute",top:0,left:0,width:g.width(),height:g.height(),transform:"translate3d(0,0,0)",transformOrigin:(f.width/2)+"px "+(f.height/2)+"px 0",perspective:t+2000}).hide();for(var l=0;l<a;l++){var z=l%a,y=Math.floor(l/a);var C=h("<div>").css({position:"absolute",left:100*z/a+"%",top:0,outline:"1px solid transparent",transformStyle:o?"flat":"preserve-3d",overflow:p?"visible":"hidden"}).appendTo(n),x=h("<div>").css({transform:"scale(1) rotateX(0) rotateY(0) translate3d(0,0,0)",outline:"1px solid transparent",transformStyle:"preserve-3d"}).appendTo(C),u=h("<div>").addClass("ws_front_image").appendTo(x),B=p?h("<div>").addClass("ws_back_image").appendTo(x):0;u.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",backfaceVisibility:"hidden",transform:"translate3d(0,0,0)"}).append(h("<img>").css({left:-z*100+"%",top:-y*100+"%",position:"absolute",outline:"1px solid transparent"}));if(p){B.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",backfaceVisibility:"hidden",transform:"rotateY(180deg) translate3d(0,0,"+b+"px)"}).append(h("<img>").css({left:-z*100+"%",top:-y*100+"%",position:"absolute",outline:"1px solid transparent"}))}var r={position:"absolute",outline:"1px solid transparent"};E[l]={part:x,front:u,back:B,wrapper:C,leftEdge:p?h("<div>").addClass("ws_left_edge").css(r).appendTo(x):0,rightEdge:p?h("<div>").addClass("ws_right_edge").css(r).appendTo(x):0,topEdge:p?h("<div>").addClass("ws_top_edge").css(r).appendTo(x):0,bottomEdge:p?h("<div>").addClass("ws_bottom_edge").css(r).appendTo(x):0}}function A(L){var H={},J=q.get(L),M=f.width/a,N=f.height;for(var I=0;I<a;I++){var L=I%a,K=Math.floor(I/a);H[I]=D(J,{x:L*M,y:K*N,w:M,h:N})}return H}function G(H,K,j,I,J){for(var i in K){if(typeof E[i]!=="function"){K[i].topEdge.css({width:I,height:H,background:j[i],transform:"rotateX(90deg) translate3d(0,-"+H/2+"px,"+H/2+"px)"});K[i].bottomEdge.css({width:I,height:H,background:j[i],transform:"rotateX(90deg) translate3d(0,-"+H/2+"px,"+(-J+H/2)+"px)"});K[i].leftEdge.css({width:H,height:J,background:j[i],transform:"rotateY(90deg) translate3d("+H/2+"px,0,-"+H/2+"px)"});K[i].rightEdge.css({width:H,height:J,background:j[i],transform:"rotateY(90deg) translate3d("+H/2+"px,0,"+(I-H/2)+"px)"})}}}function e(H,I){var i=0;for(var j in H){if(typeof H[j]!=="function"){(function(J,K){wowAnimate(function(M){var S,Q,R,P="",L={};if(M<=0.5){S=h.easing.easeInBack(1,M*2,0,1,1,1).toFixed(3);Q=h.easing.easeInBackQ(1,M*2,0,1,1,1).toFixed(3);R=h.easing.easeInBackQ2(1,M*2,0,1,1,1).toFixed(3);K[J].back.css("backfaceVisibility","hidden")}else{S=h.easing.easeOutBack(1,(M-0.5)*2,0,1,1,1).toFixed(3);Q=h.easing.easeOutBackQ(1,(M-0.5)*2,0,1,1,1).toFixed(3);R=h.easing.easeOutBackQ2(1,(M-0.5)*2,0,1,1,1).toFixed(3);K[J].back.css("backfaceVisibility","visible")}for(var N in K[J].animate[M<=0.5?"half":"end"]){var T=K[J].animate[M<=0.5?"begin":"half"][N]||0,O=K[J].animate[M<=0.5?"half":"end"][N]||0;if(typeof O!=="object"){if(N==="scale"||N==="rotateX"||N==="rotateY"){O=T+(O-T)*Q}else{if(N==="left"||N==="top"){O=T+(O-T)*R}else{O=T+(O-T)*S}}}if(N==="rotateX"||N==="rotateY"||N==="rotateZ"){P+=N+"("+O+"deg) "}else{if(N==="scale"){P+=N+"("+O+") "}else{if(N==="translate3d"){P+=N+"("+(T[0]+(O[0]-T[0])*S).toFixed(3)+"px,"+(T[1]+(O[1]-T[1])*S).toFixed(3)+"px,"+(T[2]+(O[2]-T[2])*S).toFixed(3)+"px) "}else{L[N]=O}}}}K[J].wrapper.css({transform:"translate3d("+(L.left?L.left:0).toFixed(3)+"px,"+(L.top?L.top:0).toFixed(3)+"px,0)"});delete L.left;delete L.top;if(P){L.transform=P}K[J].part.css(L)},0,1,K[J].animate.duration,K[J].animate.delay,function(){i++;if(i==K.length&&I){I()}})}(j,H))}}}function k(Y,K,L,N){var V=g.width(),U=g.height(),T=V/a,S=U,J=(f.duration*0.4)>1000?1000:(f.duration*0.4),I=f.duration*0.6,O=[0,0];G(b,Y,v[K],T,S);n.css({transformOrigin:(V/2)+"px "+(U/2)+"px 0",width:V,height:U});for(var Q in Y){if(typeof Y[Q]!=="function"){var H=w[Q].delay*J;if(O[1]<=H){O[0]=Q;O[1]=H}Y[Q].part[0].ws_delay=[H,0]}}Y[O[0]].part[0].ws_delay[1]=1;for(var Q in Y){if(typeof Y[Q]!=="function"){var P=Y[Q],X=Q%a,W=Math.floor(Q/a),R=V*X/a,M=U*W;P.animate={delay:P.part[0].ws_delay[0],duration:I,begin:{left:0,top:0,width:T,height:S,scale:1,rotateX:0,rotateY:0,translate3d:[0,0,o?b:0]},half:{left:w[Q].halfLeft*T,top:w[Q].halfTop*S,scale:w[Q].halfScale,rotateX:w[Q].rotateX/2,rotateY:w[Q].rotateY/2,translate3d:[0,0,(o?1:0.5)*b]},end:{left:0,top:0,scale:1,rotateX:w[Q].rotateX,rotateY:w[Q].rotateY,translate3d:[0,0,b]}};P.front.find("img").css(L);P.back.css("backfaceVisibility","hidden").find("img").css(L);P.part.css({width:P.animate.begin.width,height:P.animate.begin.height,left:P.animate.begin.left,top:P.animate.begin.top})}}e(Y,N)}var d;this.go=function(U,K){if(d){return K}n.show();var I=h(q.get(K));I={width:I.width(),height:I.height(),marginTop:parseFloat(I.css("marginTop")),marginLeft:parseFloat(I.css("marginLeft"))};w=(function(){var aa=[0,1];var ab=[1.2,0.8];var Z=[0.2,0,-0.2];var Y=[180,-180];aa=aa[Math.floor(Math.random()*(aa.length))];ab=ab[Math.floor(Math.random()*(ab.length))];Z=Z[Math.floor(Math.random()*(Z.length))];Y=Y[Math.floor(Math.random()*(Y.length))];var j=a;var i=[];for(var X=(aa?0:j);aa?(X<=j):(X>=0);aa?(X++):(X--)){i.push({zIndex:X-(aa?j:0),rotateY:Y,delay:X/j,halfScale:ab,halfLeft:Z})}return i}());if(p){E[0].front.find("img").on("load",function(){s.hide()});for(var L in E){if(typeof E[L]!=="function"){E[L].front.find("img").attr("src",q.get(K).src);E[L].back.find("img").attr("src",q.get(U).src)}}if(!v[K]){v[K]=A(K)}d=new k(E,K,I,function(){s.show();m.trigger("effectEnd");n.hide();for(var i in E){if(typeof E[i]!=="function"){E[i].part.css({transition:"",transform:"rotateX(0) rotateY(0) translate3d(0,0,0)"})}}d=0})}else{d=true;function V(j,i){return Math.random()*(i-j+1)+j}var Q=g.width(),T=g.height(),P=Q/a,S=T,J=Q-P*(a-1),R=T;n.css({width:Q,height:T});var H=0;for(var L in E){var O=L%a,N=Math.floor(L/a);E[L].front.find("img").attr("src",q.get(U).src).css(I);var W=f.duration*(1-Math.abs((c*F-O*N)/(2*a)));var M=V(-1,1)>0?1:-1;E[L].wrapper.css({width:P,height:S});E[L].part.css({position:"absolute",top:0,left:M*P,opacity:0,width:P,height:S}).animate({left:0,opacity:1},W,function(){H++;if(H==a){s.stop(1,1);d=false;m.trigger("effectEnd")}})}}};function D(Q,H){H=H||{};var S=1,K=H.exclude||[],P;var M=document.createElement("canvas"),J=M.getContext("2d"),I=M.width=Q.naturalWidth,W=M.height=Q.naturalHeight;J.drawImage(Q,0,0,Q.naturalWidth,Q.naturalHeight);try{P=J.getImageData(H.x?H.x:0,H.y?H.y:0,H.w?H.w:Q.width,H.h?H.h:Q.height)["data"]}catch(R){console.log("error:unable to access image data: "+R);return"#ccc"}var L=(H.w?H.w:Q.width*H.h?H.h:Q.height)||P.length,N={},U="",T=[],j={dominant:{name:"",count:0}};var O=0;while(O<L){T[0]=P[O];T[1]=P[O+1];T[2]=P[O+2];U=T.join(",");if(U in N){N[U]=N[U]+1}else{N[U]=1}if(K.indexOf(["rgb(",U,")"].join(""))===-1){var V=N[U];if(V>j.dominant.count){j.dominant.name=U;j.dominant.count=V}}O+=S*4}return["rgb(",j.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container0").wowSlider({effect:"louvers",prev:"",next:"",duration:20*100,delay:20*100,width:640,height:360,autoPlay:true,autoPlayVideo:false,playPause:false,stopOnHover:false,loop:false,bullets:1,caption:false,captionEffect:"parallax",controls:false,controlsThumb:false,responsive:1,fullScreen:false,gestures:1,onBeforeStep:0,images:0});