var ME=Object.defineProperty;var bE=(pr,Ot,Xt)=>Ot in pr?ME(pr,Ot,{enumerable:!0,configurable:!0,writable:!0,value:Xt}):pr[Ot]=Xt;var ya=(pr,Ot,Xt)=>(bE(pr,typeof Ot!="symbol"?Ot+"":Ot,Xt),Xt);(async()=>{(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();const pr="157",Ot={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xt={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bc=0,Os=1,Tc=2,Fs=1,Rc=2,fr=3,Cr=0,Ft=1,mr=2,Lr=0,ui=1,zs=2,Hs=3,Bs=4,Ac=5,di=100,Cc=101,Lc=102,Gs=103,Vs=104,Pc=200,Dc=201,Ic=202,Uc=203,ks=204,Ws=205,Nc=206,Oc=207,Fc=208,zc=209,Hc=210,Bc=0,Gc=1,Vc=2,Ea=3,kc=4,Wc=5,Xc=6,jc=7,Xs=0,Yc=1,qc=2,Pr=0,Kc=1,Zc=2,Jc=3,Qc=4,$c=5,js=300,pi=301,fi=302,un=303,Ma=304,dn=306,ba=1e3,Ht=1001,Ta=1002,Et=1003,Ys=1004,Ra=1005,Mt=1006,eh=1007,mi=1008,Dr=1009,th=1010,rh=1011,Aa=1012,qs=1013,Ir=1014,Zt=1015,gr=1016,Ks=1017,Zs=1018,Xr=1020,ih=1021,Jt=1023,nh=1024,ah=1025,jr=1026,gi=1027,sh=1028,Js=1029,oh=1030,Qs=1031,$s=1033,Ca=33776,La=33777,Pa=33778,Da=33779,eo=35840,to=35841,ro=35842,io=35843,lh=36196,no=37492,ao=37496,so=37808,oo=37809,lo=37810,co=37811,ho=37812,uo=37813,po=37814,fo=37815,mo=37816,go=37817,_o=37818,vo=37819,wo=37820,xo=37821,Ia=36492,So=36494,yo=36495,ch=36283,Eo=36284,Mo=36285,bo=36286,To=3e3,Yr=3001,hh=3200,uh=3201,Ro=0,dh=1,jt="",bt="srgb",tr="srgb-linear",Ua="display-p3",pn="display-p3-linear",fn="linear",nt="srgb",mn="rec709",gn="p3",Na=7680,ph=519,fh=512,mh=513,gh=514,_h=515,vh=516,wh=517,xh=518,Sh=519,Ao=35044,Co="300 es",Oa=1035,_r=2e3,_n=2001;class qr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lo=1234567;const Vi=Math.PI/180,ki=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[r&255]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function Fa(i,e){return(i%e+e)%e}function yh(i,e,t,r,n){return r+(i-e)*(n-r)/(t-e)}function Eh(i,e,t){return i!==e?(t-i)/(e-i):0}function Wi(i,e,t){return(1-t)*i+t*e}function Mh(i,e,t,r){return Wi(i,e,1-Math.exp(-t*r))}function bh(i,e=1){return e-Math.abs(Fa(i,e*2)-e)}function Th(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ah(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ch(i,e){return i+Math.random()*(e-i)}function Lh(i){return i*(.5-Math.random())}function Ph(i){i!==void 0&&(Lo=i);let e=Lo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dh(i){return i*Vi}function Ih(i){return i*ki}function za(i){return(i&i-1)===0&&i!==0}function Uh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vn(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nh(i,e,t,r,n){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+r)/2),h=s((e+r)/2),p=a((e-r)/2),u=s((e-r)/2),g=a((r-e)/2),x=s((r-e)/2);switch(n){case"XYX":i.set(o*h,l*p,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*g,o*c);break;case"YXY":i.set(l*g,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*g,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Oh={DEG2RAD:Vi,RAD2DEG:ki,generateUUID:_i,clamp:Tt,euclideanModulo:Fa,mapLinear:yh,inverseLerp:Eh,lerp:Wi,damp:Mh,pingpong:bh,smoothstep:Th,smootherstep:Rh,randInt:Ah,randFloat:Ch,randFloatSpread:Lh,seededRandom:Ph,degToRad:Dh,radToDeg:Ih,isPowerOfTwo:za,ceilPowerOfTwo:Uh,floorPowerOfTwo:vn,setQuaternionFromProperEuler:Nh,normalize:Dt,denormalize:vi};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*r-s*n+e.x,this.y=a*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,r,n,a,s,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,s,o,l,c)}set(e,t,r,n,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=r,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],h=r[4],p=r[7],u=r[2],g=r[5],x=r[8],v=n[0],m=n[3],d=n[6],E=n[1],_=n[4],T=n[7],A=n[2],D=n[5],M=n[8];return a[0]=s*v+o*E+l*A,a[3]=s*m+o*_+l*D,a[6]=s*d+o*T+l*M,a[1]=c*v+h*E+p*A,a[4]=c*m+h*_+p*D,a[7]=c*d+h*T+p*M,a[2]=u*v+g*E+x*A,a[5]=u*m+g*_+x*D,a[8]=u*d+g*T+x*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-r*a*h+r*o*l+n*a*c-n*s*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*s-o*c,u=o*l-h*a,g=c*a-s*l,x=t*p+r*u+n*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=p*v,e[1]=(n*c-h*r)*v,e[2]=(o*r-n*s)*v,e[3]=u*v,e[4]=(h*t-n*l)*v,e[5]=(n*a-o*t)*v,e[6]=g*v,e[7]=(r*l-c*t)*v,e[8]=(s*t-r*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new Ve;function Po(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wn(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fh(){const i=wn("canvas");return i.style.display="block",i}const Do={};function Xi(i){i in Do||(Do[i]=!0,console.warn(i))}const Io=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uo=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xn={[tr]:{transfer:fn,primaries:mn,toReference:i=>i,fromReference:i=>i},[bt]:{transfer:nt,primaries:mn,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[pn]:{transfer:fn,primaries:gn,toReference:i=>i.applyMatrix3(Uo),fromReference:i=>i.applyMatrix3(Io)},[Ua]:{transfer:nt,primaries:gn,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Uo),fromReference:i=>i.applyMatrix3(Io).convertLinearToSRGB()}},zh=new Set([tr,pn]),et={enabled:!0,_workingColorSpace:tr,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!zh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const r=xn[e].toReference,n=xn[t].fromReference;return n(r(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return xn[i].primaries},getTransfer:function(i){return i===jt?fn:xn[i].transfer}};function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ba(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xi;class No{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=wn("canvas")),xi.width=e.width,xi.height=e.height;const r=xi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wn("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=wi(a[s]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(wi(t[r]/255)*255):t[r]=wi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hh=0;class Oo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=_i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(Ga(n[s].image)):a.push(Ga(n[s]))}else a=Ga(n);r.url=a}return t||(e.images[this.uuid]=r),r}}function Ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?No.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bh=0;class zt extends qr{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,r=Ht,n=Ht,a=Mt,s=mi,o=Jt,l=Dr,c=zt.DEFAULT_ANISOTROPY,h=jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=_i(),this.name="",this.source=new Oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Yr?bt:jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==js)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?Yr:To}set encoding(e){Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yr?bt:jt}}zt.DEFAULT_IMAGE=null,zt.DEFAULT_MAPPING=js,zt.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,r=0,n=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,a;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],p=s[5],u=s[9],g=s[2],x=s[6],v=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-g)<.01&&Math.abs(u-x)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+g)<.1&&Math.abs(u+x)<.1&&Math.abs(o+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const d=(o+1)/2,E=(p+1)/2,_=(v+1)/2,T=(l+h)/4,A=(c+g)/4,D=(u+x)/4;return d>E&&d>_?d<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(d),n=T/r,a=A/r):E>_?E<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(E),r=T/n,a=D/n):_<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(_),r=A/a,n=D/a),this.set(r,n,a,t),this}let m=Math.sqrt((x-u)*(x-u)+(c-g)*(c-g)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(x-u)/m,this.y=(c-g)/m,this.z=(h-l)/m,this.w=Math.acos((o+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gh extends qr{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const n={width:e,height:t,depth:1};r.encoding!==void 0&&(Xi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Yr?bt:jt),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new zt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Oo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends Gh{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Fo extends zt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Et,this.minFilter=Et,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vh extends zt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Et,this.minFilter=Et,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Zr=class{constructor(i=0,e=0,t=0,r=1){this.isQuaternion=!0,this._x=i,this._y=e,this._z=t,this._w=r}static slerpFlat(i,e,t,r,n,a,s){let o=t[r+0],l=t[r+1],c=t[r+2],h=t[r+3];const p=n[a+0],u=n[a+1],g=n[a+2],x=n[a+3];if(s===0){i[e+0]=o,i[e+1]=l,i[e+2]=c,i[e+3]=h;return}if(s===1){i[e+0]=p,i[e+1]=u,i[e+2]=g,i[e+3]=x;return}if(h!==x||o!==p||l!==u||c!==g){let v=1-s;const m=o*p+l*u+c*g+h*x,d=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const T=Math.sqrt(E),A=Math.atan2(T,m*d);v=Math.sin(v*A)/T,s=Math.sin(s*A)/T}const _=s*d;if(o=o*v+p*_,l=l*v+u*_,c=c*v+g*_,h=h*v+x*_,v===1-s){const T=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=T,l*=T,c*=T,h*=T}}i[e]=o,i[e+1]=l,i[e+2]=c,i[e+3]=h}static multiplyQuaternionsFlat(i,e,t,r,n,a){const s=t[r],o=t[r+1],l=t[r+2],c=t[r+3],h=n[a],p=n[a+1],u=n[a+2],g=n[a+3];return i[e]=s*g+c*h+o*u-l*p,i[e+1]=o*g+c*p+l*h-s*u,i[e+2]=l*g+c*u+s*p-o*h,i[e+3]=c*g-s*h-o*p-l*u,i}get x(){return this._x}set x(i){this._x=i,this._onChangeCallback()}get y(){return this._y}set y(i){this._y=i,this._onChangeCallback()}get z(){return this._z}set z(i){this._z=i,this._onChangeCallback()}get w(){return this._w}set w(i){this._w=i,this._onChangeCallback()}set(i,e,t,r){return this._x=i,this._y=e,this._z=t,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(i){return this._x=i.x,this._y=i.y,this._z=i.z,this._w=i.w,this._onChangeCallback(),this}setFromEuler(i,e){const t=i._x,r=i._y,n=i._z,a=i._order,s=Math.cos,o=Math.sin,l=s(t/2),c=s(r/2),h=s(n/2),p=o(t/2),u=o(r/2),g=o(n/2);switch(a){case"XYZ":this._x=p*c*h+l*u*g,this._y=l*u*h-p*c*g,this._z=l*c*g+p*u*h,this._w=l*c*h-p*u*g;break;case"YXZ":this._x=p*c*h+l*u*g,this._y=l*u*h-p*c*g,this._z=l*c*g-p*u*h,this._w=l*c*h+p*u*g;break;case"ZXY":this._x=p*c*h-l*u*g,this._y=l*u*h+p*c*g,this._z=l*c*g+p*u*h,this._w=l*c*h-p*u*g;break;case"ZYX":this._x=p*c*h-l*u*g,this._y=l*u*h+p*c*g,this._z=l*c*g-p*u*h,this._w=l*c*h+p*u*g;break;case"YZX":this._x=p*c*h+l*u*g,this._y=l*u*h+p*c*g,this._z=l*c*g-p*u*h,this._w=l*c*h-p*u*g;break;case"XZY":this._x=p*c*h-l*u*g,this._y=l*u*h-p*c*g,this._z=l*c*g+p*u*h,this._w=l*c*h+p*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(i,e){const t=e/2,r=Math.sin(t);return this._x=i.x*r,this._y=i.y*r,this._z=i.z*r,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(i){const e=i.elements,t=e[0],r=e[4],n=e[8],a=e[1],s=e[5],o=e[9],l=e[2],c=e[6],h=e[10],p=t+s+h;if(p>0){const u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(c-o)*u,this._y=(n-l)*u,this._z=(a-r)*u}else if(t>s&&t>h){const u=2*Math.sqrt(1+t-s-h);this._w=(c-o)/u,this._x=.25*u,this._y=(r+a)/u,this._z=(n+l)/u}else if(s>h){const u=2*Math.sqrt(1+s-t-h);this._w=(n-l)/u,this._x=(r+a)/u,this._y=.25*u,this._z=(o+c)/u}else{const u=2*Math.sqrt(1+h-t-s);this._w=(a-r)/u,this._x=(n+l)/u,this._y=(o+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(i,e){let t=i.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(i.x)>Math.abs(i.z)?(this._x=-i.y,this._y=i.x,this._z=0,this._w=t):(this._x=0,this._y=-i.z,this._z=i.y,this._w=t)):(this._x=i.y*e.z-i.z*e.y,this._y=i.z*e.x-i.x*e.z,this._z=i.x*e.y-i.y*e.x,this._w=t),this.normalize()}angleTo(i){return 2*Math.acos(Math.abs(Tt(this.dot(i),-1,1)))}rotateTowards(i,e){const t=this.angleTo(i);if(t===0)return this;const r=Math.min(1,e/t);return this.slerp(i,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(i){return this._x*i._x+this._y*i._y+this._z*i._z+this._w*i._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let i=this.length();return i===0?(this._x=0,this._y=0,this._z=0,this._w=1):(i=1/i,this._x=this._x*i,this._y=this._y*i,this._z=this._z*i,this._w=this._w*i),this._onChangeCallback(),this}multiply(i){return this.multiplyQuaternions(this,i)}premultiply(i){return this.multiplyQuaternions(i,this)}multiplyQuaternions(i,e){const t=i._x,r=i._y,n=i._z,a=i._w,s=e._x,o=e._y,l=e._z,c=e._w;return this._x=t*c+a*s+r*l-n*o,this._y=r*c+a*o+n*s-t*l,this._z=n*c+a*l+t*o-r*s,this._w=a*c-t*s-r*o-n*l,this._onChangeCallback(),this}slerp(i,e){if(e===0)return this;if(e===1)return this.copy(i);const t=this._x,r=this._y,n=this._z,a=this._w;let s=a*i._w+t*i._x+r*i._y+n*i._z;if(s<0?(this._w=-i._w,this._x=-i._x,this._y=-i._y,this._z=-i._z,s=-s):this.copy(i),s>=1)return this._w=a,this._x=t,this._y=r,this._z=n,this;const o=1-s*s;if(o<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*t+e*this._x,this._y=u*r+e*this._y,this._z=u*n+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(o),c=Math.atan2(l,s),h=Math.sin((1-e)*c)/l,p=Math.sin(e*c)/l;return this._w=a*h+this._w*p,this._x=t*h+this._x*p,this._y=r*h+this._y*p,this._z=n*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(i,e,t){return this.copy(i).slerp(e,t)}random(){const i=Math.random(),e=Math.sqrt(1-i),t=Math.sqrt(i),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(e*Math.cos(r),t*Math.sin(n),t*Math.cos(n),e*Math.sin(r))}equals(i){return i._x===this._x&&i._y===this._y&&i._z===this._z&&i._w===this._w}fromArray(i,e=0){return this._x=i[e],this._y=i[e+1],this._z=i[e+2],this._w=i[e+3],this._onChangeCallback(),this}toArray(i=[],e=0){return i[e]=this._x,i[e+1]=this._y,i[e+2]=this._z,i[e+3]=this._w,i}fromBufferAttribute(i,e){return this._x=i.getX(e),this._y=i.getY(e),this._z=i.getZ(e),this._w=i.getW(e),this}toJSON(){return this.toArray()}_onChange(i){return this._onChangeCallback=i,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class Mc{constructor(e=0,t=0,r=0){Mc.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*n,this.y=a[1]*t+a[4]*r+a[7]*n,this.z=a[2]*t+a[5]*r+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*r+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*r+a[10]*n+a[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*n-o*r,h=l*r+o*t-a*n,p=l*n+a*r-s*t,u=-a*t-s*r-o*n;return this.x=c*l+u*-a+h*-o-p*-s,this.y=h*l+u*-s+p*-a-c*-o,this.z=p*l+u*-o+c*-s-h*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n,this.y=a[1]*t+a[5]*r+a[9]*n,this.z=a[2]*t+a[6]*r+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-a*o,this.y=a*s-r*l,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Va=new F,zo=new Zr;class ji{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(wr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(wr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=wr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Si.copy(e.boundingBox),Si.applyMatrix4(e.matrixWorld),this.union(Si);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const a=n.attributes.position;for(let s=0,o=a.count;s<o;s++)wr.fromBufferAttribute(a,s).applyMatrix4(e.matrixWorld),this.expandByPoint(wr)}else n.boundingBox===null&&n.computeBoundingBox(),Si.copy(n.boundingBox),Si.applyMatrix4(e.matrixWorld),this.union(Si)}const r=e.children;for(let n=0,a=r.length;n<a;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wr),wr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),Sn.subVectors(this.max,Yi),yi.subVectors(e.a,Yi),Ei.subVectors(e.b,Yi),Mi.subVectors(e.c,Yi),Ur.subVectors(Ei,yi),Nr.subVectors(Mi,Ei),Jr.subVectors(yi,Mi);let t=[0,-Ur.z,Ur.y,0,-Nr.z,Nr.y,0,-Jr.z,Jr.y,Ur.z,0,-Ur.x,Nr.z,0,-Nr.x,Jr.z,0,-Jr.x,-Ur.y,Ur.x,0,-Nr.y,Nr.x,0,-Jr.y,Jr.x,0];return!ka(t,yi,Ei,Mi,Sn)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,yi,Ei,Mi,Sn))?!1:(yn.crossVectors(Ur,Nr),t=[yn.x,yn.y,yn.z],ka(t,yi,Ei,Mi,Sn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vr=[new F,new F,new F,new F,new F,new F,new F,new F],wr=new F,Si=new ji,yi=new F,Ei=new F,Mi=new F,Ur=new F,Nr=new F,Jr=new F,Yi=new F,Sn=new F,yn=new F,Qr=new F;function ka(i,e,t,r,n){for(let a=0,s=i.length-3;a<=s;a+=3){Qr.fromArray(i,a);const o=n.x*Math.abs(Qr.x)+n.y*Math.abs(Qr.y)+n.z*Math.abs(Qr.z),l=e.dot(Qr),c=t.dot(Qr),h=r.dot(Qr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const kh=new ji,qi=new F,Wa=new F;class Xa{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):kh.setFromPoints(e).getCenter(r);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(qi,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(Wa)),this.expandByPoint(qi.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xr=new F,ja=new F,En=new F,Or=new F,Ya=new F,Mn=new F,qa=new F;class Ho{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){ja.copy(e).add(t).multiplyScalar(.5),En.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(ja);const a=e.distanceTo(t)*.5,s=-this.direction.dot(En),o=Or.dot(this.direction),l=-Or.dot(En),c=Or.lengthSq(),h=Math.abs(1-s*s);let p,u,g,x;if(h>0)if(p=s*l-o,u=s*o-l,x=a*h,p>=0)if(u>=-x)if(u<=x){const v=1/h;p*=v,u*=v,g=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=a,p=Math.max(0,-(s*u+o)),g=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(s*u+o)),g=-p*p+u*(u+2*l)+c;else u<=-x?(p=Math.max(0,-(-s*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),g=-p*p+u*(u+2*l)+c):u<=x?(p=0,u=Math.min(Math.max(-a,-l),a),g=u*(u+2*l)+c):(p=Math.max(0,-(s*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),g=-p*p+u*(u+2*l)+c);else u=s>0?-a:a,p=Math.max(0,-(s*u+o)),g=-p*p+u*(u+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,p),n&&n.copy(ja).addScaledVector(En,u),g}intersectSphere(e,t){xr.subVectors(e.center,this.origin);const r=xr.dot(this.direction),n=xr.dot(xr)-r*r,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(r=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(r=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),r>s||a>n||((a>r||isNaN(r))&&(r=a),(s<n||isNaN(n))&&(n=s),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,r,n,a){Ya.subVectors(t,e),Mn.subVectors(r,e),qa.crossVectors(Ya,Mn);let s=this.direction.dot(qa),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Or.subVectors(this.origin,e);const l=o*this.direction.dot(Mn.crossVectors(Or,Mn));if(l<0)return null;const c=o*this.direction.dot(Ya.cross(Or));if(c<0||l+c>s)return null;const h=-o*Or.dot(qa);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,r,n,a,s,o,l,c,h,p,u,g,x,v,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,s,o,l,c,h,p,u,g,x,v,m)}set(e,t,r,n,a,s,o,l,c,h,p,u,g,x,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=r,d[12]=n,d[1]=a,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=g,d[7]=x,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/bi.setFromMatrixColumn(e,0).length(),a=1/bi.setFromMatrixColumn(e,1).length(),s=1/bi.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,a=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const u=s*h,g=s*p,x=o*h,v=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=g+x*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=x+g*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*h,g=l*p,x=c*h,v=c*p;t[0]=u+v*o,t[4]=x*o-g,t[8]=s*c,t[1]=s*p,t[5]=s*h,t[9]=-o,t[2]=g*o-x,t[6]=v+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*h,g=l*p,x=c*h,v=c*p;t[0]=u-v*o,t[4]=-s*p,t[8]=x+g*o,t[1]=g+x*o,t[5]=s*h,t[9]=v-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*h,g=s*p,x=o*h,v=o*p;t[0]=l*h,t[4]=x*c-g,t[8]=u*c+v,t[1]=l*p,t[5]=v*c+u,t[9]=g*c-x,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,g=s*c,x=o*l,v=o*c;t[0]=l*h,t[4]=v-u*p,t[8]=x*p+g,t[1]=p,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=g*p+x,t[10]=u-v*p}else if(e.order==="XZY"){const u=s*l,g=s*c,x=o*l,v=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+v,t[5]=s*h,t[9]=g*p-x,t[2]=x*p-g,t[6]=o*h,t[10]=v*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wh,e,Xh)}lookAt(e,t,r){const n=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Fr.crossVectors(r,Bt),Fr.lengthSq()===0&&(Math.abs(r.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Fr.crossVectors(r,Bt)),Fr.normalize(),bn.crossVectors(Bt,Fr),n[0]=Fr.x,n[4]=bn.x,n[8]=Bt.x,n[1]=Fr.y,n[5]=bn.y,n[9]=Bt.y,n[2]=Fr.z,n[6]=bn.z,n[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],h=r[1],p=r[5],u=r[9],g=r[13],x=r[2],v=r[6],m=r[10],d=r[14],E=r[3],_=r[7],T=r[11],A=r[15],D=n[0],M=n[4],V=n[8],S=n[12],R=n[1],j=n[5],Q=n[9],te=n[13],I=n[2],k=n[6],K=n[10],Y=n[14],oe=n[3],Z=n[7],ee=n[11],O=n[15];return a[0]=s*D+o*R+l*I+c*oe,a[4]=s*M+o*j+l*k+c*Z,a[8]=s*V+o*Q+l*K+c*ee,a[12]=s*S+o*te+l*Y+c*O,a[1]=h*D+p*R+u*I+g*oe,a[5]=h*M+p*j+u*k+g*Z,a[9]=h*V+p*Q+u*K+g*ee,a[13]=h*S+p*te+u*Y+g*O,a[2]=x*D+v*R+m*I+d*oe,a[6]=x*M+v*j+m*k+d*Z,a[10]=x*V+v*Q+m*K+d*ee,a[14]=x*S+v*te+m*Y+d*O,a[3]=E*D+_*R+T*I+A*oe,a[7]=E*M+_*j+T*k+A*Z,a[11]=E*V+_*Q+T*K+A*ee,a[15]=E*S+_*te+T*Y+A*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],g=e[14],x=e[3],v=e[7],m=e[11],d=e[15];return x*(+a*l*p-n*c*p-a*o*u+r*c*u+n*o*g-r*l*g)+v*(+t*l*g-t*c*u+a*s*u-n*s*g+n*c*h-a*l*h)+m*(+t*c*p-t*o*g-a*s*p+r*s*g+a*o*h-r*c*h)+d*(-n*o*h-t*l*p+t*o*u+n*s*p-r*s*u+r*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],g=e[11],x=e[12],v=e[13],m=e[14],d=e[15],E=p*m*c-v*u*c+v*l*g-o*m*g-p*l*d+o*u*d,_=x*u*c-h*m*c-x*l*g+s*m*g+h*l*d-s*u*d,T=h*v*c-x*p*c+x*o*g-s*v*g-h*o*d+s*p*d,A=x*p*l-h*v*l-x*o*u+s*v*u+h*o*m-s*p*m,D=t*E+r*_+n*T+a*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/D;return e[0]=E*M,e[1]=(v*u*a-p*m*a-v*n*g+r*m*g+p*n*d-r*u*d)*M,e[2]=(o*m*a-v*l*a+v*n*c-r*m*c-o*n*d+r*l*d)*M,e[3]=(p*l*a-o*u*a-p*n*c+r*u*c+o*n*g-r*l*g)*M,e[4]=_*M,e[5]=(h*m*a-x*u*a+x*n*g-t*m*g-h*n*d+t*u*d)*M,e[6]=(x*l*a-s*m*a-x*n*c+t*m*c+s*n*d-t*l*d)*M,e[7]=(s*u*a-h*l*a+h*n*c-t*u*c-s*n*g+t*l*g)*M,e[8]=T*M,e[9]=(x*p*a-h*v*a-x*r*g+t*v*g+h*r*d-t*p*d)*M,e[10]=(s*v*a-x*o*a+x*r*c-t*v*c-s*r*d+t*o*d)*M,e[11]=(h*o*a-s*p*a-h*r*c+t*p*c+s*r*g-t*o*g)*M,e[12]=A*M,e[13]=(h*v*n-x*p*n+x*r*u-t*v*u-h*r*m+t*p*m)*M,e[14]=(x*o*n-s*v*n-x*r*l+t*v*l+s*r*m-t*o*m)*M,e[15]=(s*p*n-h*o*n+h*r*l-t*p*l-s*r*u+t*o*u)*M,this}scale(e){const t=this.elements,r=e.x,n=e.y,a=e.z;return t[0]*=r,t[4]*=n,t[8]*=a,t[1]*=r,t[5]*=n,t[9]*=a,t[2]*=r,t[6]*=n,t[10]*=a,t[3]*=r,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),a=1-r,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+r,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+r,h*l-n*s,0,c*l-n*o,h*l+n*s,a*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,a,s){return this.set(1,r,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,p=o+o,u=a*c,g=a*h,x=a*p,v=s*h,m=s*p,d=o*p,E=l*c,_=l*h,T=l*p,A=r.x,D=r.y,M=r.z;return n[0]=(1-(v+d))*A,n[1]=(g+T)*A,n[2]=(x-_)*A,n[3]=0,n[4]=(g-T)*D,n[5]=(1-(u+d))*D,n[6]=(m+E)*D,n[7]=0,n[8]=(x+_)*M,n[9]=(m-E)*M,n[10]=(1-(u+v))*M,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let a=bi.set(n[0],n[1],n[2]).length();const s=bi.set(n[4],n[5],n[6]).length(),o=bi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Qt.copy(this);const l=1/a,c=1/s,h=1/o;return Qt.elements[0]*=l,Qt.elements[1]*=l,Qt.elements[2]*=l,Qt.elements[4]*=c,Qt.elements[5]*=c,Qt.elements[6]*=c,Qt.elements[8]*=h,Qt.elements[9]*=h,Qt.elements[10]*=h,t.setFromRotationMatrix(Qt),r.x=a,r.y=s,r.z=o,this}makePerspective(e,t,r,n,a,s,o=_r){const l=this.elements,c=2*a/(t-e),h=2*a/(r-n),p=(t+e)/(t-e),u=(r+n)/(r-n);let g,x;if(o===_r)g=-(s+a)/(s-a),x=-2*s*a/(s-a);else if(o===_n)g=-s/(s-a),x=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,a,s,o=_r){const l=this.elements,c=1/(t-e),h=1/(r-n),p=1/(s-a),u=(t+e)*c,g=(r+n)*h;let x,v;if(o===_r)x=(s+a)*p,v=-2*p;else if(o===_n)x=a*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const bi=new F,Qt=new At,Wh=new F(0,0,0),Xh=new F(1,1,1),Fr=new F,bn=new F,Bt=new F,Bo=new At,Go=new Zr;class Tn{constructor(e=0,t=0,r=0,n=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],c=n[5],h=n[9],p=n[2],u=n[6],g=n[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Bo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bo,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Go.setFromEuler(this),this.setFromQuaternion(Go,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Vo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jh=0;const ko=new F,Ti=new Zr,Sr=new At,Rn=new F,Ki=new F,Yh=new F,qh=new Zr,Wo=new F(1,0,0),Xo=new F(0,1,0),jo=new F(0,0,1),Kh={type:"added"},Zh={type:"removed"};class Gt extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new F,t=new Tn,r=new Zr,n=new F(1,1,1);function a(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new At},normalMatrix:{value:new Ve}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Wo,e)}rotateY(e){return this.rotateOnAxis(Xo,e)}rotateZ(e){return this.rotateOnAxis(jo,e)}translateOnAxis(e,t){return ko.copy(e).applyQuaternion(this.quaternion),this.position.add(ko.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wo,e)}translateY(e){return this.translateOnAxis(Xo,e)}translateZ(e){return this.translateOnAxis(jo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Rn.copy(e):Rn.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sr.lookAt(Ki,Rn,this.up):Sr.lookAt(Rn,Ki,this.up),this.quaternion.setFromRotationMatrix(Sr),n&&(Sr.extractRotation(n.matrixWorld),Ti.setFromRotationMatrix(Sr),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Kh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let r=[];this[e]===t&&r.push(this);for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectsByProperty(e,t);s.length>0&&(r=r.concat(s))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,Yh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,qh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const a=t[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++){const o=n[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),p=s(e.shapes),u=s(e.skeletons),g=s(e.animations),x=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),p.length>0&&(r.shapes=p),u.length>0&&(r.skeletons=u),g.length>0&&(r.animations=g),x.length>0&&(r.nodes=x)}return r.object=n,r;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}Gt.DEFAULT_UP=new F(0,1,0),Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new F,yr=new F,Ka=new F,Er=new F,Ri=new F,Ai=new F,Yo=new F,Za=new F,Ja=new F,Qa=new F;let An=!1,Cn=class hi{constructor(e=new F,t=new F,r=new F){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),$t.subVectors(e,t),n.cross($t);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,r,n,a){$t.subVectors(n,t),yr.subVectors(r,t),Ka.subVectors(e,t);const s=$t.dot($t),o=$t.dot(yr),l=$t.dot(Ka),c=yr.dot(yr),h=yr.dot(Ka),p=s*c-o*o;if(p===0)return a.set(-2,-1,-1);const u=1/p,g=(c*l-o*h)*u,x=(s*h-o*l)*u;return a.set(1-g-x,x,g)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,Er),Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getUV(e,t,r,n,a,s,o,l){return An===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),An=!0),this.getInterpolation(e,t,r,n,a,s,o,l)}static getInterpolation(e,t,r,n,a,s,o,l){return this.getBarycoord(e,t,r,n,Er),l.setScalar(0),l.addScaledVector(a,Er.x),l.addScaledVector(s,Er.y),l.addScaledVector(o,Er.z),l}static isFrontFacing(e,t,r,n){return $t.subVectors(r,t),yr.subVectors(e,t),$t.cross(yr).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),$t.cross(yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,n,a){return An===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),An=!0),hi.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}getInterpolation(e,t,r,n,a){return hi.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,a=this.c;let s,o;Ri.subVectors(n,r),Ai.subVectors(a,r),Za.subVectors(e,r);const l=Ri.dot(Za),c=Ai.dot(Za);if(l<=0&&c<=0)return t.copy(r);Ja.subVectors(e,n);const h=Ri.dot(Ja),p=Ai.dot(Ja);if(h>=0&&p<=h)return t.copy(n);const u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(r).addScaledVector(Ri,s);Qa.subVectors(e,a);const g=Ri.dot(Qa),x=Ai.dot(Qa);if(x>=0&&g<=x)return t.copy(a);const v=g*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(r).addScaledVector(Ai,o);const m=h*x-g*p;if(m<=0&&p-h>=0&&g-x>=0)return Yo.subVectors(a,n),o=(p-h)/(p-h+(g-x)),t.copy(n).addScaledVector(Yo,o);const d=1/(m+v+u);return s=v*d,o=u*d,t.copy(r).addScaledVector(Ri,s).addScaledVector(Ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jh=0;class Zi extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=ui,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ks,this.blendDst=Ws,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(r.blending=this.blending),this.side!==Cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=n(e.textures),s=n(e.images);a.length>0&&(r.textures=a),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let a=0;a!==n;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},Ln={h:0,s:0,l:0};function $a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=et.workingColorSpace){return this.r=e,this.g=t,this.b=r,et.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=et.workingColorSpace){if(e=Fa(e,1),t=Tt(t,0,1),r=Tt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,s=2*r-a;this.r=$a(s,a,e+1/3),this.g=$a(s,a,e),this.b=$a(s,a,e-1/3)}return et.toWorkingColorSpace(this,n),this}setStyle(e,t=bt){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const r=qo[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return et.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Tt(Pt.r*255,0,255))*65536+Math.round(Tt(Pt.g*255,0,255))*256+Math.round(Tt(Pt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Pt.copy(this),t);const r=Pt.r,n=Pt.g,a=Pt.b,s=Math.max(r,n,a),o=Math.min(r,n,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const p=s-o;switch(c=h<=.5?p/(s+o):p/(2-s-o),s){case r:l=(n-a)/p+(n<a?6:0);break;case n:l=(a-r)/p+2;break;case a:l=(r-n)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=bt){et.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,r=Pt.g,n=Pt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(Ln);const r=Wi(zr.h,Ln.h,t),n=Wi(zr.s,Ln.s,t),a=Wi(zr.l,Ln.l,t);return this.setHSL(r,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*n,this.g=a[1]*t+a[4]*r+a[7]*n,this.b=a[2]*t+a[5]*r+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new tt;tt.NAMES=qo;class Ko extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mr=Qh();function Qh(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),r=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(r[l]=0,r[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(r[l]=1024>>-c-14,r[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(r[l]=c+15<<10,r[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(r[l]=31744,r[l|256]=64512,n[l]=24,n[l|256]=24):(r[l]=31744,r[l|256]=64512,n[l]=13,n[l|256]=13)}const a=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,a[l]=c|h}for(let l=1024;l<2048;++l)a[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:r,shiftTable:n,mantissaTable:a,exponentTable:s,offsetTable:o}}function $h(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Tt(i,-65504,65504),Mr.floatView[0]=i;const e=Mr.uint32View[0],t=e>>23&511;return Mr.baseTable[t]+((e&8388607)>>Mr.shiftTable[t])}function eu(i){const e=i>>10;return Mr.uint32View[0]=Mr.mantissaTable[Mr.offsetTable[e]+(i&1023)]+Mr.exponentTable[e],Mr.floatView[0]}const Pn={toHalfFloat:$h,fromHalfFloat:eu},ut=new F,Dn=new Ge;class rr{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Ao,this.updateRange={offset:0,count:-1},this.gpuType=Zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXY(t,Dn.x,Dn.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=vi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Dt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),r=Dt(r,this.array),n=Dt(n,this.array),a=Dt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ao&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Zo extends rr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Jo extends rr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ir extends rr{constructor(e,t,r){super(new Float32Array(e),t,r)}}let tu=0;const Yt=new At,es=new Gt,Ci=new F,Vt=new ji,Ji=new ji,wt=new F;class Hr extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Po(e)?Jo:Zo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Ve().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,r){return Yt.makeTranslation(e,t,r),this.applyMatrix4(Yt),this}scale(e,t,r){return Yt.makeScale(e,t,r),this.applyMatrix4(Yt),this}lookAt(e){return es.lookAt(e),es.updateMatrix(),this.applyMatrix4(es.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ir(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const a=t[r];Vt.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const r=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Vt.min,Ji.min),Vt.expandByPoint(wt),wt.addVectors(Vt.max,Ji.max),Vt.expandByPoint(wt)):(Vt.expandByPoint(Ji.min),Vt.expandByPoint(Ji.max))}Vt.getCenter(r);let n=0;for(let a=0,s=e.count;a<s;a++)wt.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(wt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(e,c),wt.add(Ci)),n=Math.max(n,r.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,a=t.normal.array,s=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rr(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new F,h[R]=new F;const p=new F,u=new F,g=new F,x=new Ge,v=new Ge,m=new Ge,d=new F,E=new F;function _(R,j,Q){p.fromArray(n,R*3),u.fromArray(n,j*3),g.fromArray(n,Q*3),x.fromArray(s,R*2),v.fromArray(s,j*2),m.fromArray(s,Q*2),u.sub(p),g.sub(p),v.sub(x),m.sub(x);const te=1/(v.x*m.y-m.x*v.y);isFinite(te)&&(d.copy(u).multiplyScalar(m.y).addScaledVector(g,-v.y).multiplyScalar(te),E.copy(g).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(te),c[R].add(d),c[j].add(d),c[Q].add(d),h[R].add(E),h[j].add(E),h[Q].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:r.length}]);for(let R=0,j=T.length;R<j;++R){const Q=T[R],te=Q.start,I=Q.count;for(let k=te,K=te+I;k<K;k+=3)_(r[k+0],r[k+1],r[k+2])}const A=new F,D=new F,M=new F,V=new F;function S(R){M.fromArray(a,R*3),V.copy(M);const j=c[R];A.copy(j),A.sub(M.multiplyScalar(M.dot(j))).normalize(),D.crossVectors(V,j);const Q=D.dot(h[R])<0?-1:1;l[R*4]=A.x,l[R*4+1]=A.y,l[R*4+2]=A.z,l[R*4+3]=Q}for(let R=0,j=T.length;R<j;++R){const Q=T[R],te=Q.start,I=Q.count;for(let k=te,K=te+I;k<K;k+=3)S(r[k+0]),S(r[k+1]),S(r[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new rr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let u=0,g=r.count;u<g;u++)r.setXYZ(u,0,0,0);const n=new F,a=new F,s=new F,o=new F,l=new F,c=new F,h=new F,p=new F;if(e)for(let u=0,g=e.count;u<g;u+=3){const x=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,x),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),h.subVectors(s,a),p.subVectors(n,a),h.cross(p),o.fromBufferAttribute(r,x),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,m),o.add(h),l.add(h),c.add(h),r.setXYZ(x,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,g=t.count;u<g;u+=3)n.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),h.subVectors(s,a),p.subVectors(n,a),h.cross(p),r.setXYZ(u+0,h.x,h.y,h.z),r.setXYZ(u+1,h.x,h.y,h.z),r.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h);let g=0,x=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?g=l[v]*o.data.stride+o.offset:g=l[v]*h;for(let d=0;d<h;d++)u[x++]=c[g++]}return new rr(u,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hr,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,p=c.length;h<p;h++){const u=c[h],g=e(u,r);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){const g=c[p];h.push(g.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],p=a[c];for(let u=0,g=p.length;u<g;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qo=new At,$r=new Ho,In=new Xa,$o=new F,Li=new F,Pi=new F,Di=new F,ts=new F,Un=new F,Nn=new Ge,On=new Ge,Fn=new Ge,el=new F,tl=new F,rl=new F,zn=new F,Hn=new F;class br extends Gt{constructor(e=new Hr,t=new Ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,a=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){Un.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],p=a[l];h!==0&&(ts.fromBufferAttribute(p,e),s?Un.addScaledVector(ts,h):Un.addScaledVector(ts.sub(t),h))}t.add(Un)}return t}raycast(e,t){const r=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),In.copy(r.boundingSphere),In.applyMatrix4(a),$r.copy(e.ray).recast(e.near),!(In.containsPoint($r.origin)===!1&&($r.intersectSphere(In,$o)===null||$r.origin.distanceToSquared($o)>(e.far-e.near)**2))&&(Qo.copy(a).invert(),$r.copy(e.ray).applyMatrix4(Qo),!(r.boundingBox!==null&&$r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,r){let n;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,u=a.groups,g=a.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,v=u.length;x<v;x++){const m=u[x],d=s[m.materialIndex],E=Math.max(m.start,g.start),_=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let T=E,A=_;T<A;T+=3){const D=o.getX(T),M=o.getX(T+1),V=o.getX(T+2);n=Bn(this,d,e,r,c,h,p,D,M,V),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const x=Math.max(0,g.start),v=Math.min(o.count,g.start+g.count);for(let m=x,d=v;m<d;m+=3){const E=o.getX(m),_=o.getX(m+1),T=o.getX(m+2);n=Bn(this,s,e,r,c,h,p,E,_,T),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,v=u.length;x<v;x++){const m=u[x],d=s[m.materialIndex],E=Math.max(m.start,g.start),_=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let T=E,A=_;T<A;T+=3){const D=T,M=T+1,V=T+2;n=Bn(this,d,e,r,c,h,p,D,M,V),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const x=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let m=x,d=v;m<d;m+=3){const E=m,_=m+1,T=m+2;n=Bn(this,s,e,r,c,h,p,E,_,T),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function ru(i,e,t,r,n,a,s,o){let l;if(e.side===Ft?l=r.intersectTriangle(s,a,n,!0,o):l=r.intersectTriangle(n,a,s,e.side===Cr,o),l===null)return null;Hn.copy(o),Hn.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Hn);return c<t.near||c>t.far?null:{distance:c,point:Hn.clone(),object:i}}function Bn(i,e,t,r,n,a,s,o,l,c){i.getVertexPosition(o,Li),i.getVertexPosition(l,Pi),i.getVertexPosition(c,Di);const h=ru(i,e,t,r,Li,Pi,Di,zn);if(h){n&&(Nn.fromBufferAttribute(n,o),On.fromBufferAttribute(n,l),Fn.fromBufferAttribute(n,c),h.uv=Cn.getInterpolation(zn,Li,Pi,Di,Nn,On,Fn,new Ge)),a&&(Nn.fromBufferAttribute(a,o),On.fromBufferAttribute(a,l),Fn.fromBufferAttribute(a,c),h.uv1=Cn.getInterpolation(zn,Li,Pi,Di,Nn,On,Fn,new Ge),h.uv2=h.uv1),s&&(el.fromBufferAttribute(s,o),tl.fromBufferAttribute(s,l),rl.fromBufferAttribute(s,c),h.normal=Cn.getInterpolation(zn,Li,Pi,Di,el,tl,rl,new F),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new F,materialIndex:0};Cn.getNormal(Li,Pi,Di,p.normal),h.face=p}return h}class Qi extends Hr{constructor(e=1,t=1,r=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],p=[];let u=0,g=0;x("z","y","x",-1,-1,r,t,e,s,a,0),x("z","y","x",1,-1,r,t,-e,s,a,1),x("x","z","y",1,1,e,r,t,n,s,2),x("x","z","y",1,-1,e,r,-t,n,s,3),x("x","y","z",1,-1,e,t,r,n,a,4),x("x","y","z",-1,-1,e,t,-r,n,a,5),this.setIndex(l),this.setAttribute("position",new ir(c,3)),this.setAttribute("normal",new ir(h,3)),this.setAttribute("uv",new ir(p,2));function x(v,m,d,E,_,T,A,D,M,V,S){const R=T/M,j=A/V,Q=T/2,te=A/2,I=D/2,k=M+1,K=V+1;let Y=0,oe=0;const Z=new F;for(let ee=0;ee<K;ee++){const O=ee*j-te;for(let q=0;q<k;q++){const ce=q*R-Q;Z[v]=ce*E,Z[m]=O*_,Z[d]=I,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[d]=D>0?1:-1,h.push(Z.x,Z.y,Z.z),p.push(q/M),p.push(1-ee/V),Y+=1}}for(let ee=0;ee<V;ee++)for(let O=0;O<M;O++){const q=u+O+k*ee,ce=u+O+k*(ee+1),ge=u+(O+1)+k*(ee+1),ye=u+(O+1)+k*ee;l.push(q,ce,ye),l.push(ce,ge,ye),oe+=6}o.addGroup(g,oe,S),g+=oe,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function It(i){const e={};for(let t=0;t<i.length;t++){const r=Ii(i[t]);for(const n in r)e[n]=r[n]}return e}function iu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function il(i){return i.getRenderTarget()===null?i.outputColorSpace:et.workingColorSpace}const nu={clone:Ii,merge:It};var au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=au,this.fragmentShader=su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=iu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class nl extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=_r}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qt extends nl{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(Vi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vi*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*n/l,t-=s.offsetY*r/c,n*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Ni=1;class ou extends Gt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new qt(Ui,Ni,e,t);n.layers=this.layers,this.add(n);const a=new qt(Ui,Ni,e,t);a.layers=this.layers,this.add(a);const s=new qt(Ui,Ni,e,t);s.layers=this.layers,this.add(s);const o=new qt(Ui,Ni,e,t);o.layers=this.layers,this.add(o);const l=new qt(Ui,Ni,e,t);l.layers=this.layers,this.add(l);const c=new qt(Ui,Ni,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===_r)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_n)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,a),e.setRenderTarget(r,1,n),e.render(t,s),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,n),e.render(t,h),e.setRenderTarget(p,u,g),e.xr.enabled=x,r.texture.needsPMREMUpdate=!0}}class al extends zt{constructor(e,t,r,n,a,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,r,n,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lu extends Kr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];t.encoding!==void 0&&(Xi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Yr?bt:jt),this.texture=new al(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Qi(5,5,5),a=new ei({name:"CubemapFromEquirect",uniforms:Ii(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ft,blending:Lr});a.uniforms.tEquirect.value=t;const s=new br(n,a),o=t.minFilter;return t.minFilter===mi&&(t.minFilter=Mt),new ou(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,n){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(a)}}const rs=new F,cu=new F,hu=new Ve;class Br{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=rs.subVectors(r,t).cross(cu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(rs),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||hu.getNormalMatrix(e),n=this.coplanarPoint(rs).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new Xa,Gn=new F;class sl{constructor(e=new Br,t=new Br,r=new Br,n=new Br,a=new Br,s=new Br){this.planes=[e,t,r,n,a,s]}set(e,t,r,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=_r){const r=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],c=n[4],h=n[5],p=n[6],u=n[7],g=n[8],x=n[9],v=n[10],m=n[11],d=n[12],E=n[13],_=n[14],T=n[15];if(r[0].setComponents(l-a,u-c,m-g,T-d).normalize(),r[1].setComponents(l+a,u+c,m+g,T+d).normalize(),r[2].setComponents(l+s,u+h,m+x,T+E).normalize(),r[3].setComponents(l-s,u-h,m-x,T-E).normalize(),r[4].setComponents(l-o,u-p,m-v,T-_).normalize(),t===_r)r[5].setComponents(l+o,u+p,m+v,T+_).normalize();else if(t===_n)r[5].setComponents(o,p,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Gn.x=n.normal.x>0?e.max.x:e.min.x,Gn.y=n.normal.y>0?e.max.y:e.min.y,Gn.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Gn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ol(){let i=null,e=!1,t=null,r=null;function n(a,s){t(a,s),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function uu(i,e){const t=e.isWebGL2,r=new WeakMap;function n(c,h){const p=c.array,u=c.usage,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,p,u),c.onUploadCallback();let x;if(p instanceof Float32Array)x=i.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=i.SHORT;else if(p instanceof Uint32Array)x=i.UNSIGNED_INT;else if(p instanceof Int32Array)x=i.INT;else if(p instanceof Int8Array)x=i.BYTE;else if(p instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version}}function a(c,h,p){const u=h.array,g=h.updateRange;i.bindBuffer(p,c),g.count===-1?i.bufferSubData(p,0,u):(t?i.bufferSubData(p,g.offset*u.BYTES_PER_ELEMENT,u,g.offset,g.count):i.bufferSubData(p,g.offset*u.BYTES_PER_ELEMENT,u.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=r.get(c);h&&(i.deleteBuffer(h.buffer),r.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=r.get(c);(!u||u.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=r.get(c);p===void 0?r.set(c,n(c,h)):p.version<c.version&&(a(p.buffer,c,h),p.version=c.version)}return{get:s,remove:o,update:l}}class is extends Hr{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const a=e/2,s=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,h=l+1,p=e/o,u=t/l,g=[],x=[],v=[],m=[];for(let d=0;d<h;d++){const E=d*u-s;for(let _=0;_<c;_++){const T=_*p-a;x.push(T,-E,0),v.push(0,0,1),m.push(_/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const _=E+c*d,T=E+c*(d+1),A=E+1+c*(d+1),D=E+1+c*d;g.push(_,T,D),g.push(T,A,D)}this.setIndex(g),this.setAttribute("position",new ir(x,3)),this.setAttribute("normal",new ir(v,3)),this.setAttribute("uv",new ir(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}var du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_u=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Iu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ju=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$u=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,id=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ad=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ld=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,cd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ed=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ip=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,np=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_p=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ep=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ap=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Up=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:du,alphahash_pars_fragment:pu,alphamap_fragment:fu,alphamap_pars_fragment:mu,alphatest_fragment:gu,alphatest_pars_fragment:_u,aomap_fragment:vu,aomap_pars_fragment:wu,begin_vertex:xu,beginnormal_vertex:Su,bsdfs:yu,iridescence_fragment:Eu,bumpmap_pars_fragment:Mu,clipping_planes_fragment:bu,clipping_planes_pars_fragment:Tu,clipping_planes_pars_vertex:Ru,clipping_planes_vertex:Au,color_fragment:Cu,color_pars_fragment:Lu,color_pars_vertex:Pu,color_vertex:Du,common:Iu,cube_uv_reflection_fragment:Uu,defaultnormal_vertex:Nu,displacementmap_pars_vertex:Ou,displacementmap_vertex:Fu,emissivemap_fragment:zu,emissivemap_pars_fragment:Hu,colorspace_fragment:Bu,colorspace_pars_fragment:Gu,envmap_fragment:Vu,envmap_common_pars_fragment:ku,envmap_pars_fragment:Wu,envmap_pars_vertex:Xu,envmap_physical_pars_fragment:id,envmap_vertex:ju,fog_vertex:Yu,fog_pars_vertex:qu,fog_fragment:Ku,fog_pars_fragment:Zu,gradientmap_pars_fragment:Ju,lightmap_fragment:Qu,lightmap_pars_fragment:$u,lights_lambert_fragment:ed,lights_lambert_pars_fragment:td,lights_pars_begin:rd,lights_toon_fragment:nd,lights_toon_pars_fragment:ad,lights_phong_fragment:sd,lights_phong_pars_fragment:od,lights_physical_fragment:ld,lights_physical_pars_fragment:cd,lights_fragment_begin:hd,lights_fragment_maps:ud,lights_fragment_end:dd,logdepthbuf_fragment:pd,logdepthbuf_pars_fragment:fd,logdepthbuf_pars_vertex:md,logdepthbuf_vertex:gd,map_fragment:_d,map_pars_fragment:vd,map_particle_fragment:wd,map_particle_pars_fragment:xd,metalnessmap_fragment:Sd,metalnessmap_pars_fragment:yd,morphcolor_vertex:Ed,morphnormal_vertex:Md,morphtarget_pars_vertex:bd,morphtarget_vertex:Td,normal_fragment_begin:Rd,normal_fragment_maps:Ad,normal_pars_fragment:Cd,normal_pars_vertex:Ld,normal_vertex:Pd,normalmap_pars_fragment:Dd,clearcoat_normal_fragment_begin:Id,clearcoat_normal_fragment_maps:Ud,clearcoat_pars_fragment:Nd,iridescence_pars_fragment:Od,opaque_fragment:Fd,packing:zd,premultiplied_alpha_fragment:Hd,project_vertex:Bd,dithering_fragment:Gd,dithering_pars_fragment:Vd,roughnessmap_fragment:kd,roughnessmap_pars_fragment:Wd,shadowmap_pars_fragment:Xd,shadowmap_pars_vertex:jd,shadowmap_vertex:Yd,shadowmask_pars_fragment:qd,skinbase_vertex:Kd,skinning_pars_vertex:Zd,skinning_vertex:Jd,skinnormal_vertex:Qd,specularmap_fragment:$d,specularmap_pars_fragment:ep,tonemapping_fragment:tp,tonemapping_pars_fragment:rp,transmission_fragment:ip,transmission_pars_fragment:np,uv_pars_fragment:ap,uv_pars_vertex:sp,uv_vertex:op,worldpos_vertex:lp,background_vert:cp,background_frag:hp,backgroundCube_vert:up,backgroundCube_frag:dp,cube_vert:pp,cube_frag:fp,depth_vert:mp,depth_frag:gp,distanceRGBA_vert:_p,distanceRGBA_frag:vp,equirect_vert:wp,equirect_frag:xp,linedashed_vert:Sp,linedashed_frag:yp,meshbasic_vert:Ep,meshbasic_frag:Mp,meshlambert_vert:bp,meshlambert_frag:Tp,meshmatcap_vert:Rp,meshmatcap_frag:Ap,meshnormal_vert:Cp,meshnormal_frag:Lp,meshphong_vert:Pp,meshphong_frag:Dp,meshphysical_vert:Ip,meshphysical_frag:Up,meshtoon_vert:Np,meshtoon_frag:Op,points_vert:Fp,points_frag:zp,shadow_vert:Hp,shadow_frag:Bp,sprite_vert:Gp,sprite_frag:Vp},de={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},nr={basic:{uniforms:It([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:It([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new tt(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:It([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:It([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:It([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new tt(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:It([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:It([de.points,de.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:It([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:It([de.common,de.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:It([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:It([de.sprite,de.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:It([de.common,de.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:It([de.lights,de.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};nr.physical={uniforms:It([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Vn={r:0,b:0,g:0};function kp(i,e,t,r,n,a,s){const o=new tt(0);let l=a===!0?0:1,c,h,p=null,u=0,g=null;function x(m,d){let E=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),E=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?r.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===dn)?(h===void 0&&(h=new br(new Qi(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Ii(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,D,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=et.getTransfer(_.colorSpace)!==nt,(p!==_||u!==_.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,p=_,u=_.version,g=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new br(new is(2,2),new ei({name:"BackgroundMaterial",uniforms:Ii(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=et.getTransfer(_.colorSpace)!==nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(p!==_||u!==_.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,p=_,u=_.version,g=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,d){m.getRGB(Vn,il(i)),r.buffers.color.setClear(Vn.r,Vn.g,Vn.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:x}}function Wp(i,e,t,r){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),s=r.isWebGL2||a!==null,o={},l=m(null);let c=l,h=!1;function p(I,k,K,Y,oe){let Z=!1;if(s){const ee=v(Y,K,k);c!==ee&&(c=ee,g(c.object)),Z=d(I,Y,K,oe),Z&&E(I,Y,K,oe)}else{const ee=k.wireframe===!0;(c.geometry!==Y.id||c.program!==K.id||c.wireframe!==ee)&&(c.geometry=Y.id,c.program=K.id,c.wireframe=ee,Z=!0)}oe!==null&&t.update(oe,i.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,V(I,k,K,Y),oe!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(oe).buffer))}function u(){return r.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function g(I){return r.isWebGL2?i.bindVertexArray(I):a.bindVertexArrayOES(I)}function x(I){return r.isWebGL2?i.deleteVertexArray(I):a.deleteVertexArrayOES(I)}function v(I,k,K){const Y=K.wireframe===!0;let oe=o[I.id];oe===void 0&&(oe={},o[I.id]=oe);let Z=oe[k.id];Z===void 0&&(Z={},oe[k.id]=Z);let ee=Z[Y];return ee===void 0&&(ee=m(u()),Z[Y]=ee),ee}function m(I){const k=[],K=[],Y=[];for(let oe=0;oe<n;oe++)k[oe]=0,K[oe]=0,Y[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:Y,object:I,attributes:{},index:null}}function d(I,k,K,Y){const oe=c.attributes,Z=k.attributes;let ee=0;const O=K.getAttributes();for(const q in O)if(O[q].location>=0){const ce=oe[q];let ge=Z[q];if(ge===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor)),ce===void 0||ce.attribute!==ge||ge&&ce.data!==ge.data)return!0;ee++}return c.attributesNum!==ee||c.index!==Y}function E(I,k,K,Y){const oe={},Z=k.attributes;let ee=0;const O=K.getAttributes();for(const q in O)if(O[q].location>=0){let ce=Z[q];ce===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor));const ge={};ge.attribute=ce,ce&&ce.data&&(ge.data=ce.data),oe[q]=ge,ee++}c.attributes=oe,c.attributesNum=ee,c.index=Y}function _(){const I=c.newAttributes;for(let k=0,K=I.length;k<K;k++)I[k]=0}function T(I){A(I,0)}function A(I,k){const K=c.newAttributes,Y=c.enabledAttributes,oe=c.attributeDivisors;K[I]=1,Y[I]===0&&(i.enableVertexAttribArray(I),Y[I]=1),oe[I]!==k&&((r.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),oe[I]=k)}function D(){const I=c.newAttributes,k=c.enabledAttributes;for(let K=0,Y=k.length;K<Y;K++)k[K]!==I[K]&&(i.disableVertexAttribArray(K),k[K]=0)}function M(I,k,K,Y,oe,Z,ee){ee===!0?i.vertexAttribIPointer(I,k,K,oe,Z):i.vertexAttribPointer(I,k,K,Y,oe,Z)}function V(I,k,K,Y){if(r.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const oe=Y.attributes,Z=K.getAttributes(),ee=k.defaultAttributeValues;for(const O in Z){const q=Z[O];if(q.location>=0){let ce=oe[O];if(ce===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),ce!==void 0){const ge=ce.normalized,ye=ce.itemSize,Ae=t.get(ce);if(Ae===void 0)continue;const Ie=Ae.buffer,Te=Ae.type,Je=Ae.bytesPerElement,Ct=r.isWebGL2===!0&&(Te===i.INT||Te===i.UNSIGNED_INT||ce.gpuType===qs);if(ce.isInterleavedBufferAttribute){const ze=ce.data,H=ze.stride,_t=ce.offset;if(ze.isInstancedInterleavedBuffer){for(let Re=0;Re<q.locationSize;Re++)A(q.location+Re,ze.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let Re=0;Re<q.locationSize;Re++)T(q.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let Re=0;Re<q.locationSize;Re++)M(q.location+Re,ye/q.locationSize,Te,ge,H*Je,(_t+ye/q.locationSize*Re)*Je,Ct)}else{if(ce.isInstancedBufferAttribute){for(let ze=0;ze<q.locationSize;ze++)A(q.location+ze,ce.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ze=0;ze<q.locationSize;ze++)T(q.location+ze);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let ze=0;ze<q.locationSize;ze++)M(q.location+ze,ye/q.locationSize,Te,ge,ye*Je,ye/q.locationSize*ze*Je,Ct)}}else if(ee!==void 0){const ge=ee[O];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(q.location,ge);break;case 3:i.vertexAttrib3fv(q.location,ge);break;case 4:i.vertexAttrib4fv(q.location,ge);break;default:i.vertexAttrib1fv(q.location,ge)}}}}D()}function S(){Q();for(const I in o){const k=o[I];for(const K in k){const Y=k[K];for(const oe in Y)x(Y[oe].object),delete Y[oe];delete k[K]}delete o[I]}}function R(I){if(o[I.id]===void 0)return;const k=o[I.id];for(const K in k){const Y=k[K];for(const oe in Y)x(Y[oe].object),delete Y[oe];delete k[K]}delete o[I.id]}function j(I){for(const k in o){const K=o[k];if(K[I.id]===void 0)continue;const Y=K[I.id];for(const oe in Y)x(Y[oe].object),delete Y[oe];delete K[I.id]}}function Q(){te(),h=!0,c!==l&&(c=l,g(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:Q,resetDefaultState:te,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:j,initAttributes:_,enableAttribute:T,disableUnusedAttributes:D}}function Xp(i,e,t,r){const n=r.isWebGL2;let a;function s(c){a=c}function o(c,h){i.drawArrays(a,c,h),t.update(h,a,1)}function l(c,h,p){if(p===0)return;let u,g;if(n)u=i,g="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](a,c,h,p),t.update(h,a,p)}this.setMode=s,this.render=o,this.renderInstances=l}function jp(i,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,T=s||e.has("OES_texture_float"),A=_&&T,D=s?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:u,maxTextureSize:g,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:A,maxSamples:D}}function Yp(i){const e=this;let t=null,r=0,n=!1,a=!1;const s=new Br,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const g=p.length!==0||u||r!==0||n;return n=u,r=p.length,g},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,g){const x=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,d=i.get(p);if(!n||x===null||x.length===0||a&&!m)a?h(null):c();else{const E=a?0:r,_=E*4;let T=d.clippingState||null;l.value=T,T=h(x,u,_,g);for(let A=0;A!==_;++A)T[A]=t[A];d.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(p,u,g,x){const v=p!==null?p.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const d=g+v*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,T=g;_!==v;++_,T+=4)s.copy(p[_]).applyMatrix4(E,o),s.normal.toArray(m,T),m[T+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function qp(i){let e=new WeakMap;function t(s,o){return o===un?s.mapping=pi:o===Ma&&(s.mapping=fi),s}function r(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===un||o===Ma)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new lu(l.height/2);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class Kp extends nl{constructor(e=-1,t=1,r=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=r-e,s=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oi=4,ll=[.125,.215,.35,.446,.526,.582],ri=20,ns=new Kp,cl=new tt;let as=null;const ii=(1+Math.sqrt(5))/2,Fi=1/ii,hl=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ii,Fi),new F(0,ii,-Fi),new F(Fi,0,ii),new F(-Fi,0,ii),new F(ii,Fi,0),new F(-ii,Fi,0)];class ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){as=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(as),e.scissorTest=!1,kn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),as=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:gr,format:Jt,colorSpace:tr,depthBuffer:!1},n=dl(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dl(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zp(a)),this._blurMaterial=Jp(a,e,t)}return n}_compileMaterial(e){const t=new br(this._lodPlanes[0],e);this._renderer.compile(t,ns)}_sceneToCubeUV(e,t,r,n){const a=new qt(90,1,t,r),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(cl),l.toneMapping=Pr,l.autoClear=!1;const p=new Ko({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),u=new br(new Qi,p);let g=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,g=!0):(p.color.copy(cl),g=!0);for(let v=0;v<6;v++){const m=v%3;m===0?(a.up.set(0,s[v],0),a.lookAt(o[v],0,0)):m===1?(a.up.set(0,0,s[v]),a.lookAt(0,o[v],0)):(a.up.set(0,s[v],0),a.lookAt(0,0,o[v]));const d=this._cubeSize;kn(n,m*d,v>2?d:0,d,d),l.setRenderTarget(n),g&&l.render(u,a),l.render(e,a)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===pi||e.mapping===fi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pl());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new br(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;kn(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,ns)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),s=hl[(n-1)%hl.length];this._blur(e,n-1,n,a,s)}t.autoClear=r}_blur(e,t,r,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",a),this._halfBlur(s,e,r,r,n,"longitudinal",a)}_halfBlur(e,t,r,n,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new br(this._lodPlanes[n],c),u=c.uniforms,g=this._sizeLods[r]-1,x=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*ri-1),v=a/x,m=isFinite(a)?1+Math.floor(h*v):ri;m>ri&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const d=[];let E=0;for(let M=0;M<ri;++M){const V=M/v,S=Math.exp(-V*V/2);d.push(S),M===0?E+=S:M<m&&(E+=2*S)}for(let M=0;M<d.length;M++)d[M]=d[M]/E;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=x,u.mipInt.value=_-r;const T=this._sizeLods[n],A=3*T*(n>_-Oi?n-_+Oi:0),D=4*(this._cubeSize-T);kn(t,A,D,3*T,2*T),l.setRenderTarget(t),l.render(p,ns)}}function Zp(i){const e=[],t=[],r=[];let n=i;const a=i-Oi+1+ll.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>i-Oi?l=ll[s-i+Oi-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),h=-c,p=1+c,u=[h,h,p,h,p,p,h,h,p,p,h,p],g=6,x=6,v=3,m=2,d=1,E=new Float32Array(v*x*g),_=new Float32Array(m*x*g),T=new Float32Array(d*x*g);for(let D=0;D<g;D++){const M=D%3*2/3-1,V=D>2?0:-1,S=[M,V,0,M+2/3,V,0,M+2/3,V+1,0,M,V,0,M+2/3,V+1,0,M,V+1,0];E.set(S,v*x*D),_.set(u,m*x*D);const R=[D,D,D,D,D,D];T.set(R,d*x*D)}const A=new Hr;A.setAttribute("position",new rr(E,v)),A.setAttribute("uv",new rr(_,m)),A.setAttribute("faceIndex",new rr(T,d)),e.push(A),n>Oi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function dl(i,e,t){const r=new Kr(i,e,t);return r.texture.mapping=dn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function kn(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function Jp(i,e,t){const r=new Float32Array(ri),n=new F(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function pl(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function fl(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function ss(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qp(i){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===un||l===Ma,h=l===pi||l===fi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new ul(i)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(c&&p&&p.height>0||h&&p&&n(p)){t===null&&(t=new ul(i));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",a),u.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function $p(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function ef(i,e,t,r){const n={},a=new WeakMap;function s(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);for(const x in u.morphAttributes){const v=u.morphAttributes[x];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}u.removeEventListener("dispose",s),delete n[u.id];const g=a.get(u);g&&(e.remove(g),a.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return n[u.id]===!0||(u.addEventListener("dispose",s),n[u.id]=!0,t.memory.geometries++),u}function l(p){const u=p.attributes;for(const x in u)e.update(u[x],i.ARRAY_BUFFER);const g=p.morphAttributes;for(const x in g){const v=g[x];for(let m=0,d=v.length;m<d;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(p){const u=[],g=p.index,x=p.attributes.position;let v=0;if(g!==null){const E=g.array;v=g.version;for(let _=0,T=E.length;_<T;_+=3){const A=E[_+0],D=E[_+1],M=E[_+2];u.push(A,D,D,M,M,A)}}else if(x!==void 0){const E=x.array;v=x.version;for(let _=0,T=E.length/3-1;_<T;_+=3){const A=_+0,D=_+1,M=_+2;u.push(A,D,D,M,M,A)}}else return;const m=new(Po(u)?Jo:Zo)(u,1);m.version=v;const d=a.get(p);d&&e.remove(d),a.set(p,m)}function h(p){const u=a.get(p);if(u){const g=p.index;g!==null&&u.version<g.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function tf(i,e,t,r){const n=r.isWebGL2;let a;function s(u){a=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,g){i.drawElements(a,g,o,u*l),t.update(g,a,1)}function p(u,g,x){if(x===0)return;let v,m;if(n)v=i,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](a,g,o,u*l,x),t.update(g,a,x)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=p}function rf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function nf(i,e){return i[0]-e[0]}function af(i,e){return Math.abs(e[1])-Math.abs(i[1])}function sf(i,e,t){const r={},n=new Float32Array(8),a=new WeakMap,s=new Rt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,p){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==x){let E=function(){te.dispose(),a.delete(h),h.removeEventListener("dispose",E)};v!==void 0&&v.texture.dispose();const _=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],V=h.morphAttributes.color||[];let S=0;_===!0&&(S=1),T===!0&&(S=2),A===!0&&(S=3);let R=h.attributes.position.count*S,j=1;R>e.maxTextureSize&&(j=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const Q=new Float32Array(R*j*4*x),te=new Fo(Q,R,j,x);te.type=Zt,te.needsUpdate=!0;const I=S*4;for(let k=0;k<x;k++){const K=D[k],Y=M[k],oe=V[k],Z=R*j*4*k;for(let ee=0;ee<K.count;ee++){const O=ee*I;_===!0&&(s.fromBufferAttribute(K,ee),Q[Z+O+0]=s.x,Q[Z+O+1]=s.y,Q[Z+O+2]=s.z,Q[Z+O+3]=0),T===!0&&(s.fromBufferAttribute(Y,ee),Q[Z+O+4]=s.x,Q[Z+O+5]=s.y,Q[Z+O+6]=s.z,Q[Z+O+7]=0),A===!0&&(s.fromBufferAttribute(oe,ee),Q[Z+O+8]=s.x,Q[Z+O+9]=s.y,Q[Z+O+10]=s.z,Q[Z+O+11]=oe.itemSize===4?s.w:1)}}v={count:x,texture:te,size:new Ge(R,j)},a.set(h,v),h.addEventListener("dispose",E)}let m=0;for(let E=0;E<u.length;E++)m+=u[E];const d=h.morphTargetsRelative?1:1-m;p.getUniforms().setValue(i,"morphTargetBaseInfluence",d),p.getUniforms().setValue(i,"morphTargetInfluences",u),p.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const g=u===void 0?0:u.length;let x=r[h.id];if(x===void 0||x.length!==g){x=[];for(let _=0;_<g;_++)x[_]=[_,0];r[h.id]=x}for(let _=0;_<g;_++){const T=x[_];T[0]=_,T[1]=u[_]}x.sort(af);for(let _=0;_<8;_++)_<g&&x[_][1]?(o[_][0]=x[_][0],o[_][1]=x[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(nf);const v=h.morphAttributes.position,m=h.morphAttributes.normal;let d=0;for(let _=0;_<8;_++){const T=o[_],A=T[0],D=T[1];A!==Number.MAX_SAFE_INTEGER&&D?(v&&h.getAttribute("morphTarget"+_)!==v[A]&&h.setAttribute("morphTarget"+_,v[A]),m&&h.getAttribute("morphNormal"+_)!==m[A]&&h.setAttribute("morphNormal"+_,m[A]),n[_]=D,d+=D):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),n[_]=0)}const E=h.morphTargetsRelative?1:1-d;p.getUniforms().setValue(i,"morphTargetBaseInfluence",E),p.getUniforms().setValue(i,"morphTargetInfluences",n)}}return{update:l}}function of(i,e,t,r){let n=new WeakMap;function a(l){const c=r.render.frame,h=l.geometry,p=e.get(l,h);if(n.get(p)!==c&&(e.update(p),n.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return p}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const ml=new zt,gl=new Fo,_l=new Vh,vl=new al,wl=[],xl=[],Sl=new Float32Array(16),yl=new Float32Array(9),El=new Float32Array(4);function zi(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let a=wl[n];if(a===void 0&&(a=new Float32Array(n),wl[n]=a),e!==0){r.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Wn(i,e){let t=xl[e];t===void 0&&(t=new Int32Array(e),xl[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function lf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function df(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,r))return;El.set(r),i.uniformMatrix2fv(this.addr,!1,El),gt(t,r)}}function pf(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,r))return;yl.set(r),i.uniformMatrix3fv(this.addr,!1,yl),gt(t,r)}}function ff(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,r))return;Sl.set(r),i.uniformMatrix4fv(this.addr,!1,Sl),gt(t,r)}}function mf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function _f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function wf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function Ef(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2D(e||ml,n)}function Mf(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||_l,n)}function bf(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||vl,n)}function Tf(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||gl,n)}function Rf(i){switch(i){case 5126:return lf;case 35664:return cf;case 35665:return hf;case 35666:return uf;case 35674:return df;case 35675:return pf;case 35676:return ff;case 5124:case 35670:return mf;case 35667:case 35671:return gf;case 35668:case 35672:return _f;case 35669:case 35673:return vf;case 5125:return wf;case 36294:return xf;case 36295:return Sf;case 36296:return yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return bf;case 36289:case 36303:case 36311:case 36292:return Tf}}function Af(i,e){i.uniform1fv(this.addr,e)}function Cf(i,e){const t=zi(e,this.size,2);i.uniform2fv(this.addr,t)}function Lf(i,e){const t=zi(e,this.size,3);i.uniform3fv(this.addr,t)}function Pf(i,e){const t=zi(e,this.size,4);i.uniform4fv(this.addr,t)}function Df(i,e){const t=zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function If(i,e){const t=zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Uf(i,e){const t=zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Nf(i,e){i.uniform1iv(this.addr,e)}function Of(i,e){i.uniform2iv(this.addr,e)}function Ff(i,e){i.uniform3iv(this.addr,e)}function zf(i,e){i.uniform4iv(this.addr,e)}function Hf(i,e){i.uniform1uiv(this.addr,e)}function Bf(i,e){i.uniform2uiv(this.addr,e)}function Gf(i,e){i.uniform3uiv(this.addr,e)}function Vf(i,e){i.uniform4uiv(this.addr,e)}function kf(i,e,t){const r=this.cache,n=e.length,a=Wn(t,n);mt(r,a)||(i.uniform1iv(this.addr,a),gt(r,a));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||ml,a[s])}function Wf(i,e,t){const r=this.cache,n=e.length,a=Wn(t,n);mt(r,a)||(i.uniform1iv(this.addr,a),gt(r,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||_l,a[s])}function Xf(i,e,t){const r=this.cache,n=e.length,a=Wn(t,n);mt(r,a)||(i.uniform1iv(this.addr,a),gt(r,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||vl,a[s])}function jf(i,e,t){const r=this.cache,n=e.length,a=Wn(t,n);mt(r,a)||(i.uniform1iv(this.addr,a),gt(r,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||gl,a[s])}function Yf(i){switch(i){case 5126:return Af;case 35664:return Cf;case 35665:return Lf;case 35666:return Pf;case 35674:return Df;case 35675:return If;case 35676:return Uf;case 5124:case 35670:return Nf;case 35667:case 35671:return Of;case 35668:case 35672:return Ff;case 35669:case 35673:return zf;case 5125:return Hf;case 36294:return Bf;case 36295:return Gf;case 36296:return Vf;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return Wf;case 35680:case 36300:case 36308:case 36293:return Xf;case 36289:case 36303:case 36311:case 36292:return jf}}class qf{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Rf(t.type)}}class Kf{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=Yf(t.type)}}class Zf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,t[o.id],r)}}}const os=/(\w+)(\])?(\[|\.)?/g;function Ml(i,e){i.seq.push(e),i.map[e.id]=e}function Jf(i,e,t){const r=i.name,n=r.length;for(os.lastIndex=0;;){const a=os.exec(r),s=os.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){Ml(t,c===void 0?new qf(o,i,e):new Kf(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Zf(o),Ml(t,h)),t=h}}}class Xn{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const a=e.getActiveUniform(t,n),s=e.getUniformLocation(t,a.name);Jf(a,s,this)}}setValue(e,t,r,n){const a=this.map[t];a!==void 0&&a.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in t&&r.push(s)}return r}}function bl(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}let Qf=0;function $f(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}function em(i){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(i);let r;switch(e===t?r="":e===gn&&t===mn?r="LinearDisplayP3ToLinearSRGB":e===mn&&t===gn&&(r="LinearSRGBToLinearDisplayP3"),i){case tr:case pn:return[r,"LinearTransferOETF"];case bt:case Ua:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[r,"LinearTransferOETF"]}}function Tl(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=i.getShaderInfoLog(e).trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+$f(i.getShaderSource(e),s)}else return n}function tm(i,e){const t=em(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rm(i,e){let t;switch(e){case Kc:t="Linear";break;case Zc:t="Reinhard";break;case Jc:t="OptimizedCineon";break;case Qc:t="ACESFilmic";break;case $c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function im(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($i).join(`
`)}function nm(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function am(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const a=i.getActiveAttrib(e,n),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function $i(i){return i!==""}function Rl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Al(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ls(i){return i.replace(sm,lm)}const om=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lm(i,e){let t=Fe[e];if(t===void 0){const r=om.get(e);if(r!==void 0)t=Fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ls(t)}const cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(i){return i.replace(cm,hm)}function hm(i,e,t,r){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Ll(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function um(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fs?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fr&&(e="SHADOWMAP_TYPE_VSM"),e}function dm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case fi:e="ENVMAP_TYPE_CUBE";break;case dn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function fm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xs:e="ENVMAP_BLENDING_MULTIPLY";break;case Yc:e="ENVMAP_BLENDING_MIX";break;case qc:e="ENVMAP_BLENDING_ADD";break}return e}function mm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function gm(i,e,t,r){const n=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=um(t),c=dm(t),h=pm(t),p=fm(t),u=mm(t),g=t.isWebGL2?"":im(t),x=nm(a),v=n.createProgram();let m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($i).join(`
`),m.length>0&&(m+=`
`),d=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($i).join(`
`),d.length>0&&(d+=`
`)):(m=[Ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),d=[g,Ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pr?"#define TONE_MAPPING":"",t.toneMapping!==Pr?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Pr?rm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,tm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($i).join(`
`)),s=ls(s),s=Rl(s,t),s=Al(s,t),o=ls(o),o=Rl(o,t),o=Al(o,t),s=Cl(s),o=Cl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Co?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=E+m+s,T=E+d+o,A=bl(n,n.VERTEX_SHADER,_),D=bl(n,n.FRAGMENT_SHADER,T);if(n.attachShader(v,A),n.attachShader(v,D),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v),i.debug.checkShaderErrors){const S=n.getProgramInfoLog(v).trim(),R=n.getShaderInfoLog(A).trim(),j=n.getShaderInfoLog(D).trim();let Q=!0,te=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,v,A,D);else{const I=Tl(n,A,"vertex"),k=Tl(n,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+I+`
`+k)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(R===""||j==="")&&(te=!1);te&&(this.diagnostics={runnable:Q,programLog:S,vertexShader:{log:R,prefix:m},fragmentShader:{log:j,prefix:d}})}n.deleteShader(A),n.deleteShader(D);let M;this.getUniforms=function(){return M===void 0&&(M=new Xn(n,v)),M};let V;return this.getAttributes=function(){return V===void 0&&(V=am(n,v)),V},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qf++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=D,this}let _m=0;class vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new wm(e),t.set(e,r)),r}}class wm{constructor(e){this.id=_m++,this.code=e,this.usedTimes=0}}function xm(i,e,t,r,n,a,s){const o=new Vo,l=new vm,c=[],h=n.isWebGL2,p=n.logarithmicDepthBuffer,u=n.vertexTextures;let g=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,R,j,Q,te){const I=Q.fog,k=te.geometry,K=S.isMeshStandardMaterial?Q.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||K),oe=Y&&Y.mapping===dn?Y.image.height:null,Z=x[S.type];S.precision!==null&&(g=n.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,O=ee!==void 0?ee.length:0;let q=0;k.morphAttributes.position!==void 0&&(q=1),k.morphAttributes.normal!==void 0&&(q=2),k.morphAttributes.color!==void 0&&(q=3);let ce,ge,ye,Ae;if(Z){const ur=nr[Z];ce=ur.vertexShader,ge=ur.fragmentShader}else ce=S.vertexShader,ge=S.fragmentShader,l.update(S),ye=l.getVertexShaderID(S),Ae=l.getFragmentShaderID(S);const Ie=i.getRenderTarget(),Te=te.isInstancedMesh===!0,Je=!!S.map,Ct=!!S.matcap,ze=!!Y,H=!!S.aoMap,_t=!!S.lightMap,Re=!!S.bumpMap,Ne=!!S.normalMap,Le=!!S.displacementMap,at=!!S.emissiveMap,We=!!S.metalnessMap,Oe=!!S.roughnessMap,Qe=S.anisotropy>0,vt=S.clearcoat>0,St=S.iridescence>0,b=S.sheen>0,w=S.transmission>0,G=Qe&&!!S.anisotropyMap,se=vt&&!!S.clearcoatMap,ie=vt&&!!S.clearcoatNormalMap,ae=vt&&!!S.clearcoatRoughnessMap,we=St&&!!S.iridescenceMap,he=St&&!!S.iridescenceThicknessMap,fe=b&&!!S.sheenColorMap,L=b&&!!S.sheenRoughnessMap,ne=!!S.specularMap,J=!!S.specularColorMap,Pe=!!S.specularIntensityMap,Ee=w&&!!S.transmissionMap,xe=w&&!!S.thicknessMap,Se=!!S.gradientMap,C=!!S.alphaMap,le=S.alphaTest>0,re=!!S.alphaHash,me=!!S.extensions,ue=!!k.attributes.uv1,$=!!k.attributes.uv2,ve=!!k.attributes.uv3;let Me=Pr;return S.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(Me=i.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:ce,fragmentShader:ge,defines:S.defines,customVertexShaderID:ye,customFragmentShaderID:Ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,instancing:Te,instancingColor:Te&&te.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Ie===null?i.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:tr,map:Je,matcap:Ct,envMap:ze,envMapMode:ze&&Y.mapping,envMapCubeUVHeight:oe,aoMap:H,lightMap:_t,bumpMap:Re,normalMap:Ne,displacementMap:u&&Le,emissiveMap:at,normalMapObjectSpace:Ne&&S.normalMapType===dh,normalMapTangentSpace:Ne&&S.normalMapType===Ro,metalnessMap:We,roughnessMap:Oe,anisotropy:Qe,anisotropyMap:G,clearcoat:vt,clearcoatMap:se,clearcoatNormalMap:ie,clearcoatRoughnessMap:ae,iridescence:St,iridescenceMap:we,iridescenceThicknessMap:he,sheen:b,sheenColorMap:fe,sheenRoughnessMap:L,specularMap:ne,specularColorMap:J,specularIntensityMap:Pe,transmission:w,transmissionMap:Ee,thicknessMap:xe,gradientMap:Se,opaque:S.transparent===!1&&S.blending===ui,alphaMap:C,alphaTest:le,alphaHash:re,combine:S.combine,mapUv:Je&&v(S.map.channel),aoMapUv:H&&v(S.aoMap.channel),lightMapUv:_t&&v(S.lightMap.channel),bumpMapUv:Re&&v(S.bumpMap.channel),normalMapUv:Ne&&v(S.normalMap.channel),displacementMapUv:Le&&v(S.displacementMap.channel),emissiveMapUv:at&&v(S.emissiveMap.channel),metalnessMapUv:We&&v(S.metalnessMap.channel),roughnessMapUv:Oe&&v(S.roughnessMap.channel),anisotropyMapUv:G&&v(S.anisotropyMap.channel),clearcoatMapUv:se&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:L&&v(S.sheenRoughnessMap.channel),specularMapUv:ne&&v(S.specularMap.channel),specularColorMapUv:J&&v(S.specularColorMap.channel),specularIntensityMapUv:Pe&&v(S.specularIntensityMap.channel),transmissionMapUv:Ee&&v(S.transmissionMap.channel),thicknessMapUv:xe&&v(S.thicknessMap.channel),alphaMapUv:C&&v(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ne||Qe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:ue,vertexUv2s:$,vertexUv3s:ve,pointsUvs:te.isPoints===!0&&!!k.attributes.uv&&(Je||C),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:te.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:q,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Je&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mr,flipSided:S.side===Ft,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||r.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const j in S.defines)R.push(j),R.push(S.defines[j]);return S.isRawShaderMaterial===!1&&(E(R,S),_(R,S),R.push(i.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function E(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function _(S,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),S.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function T(S){const R=x[S.type];let j;if(R){const Q=nr[R];j=nu.clone(Q.uniforms)}else j=S.uniforms;return j}function A(S,R){let j;for(let Q=0,te=c.length;Q<te;Q++){const I=c[Q];if(I.cacheKey===R){j=I,++j.usedTimes;break}}return j===void 0&&(j=new gm(i,R,S,a),c.push(j)),j}function D(S){if(--S.usedTimes===0){const R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),S.destroy()}}function M(S){l.remove(S)}function V(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:A,releaseProgram:D,releaseShaderCache:M,programs:c,dispose:V}}function Sm(){let i=new WeakMap;function e(a){let s=i.get(a);return s===void 0&&(s={},i.set(a,s)),s}function t(a){i.delete(a)}function r(a,s,o){i.get(a)[s]=o}function n(){i=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function ym(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Pl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dl(){const i=[];let e=0;const t=[],r=[],n=[];function a(){e=0,t.length=0,r.length=0,n.length=0}function s(p,u,g,x,v,m){let d=i[e];return d===void 0?(d={id:p.id,object:p,geometry:u,material:g,groupOrder:x,renderOrder:p.renderOrder,z:v,group:m},i[e]=d):(d.id=p.id,d.object=p,d.geometry=u,d.material=g,d.groupOrder=x,d.renderOrder=p.renderOrder,d.z=v,d.group=m),e++,d}function o(p,u,g,x,v,m){const d=s(p,u,g,x,v,m);g.transmission>0?r.push(d):g.transparent===!0?n.push(d):t.push(d)}function l(p,u,g,x,v,m){const d=s(p,u,g,x,v,m);g.transmission>0?r.unshift(d):g.transparent===!0?n.unshift(d):t.unshift(d)}function c(p,u){t.length>1&&t.sort(p||ym),r.length>1&&r.sort(u||Pl),n.length>1&&n.sort(u||Pl)}function h(){for(let p=e,u=i.length;p<u;p++){const g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:r,transparent:n,init:a,push:o,unshift:l,finish:h,sort:c}}function Em(){let i=new WeakMap;function e(r,n){const a=i.get(r);let s;return a===void 0?(s=new Dl,i.set(r,[s])):n>=a.length?(s=new Dl,a.push(s)):s=a[n],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Mm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new tt};break;case"SpotLight":t={position:new F,direction:new F,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function bm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Tm=0;function Rm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Am(i,e){const t=new Mm,r=bm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);const a=new F,s=new At,o=new At;function l(h,p){let u=0,g=0,x=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let v=0,m=0,d=0,E=0,_=0,T=0,A=0,D=0,M=0,V=0,S=0;h.sort(Rm);const R=p===!0?Math.PI:1;for(let Q=0,te=h.length;Q<te;Q++){const I=h[Q],k=I.color,K=I.intensity,Y=I.distance,oe=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=k.r*K*R,g+=k.g*K*R,x+=k.b*K*R;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],K);S++}else if(I.isDirectionalLight){const Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*R),I.castShadow){const ee=I.shadow,O=r.get(I);O.shadowBias=ee.bias,O.shadowNormalBias=ee.normalBias,O.shadowRadius=ee.radius,O.shadowMapSize=ee.mapSize,n.directionalShadow[v]=O,n.directionalShadowMap[v]=oe,n.directionalShadowMatrix[v]=I.shadow.matrix,T++}n.directional[v]=Z,v++}else if(I.isSpotLight){const Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(k).multiplyScalar(K*R),Z.distance=Y,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[d]=Z;const ee=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,ee.updateMatrices(I),I.castShadow&&V++),n.spotLightMatrix[d]=ee.matrix,I.castShadow){const O=r.get(I);O.shadowBias=ee.bias,O.shadowNormalBias=ee.normalBias,O.shadowRadius=ee.radius,O.shadowMapSize=ee.mapSize,n.spotShadow[d]=O,n.spotShadowMap[d]=oe,D++}d++}else if(I.isRectAreaLight){const Z=t.get(I);Z.color.copy(k).multiplyScalar(K),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=Z,E++}else if(I.isPointLight){const Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*R),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const ee=I.shadow,O=r.get(I);O.shadowBias=ee.bias,O.shadowNormalBias=ee.normalBias,O.shadowRadius=ee.radius,O.shadowMapSize=ee.mapSize,O.shadowCameraNear=ee.camera.near,O.shadowCameraFar=ee.camera.far,n.pointShadow[m]=O,n.pointShadowMap[m]=oe,n.pointShadowMatrix[m]=I.shadow.matrix,A++}n.point[m]=Z,m++}else if(I.isHemisphereLight){const Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(K*R),Z.groundColor.copy(I.groundColor).multiplyScalar(K*R),n.hemi[_]=Z,_++}}E>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=u,n.ambient[1]=g,n.ambient[2]=x;const j=n.hash;(j.directionalLength!==v||j.pointLength!==m||j.spotLength!==d||j.rectAreaLength!==E||j.hemiLength!==_||j.numDirectionalShadows!==T||j.numPointShadows!==A||j.numSpotShadows!==D||j.numSpotMaps!==M||j.numLightProbes!==S)&&(n.directional.length=v,n.spot.length=d,n.rectArea.length=E,n.point.length=m,n.hemi.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=D+M-V,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=V,n.numLightProbes=S,j.directionalLength=v,j.pointLength=m,j.spotLength=d,j.rectAreaLength=E,j.hemiLength=_,j.numDirectionalShadows=T,j.numPointShadows=A,j.numSpotShadows=D,j.numSpotMaps=M,j.numLightProbes=S,n.version=Tm++)}function c(h,p){let u=0,g=0,x=0,v=0,m=0;const d=p.matrixWorldInverse;for(let E=0,_=h.length;E<_;E++){const T=h[E];if(T.isDirectionalLight){const A=n.directional[u];A.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(d),u++}else if(T.isSpotLight){const A=n.spot[x];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(d),x++}else if(T.isRectAreaLight){const A=n.rectArea[v];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(d),o.identity(),s.copy(T.matrixWorld),s.premultiply(d),o.extractRotation(s),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const A=n.point[g];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(d),g++}else if(T.isHemisphereLight){const A=n.hemi[m];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:n}}function Il(i,e){const t=new Am(i,e),r=[],n=[];function a(){r.length=0,n.length=0}function s(h){r.push(h)}function o(h){n.push(h)}function l(h){t.setup(r,h)}function c(h){t.setupView(r,h)}return{init:a,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function Cm(i,e){let t=new WeakMap;function r(a,s=0){const o=t.get(a);let l;return o===void 0?(l=new Il(i,e),t.set(a,[l])):s>=o.length?(l=new Il(i,e),o.push(l)):l=o[s],l}function n(){t=new WeakMap}return{get:r,dispose:n}}class Lm extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pm extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Im=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Um(i,e,t){let r=new sl;const n=new Ge,a=new Ge,s=new Rt,o=new Lm({depthPacking:uh}),l=new Pm,c={},h=t.maxTextureSize,p={[Cr]:Ft,[Ft]:Cr,[mr]:mr},u=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Dm,fragmentShader:Im}),g=u.clone();g.defines.HORIZONTAL_PASS=1;const x=new Hr;x.setAttribute("position",new rr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new br(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let d=this.type;this.render=function(A,D,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const V=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Lr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Q=d!==fr&&this.type===fr,te=d===fr&&this.type!==fr;for(let I=0,k=A.length;I<k;I++){const K=A[I],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);const oe=Y.getFrameExtents();if(n.multiply(oe),a.copy(Y.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/oe.x),n.x=a.x*oe.x,Y.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/oe.y),n.y=a.y*oe.y,Y.mapSize.y=a.y)),Y.map===null||Q===!0||te===!0){const ee=this.type!==fr?{minFilter:Et,magFilter:Et}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Kr(n.x,n.y,ee),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const Z=Y.getViewportCount();for(let ee=0;ee<Z;ee++){const O=Y.getViewport(ee);s.set(a.x*O.x,a.y*O.y,a.x*O.z,a.y*O.w),j.viewport(s),Y.updateMatrices(K,ee),r=Y.getFrustum(),T(D,M,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===fr&&E(Y,M),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(V,S,R)};function E(A,D){const M=e.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Kr(n.x,n.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(D,null,M,u,v,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(D,null,M,g,v,null)}function _(A,D,M,V){let S=null;const R=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=M.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const j=S.uuid,Q=D.uuid;let te=c[j];te===void 0&&(te={},c[j]=te);let I=te[Q];I===void 0&&(I=S.clone(),te[Q]=I),S=I}if(S.visible=D.visible,S.wireframe=D.wireframe,V===fr?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:p[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,M.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const j=i.properties.get(S);j.light=M}return S}function T(A,D,M,V,S){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===fr)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);const j=e.update(A),Q=A.material;if(Array.isArray(Q)){const te=j.groups;for(let I=0,k=te.length;I<k;I++){const K=te[I],Y=Q[K.materialIndex];if(Y&&Y.visible){const oe=_(A,Y,V,S);i.renderBufferDirect(M,null,j,oe,A,K)}}}else if(Q.visible){const te=_(A,Q,V,S);i.renderBufferDirect(M,null,j,te,A,null)}}const R=A.children;for(let j=0,Q=R.length;j<Q;j++)T(R[j],D,M,V,S)}}function Nm(i,e,t){const r=t.isWebGL2;function n(){let C=!1;const le=new Rt;let re=null;const me=new Rt(0,0,0,0);return{setMask:function(ue){re!==ue&&!C&&(i.colorMask(ue,ue,ue,ue),re=ue)},setLocked:function(ue){C=ue},setClear:function(ue,$,ve,Me,ur){ur===!0&&(ue*=Me,$*=Me,ve*=Me),le.set(ue,$,ve,Me),me.equals(le)===!1&&(i.clearColor(ue,$,ve,Me),me.copy(le))},reset:function(){C=!1,re=null,me.set(-1,0,0,0)}}}function a(){let C=!1,le=null,re=null,me=null;return{setTest:function(ue){ue?Ie(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(ue){le!==ue&&!C&&(i.depthMask(ue),le=ue)},setFunc:function(ue){if(re!==ue){switch(ue){case Bc:i.depthFunc(i.NEVER);break;case Gc:i.depthFunc(i.ALWAYS);break;case Vc:i.depthFunc(i.LESS);break;case Ea:i.depthFunc(i.LEQUAL);break;case kc:i.depthFunc(i.EQUAL);break;case Wc:i.depthFunc(i.GEQUAL);break;case Xc:i.depthFunc(i.GREATER);break;case jc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=ue}},setLocked:function(ue){C=ue},setClear:function(ue){me!==ue&&(i.clearDepth(ue),me=ue)},reset:function(){C=!1,le=null,re=null,me=null}}}function s(){let C=!1,le=null,re=null,me=null,ue=null,$=null,ve=null,Me=null,ur=null;return{setTest:function(ct){C||(ct?Ie(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(ct){le!==ct&&!C&&(i.stencilMask(ct),le=ct)},setFunc:function(ct,dr,Ut){(re!==ct||me!==dr||ue!==Ut)&&(i.stencilFunc(ct,dr,Ut),re=ct,me=dr,ue=Ut)},setOp:function(ct,dr,Ut){($!==ct||ve!==dr||Me!==Ut)&&(i.stencilOp(ct,dr,Ut),$=ct,ve=dr,Me=Ut)},setLocked:function(ct){C=ct},setClear:function(ct){ur!==ct&&(i.clearStencil(ct),ur=ct)},reset:function(){C=!1,le=null,re=null,me=null,ue=null,$=null,ve=null,Me=null,ur=null}}}const o=new n,l=new a,c=new s,h=new WeakMap,p=new WeakMap;let u={},g={},x=new WeakMap,v=[],m=null,d=!1,E=null,_=null,T=null,A=null,D=null,M=null,V=null,S=!1,R=null,j=null,Q=null,te=null,I=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Y=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(oe)[1]),K=Y>=1):oe.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),K=Y>=2);let Z=null,ee={};const O=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),ce=new Rt().fromArray(O),ge=new Rt().fromArray(q);function ye(C,le,re,me){const ue=new Uint8Array(4),$=i.createTexture();i.bindTexture(C,$),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<re;ve++)r&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(le,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(le+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return $}const Ae={};Ae[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Ae[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(i.DEPTH_TEST),l.setFunc(Ea),Le(!1),at(Os),Ie(i.CULL_FACE),Re(Lr);function Ie(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function Te(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Je(C,le){return g[C]!==le?(i.bindFramebuffer(C,le),g[C]=le,r&&(C===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=le),C===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=le)),!0):!1}function Ct(C,le){let re=v,me=!1;if(C)if(re=x.get(le),re===void 0&&(re=[],x.set(le,re)),C.isWebGLMultipleRenderTargets){const ue=C.texture;if(re.length!==ue.length||re[0]!==i.COLOR_ATTACHMENT0){for(let $=0,ve=ue.length;$<ve;$++)re[$]=i.COLOR_ATTACHMENT0+$;re.length=ue.length,me=!0}}else re[0]!==i.COLOR_ATTACHMENT0&&(re[0]=i.COLOR_ATTACHMENT0,me=!0);else re[0]!==i.BACK&&(re[0]=i.BACK,me=!0);me&&(t.isWebGL2?i.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function ze(C){return m!==C?(i.useProgram(C),m=C,!0):!1}const H={[di]:i.FUNC_ADD,[Cc]:i.FUNC_SUBTRACT,[Lc]:i.FUNC_REVERSE_SUBTRACT};if(r)H[Gs]=i.MIN,H[Vs]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(H[Gs]=C.MIN_EXT,H[Vs]=C.MAX_EXT)}const _t={[Pc]:i.ZERO,[Dc]:i.ONE,[Ic]:i.SRC_COLOR,[ks]:i.SRC_ALPHA,[Hc]:i.SRC_ALPHA_SATURATE,[Fc]:i.DST_COLOR,[Nc]:i.DST_ALPHA,[Uc]:i.ONE_MINUS_SRC_COLOR,[Ws]:i.ONE_MINUS_SRC_ALPHA,[zc]:i.ONE_MINUS_DST_COLOR,[Oc]:i.ONE_MINUS_DST_ALPHA};function Re(C,le,re,me,ue,$,ve,Me){if(C===Lr){d===!0&&(Te(i.BLEND),d=!1);return}if(d===!1&&(Ie(i.BLEND),d=!0),C!==Ac){if(C!==E||Me!==S){if((_!==di||D!==di)&&(i.blendEquation(i.FUNC_ADD),_=di,D=di),Me)switch(C){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFunc(i.ONE,i.ONE);break;case Hs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,A=null,M=null,V=null,E=C,S=Me}return}ue=ue||le,$=$||re,ve=ve||me,(le!==_||ue!==D)&&(i.blendEquationSeparate(H[le],H[ue]),_=le,D=ue),(re!==T||me!==A||$!==M||ve!==V)&&(i.blendFuncSeparate(_t[re],_t[me],_t[$],_t[ve]),T=re,A=me,M=$,V=ve),E=C,S=!1}function Ne(C,le){C.side===mr?Te(i.CULL_FACE):Ie(i.CULL_FACE);let re=C.side===Ft;le&&(re=!re),Le(re),C.blending===ui&&C.transparent===!1?Re(Lr):Re(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const me=C.stencilWrite;c.setTest(me),me&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Oe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ie(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(C){R!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),R=C)}function at(C){C!==bc?(Ie(i.CULL_FACE),C!==j&&(C===Os?i.cullFace(i.BACK):C===Tc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),j=C}function We(C){C!==Q&&(K&&i.lineWidth(C),Q=C)}function Oe(C,le,re){C?(Ie(i.POLYGON_OFFSET_FILL),(te!==le||I!==re)&&(i.polygonOffset(le,re),te=le,I=re)):Te(i.POLYGON_OFFSET_FILL)}function Qe(C){C?Ie(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function vt(C){C===void 0&&(C=i.TEXTURE0+k-1),Z!==C&&(i.activeTexture(C),Z=C)}function St(C,le,re){re===void 0&&(Z===null?re=i.TEXTURE0+k-1:re=Z);let me=ee[re];me===void 0&&(me={type:void 0,texture:void 0},ee[re]=me),(me.type!==C||me.texture!==le)&&(Z!==re&&(i.activeTexture(re),Z=re),i.bindTexture(C,le||Ae[C]),me.type=C,me.texture=le)}function b(){const C=ee[Z];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function w(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function G(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function L(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(C){ce.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ce.copy(C))}function Pe(C){ge.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ge.copy(C))}function Ee(C,le){let re=p.get(le);re===void 0&&(re=new WeakMap,p.set(le,re));let me=re.get(C);me===void 0&&(me=i.getUniformBlockIndex(le,C.name),re.set(C,me))}function xe(C,le){const re=p.get(le).get(C);h.get(le)!==re&&(i.uniformBlockBinding(le,re,C.__bindingPointIndex),h.set(le,re))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),r===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Z=null,ee={},g={},x=new WeakMap,v=[],m=null,d=!1,E=null,_=null,T=null,A=null,D=null,M=null,V=null,S=!1,R=null,j=null,Q=null,te=null,I=null,ce.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ie,disable:Te,bindFramebuffer:Je,drawBuffers:Ct,useProgram:ze,setBlending:Re,setMaterial:Ne,setFlipSided:Le,setCullFace:at,setLineWidth:We,setPolygonOffset:Oe,setScissorTest:Qe,activeTexture:vt,bindTexture:St,unbindTexture:b,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:L,texImage3D:ne,updateUBOMapping:Ee,uniformBlockBinding:xe,texStorage2D:he,texStorage3D:fe,texSubImage2D:se,texSubImage3D:ie,compressedTexSubImage2D:ae,compressedTexSubImage3D:we,scissor:J,viewport:Pe,reset:Se}}function Om(i,e,t,r,n,a,s){const o=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,p=n.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,w){return d?new OffscreenCanvas(b,w):wn("canvas")}function _(b,w,G,se){let ie=1;if((b.width>se||b.height>se)&&(ie=se/Math.max(b.width,b.height)),ie<1||w===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ae=w?vn:Math.floor,we=ae(ie*b.width),he=ae(ie*b.height);v===void 0&&(v=E(we,he));const fe=G?E(we,he):v;return fe.width=we,fe.height=he,fe.getContext("2d").drawImage(b,0,0,we,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+we+"x"+he+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function T(b){return za(b.width)&&za(b.height)}function A(b){return o?!1:b.wrapS!==Ht||b.wrapT!==Ht||b.minFilter!==Et&&b.minFilter!==Mt}function D(b,w){return b.generateMipmaps&&w&&b.minFilter!==Et&&b.minFilter!==Mt}function M(b){i.generateMipmap(b)}function V(b,w,G,se,ie=!1){if(o===!1)return w;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ae=w;if(w===i.RED&&(G===i.FLOAT&&(ae=i.R32F),G===i.HALF_FLOAT&&(ae=i.R16F),G===i.UNSIGNED_BYTE&&(ae=i.R8)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ae=i.R8UI),G===i.UNSIGNED_SHORT&&(ae=i.R16UI),G===i.UNSIGNED_INT&&(ae=i.R32UI),G===i.BYTE&&(ae=i.R8I),G===i.SHORT&&(ae=i.R16I),G===i.INT&&(ae=i.R32I)),w===i.RG&&(G===i.FLOAT&&(ae=i.RG32F),G===i.HALF_FLOAT&&(ae=i.RG16F),G===i.UNSIGNED_BYTE&&(ae=i.RG8)),w===i.RGBA){const we=ie?fn:et.getTransfer(se);G===i.FLOAT&&(ae=i.RGBA32F),G===i.HALF_FLOAT&&(ae=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ae=we===nt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function S(b,w,G){return D(b,G)===!0||b.isFramebufferTexture&&b.minFilter!==Et&&b.minFilter!==Mt?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function R(b){return b===Et||b===Ys||b===Ra?i.NEAREST:i.LINEAR}function j(b){const w=b.target;w.removeEventListener("dispose",j),te(w),w.isVideoTexture&&x.delete(w)}function Q(b){const w=b.target;w.removeEventListener("dispose",Q),k(w)}function te(b){const w=r.get(b);if(w.__webglInit===void 0)return;const G=b.source,se=m.get(G);if(se){const ie=se[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&I(b),Object.keys(se).length===0&&m.delete(G)}r.remove(b)}function I(b){const w=r.get(b);i.deleteTexture(w.__webglTexture);const G=b.source,se=m.get(G);delete se[w.__cacheKey],s.memory.textures--}function k(b){const w=b.texture,G=r.get(b),se=r.get(w);if(se.__webglTexture!==void 0&&(i.deleteTexture(se.__webglTexture),s.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(G.__webglFramebuffer[ie]))for(let ae=0;ae<G.__webglFramebuffer[ie].length;ae++)i.deleteFramebuffer(G.__webglFramebuffer[ie][ae]);else i.deleteFramebuffer(G.__webglFramebuffer[ie]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[ie])}else{if(Array.isArray(G.__webglFramebuffer))for(let ie=0;ie<G.__webglFramebuffer.length;ie++)i.deleteFramebuffer(G.__webglFramebuffer[ie]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ie=0;ie<G.__webglColorRenderbuffer.length;ie++)G.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[ie]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ie=0,ae=w.length;ie<ae;ie++){const we=r.get(w[ie]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),s.memory.textures--),r.remove(w[ie])}r.remove(w),r.remove(b)}let K=0;function Y(){K=0}function oe(){const b=K;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),K+=1,b}function Z(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function ee(b,w){const G=r.get(b);if(b.isVideoTexture&&vt(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const se=b.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(G,b,w);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function O(b,w){const G=r.get(b);if(b.version>0&&G.__version!==b.version){Je(G,b,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function q(b,w){const G=r.get(b);if(b.version>0&&G.__version!==b.version){Je(G,b,w);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function ce(b,w){const G=r.get(b);if(b.version>0&&G.__version!==b.version){Ct(G,b,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}const ge={[ba]:i.REPEAT,[Ht]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},ye={[Et]:i.NEAREST,[Ys]:i.NEAREST_MIPMAP_NEAREST,[Ra]:i.NEAREST_MIPMAP_LINEAR,[Mt]:i.LINEAR,[eh]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},Ae={[fh]:i.NEVER,[Sh]:i.ALWAYS,[mh]:i.LESS,[_h]:i.LEQUAL,[gh]:i.EQUAL,[xh]:i.GEQUAL,[vh]:i.GREATER,[wh]:i.NOTEQUAL};function Ie(b,w,G){if(G?(i.texParameteri(b,i.TEXTURE_WRAP_S,ge[w.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ge[w.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ge[w.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ye[w.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ye[w.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==Ht||w.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,R(w.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,R(w.minFilter)),w.minFilter!==Et&&w.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ae[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Et||w.minFilter!==Ra&&w.minFilter!==mi||w.type===Zt&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===gr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||r.get(w).__currentAnisotropy)&&(i.texParameterf(b,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy)}}function Te(b,w){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",j));const se=w.source;let ie=m.get(se);ie===void 0&&(ie={},m.set(se,ie));const ae=Z(w);if(ae!==b.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,G=!0),ie[ae].usedTimes++;const we=ie[b.__cacheKey];we!==void 0&&(ie[b.__cacheKey].usedTimes--,we.usedTimes===0&&I(w)),b.__cacheKey=ae,b.__webglTexture=ie[ae].texture}return G}function Je(b,w,G){let se=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=i.TEXTURE_3D);const ie=Te(b,w),ae=w.source;t.bindTexture(se,b.__webglTexture,i.TEXTURE0+G);const we=r.get(ae);if(ae.version!==we.__version||ie===!0){t.activeTexture(i.TEXTURE0+G);const he=et.getPrimaries(et.workingColorSpace),fe=w.colorSpace===jt?null:et.getPrimaries(w.colorSpace),L=w.colorSpace===jt||he===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);const ne=A(w)&&T(w.image)===!1;let J=_(w.image,ne,!1,h);J=St(w,J);const Pe=T(J)||o,Ee=a.convert(w.format,w.colorSpace);let xe=a.convert(w.type),Se=V(w.internalFormat,Ee,xe,w.colorSpace,w.isVideoTexture);Ie(se,w,Pe);let C;const le=w.mipmaps,re=o&&w.isVideoTexture!==!0,me=we.__version===void 0||ie===!0,ue=S(w,J,Pe);if(w.isDepthTexture)Se=i.DEPTH_COMPONENT,o?w.type===Zt?Se=i.DEPTH_COMPONENT32F:w.type===Ir?Se=i.DEPTH_COMPONENT24:w.type===Xr?Se=i.DEPTH24_STENCIL8:Se=i.DEPTH_COMPONENT16:w.type===Zt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===jr&&Se===i.DEPTH_COMPONENT&&w.type!==Aa&&w.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ir,xe=a.convert(w.type)),w.format===gi&&Se===i.DEPTH_COMPONENT&&(Se=i.DEPTH_STENCIL,w.type!==Xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Xr,xe=a.convert(w.type))),me&&(re?t.texStorage2D(i.TEXTURE_2D,1,Se,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Se,J.width,J.height,0,Ee,xe,null));else if(w.isDataTexture)if(le.length>0&&Pe){re&&me&&t.texStorage2D(i.TEXTURE_2D,ue,Se,le[0].width,le[0].height);for(let $=0,ve=le.length;$<ve;$++)C=le[$],re?t.texSubImage2D(i.TEXTURE_2D,$,0,0,C.width,C.height,Ee,xe,C.data):t.texImage2D(i.TEXTURE_2D,$,Se,C.width,C.height,0,Ee,xe,C.data);w.generateMipmaps=!1}else re?(me&&t.texStorage2D(i.TEXTURE_2D,ue,Se,J.width,J.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,Ee,xe,J.data)):t.texImage2D(i.TEXTURE_2D,0,Se,J.width,J.height,0,Ee,xe,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){re&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Se,le[0].width,le[0].height,J.depth);for(let $=0,ve=le.length;$<ve;$++)C=le[$],w.format!==Jt?Ee!==null?re?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,C.width,C.height,J.depth,Ee,C.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Se,C.width,C.height,J.depth,0,C.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,C.width,C.height,J.depth,Ee,xe,C.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Se,C.width,C.height,J.depth,0,Ee,xe,C.data)}else{re&&me&&t.texStorage2D(i.TEXTURE_2D,ue,Se,le[0].width,le[0].height);for(let $=0,ve=le.length;$<ve;$++)C=le[$],w.format!==Jt?Ee!==null?re?t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,C.width,C.height,Ee,C.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Se,C.width,C.height,0,C.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?t.texSubImage2D(i.TEXTURE_2D,$,0,0,C.width,C.height,Ee,xe,C.data):t.texImage2D(i.TEXTURE_2D,$,Se,C.width,C.height,0,Ee,xe,C.data)}else if(w.isDataArrayTexture)re?(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Se,J.width,J.height,J.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ee,xe,J.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,J.width,J.height,J.depth,0,Ee,xe,J.data);else if(w.isData3DTexture)re?(me&&t.texStorage3D(i.TEXTURE_3D,ue,Se,J.width,J.height,J.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ee,xe,J.data)):t.texImage3D(i.TEXTURE_3D,0,Se,J.width,J.height,J.depth,0,Ee,xe,J.data);else if(w.isFramebufferTexture){if(me)if(re)t.texStorage2D(i.TEXTURE_2D,ue,Se,J.width,J.height);else{let $=J.width,ve=J.height;for(let Me=0;Me<ue;Me++)t.texImage2D(i.TEXTURE_2D,Me,Se,$,ve,0,Ee,xe,null),$>>=1,ve>>=1}}else if(le.length>0&&Pe){re&&me&&t.texStorage2D(i.TEXTURE_2D,ue,Se,le[0].width,le[0].height);for(let $=0,ve=le.length;$<ve;$++)C=le[$],re?t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ee,xe,C):t.texImage2D(i.TEXTURE_2D,$,Se,Ee,xe,C);w.generateMipmaps=!1}else re?(me&&t.texStorage2D(i.TEXTURE_2D,ue,Se,J.width,J.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,xe,J)):t.texImage2D(i.TEXTURE_2D,0,Se,Ee,xe,J);D(w,Pe)&&M(se),we.__version=ae.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Ct(b,w,G){if(w.image.length!==6)return;const se=Te(b,w),ie=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+G);const ae=r.get(ie);if(ie.version!==ae.__version||se===!0){t.activeTexture(i.TEXTURE0+G);const we=et.getPrimaries(et.workingColorSpace),he=w.colorSpace===jt?null:et.getPrimaries(w.colorSpace),fe=w.colorSpace===jt||we===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const L=w.isCompressedTexture||w.image[0].isCompressedTexture,ne=w.image[0]&&w.image[0].isDataTexture,J=[];for(let $=0;$<6;$++)!L&&!ne?J[$]=_(w.image[$],!1,!0,c):J[$]=ne?w.image[$].image:w.image[$],J[$]=St(w,J[$]);const Pe=J[0],Ee=T(Pe)||o,xe=a.convert(w.format,w.colorSpace),Se=a.convert(w.type),C=V(w.internalFormat,xe,Se,w.colorSpace),le=o&&w.isVideoTexture!==!0,re=ae.__version===void 0||se===!0;let me=S(w,Pe,Ee);Ie(i.TEXTURE_CUBE_MAP,w,Ee);let ue;if(L){le&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,C,Pe.width,Pe.height);for(let $=0;$<6;$++){ue=J[$].mipmaps;for(let ve=0;ve<ue.length;ve++){const Me=ue[ve];w.format!==Jt?xe!==null?le?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,Me.width,Me.height,xe,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,C,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,Me.width,Me.height,xe,Se,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,C,Me.width,Me.height,0,xe,Se,Me.data)}}}else{ue=w.mipmaps,le&&re&&(ue.length>0&&me++,t.texStorage2D(i.TEXTURE_CUBE_MAP,me,C,J[0].width,J[0].height));for(let $=0;$<6;$++)if(ne){le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,J[$].width,J[$].height,xe,Se,J[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,C,J[$].width,J[$].height,0,xe,Se,J[$].data);for(let ve=0;ve<ue.length;ve++){const Me=ue[ve].image[$].image;le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,Me.width,Me.height,xe,Se,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,C,Me.width,Me.height,0,xe,Se,Me.data)}}else{le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,xe,Se,J[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,C,xe,Se,J[$]);for(let ve=0;ve<ue.length;ve++){const Me=ue[ve];le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,xe,Se,Me.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,C,xe,Se,Me.image[$])}}}D(w,Ee)&&M(i.TEXTURE_CUBE_MAP),ae.__version=ie.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function ze(b,w,G,se,ie,ae){const we=a.convert(G.format,G.colorSpace),he=a.convert(G.type),fe=V(G.internalFormat,we,he,G.colorSpace);if(!r.get(w).__hasExternalTextures){const L=Math.max(1,w.width>>ae),ne=Math.max(1,w.height>>ae);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,ae,fe,L,ne,w.depth,0,we,he,null):t.texImage2D(ie,ae,fe,L,ne,0,we,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Qe(w)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ie,r.get(G).__webglTexture,0,Oe(w)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ie,r.get(G).__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function H(b,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,b),w.depthBuffer&&!w.stencilBuffer){let se=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||Qe(w)){const ie=w.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Zt?se=i.DEPTH_COMPONENT32F:ie.type===Ir&&(se=i.DEPTH_COMPONENT24));const ae=Oe(w);Qe(w)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,se,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,se,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,se,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(w.depthBuffer&&w.stencilBuffer){const se=Oe(w);G&&Qe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,i.DEPTH24_STENCIL8,w.width,w.height):Qe(w)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const se=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0;ie<se.length;ie++){const ae=se[ie],we=a.convert(ae.format,ae.colorSpace),he=a.convert(ae.type),fe=V(ae.internalFormat,we,he,ae.colorSpace),L=Oe(w);G&&Qe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,fe,w.width,w.height):Qe(w)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,fe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,fe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ee(w.depthTexture,0);const G=r.get(w.depthTexture).__webglTexture,se=Oe(w);if(w.depthTexture.format===jr)Qe(w)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else if(w.depthTexture.format===gi)Qe(w)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Re(b){const w=r.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");_t(w.__webglFramebuffer,b)}else if(G){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]=i.createRenderbuffer(),H(w.__webglDepthbuffer[se],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),H(w.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(b,w,G){const se=r.get(b);w!==void 0&&ze(se.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Re(b)}function Le(b){const w=b.texture,G=r.get(b),se=r.get(w);b.addEventListener("dispose",Q),b.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=w.version,s.memory.textures++);const ie=b.isWebGLCubeRenderTarget===!0,ae=b.isWebGLMultipleRenderTargets===!0,we=T(b)||o;if(ie){G.__webglFramebuffer=[];for(let he=0;he<6;he++)if(o&&w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[he]=[];for(let fe=0;fe<w.mipmaps.length;fe++)G.__webglFramebuffer[he][fe]=i.createFramebuffer()}else G.__webglFramebuffer[he]=i.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)G.__webglFramebuffer[he]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ae)if(n.drawBuffers){const he=b.texture;for(let fe=0,L=he.length;fe<L;fe++){const ne=r.get(he[fe]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&Qe(b)===!1){const he=ae?w:[w];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<he.length;fe++){const L=he[fe];G.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const ne=a.convert(L.format,L.colorSpace),J=a.convert(L.type),Pe=V(L.internalFormat,ne,J,L.colorSpace,b.isXRRenderTarget===!0),Ee=Oe(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Pe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),H(G.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,w,we);for(let he=0;he<6;he++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)ze(G.__webglFramebuffer[he][fe],b,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else ze(G.__webglFramebuffer[he],b,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);D(w,we)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const he=b.texture;for(let fe=0,L=he.length;fe<L;fe++){const ne=he[fe],J=r.get(ne);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),Ie(i.TEXTURE_2D,ne,we),ze(G.__webglFramebuffer,b,ne,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),D(ne,we)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?he=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,se.__webglTexture),Ie(he,w,we),o&&w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)ze(G.__webglFramebuffer[fe],b,w,i.COLOR_ATTACHMENT0,he,fe);else ze(G.__webglFramebuffer,b,w,i.COLOR_ATTACHMENT0,he,0);D(w,we)&&M(he),t.unbindTexture()}b.depthBuffer&&Re(b)}function at(b){const w=T(b)||o,G=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let se=0,ie=G.length;se<ie;se++){const ae=G[se];if(D(ae,w)){const we=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,he=r.get(ae).__webglTexture;t.bindTexture(we,he),M(we),t.unbindTexture()}}}function We(b){if(o&&b.samples>0&&Qe(b)===!1){const w=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],G=b.width,se=b.height;let ie=i.COLOR_BUFFER_BIT;const ae=[],we=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=r.get(b),fe=b.isWebGLMultipleRenderTargets===!0;if(fe)for(let L=0;L<w.length;L++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let L=0;L<w.length;L++){ae.push(i.COLOR_ATTACHMENT0+L),b.depthBuffer&&ae.push(we);const ne=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ne===!1&&(b.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),fe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[L]),ne===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[we]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[we])),fe){const J=r.get(w[L]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,G,se,0,0,G,se,ie,i.NEAREST),g&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let L=0;L<w.length;L++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,he.__webglColorRenderbuffer[L]);const ne=r.get(w[L]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Oe(b){return Math.min(p,b.samples)}function Qe(b){const w=r.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function vt(b){const w=s.render.frame;x.get(b)!==w&&(x.set(b,w),b.update())}function St(b,w){const G=b.colorSpace,se=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Oa||G!==tr&&G!==jt&&(et.getTransfer(G)===nt?o===!1?e.has("EXT_sRGB")===!0&&se===Jt?(b.format=Oa,b.minFilter=Mt,b.generateMipmaps=!1):w=No.sRGBToLinear(w):(se!==Jt||ie!==Dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}this.allocateTextureUnit=oe,this.resetTextureUnits=Y,this.setTexture2D=ee,this.setTexture2DArray=O,this.setTexture3D=q,this.setTextureCube=ce,this.rebindTextures=Ne,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=Qe}function Fm(i,e,t){const r=t.isWebGL2;function n(a,s=jt){let o;const l=et.getTransfer(s);if(a===Dr)return i.UNSIGNED_BYTE;if(a===Ks)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Zs)return i.UNSIGNED_SHORT_5_5_5_1;if(a===th)return i.BYTE;if(a===rh)return i.SHORT;if(a===Aa)return i.UNSIGNED_SHORT;if(a===qs)return i.INT;if(a===Ir)return i.UNSIGNED_INT;if(a===Zt)return i.FLOAT;if(a===gr)return r?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===ih)return i.ALPHA;if(a===Jt)return i.RGBA;if(a===nh)return i.LUMINANCE;if(a===ah)return i.LUMINANCE_ALPHA;if(a===jr)return i.DEPTH_COMPONENT;if(a===gi)return i.DEPTH_STENCIL;if(a===Oa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===sh)return i.RED;if(a===Js)return i.RED_INTEGER;if(a===oh)return i.RG;if(a===Qs)return i.RG_INTEGER;if(a===$s)return i.RGBA_INTEGER;if(a===Ca||a===La||a===Pa||a===Da)if(l===nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Ca)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===La)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Ca)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===La)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Pa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Da)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===eo||a===to||a===ro||a===io)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===eo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===to)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ro)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===io)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===lh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===no||a===ao)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===no)return l===nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===ao)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===so||a===oo||a===lo||a===co||a===ho||a===uo||a===po||a===fo||a===mo||a===go||a===_o||a===vo||a===wo||a===xo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===so)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===oo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===lo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===co)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ho)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===uo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===po)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===fo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===mo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===go)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===_o)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===vo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===wo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===xo)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ia||a===So||a===yo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Ia)return l===nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===So)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===yo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===ch||a===Eo||a===Mo||a===bo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Ia)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Eo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Mo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===bo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Xr?r?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:n}}class zm extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jn extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hm={type:"move"};class cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,r),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),g=.02,x=.005;c.inputState.pinching&&u>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new jn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Bm extends zt{constructor(e,t,r,n,a,s,o,l,c,h){if(h=h!==void 0?h:jr,h!==jr&&h!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===jr&&(r=Ir),r===void 0&&h===gi&&(r=Xr),super(null,n,a,s,o,l,h,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gm extends qr{constructor(e,t){super();const r=this;let n=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,g=null,x=null;const v=t.getContextAttributes();let m=null,d=null;const E=[],_=[],T=new qt;T.layers.enable(1),T.viewport=new Rt;const A=new qt;A.layers.enable(2),A.viewport=new Rt;const D=[T,A],M=new zm;M.layers.enable(1),M.layers.enable(2);let V=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let q=E[O];return q===void 0&&(q=new cs,E[O]=q),q.getTargetRaySpace()},this.getControllerGrip=function(O){let q=E[O];return q===void 0&&(q=new cs,E[O]=q),q.getGripSpace()},this.getHand=function(O){let q=E[O];return q===void 0&&(q=new cs,E[O]=q),q.getHandSpace()};function R(O){const q=_.indexOf(O.inputSource);if(q===-1)return;const ce=E[q];ce!==void 0&&(ce.update(O.inputSource,O.frame,c||s),ce.dispatchEvent({type:O.type,data:O.inputSource}))}function j(){n.removeEventListener("select",R),n.removeEventListener("selectstart",R),n.removeEventListener("selectend",R),n.removeEventListener("squeeze",R),n.removeEventListener("squeezestart",R),n.removeEventListener("squeezeend",R),n.removeEventListener("end",j),n.removeEventListener("inputsourceschange",Q);for(let O=0;O<E.length;O++){const q=_[O];q!==null&&(_[O]=null,E[O].disconnect(q))}V=null,S=null,e.setRenderTarget(m),g=null,u=null,p=null,n=null,d=null,ee.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){a=O,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return n},this.setSession=async function(O){if(n=O,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",R),n.addEventListener("selectstart",R),n.addEventListener("selectend",R),n.addEventListener("squeeze",R),n.addEventListener("squeezestart",R),n.addEventListener("squeezeend",R),n.addEventListener("end",j),n.addEventListener("inputsourceschange",Q),v.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(n,t,q),n.updateRenderState({baseLayer:g}),d=new Kr(g.framebufferWidth,g.framebufferHeight,{format:Jt,type:Dr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let q=null,ce=null,ge=null;v.depth&&(ge=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=v.stencil?gi:jr,ce=v.stencil?Xr:Ir);const ye={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:a};p=new XRWebGLBinding(n,t),u=p.createProjectionLayer(ye),n.updateRenderState({layers:[u]}),d=new Kr(u.textureWidth,u.textureHeight,{format:Jt,type:Dr,depthTexture:new Bm(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ae=e.properties.get(d);Ae.__ignoreDepthValues=u.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),ee.setContext(n),ee.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function Q(O){for(let q=0;q<O.removed.length;q++){const ce=O.removed[q],ge=_.indexOf(ce);ge>=0&&(_[ge]=null,E[ge].disconnect(ce))}for(let q=0;q<O.added.length;q++){const ce=O.added[q];let ge=_.indexOf(ce);if(ge===-1){for(let Ae=0;Ae<E.length;Ae++)if(Ae>=_.length){_.push(ce),ge=Ae;break}else if(_[Ae]===null){_[Ae]=ce,ge=Ae;break}if(ge===-1)break}const ye=E[ge];ye&&ye.connect(ce)}}const te=new F,I=new F;function k(O,q,ce){te.setFromMatrixPosition(q.matrixWorld),I.setFromMatrixPosition(ce.matrixWorld);const ge=te.distanceTo(I),ye=q.projectionMatrix.elements,Ae=ce.projectionMatrix.elements,Ie=ye[14]/(ye[10]-1),Te=ye[14]/(ye[10]+1),Je=(ye[9]+1)/ye[5],Ct=(ye[9]-1)/ye[5],ze=(ye[8]-1)/ye[0],H=(Ae[8]+1)/Ae[0],_t=Ie*ze,Re=Ie*H,Ne=ge/(-ze+H),Le=Ne*-ze;q.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Le),O.translateZ(Ne),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const at=Ie+Ne,We=Te+Ne,Oe=_t-Le,Qe=Re+(ge-Le),vt=Je*Te/We*at,St=Ct*Te/We*at;O.projectionMatrix.makePerspective(Oe,Qe,vt,St,at,We),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function K(O,q){q===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(q.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(n===null)return;M.near=A.near=T.near=O.near,M.far=A.far=T.far=O.far,(V!==M.near||S!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),V=M.near,S=M.far);const q=O.parent,ce=M.cameras;K(M,q);for(let ge=0;ge<ce.length;ge++)K(ce[ge],q);ce.length===2?k(M,T,A):M.projectionMatrix.copy(T.projectionMatrix),Y(O,M,q)};function Y(O,q,ce){ce===null?O.matrix.copy(q.matrixWorld):(O.matrix.copy(ce.matrixWorld),O.matrix.invert(),O.matrix.multiply(q.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(q.projectionMatrix),O.projectionMatrixInverse.copy(q.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ki*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&g===null))return l},this.setFoveation=function(O){l=O,u!==null&&(u.fixedFoveation=O),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=O)};let oe=null;function Z(O,q){if(h=q.getViewerPose(c||s),x=q,h!==null){const ce=h.views;g!==null&&(e.setRenderTargetFramebuffer(d,g.framebuffer),e.setRenderTarget(d));let ge=!1;ce.length!==M.cameras.length&&(M.cameras.length=0,ge=!0);for(let ye=0;ye<ce.length;ye++){const Ae=ce[ye];let Ie=null;if(g!==null)Ie=g.getViewport(Ae);else{const Je=p.getViewSubImage(u,Ae);Ie=Je.viewport,ye===0&&(e.setRenderTargetTextures(d,Je.colorTexture,u.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(d))}let Te=D[ye];Te===void 0&&(Te=new qt,Te.layers.enable(ye),Te.viewport=new Rt,D[ye]=Te),Te.matrix.fromArray(Ae.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ae.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ye===0&&(M.matrix.copy(Te.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ge===!0&&M.cameras.push(Te)}}for(let ce=0;ce<E.length;ce++){const ge=_[ce],ye=E[ce];ge!==null&&ye!==void 0&&ye.update(ge,q,c||s)}oe&&oe(O,q),q.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:q}),x=null}const ee=new ol;ee.setAnimationLoop(Z),this.setAnimationLoop=function(O){oe=O},this.dispose=function(){}}}function Vm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function r(m,d){d.color.getRGB(m.fogColor.value,il(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,E,_,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),p(m,d)):d.isMeshPhongMaterial?(a(m,d),h(m,d)):d.isMeshStandardMaterial?(a(m,d),u(m,d),d.isMeshPhysicalMaterial&&g(m,d,T)):d.isMeshMatcapMaterial?(a(m,d),x(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),v(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,E,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ft&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ft&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=e.get(d).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=_*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ft&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function km(i,e,t,r){let n={},a={},s=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,_){const T=_.program;r.uniformBlockBinding(E,T)}function c(E,_){let T=n[E.id];T===void 0&&(x(E),T=h(E),n[E.id]=T,E.addEventListener("dispose",m));const A=_.program;r.updateUBOMapping(E,A);const D=e.render.frame;a[E.id]!==D&&(u(E),a[E.id]=D)}function h(E){const _=p();E.__bindingPointIndex=_;const T=i.createBuffer(),A=E.__size,D=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,T),T}function p(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const _=n[E.id],T=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let D=0,M=T.length;D<M;D++){const V=T[D];if(g(V,D,A)===!0){const S=V.__offset,R=Array.isArray(V.value)?V.value:[V.value];let j=0;for(let Q=0;Q<R.length;Q++){const te=R[Q],I=v(te);typeof te=="number"?(V.__data[0]=te,i.bufferSubData(i.UNIFORM_BUFFER,S+j,V.__data)):te.isMatrix3?(V.__data[0]=te.elements[0],V.__data[1]=te.elements[1],V.__data[2]=te.elements[2],V.__data[3]=te.elements[0],V.__data[4]=te.elements[3],V.__data[5]=te.elements[4],V.__data[6]=te.elements[5],V.__data[7]=te.elements[0],V.__data[8]=te.elements[6],V.__data[9]=te.elements[7],V.__data[10]=te.elements[8],V.__data[11]=te.elements[0]):(te.toArray(V.__data,j),j+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,S,V.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(E,_,T){const A=E.value;if(T[_]===void 0){if(typeof A=="number")T[_]=A;else{const D=Array.isArray(A)?A:[A],M=[];for(let V=0;V<D.length;V++)M.push(D[V].clone());T[_]=M}return!0}else if(typeof A=="number"){if(T[_]!==A)return T[_]=A,!0}else{const D=Array.isArray(T[_])?T[_]:[T[_]],M=Array.isArray(A)?A:[A];for(let V=0;V<D.length;V++){const S=D[V];if(S.equals(M[V])===!1)return S.copy(M[V]),!0}}return!1}function x(E){const _=E.uniforms;let T=0;const A=16;let D=0;for(let M=0,V=_.length;M<V;M++){const S=_[M],R={boundary:0,storage:0},j=Array.isArray(S.value)?S.value:[S.value];for(let Q=0,te=j.length;Q<te;Q++){const I=j[Q],k=v(I);R.boundary+=k.boundary,R.storage+=k.storage}if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=T,M>0){D=T%A;const Q=A-D;D!==0&&Q-R.boundary<0&&(T+=A-D,S.__offset=T)}T+=R.storage}return D=T%A,D>0&&(T+=A-D),E.__size=T,E.__cache={},this}function v(E){const _={boundary:0,storage:0};return typeof E=="number"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function m(E){const _=E.target;_.removeEventListener("dispose",m);const T=s.indexOf(_.__bindingPointIndex);s.splice(T,1),i.deleteBuffer(n[_.id]),delete n[_.id],delete a[_.id]}function d(){for(const E in n)i.deleteBuffer(n[E]);s=[],n={},a={}}return{bind:l,update:c,dispose:d}}class Ul{constructor(e={}){const{canvas:t=Fh(),context:r=null,depth:n=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let u;r!==null?u=r.getContextAttributes().alpha:u=s;const g=new Uint32Array(4),x=new Int32Array(4);let v=null,m=null;const d=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=Pr,this.toneMappingExposure=1;const _=this;let T=!1,A=0,D=0,M=null,V=-1,S=null;const R=new Rt,j=new Rt;let Q=null;const te=new tt(0);let I=0,k=t.width,K=t.height,Y=1,oe=null,Z=null;const ee=new Rt(0,0,k,K),O=new Rt(0,0,k,K);let q=!1;const ce=new sl;let ge=!1,ye=!1,Ae=null;const Ie=new At,Te=new Ge,Je=new F,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return M===null?Y:1}let H=r;function _t(y,z){for(let X=0;X<y.length;X++){const B=y[X],W=t.getContext(B,z);if(W!==null)return W}return null}try{const y={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pr}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",me,!1),H===null){const z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&z.shift(),H=_t(z,y),H===null)throw _t(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Re,Ne,Le,at,We,Oe,Qe,vt,St,b,w,G,se,ie,ae,we,he,fe,L,ne,J,Pe,Ee,xe;function Se(){Re=new $p(H),Ne=new jp(H,Re,e),Re.init(Ne),Pe=new Fm(H,Re,Ne),Le=new Nm(H,Re,Ne),at=new rf(H),We=new Sm,Oe=new Om(H,Re,Le,We,Ne,Pe,at),Qe=new qp(_),vt=new Qp(_),St=new uu(H,Ne),Ee=new Wp(H,Re,St,Ne),b=new ef(H,St,at,Ee),w=new of(H,b,St,at),L=new sf(H,Ne,Oe),we=new Yp(We),G=new xm(_,Qe,vt,Re,Ne,Ee,we),se=new Vm(_,We),ie=new Em,ae=new Cm(Re,Ne),fe=new kp(_,Qe,vt,Le,w,u,l),he=new Um(_,w,Ne),xe=new km(H,at,Ne,Le),ne=new Xp(H,Re,at,Ne),J=new tf(H,Re,at,Ne),at.programs=G.programs,_.capabilities=Ne,_.extensions=Re,_.properties=We,_.renderLists=ie,_.shadowMap=he,_.state=Le,_.info=at}Se();const C=new Gm(_,H);this.xr=C,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const y=Re.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Re.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(k,K,!1))},this.getSize=function(y){return y.set(k,K)},this.setSize=function(y,z,X=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=y,K=z,t.width=Math.floor(y*Y),t.height=Math.floor(z*Y),X===!0&&(t.style.width=y+"px",t.style.height=z+"px"),this.setViewport(0,0,y,z)},this.getDrawingBufferSize=function(y){return y.set(k*Y,K*Y).floor()},this.setDrawingBufferSize=function(y,z,X){k=y,K=z,Y=X,t.width=Math.floor(y*X),t.height=Math.floor(z*X),this.setViewport(0,0,y,z)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(ee)},this.setViewport=function(y,z,X,B){y.isVector4?ee.set(y.x,y.y,y.z,y.w):ee.set(y,z,X,B),Le.viewport(R.copy(ee).multiplyScalar(Y).floor())},this.getScissor=function(y){return y.copy(O)},this.setScissor=function(y,z,X,B){y.isVector4?O.set(y.x,y.y,y.z,y.w):O.set(y,z,X,B),Le.scissor(j.copy(O).multiplyScalar(Y).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(y){Le.setScissorTest(q=y)},this.setOpaqueSort=function(y){oe=y},this.setTransparentSort=function(y){Z=y},this.getClearColor=function(y){return y.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(y=!0,z=!0,X=!0){let B=0;if(y){let W=!1;if(M!==null){const pe=M.texture.format;W=pe===$s||pe===Qs||pe===Js}if(W){const pe=M.texture.type,Ce=pe===Dr||pe===Ir||pe===Aa||pe===Xr||pe===Ks||pe===Zs,De=fe.getClearColor(),Ue=fe.getClearAlpha(),Ye=De.r,He=De.g,Be=De.b;Ce?(g[0]=Ye,g[1]=He,g[2]=Be,g[3]=Ue,H.clearBufferuiv(H.COLOR,0,g)):(x[0]=Ye,x[1]=He,x[2]=Be,x[3]=Ue,H.clearBufferiv(H.COLOR,0,x))}else B|=H.COLOR_BUFFER_BIT}z&&(B|=H.DEPTH_BUFFER_BIT),X&&(B|=H.STENCIL_BUFFER_BIT),H.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ie.dispose(),ae.dispose(),We.dispose(),Qe.dispose(),vt.dispose(),w.dispose(),Ee.dispose(),xe.dispose(),G.dispose(),C.dispose(),C.removeEventListener("sessionstart",ct),C.removeEventListener("sessionend",dr),Ae&&(Ae.dispose(),Ae=null),Ut.stop()};function le(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=at.autoReset,z=he.enabled,X=he.autoUpdate,B=he.needsUpdate,W=he.type;Se(),at.autoReset=y,he.enabled=z,he.autoUpdate=X,he.needsUpdate=B,he.type=W}function me(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ue(y){const z=y.target;z.removeEventListener("dispose",ue),$(z)}function $(y){ve(y),We.remove(y)}function ve(y){const z=We.get(y).programs;z!==void 0&&(z.forEach(function(X){G.releaseProgram(X)}),y.isShaderMaterial&&G.releaseShaderCache(y))}this.renderBufferDirect=function(y,z,X,B,W,pe){z===null&&(z=Ct);const Ce=W.isMesh&&W.matrixWorld.determinant()<0,De=xE(y,z,X,B,W);Le.setMaterial(B,Ce);let Ue=X.index,Ye=1;if(B.wireframe===!0){if(Ue=b.getWireframeAttribute(X),Ue===void 0)return;Ye=2}const He=X.drawRange,Be=X.attributes.position;let yt=He.start*Ye,ht=(He.start+He.count)*Ye;pe!==null&&(yt=Math.max(yt,pe.start*Ye),ht=Math.min(ht,(pe.start+pe.count)*Ye)),Ue!==null?(yt=Math.max(yt,0),ht=Math.min(ht,Ue.count)):Be!=null&&(yt=Math.max(yt,0),ht=Math.min(ht,Be.count));const Kt=ht-yt;if(Kt<0||Kt===1/0)return;Ee.setup(W,B,De,X,Ue);let Ar,ft=ne;if(Ue!==null&&(Ar=St.get(Ue),ft=J,ft.setIndex(Ar)),W.isMesh)B.wireframe===!0?(Le.setLineWidth(B.wireframeLinewidth*ze()),ft.setMode(H.LINES)):ft.setMode(H.TRIANGLES);else if(W.isLine){let qe=B.linewidth;qe===void 0&&(qe=1),Le.setLineWidth(qe*ze()),W.isLineSegments?ft.setMode(H.LINES):W.isLineLoop?ft.setMode(H.LINE_LOOP):ft.setMode(H.LINE_STRIP)}else W.isPoints?ft.setMode(H.POINTS):W.isSprite&&ft.setMode(H.TRIANGLES);if(W.isInstancedMesh)ft.renderInstances(yt,Kt,W.count);else if(X.isInstancedBufferGeometry){const qe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ps=Math.min(X.instanceCount,qe);ft.renderInstances(yt,Kt,Ps)}else ft.render(yt,Kt)},this.compile=function(y,z){function X(B,W,pe){B.transparent===!0&&B.side===mr&&B.forceSinglePass===!1?(B.side=Ft,B.needsUpdate=!0,Sa(B,W,pe),B.side=Cr,B.needsUpdate=!0,Sa(B,W,pe),B.side=mr):Sa(B,W,pe)}m=ae.get(y),m.init(),E.push(m),y.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(_._useLegacyLights),y.traverse(function(B){const W=B.material;if(W)if(Array.isArray(W))for(let pe=0;pe<W.length;pe++){const Ce=W[pe];X(Ce,y,B)}else X(W,y,B)}),E.pop(),m=null};let Me=null;function ur(y){Me&&Me(y)}function ct(){Ut.stop()}function dr(){Ut.start()}const Ut=new ol;Ut.setAnimationLoop(ur),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(y){Me=y,C.setAnimationLoop(y),y===null?Ut.stop():Ut.start()},C.addEventListener("sessionstart",ct),C.addEventListener("sessionend",dr),this.render=function(y,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(z),z=C.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,z,M),m=ae.get(y,E.length),m.init(),E.push(m),Ie.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ce.setFromProjectionMatrix(Ie),ye=this.localClippingEnabled,ge=we.init(this.clippingPlanes,ye),v=ie.get(y,d.length),v.init(),d.push(v),vc(y,z,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(oe,Z),this.info.render.frame++,ge===!0&&we.beginShadows();const X=m.state.shadowsArray;if(he.render(X,y,z),ge===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(v,y),m.setupLights(_._useLegacyLights),z.isArrayCamera){const B=z.cameras;for(let W=0,pe=B.length;W<pe;W++){const Ce=B[W];wc(v,y,Ce,Ce.viewport)}}else wc(v,y,z);M!==null&&(Oe.updateMultisampleRenderTarget(M),Oe.updateRenderTargetMipmap(M)),y.isScene===!0&&y.onAfterRender(_,y,z),Ee.resetDefaultState(),V=-1,S=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function vc(y,z,X,B){if(y.visible===!1)return;if(y.layers.test(z.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(z);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ce.intersectsSprite(y)){B&&Je.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ie);const pe=w.update(y),Ce=y.material;Ce.visible&&v.push(y,pe,Ce,X,Je.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ce.intersectsObject(y))){const pe=w.update(y),Ce=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Je.copy(y.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Je.copy(pe.boundingSphere.center)),Je.applyMatrix4(y.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ce)){const De=pe.groups;for(let Ue=0,Ye=De.length;Ue<Ye;Ue++){const He=De[Ue],Be=Ce[He.materialIndex];Be&&Be.visible&&v.push(y,pe,Be,X,Je.z,He)}}else Ce.visible&&v.push(y,pe,Ce,X,Je.z,null)}}const W=y.children;for(let pe=0,Ce=W.length;pe<Ce;pe++)vc(W[pe],z,X,B)}function wc(y,z,X,B){const W=y.opaque,pe=y.transmissive,Ce=y.transparent;m.setupLightsView(X),ge===!0&&we.setGlobalState(_.clippingPlanes,X),pe.length>0&&wE(W,pe,z,X),B&&Le.viewport(R.copy(B)),W.length>0&&xa(W,z,X),pe.length>0&&xa(pe,z,X),Ce.length>0&&xa(Ce,z,X),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function wE(y,z,X,B){const W=Ne.isWebGL2;Ae===null&&(Ae=new Kr(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?gr:Dr,minFilter:mi,samples:W?4:0})),_.getDrawingBufferSize(Te),W?Ae.setSize(Te.x,Te.y):Ae.setSize(vn(Te.x),vn(Te.y));const pe=_.getRenderTarget();_.setRenderTarget(Ae),_.getClearColor(te),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const Ce=_.toneMapping;_.toneMapping=Pr,xa(y,X,B),Oe.updateMultisampleRenderTarget(Ae),Oe.updateRenderTargetMipmap(Ae);let De=!1;for(let Ue=0,Ye=z.length;Ue<Ye;Ue++){const He=z[Ue],Be=He.object,yt=He.geometry,ht=He.material,Kt=He.group;if(ht.side===mr&&Be.layers.test(B.layers)){const Ar=ht.side;ht.side=Ft,ht.needsUpdate=!0,xc(Be,X,B,yt,ht,Kt),ht.side=Ar,ht.needsUpdate=!0,De=!0}}De===!0&&(Oe.updateMultisampleRenderTarget(Ae),Oe.updateRenderTargetMipmap(Ae)),_.setRenderTarget(pe),_.setClearColor(te,I),_.toneMapping=Ce}function xa(y,z,X){const B=z.isScene===!0?z.overrideMaterial:null;for(let W=0,pe=y.length;W<pe;W++){const Ce=y[W],De=Ce.object,Ue=Ce.geometry,Ye=B===null?Ce.material:B,He=Ce.group;De.layers.test(X.layers)&&xc(De,z,X,Ue,Ye,He)}}function xc(y,z,X,B,W,pe){y.onBeforeRender(_,z,X,B,W,pe),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(_,z,X,B,y,pe),W.transparent===!0&&W.side===mr&&W.forceSinglePass===!1?(W.side=Ft,W.needsUpdate=!0,_.renderBufferDirect(X,z,B,W,y,pe),W.side=Cr,W.needsUpdate=!0,_.renderBufferDirect(X,z,B,W,y,pe),W.side=mr):_.renderBufferDirect(X,z,B,W,y,pe),y.onAfterRender(_,z,X,B,W,pe)}function Sa(y,z,X){z.isScene!==!0&&(z=Ct);const B=We.get(y),W=m.state.lights,pe=m.state.shadowsArray,Ce=W.state.version,De=G.getParameters(y,W.state,pe,z,X),Ue=G.getProgramCacheKey(De);let Ye=B.programs;B.environment=y.isMeshStandardMaterial?z.environment:null,B.fog=z.fog,B.envMap=(y.isMeshStandardMaterial?vt:Qe).get(y.envMap||B.environment),Ye===void 0&&(y.addEventListener("dispose",ue),Ye=new Map,B.programs=Ye);let He=Ye.get(Ue);if(He!==void 0){if(B.currentProgram===He&&B.lightsStateVersion===Ce)return Sc(y,De),He}else De.uniforms=G.getUniforms(y),y.onBuild(X,De,_),y.onBeforeCompile(De,_),He=G.acquireProgram(De,Ue),Ye.set(Ue,He),B.uniforms=De.uniforms;const Be=B.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Be.clippingPlanes=we.uniform),Sc(y,De),B.needsLights=yE(y),B.lightsStateVersion=Ce,B.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix);const yt=He.getUniforms(),ht=Xn.seqWithValue(yt.seq,Be);return B.currentProgram=He,B.uniformsList=ht,He}function Sc(y,z){const X=We.get(y);X.outputColorSpace=z.outputColorSpace,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function xE(y,z,X,B,W){z.isScene!==!0&&(z=Ct),Oe.resetTextureUnits();const pe=z.fog,Ce=B.isMeshStandardMaterial?z.environment:null,De=M===null?_.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:tr,Ue=(B.isMeshStandardMaterial?vt:Qe).get(B.envMap||Ce),Ye=B.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,He=!!X.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Be=!!X.morphAttributes.position,yt=!!X.morphAttributes.normal,ht=!!X.morphAttributes.color;let Kt=Pr;B.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Kt=_.toneMapping);const Ar=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ft=Ar!==void 0?Ar.length:0,qe=We.get(B),Ps=m.state.lights;if(ge===!0&&(ye===!0||y!==S)){const Wt=y===S&&B.id===V;we.setState(B,y,Wt)}let Ds=!1;B.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ps.state.version||qe.outputColorSpace!==De||W.isInstancedMesh&&qe.instancing===!1||!W.isInstancedMesh&&qe.instancing===!0||W.isSkinnedMesh&&qe.skinning===!1||!W.isSkinnedMesh&&qe.skinning===!0||W.isInstancedMesh&&qe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&qe.instancingColor===!1&&W.instanceColor!==null||qe.envMap!==Ue||B.fog===!0&&qe.fog!==pe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==we.numPlanes||qe.numIntersection!==we.numIntersection)||qe.vertexAlphas!==Ye||qe.vertexTangents!==He||qe.morphTargets!==Be||qe.morphNormals!==yt||qe.morphColors!==ht||qe.toneMapping!==Kt||Ne.isWebGL2===!0&&qe.morphTargetsCount!==ft)&&(Ds=!0):(Ds=!0,qe.__version=B.version);let li=qe.currentProgram;Ds===!0&&(li=Sa(B,z,W));let yc=!1,hn=!1,Is=!1;const Nt=li.getUniforms(),ci=qe.uniforms;if(Le.useProgram(li.program)&&(yc=!0,hn=!0,Is=!0),B.id!==V&&(V=B.id,hn=!0),yc||S!==y){Nt.setValue(H,"projectionMatrix",y.projectionMatrix),Nt.setValue(H,"viewMatrix",y.matrixWorldInverse);const Wt=Nt.map.cameraPosition;Wt!==void 0&&Wt.setValue(H,Je.setFromMatrixPosition(y.matrixWorld)),Ne.logarithmicDepthBuffer&&Nt.setValue(H,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Nt.setValue(H,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,hn=!0,Is=!0)}if(W.isSkinnedMesh){Nt.setOptional(H,W,"bindMatrix"),Nt.setOptional(H,W,"bindMatrixInverse");const Wt=W.skeleton;Wt&&(Ne.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),Nt.setValue(H,"boneTexture",Wt.boneTexture,Oe),Nt.setValue(H,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Us=X.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0&&Ne.isWebGL2===!0)&&L.update(W,X,li),(hn||qe.receiveShadow!==W.receiveShadow)&&(qe.receiveShadow=W.receiveShadow,Nt.setValue(H,"receiveShadow",W.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ci.envMap.value=Ue,ci.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),hn&&(Nt.setValue(H,"toneMappingExposure",_.toneMappingExposure),qe.needsLights&&SE(ci,Is),pe&&B.fog===!0&&se.refreshFogUniforms(ci,pe),se.refreshMaterialUniforms(ci,B,Y,K,Ae),Xn.upload(H,qe.uniformsList,ci,Oe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Xn.upload(H,qe.uniformsList,ci,Oe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Nt.setValue(H,"center",W.center),Nt.setValue(H,"modelViewMatrix",W.modelViewMatrix),Nt.setValue(H,"normalMatrix",W.normalMatrix),Nt.setValue(H,"modelMatrix",W.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Wt=B.uniformsGroups;for(let Ns=0,EE=Wt.length;Ns<EE;Ns++)if(Ne.isWebGL2){const Ec=Wt[Ns];xe.update(Ec,li),xe.bind(Ec,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function SE(y,z){y.ambientLightColor.needsUpdate=z,y.lightProbe.needsUpdate=z,y.directionalLights.needsUpdate=z,y.directionalLightShadows.needsUpdate=z,y.pointLights.needsUpdate=z,y.pointLightShadows.needsUpdate=z,y.spotLights.needsUpdate=z,y.spotLightShadows.needsUpdate=z,y.rectAreaLights.needsUpdate=z,y.hemisphereLights.needsUpdate=z}function yE(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(y,z,X){We.get(y.texture).__webglTexture=z,We.get(y.depthTexture).__webglTexture=X;const B=We.get(y);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=X===void 0,B.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,z){const X=We.get(y);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(y,z=0,X=0){M=y,A=z,D=X;let B=!0,W=null,pe=!1,Ce=!1;if(y){const De=We.get(y);De.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(H.FRAMEBUFFER,null),B=!1):De.__webglFramebuffer===void 0?Oe.setupRenderTarget(y):De.__hasExternalTextures&&Oe.rebindTextures(y,We.get(y.texture).__webglTexture,We.get(y.depthTexture).__webglTexture);const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ce=!0);const Ye=We.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ye[z])?W=Ye[z][X]:W=Ye[z],pe=!0):Ne.isWebGL2&&y.samples>0&&Oe.useMultisampledRTT(y)===!1?W=We.get(y).__webglMultisampledFramebuffer:Array.isArray(Ye)?W=Ye[X]:W=Ye,R.copy(y.viewport),j.copy(y.scissor),Q=y.scissorTest}else R.copy(ee).multiplyScalar(Y).floor(),j.copy(O).multiplyScalar(Y).floor(),Q=q;if(Le.bindFramebuffer(H.FRAMEBUFFER,W)&&Ne.drawBuffers&&B&&Le.drawBuffers(y,W),Le.viewport(R),Le.scissor(j),Le.setScissorTest(Q),pe){const De=We.get(y.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,De.__webglTexture,X)}else if(Ce){const De=We.get(y.texture),Ue=z||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,De.__webglTexture,X||0,Ue)}V=-1},this.readRenderTargetPixels=function(y,z,X,B,W,pe,Ce){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=We.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){Le.bindFramebuffer(H.FRAMEBUFFER,De);try{const Ue=y.texture,Ye=Ue.format,He=Ue.type;if(Ye!==Jt&&Pe.convert(Ye)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=He===gr&&(Re.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Re.has("EXT_color_buffer_float"));if(He!==Dr&&Pe.convert(He)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===Zt&&(Ne.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=y.width-B&&X>=0&&X<=y.height-W&&H.readPixels(z,X,B,W,Pe.convert(Ye),Pe.convert(He),pe)}finally{const Ue=M!==null?We.get(M).__webglFramebuffer:null;Le.bindFramebuffer(H.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(y,z,X=0){const B=Math.pow(2,-X),W=Math.floor(z.image.width*B),pe=Math.floor(z.image.height*B);Oe.setTexture2D(z,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,y.x,y.y,W,pe),Le.unbindTexture()},this.copyTextureToTexture=function(y,z,X,B=0){const W=z.image.width,pe=z.image.height,Ce=Pe.convert(X.format),De=Pe.convert(X.type);Oe.setTexture2D(X,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,B,y.x,y.y,W,pe,Ce,De,z.image.data):z.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,B,y.x,y.y,z.mipmaps[0].width,z.mipmaps[0].height,Ce,z.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,B,y.x,y.y,Ce,De,z.image),B===0&&X.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(y,z,X,B,W=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=y.max.x-y.min.x+1,Ce=y.max.y-y.min.y+1,De=y.max.z-y.min.z+1,Ue=Pe.convert(B.format),Ye=Pe.convert(B.type);let He;if(B.isData3DTexture)Oe.setTexture3D(B,0),He=H.TEXTURE_3D;else if(B.isDataArrayTexture)Oe.setTexture2DArray(B,0),He=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);const Be=H.getParameter(H.UNPACK_ROW_LENGTH),yt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ht=H.getParameter(H.UNPACK_SKIP_PIXELS),Kt=H.getParameter(H.UNPACK_SKIP_ROWS),Ar=H.getParameter(H.UNPACK_SKIP_IMAGES),ft=X.isCompressedTexture?X.mipmaps[0]:X.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ft.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ft.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,y.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,y.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,y.min.z),X.isDataTexture||X.isData3DTexture?H.texSubImage3D(He,W,z.x,z.y,z.z,pe,Ce,De,Ue,Ye,ft.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(He,W,z.x,z.y,z.z,pe,Ce,De,Ue,ft.data)):H.texSubImage3D(He,W,z.x,z.y,z.z,pe,Ce,De,Ue,Ye,ft),H.pixelStorei(H.UNPACK_ROW_LENGTH,Be),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,yt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ht),H.pixelStorei(H.UNPACK_SKIP_ROWS,Kt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ar),W===0&&B.generateMipmaps&&H.generateMipmap(He),Le.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?Oe.setTextureCube(y,0):y.isData3DTexture?Oe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Oe.setTexture2DArray(y,0):Oe.setTexture2D(y,0),Le.unbindTexture()},this.resetState=function(){A=0,D=0,M=null,Le.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _r}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ua?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===pn?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?Yr:To}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yr?bt:tr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Wm extends Ul{}Wm.prototype.isWebGL1Renderer=!0;class Xm extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class jm extends zt{constructor(e=null,t=1,r=1,n,a,s,o,l,c=Et,h=Et,p,u){super(null,s,o,l,c,h,n,a,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs extends Hr{constructor(e=1,t=32,r=16,n=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(s+o,Math.PI);let c=0;const h=[],p=new F,u=new F,g=[],x=[],v=[],m=[];for(let d=0;d<=r;d++){const E=[],_=d/r;let T=0;d===0&&s===0?T=.5/t:d===r&&l===Math.PI&&(T=-.5/t);for(let A=0;A<=t;A++){const D=A/t;p.x=-e*Math.cos(n+D*a)*Math.sin(s+_*o),p.y=e*Math.cos(s+_*o),p.z=e*Math.sin(n+D*a)*Math.sin(s+_*o),x.push(p.x,p.y,p.z),u.copy(p).normalize(),v.push(u.x,u.y,u.z),m.push(D+T,1-_),E.push(c++)}h.push(E)}for(let d=0;d<r;d++)for(let E=0;E<t;E++){const _=h[d][E+1],T=h[d][E],A=h[d+1][E],D=h[d+1][E+1];(d!==0||s>0)&&g.push(_,T,D),(d!==r-1||l<Math.PI)&&g.push(T,A,D)}this.setIndex(g),this.setAttribute("position",new ir(x,3)),this.setAttribute("normal",new ir(v,3)),this.setAttribute("uv",new ir(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ym extends Zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ro,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Nl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class qm{constructor(e,t,r){const n=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(h){o++,a===!1&&n.onStart!==void 0&&n.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,n.onProgress!==void 0&&n.onProgress(h,s,o),s===o&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){const p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){const g=c[p],x=c[p+1];if(g.global&&(g.lastIndex=0),g.test(h))return x}return null}}}const Km=new qm;class us{constructor(e){this.manager=e!==void 0?e:Km,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(n,a){r.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}us.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tr={};class Zm extends Error{constructor(e,t){super(e),this.response=t}}class Jm extends us{constructor(e){super(e)}load(e,t,r,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Nl.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Tr[e]!==void 0){Tr[e].push({onLoad:t,onProgress:r,onError:n});return}Tr[e]=[],Tr[e].push({onLoad:t,onProgress:r,onError:n});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Tr[e],p=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),g=u?parseInt(u):0,x=g!==0;let v=0;const m=new ReadableStream({start(d){E();function E(){p.read().then(({done:_,value:T})=>{if(_)d.close();else{v+=T.byteLength;const A=new ProgressEvent("progress",{lengthComputable:x,loaded:v,total:g});for(let D=0,M=h.length;D<M;D++){const V=h[D];V.onProgress&&V.onProgress(A)}d.enqueue(T),E()}})}}});return new Response(m)}else throw new Zm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),p=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(p);return c.arrayBuffer().then(g=>u.decode(g))}}}).then(c=>{Nl.add(e,c);const h=Tr[e];delete Tr[e];for(let p=0,u=h.length;p<u;p++){const g=h[p];g.onLoad&&g.onLoad(c)}}).catch(c=>{const h=Tr[e];if(h===void 0)throw this.manager.itemError(e),c;delete Tr[e];for(let p=0,u=h.length;p<u;p++){const g=h[p];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Qm extends us{constructor(e){super(e)}load(e,t,r,n){const a=this,s=new jm,o=new Jm(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(a.withCredentials),o.load(e,function(l){let c;try{c=a.parse(l)}catch(h){if(n!==void 0)n(h);else{console.error(h);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:Ht,s.wrapT=c.wrapT!==void 0?c.wrapT:Ht,s.magFilter=c.magFilter!==void 0?c.magFilter:Mt,s.minFilter=c.minFilter!==void 0?c.minFilter:Mt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?s.colorSpace=c.colorSpace:c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=mi),c.mipmapCount===1&&(s.minFilter=Mt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},r,n),s}}class Ol{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pr}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pr);class $m extends Qm{constructor(e){super(e),this.type=gr}parse(e){const t=function(d,E){switch(d){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(E||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(E||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(E||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(E||""))}},r=`
`,n=function(d,E,_){E=E||1024;let T=d.pos,A=-1,D=0,M="",V=String.fromCharCode.apply(null,new Uint16Array(d.subarray(T,T+128)));for(;0>(A=V.indexOf(r))&&D<E&&T<d.byteLength;)M+=V,D+=V.length,T+=128,V+=String.fromCharCode.apply(null,new Uint16Array(d.subarray(T,T+128)));return-1<A?(_!==!1&&(d.pos+=D+A+1),M+V.slice(0,A)):!1},a=function(d){const E=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,M={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let V,S;for((d.pos>=d.byteLength||!(V=n(d)))&&t(1,"no header found"),(S=V.match(E))||t(3,"bad initial token"),M.valid|=1,M.programtype=S[1],M.string+=V+`
`;V=n(d),V!==!1;){if(M.string+=V+`
`,V.charAt(0)==="#"){M.comments+=V+`
`;continue}if((S=V.match(_))&&(M.gamma=parseFloat(S[1])),(S=V.match(T))&&(M.exposure=parseFloat(S[1])),(S=V.match(A))&&(M.valid|=2,M.format=S[1]),(S=V.match(D))&&(M.valid|=4,M.height=parseInt(S[1],10),M.width=parseInt(S[2],10)),M.valid&2&&M.valid&4)break}return M.valid&2||t(3,"missing format specifier"),M.valid&4||t(3,"missing image size specifier"),M},s=function(d,E,_){const T=E;if(T<8||T>32767||d[0]!==2||d[1]!==2||d[2]&128)return new Uint8Array(d);T!==(d[2]<<8|d[3])&&t(3,"wrong scanline width");const A=new Uint8Array(4*E*_);A.length||t(4,"unable to allocate buffer space");let D=0,M=0;const V=4*T,S=new Uint8Array(4),R=new Uint8Array(V);let j=_;for(;j>0&&M<d.byteLength;){M+4>d.byteLength&&t(1),S[0]=d[M++],S[1]=d[M++],S[2]=d[M++],S[3]=d[M++],(S[0]!=2||S[1]!=2||(S[2]<<8|S[3])!=T)&&t(3,"bad rgbe scanline format");let Q=0,te;for(;Q<V&&M<d.byteLength;){te=d[M++];const k=te>128;if(k&&(te-=128),(te===0||Q+te>V)&&t(3,"bad scanline data"),k){const K=d[M++];for(let Y=0;Y<te;Y++)R[Q++]=K}else R.set(d.subarray(M,M+te),Q),Q+=te,M+=te}const I=T;for(let k=0;k<I;k++){let K=0;A[D]=R[k+K],K+=T,A[D+1]=R[k+K],K+=T,A[D+2]=R[k+K],K+=T,A[D+3]=R[k+K],D+=4}j--}return A},o=function(d,E,_,T){const A=d[E+3],D=Math.pow(2,A-128)/255;_[T+0]=d[E+0]*D,_[T+1]=d[E+1]*D,_[T+2]=d[E+2]*D,_[T+3]=1},l=function(d,E,_,T){const A=d[E+3],D=Math.pow(2,A-128)/255;_[T+0]=Pn.toHalfFloat(Math.min(d[E+0]*D,65504)),_[T+1]=Pn.toHalfFloat(Math.min(d[E+1]*D,65504)),_[T+2]=Pn.toHalfFloat(Math.min(d[E+2]*D,65504)),_[T+3]=Pn.toHalfFloat(1)},c=new Uint8Array(e);c.pos=0;const h=a(c),p=h.width,u=h.height,g=s(c.subarray(c.pos),p,u);let x,v,m;switch(this.type){case Zt:m=g.length/4;const d=new Float32Array(m*4);for(let _=0;_<m;_++)o(g,_*4,d,_*4);x=d,v=Zt;break;case gr:m=g.length/4;const E=new Uint16Array(m*4);for(let _=0;_<m;_++)l(g,_*4,E,_*4);x=E,v=gr;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:p,height:u,data:x,header:h.string,gamma:h.gamma,exposure:h.exposure,type:v}}setDataType(e){return this.type=e,this}load(e,t,r,n){function a(s,o){switch(s.type){case Zt:case gr:s.colorSpace=tr,s.minFilter=Mt,s.magFilter=Mt,s.generateMipmaps=!1,s.flipY=!0;break}t&&t(s,o)}return super.load(e,a,r,n)}}const Fl={type:"change"},ds={type:"start"},zl={type:"end"},Yn=new Ho,Hl=new Br,eg=Math.cos(70*Oh.DEG2RAD);class tg extends qr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ot.ROTATE,MIDDLE:Ot.DOLLY,RIGHT:Ot.PAN},this.touches={ONE:Xt.ROTATE,TWO:Xt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",w),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",w),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(Fl),r.update(),a=n.NONE},this.update=function(){const L=new F,ne=new Zr().setFromUnitVectors(e.up,new F(0,1,0)),J=ne.clone().invert(),Pe=new F,Ee=new Zr,xe=new F,Se=2*Math.PI;return function(C=null){const le=r.object.position;L.copy(le).sub(r.target),L.applyQuaternion(ne),o.setFromVector3(L),r.autoRotate&&a===n.NONE&&j(S(C)),r.enableDamping?(o.theta+=l.theta*r.dampingFactor,o.phi+=l.phi*r.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let re=r.minAzimuthAngle,me=r.maxAzimuthAngle;isFinite(re)&&isFinite(me)&&(re<-Math.PI?re+=Se:re>Math.PI&&(re-=Se),me<-Math.PI?me+=Se:me>Math.PI&&(me-=Se),re<=me?o.theta=Math.max(re,Math.min(me,o.theta)):o.theta=o.theta>(re+me)/2?Math.max(re,o.theta):Math.min(me,o.theta)),o.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,o.phi)),o.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(h,r.dampingFactor):r.target.add(h),r.zoomToCursor&&D||r.object.isOrthographicCamera?o.radius=Z(o.radius):o.radius=Z(o.radius*c),L.setFromSpherical(o),L.applyQuaternion(J),le.copy(r.target).add(L),r.object.lookAt(r.target),r.enableDamping===!0?(l.theta*=1-r.dampingFactor,l.phi*=1-r.dampingFactor,h.multiplyScalar(1-r.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let ue=!1;if(r.zoomToCursor&&D){let $=null;if(r.object.isPerspectiveCamera){const ve=L.length();$=Z(ve*c);const Me=ve-$;r.object.position.addScaledVector(T,Me),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const ve=new F(A.x,A.y,0);ve.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),ue=!0;const Me=new F(A.x,A.y,0);Me.unproject(r.object),r.object.position.sub(Me).add(ve),r.object.updateMatrixWorld(),$=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;$!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar($).add(r.object.position):(Yn.origin.copy(r.object.position),Yn.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Yn.direction))<eg?e.lookAt(r.target):(Hl.setFromNormalAndCoplanarPoint(r.object.up,r.target),Yn.intersectPlane(Hl,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),ue=!0);return c=1,D=!1,ue||Pe.distanceToSquared(r.object.position)>s||8*(1-Ee.dot(r.object.quaternion))>s||xe.distanceToSquared(r.target)>0?(r.dispatchEvent(Fl),Pe.copy(r.object.position),Ee.copy(r.object.quaternion),xe.copy(r.target),ue=!1,!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",ie),r.domElement.removeEventListener("pointerdown",We),r.domElement.removeEventListener("pointercancel",Qe),r.domElement.removeEventListener("wheel",b),r.domElement.removeEventListener("pointermove",Oe),r.domElement.removeEventListener("pointerup",Qe),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",w),r._domElementKeyEvents=null)};const r=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const s=1e-6,o=new Ol,l=new Ol;let c=1;const h=new F,p=new Ge,u=new Ge,g=new Ge,x=new Ge,v=new Ge,m=new Ge,d=new Ge,E=new Ge,_=new Ge,T=new F,A=new Ge;let D=!1;const M=[],V={};function S(L){return L!==null?2*Math.PI/60*r.autoRotateSpeed*L:2*Math.PI/60/60*r.autoRotateSpeed}function R(){return Math.pow(.95,r.zoomSpeed)}function j(L){l.theta-=L}function Q(L){l.phi-=L}const te=function(){const L=new F;return function(ne,J){L.setFromMatrixColumn(J,0),L.multiplyScalar(-ne),h.add(L)}}(),I=function(){const L=new F;return function(ne,J){r.screenSpacePanning===!0?L.setFromMatrixColumn(J,1):(L.setFromMatrixColumn(J,0),L.crossVectors(r.object.up,L)),L.multiplyScalar(ne),h.add(L)}}(),k=function(){const L=new F;return function(ne,J){const Pe=r.domElement;if(r.object.isPerspectiveCamera){const Ee=r.object.position;L.copy(Ee).sub(r.target);let xe=L.length();xe*=Math.tan(r.object.fov/2*Math.PI/180),te(2*ne*xe/Pe.clientHeight,r.object.matrix),I(2*J*xe/Pe.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(te(ne*(r.object.right-r.object.left)/r.object.zoom/Pe.clientWidth,r.object.matrix),I(J*(r.object.top-r.object.bottom)/r.object.zoom/Pe.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function K(L){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function Y(L){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function oe(L){if(!r.zoomToCursor)return;D=!0;const ne=r.domElement.getBoundingClientRect(),J=L.clientX-ne.left,Pe=L.clientY-ne.top,Ee=ne.width,xe=ne.height;A.x=J/Ee*2-1,A.y=-(Pe/xe)*2+1,T.set(A.x,A.y,1).unproject(r.object).sub(r.object.position).normalize()}function Z(L){return Math.max(r.minDistance,Math.min(r.maxDistance,L))}function ee(L){p.set(L.clientX,L.clientY)}function O(L){oe(L),d.set(L.clientX,L.clientY)}function q(L){x.set(L.clientX,L.clientY)}function ce(L){u.set(L.clientX,L.clientY),g.subVectors(u,p).multiplyScalar(r.rotateSpeed);const ne=r.domElement;j(2*Math.PI*g.x/ne.clientHeight),Q(2*Math.PI*g.y/ne.clientHeight),p.copy(u),r.update()}function ge(L){E.set(L.clientX,L.clientY),_.subVectors(E,d),_.y>0?K(R()):_.y<0&&Y(R()),d.copy(E),r.update()}function ye(L){v.set(L.clientX,L.clientY),m.subVectors(v,x).multiplyScalar(r.panSpeed),k(m.x,m.y),x.copy(v),r.update()}function Ae(L){oe(L),L.deltaY<0?Y(R()):L.deltaY>0&&K(R()),r.update()}function Ie(L){let ne=!1;switch(L.code){case r.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?Q(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):k(0,r.keyPanSpeed),ne=!0;break;case r.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?Q(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):k(0,-r.keyPanSpeed),ne=!0;break;case r.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?j(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):k(r.keyPanSpeed,0),ne=!0;break;case r.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?j(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):k(-r.keyPanSpeed,0),ne=!0;break}ne&&(L.preventDefault(),r.update())}function Te(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),ne=.5*(M[0].pageY+M[1].pageY);p.set(L,ne)}}function Je(){if(M.length===1)x.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),ne=.5*(M[0].pageY+M[1].pageY);x.set(L,ne)}}function Ct(){const L=M[0].pageX-M[1].pageX,ne=M[0].pageY-M[1].pageY,J=Math.sqrt(L*L+ne*ne);d.set(0,J)}function ze(){r.enableZoom&&Ct(),r.enablePan&&Je()}function H(){r.enableZoom&&Ct(),r.enableRotate&&Te()}function _t(L){if(M.length==1)u.set(L.pageX,L.pageY);else{const J=fe(L),Pe=.5*(L.pageX+J.x),Ee=.5*(L.pageY+J.y);u.set(Pe,Ee)}g.subVectors(u,p).multiplyScalar(r.rotateSpeed);const ne=r.domElement;j(2*Math.PI*g.x/ne.clientHeight),Q(2*Math.PI*g.y/ne.clientHeight),p.copy(u)}function Re(L){if(M.length===1)v.set(L.pageX,L.pageY);else{const ne=fe(L),J=.5*(L.pageX+ne.x),Pe=.5*(L.pageY+ne.y);v.set(J,Pe)}m.subVectors(v,x).multiplyScalar(r.panSpeed),k(m.x,m.y),x.copy(v)}function Ne(L){const ne=fe(L),J=L.pageX-ne.x,Pe=L.pageY-ne.y,Ee=Math.sqrt(J*J+Pe*Pe);E.set(0,Ee),_.set(0,Math.pow(E.y/d.y,r.zoomSpeed)),K(_.y),d.copy(E)}function Le(L){r.enableZoom&&Ne(L),r.enablePan&&Re(L)}function at(L){r.enableZoom&&Ne(L),r.enableRotate&&_t(L)}function We(L){r.enabled!==!1&&(M.length===0&&(r.domElement.setPointerCapture(L.pointerId),r.domElement.addEventListener("pointermove",Oe),r.domElement.addEventListener("pointerup",Qe)),ae(L),L.pointerType==="touch"?G(L):vt(L))}function Oe(L){r.enabled!==!1&&(L.pointerType==="touch"?se(L):St(L))}function Qe(L){we(L),M.length===0&&(r.domElement.releasePointerCapture(L.pointerId),r.domElement.removeEventListener("pointermove",Oe),r.domElement.removeEventListener("pointerup",Qe)),r.dispatchEvent(zl),a=n.NONE}function vt(L){let ne;switch(L.button){case 0:ne=r.mouseButtons.LEFT;break;case 1:ne=r.mouseButtons.MIDDLE;break;case 2:ne=r.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case Ot.DOLLY:if(r.enableZoom===!1)return;O(L),a=n.DOLLY;break;case Ot.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(r.enablePan===!1)return;q(L),a=n.PAN}else{if(r.enableRotate===!1)return;ee(L),a=n.ROTATE}break;case Ot.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(r.enableRotate===!1)return;ee(L),a=n.ROTATE}else{if(r.enablePan===!1)return;q(L),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&r.dispatchEvent(ds)}function St(L){switch(a){case n.ROTATE:if(r.enableRotate===!1)return;ce(L);break;case n.DOLLY:if(r.enableZoom===!1)return;ge(L);break;case n.PAN:if(r.enablePan===!1)return;ye(L);break}}function b(L){r.enabled===!1||r.enableZoom===!1||a!==n.NONE||(L.preventDefault(),r.dispatchEvent(ds),Ae(L),r.dispatchEvent(zl))}function w(L){r.enabled===!1||r.enablePan===!1||Ie(L)}function G(L){switch(he(L),M.length){case 1:switch(r.touches.ONE){case Xt.ROTATE:if(r.enableRotate===!1)return;Te(),a=n.TOUCH_ROTATE;break;case Xt.PAN:if(r.enablePan===!1)return;Je(),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(r.touches.TWO){case Xt.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ze(),a=n.TOUCH_DOLLY_PAN;break;case Xt.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;H(),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&r.dispatchEvent(ds)}function se(L){switch(he(L),a){case n.TOUCH_ROTATE:if(r.enableRotate===!1)return;_t(L),r.update();break;case n.TOUCH_PAN:if(r.enablePan===!1)return;Re(L),r.update();break;case n.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Le(L),r.update();break;case n.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;at(L),r.update();break;default:a=n.NONE}}function ie(L){r.enabled!==!1&&L.preventDefault()}function ae(L){M.push(L)}function we(L){delete V[L.pointerId];for(let ne=0;ne<M.length;ne++)if(M[ne].pointerId==L.pointerId){M.splice(ne,1);return}}function he(L){let ne=V[L.pointerId];ne===void 0&&(ne=new Ge,V[L.pointerId]=ne),ne.set(L.pageX,L.pageY)}function fe(L){const ne=L.pointerId===M[0].pointerId?M[1]:M[0];return V[ne.pointerId]}r.domElement.addEventListener("contextmenu",ie),r.domElement.addEventListener("pointerdown",We),r.domElement.addEventListener("pointercancel",Qe),r.domElement.addEventListener("wheel",b,{passive:!1}),this.update()}}const rg=""+new URL("../industrial_sunset_puresky_2k.hdr",import.meta.url).href;class ig{constructor(e){ya(this,"animationQueue",{});ya(this,"resizeQueue",{});this.scene=this.getScene(),this.camera=this.getCamera(),this.renderer=this.getRenderer(e),this.controls=this.getControls(),this.getLight(this.scene),this.getResize(),this.getBackground(this.scene),this.animate(this.scene,this.camera,this.renderer,this.controls)}getScene(){return new Xm}getBackground(e){new $m().loadAsync(rg).then(t=>{t.mapping=un,e.background=t,e.environment=t})}getCamera(){const e=new qt(75,window.innerWidth/window.innerHeight,.1,25);return e.position.set(0,0,-10),this.addToResizeQueue("resize_camera",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix()}),e}getRenderer(e){this.renderer&&(this.renderer.domElement.parentNode.removeChild(this.renderer.domElement),this.renderer.dispose());const t=new Ul({antialias:!0,pixelRatio:window.devicePixelRatio});return t.setSize(window.innerWidth,window.innerHeight),e.appendChild(t.domElement),this.addToResizeQueue("resize_renderer",()=>{t.setSize(window.innerWidth,window.innerHeight)}),t}getControls(){const e=new tg(this.camera,this.renderer.domElement);return e.enableDamping=!0,e.dampingFactor=.1,e.screenSpacePanning=!1,e}getLight(e){}addToAnimationQueue(e,t){this.animationQueue[e]=t}deleteFromAnimationQueue(e){delete this.animationQueue[e]}getResize(){window.addEventListener("resize",()=>{for(var e in this.resizeQueue)this.resizeQueue[e]()})}addToResizeQueue(e,t){this.resizeQueue[e]=t}deleteFromResizeQueue(e){delete this.resizeQueue[e]}animate(e,t,r,n){r.render(e,t),n.update();for(const a in this.animationQueue)this.animationQueue[a]();requestAnimationFrame(()=>this.animate(e,t,r,n))}}const ng=""+new URL("rapier_wasm3d_bg-a8e9a6c4.wasm",import.meta.url).href,ag=async(i={},e)=>{let t;if(e.startsWith("data:")){const r=e.replace(/^data:.*?base64,/,"");let n;if(typeof Buffer=="function"&&typeof Buffer.from=="function")n=Buffer.from(r,"base64");else if(typeof atob=="function"){const a=atob(r);n=new Uint8Array(a.length);for(let s=0;s<a.length;s++)n[s]=a.charCodeAt(s)}else throw new Error("Cannot decode base64-encoded data URL");t=await WebAssembly.instantiate(n,i)}else{const r=await fetch(e),n=r.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&n.startsWith("application/wasm"))t=await WebAssembly.instantiateStreaming(r,i);else{const a=await r.arrayBuffer();t=await WebAssembly.instantiate(a,i)}}return t.instance.exports},Ze=new Array(32).fill(void 0);Ze.push(void 0,null,!0,!1);function $e(i){return Ze[i]}let en=Ze.length;function sg(i){i<36||(Ze[i]=en,en=i)}function tn(i){const e=$e(i);return sg(i),e}function dt(i){en===Ze.length&&Ze.push(Ze.length+1);const e=en;return en=Ze[e],Ze[e]=i,e}function _e(i){return i==null}let ps=new Float64Array;function qn(){return ps.byteLength===0&&(ps=new Float64Array(Bi.buffer)),ps}let fs=new Int32Array;function rt(){return fs.byteLength===0&&(fs=new Int32Array(Bi.buffer)),fs}const og=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let Bl=new og("utf-8",{ignoreBOM:!0,fatal:!0});Bl.decode();let ms=new Uint8Array;function lg(){return ms.byteLength===0&&(ms=new Uint8Array(Bi.buffer)),ms}function cg(i,e){return Bl.decode(lg().subarray(i,i+e))}function P(i,e){if(!(i instanceof e))throw new Error(`expected instance of ${e.name}`);return i.ptr}let gs=new Float32Array;function Gr(){return gs.byteLength===0&&(gs=new Float32Array(Bi.buffer)),gs}let it=32;function st(i){if(it==1)throw new Error("out of js stack");return Ze[--it]=i,it}function Gl(i,e){return Gr().subarray(i/4,i/4+e)}let _s=new Uint32Array;function Vl(){return _s.byteLength===0&&(_s=new Uint32Array(Bi.buffer)),_s}function hg(i,e){return Vl().subarray(i/4,i/4+e)}let kt=0;function ni(i,e){const t=e(i.length*4);return Gr().set(i,t/4),kt=i.length,t}function Kn(i,e){const t=e(i.length*4);return Vl().set(i,t/4),kt=i.length,t}function vs(i,e){try{return i.apply(this,e)}catch(t){Vy(dt(t))}}const Zn=Object.freeze({X:0,0:"X",Y:1,1:"Y",Z:2,2:"Z",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"});class Vr{static __wrap(e){const t=Object.create(Vr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();V0(e)}constructor(){const e=k0();return Vr.__wrap(e)}}class Hi{static __wrap(e){const t=Object.create(Hi.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();h_(e)}constructor(){const e=u_();return Hi.__wrap(e)}}class rn{static __wrap(e){const t=Object.create(rn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();n_(e)}constructor(){const e=a_();return rn.__wrap(e)}handle(){return sn(this.ptr)}translationApplied(){const e=s_(this.ptr);return U.__wrap(e)}translationRemaining(){const e=o_(this.ptr);return U.__wrap(e)}toi(){return ai(this.ptr)}worldWitness1(){const e=ha(this.ptr);return U.__wrap(e)}worldWitness2(){const e=l_(this.ptr);return U.__wrap(e)}worldNormal1(){const e=bs(this.ptr);return U.__wrap(e)}worldNormal2(){const e=c_(this.ptr);return U.__wrap(e)}}class ot{static __wrap(e){const t=Object.create(ot.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();ex(e)}coTranslation(e){const t=W0(this.ptr,e);return U.__wrap(t)}coRotation(e){const t=X0(this.ptr,e);return ke.__wrap(t)}coSetTranslation(e,t,r,n){j0(this.ptr,e,t,r,n)}coSetTranslationWrtParent(e,t,r,n){Y0(this.ptr,e,t,r,n)}coSetRotation(e,t,r,n,a){q0(this.ptr,e,t,r,n,a)}coSetRotationWrtParent(e,t,r,n,a){K0(this.ptr,e,t,r,n,a)}coIsSensor(e){return Z0(this.ptr,e)!==0}coShapeType(e){return J0(this.ptr,e)>>>0}coHalfspaceNormal(e){const t=Q0(this.ptr,e);return t===0?void 0:U.__wrap(t)}coHalfExtents(e){const t=$0(this.ptr,e);return t===0?void 0:U.__wrap(t)}coSetHalfExtents(e,t){P(t,U),ew(this.ptr,e,t.ptr)}coRadius(e){try{const n=Ke(-16);tw(n,this.ptr,e);var t=rt()[n/4+0],r=Gr()[n/4+1];return t===0?void 0:r}finally{Ke(16)}}coSetRadius(e,t){rw(this.ptr,e,t)}coHalfHeight(e){try{const n=Ke(-16);iw(n,this.ptr,e);var t=rt()[n/4+0],r=Gr()[n/4+1];return t===0?void 0:r}finally{Ke(16)}}coSetHalfHeight(e,t){nw(this.ptr,e,t)}coRoundRadius(e){try{const n=Ke(-16);aw(n,this.ptr,e);var t=rt()[n/4+0],r=Gr()[n/4+1];return t===0?void 0:r}finally{Ke(16)}}coSetRoundRadius(e,t){sw(this.ptr,e,t)}coVertices(e){try{const n=Ke(-16);ow(n,this.ptr,e);var t=rt()[n/4+0],r=rt()[n/4+1];let a;return t!==0&&(a=Gl(t,r).slice(),Ts(t,r*4)),a}finally{Ke(16)}}coIndices(e){try{const n=Ke(-16);lw(n,this.ptr,e);var t=rt()[n/4+0],r=rt()[n/4+1];let a;return t!==0&&(a=hg(t,r).slice(),Ts(t,r*4)),a}finally{Ke(16)}}coHeightfieldHeights(e){try{const n=Ke(-16);cw(n,this.ptr,e);var t=rt()[n/4+0],r=rt()[n/4+1];let a;return t!==0&&(a=Gl(t,r).slice(),Ts(t,r*4)),a}finally{Ke(16)}}coHeightfieldScale(e){const t=hw(this.ptr,e);return t===0?void 0:U.__wrap(t)}coHeightfieldNRows(e){try{const n=Ke(-16);uw(n,this.ptr,e);var t=rt()[n/4+0],r=rt()[n/4+1];return t===0?void 0:r>>>0}finally{Ke(16)}}coHeightfieldNCols(e){try{const n=Ke(-16);dw(n,this.ptr,e);var t=rt()[n/4+0],r=rt()[n/4+1];return t===0?void 0:r>>>0}finally{Ke(16)}}coParent(e){try{const n=Ke(-16);pw(n,this.ptr,e);var t=rt()[n/4+0],r=qn()[n/8+1];return t===0?void 0:r}finally{Ke(16)}}coSetEnabled(e,t){fw(this.ptr,e,t)}coIsEnabled(e){return mw(this.ptr,e)!==0}coFriction(e){return gw(this.ptr,e)}coRestitution(e){return _w(this.ptr,e)}coDensity(e){return vw(this.ptr,e)}coMass(e){return ww(this.ptr,e)}coVolume(e){return xw(this.ptr,e)}coCollisionGroups(e){return Sw(this.ptr,e)>>>0}coSolverGroups(e){return yw(this.ptr,e)>>>0}coActiveHooks(e){return Ew(this.ptr,e)>>>0}coActiveCollisionTypes(e){return Mw(this.ptr,e)}coActiveEvents(e){return bw(this.ptr,e)>>>0}coContactForceEventThreshold(e){return Tw(this.ptr,e)}coContainsPoint(e,t){return P(t,U),Rw(this.ptr,e,t.ptr)!==0}coCastShape(e,t,r,n,a,s,o,l){P(t,U),P(r,be),P(n,U),P(a,ke),P(s,U);const c=Aw(this.ptr,e,t.ptr,r.ptr,n.ptr,a.ptr,s.ptr,o,l);return c===0?void 0:la.__wrap(c)}coCastCollider(e,t,r,n,a,s){P(t,U),P(n,U);const o=Cw(this.ptr,e,t.ptr,r,n.ptr,a,s);return o===0?void 0:oa.__wrap(o)}coIntersectsShape(e,t,r,n){return P(t,be),P(r,U),P(n,ke),Lw(this.ptr,e,t.ptr,r.ptr,n.ptr)!==0}coContactShape(e,t,r,n,a){P(t,be),P(r,U),P(n,ke);const s=Pw(this.ptr,e,t.ptr,r.ptr,n.ptr,a);return s===0?void 0:an.__wrap(s)}coContactCollider(e,t,r){const n=Dw(this.ptr,e,t,r);return n===0?void 0:an.__wrap(n)}coProjectPoint(e,t,r){P(t,U);const n=Iw(this.ptr,e,t.ptr,r);return ra.__wrap(n)}coIntersectsRay(e,t,r,n){return P(t,U),P(r,U),Uw(this.ptr,e,t.ptr,r.ptr,n)!==0}coCastRay(e,t,r,n,a){return P(t,U),P(r,U),Nw(this.ptr,e,t.ptr,r.ptr,n,a)}coCastRayAndGetNormal(e,t,r,n,a){P(t,U),P(r,U);const s=Ow(this.ptr,e,t.ptr,r.ptr,n,a);return s===0?void 0:na.__wrap(s)}coSetSensor(e,t){Fw(this.ptr,e,t)}coSetRestitution(e,t){zw(this.ptr,e,t)}coSetFriction(e,t){Hw(this.ptr,e,t)}coFrictionCombineRule(e){return Bw(this.ptr,e)>>>0}coSetFrictionCombineRule(e,t){Gw(this.ptr,e,t)}coRestitutionCombineRule(e){return Vw(this.ptr,e)>>>0}coSetRestitutionCombineRule(e,t){kw(this.ptr,e,t)}coSetCollisionGroups(e,t){Ww(this.ptr,e,t)}coSetSolverGroups(e,t){Xw(this.ptr,e,t)}coSetActiveHooks(e,t){jw(this.ptr,e,t)}coSetActiveEvents(e,t){Yw(this.ptr,e,t)}coSetActiveCollisionTypes(e,t){qw(this.ptr,e,t)}coSetShape(e,t){P(t,be),Kw(this.ptr,e,t.ptr)}coSetContactForceEventThreshold(e,t){Zw(this.ptr,e,t)}coSetDensity(e,t){Jw(this.ptr,e,t)}coSetMass(e,t){Qw(this.ptr,e,t)}coSetMassProperties(e,t,r,n,a){P(r,U),P(n,U),P(a,ke),$w(this.ptr,e,t,r.ptr,n.ptr,a.ptr)}constructor(){const e=tx();return ot.__wrap(e)}len(){return rx(this.ptr)>>>0}contains(e){return Xl(this.ptr,e)!==0}createCollider(e,t,r,n,a,s,o,l,c,h,p,u,g,x,v,m,d,E,_,T,A,D,M,V){try{const j=Ke(-16);P(t,be),P(r,U),P(n,ke),P(o,U),P(l,U),P(c,ke),P(V,lt),ix(j,this.ptr,e,t.ptr,r.ptr,n.ptr,a,s,o.ptr,l.ptr,c.ptr,h,p,u,g,x,v,m,d,E,_,T,A,D,M,V.ptr);var S=rt()[j/4+0],R=qn()[j/8+1];return S===0?void 0:R}finally{Ke(16)}}remove(e,t,r,n){P(t,sr),P(r,lt),nx(this.ptr,e,t.ptr,r.ptr,n)}isHandleValid(e){return Xl(this.ptr,e)!==0}forEachColliderHandle(e){try{ax(this.ptr,st(e))}finally{Ze[it++]=void 0}}}class ws{static __wrap(e){const t=Object.create(ws.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();JS(e)}collider1(){return sn(this.ptr)}collider2(){return QS(this.ptr)}total_force(){const e=ql(this.ptr);return U.__wrap(e)}total_force_magnitude(){return $S(this.ptr)}max_force_direction(){const e=ey(this.ptr);return U.__wrap(e)}max_force_magnitude(){return ty(this.ptr)}}class xs{static __wrap(e){const t=Object.create(xs.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();fx(e)}normal(){const e=wx(this.ptr);return U.__wrap(e)}local_n1(){const e=xx(this.ptr);return U.__wrap(e)}local_n2(){const e=Sx(this.ptr);return U.__wrap(e)}subshape1(){return yx(this.ptr)>>>0}subshape2(){return Ex(this.ptr)>>>0}num_contacts(){return Mx(this.ptr)>>>0}contact_local_p1(e){const t=bx(this.ptr,e);return t===0?void 0:U.__wrap(t)}contact_local_p2(e){const t=Tx(this.ptr,e);return t===0?void 0:U.__wrap(t)}contact_dist(e){return Rx(this.ptr,e)}contact_fid1(e){return Ax(this.ptr,e)>>>0}contact_fid2(e){return Cx(this.ptr,e)>>>0}contact_impulse(e){return Lx(this.ptr,e)}contact_tangent_impulse_x(e){return Px(this.ptr,e)}contact_tangent_impulse_y(e){return Dx(this.ptr,e)}num_solver_contacts(){return Ix(this.ptr)>>>0}solver_contact_point(e){const t=Ux(this.ptr,e);return t===0?void 0:U.__wrap(t)}solver_contact_dist(e){return Nx(this.ptr,e)}solver_contact_friction(e){return Ox(this.ptr,e)}solver_contact_restitution(e){return Fx(this.ptr,e)}solver_contact_tangent_velocity(e){const t=zx(this.ptr,e);return U.__wrap(t)}}class Ss{static __wrap(e){const t=Object.create(Ss.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Ny(e)}collider1(){return mx(this.ptr)}collider2(){return gx(this.ptr)}numContactManifolds(){return _x(this.ptr)>>>0}contactManifold(e){const t=vx(this.ptr,e);return t===0?void 0:xs.__wrap(t)}}class Jn{static __wrap(e){const t=Object.create(Jn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();XS(e)}constructor(){const e=jS();return Jn.__wrap(e)}vertices(){const e=YS(this.ptr);return tn(e)}colors(){const e=qS(this.ptr);return tn(e)}render(e,t,r,n,a){P(e,lt),P(t,ot),P(r,ar),P(n,or),P(a,Rr),KS(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr)}}class ys{static __wrap(e){const t=Object.create(ys.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Ey(e)}takeGravity(){const e=My(this.ptr);return e===0?void 0:U.__wrap(e)}takeIntegrationParameters(){const e=by(this.ptr);return e===0?void 0:Wr.__wrap(e)}takeIslandManager(){const e=Ty(this.ptr);return e===0?void 0:sr.__wrap(e)}takeBroadPhase(){const e=Ry(this.ptr);return e===0?void 0:Vr.__wrap(e)}takeNarrowPhase(){const e=Ay(this.ptr);return e===0?void 0:Rr.__wrap(e)}takeBodies(){const e=Cy(this.ptr);return e===0?void 0:lt.__wrap(e)}takeColliders(){const e=Ly(this.ptr);return e===0?void 0:ot.__wrap(e)}takeImpulseJoints(){const e=Py(this.ptr);return e===0?void 0:ar.__wrap(e)}takeMultibodyJoints(){const e=Dy(this.ptr);return e===0?void 0:or.__wrap(e)}}class Qn{static __wrap(e){const t=Object.create(Qn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();ZS(e)}constructor(e){const t=ry(e);return Qn.__wrap(t)}drainCollisionEvents(e){try{iy(this.ptr,st(e))}finally{Ze[it++]=void 0}}drainContactForceEvents(e){try{ny(this.ptr,st(e))}finally{Ze[it++]=void 0}}clear(){ay(this.ptr)}}class kr{static __wrap(e){const t=Object.create(kr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();nv(e)}static spherical(e,t){P(e,U),P(t,U);const r=av(e.ptr,t.ptr);return kr.__wrap(r)}static prismatic(e,t,r,n,a,s){P(e,U),P(t,U),P(r,U);const o=sv(e.ptr,t.ptr,r.ptr,n,a,s);return o===0?void 0:kr.__wrap(o)}static fixed(e,t,r,n){P(e,U),P(t,ke),P(r,U),P(n,ke);const a=ov(e.ptr,t.ptr,r.ptr,n.ptr);return kr.__wrap(a)}static revolute(e,t,r){P(e,U),P(t,U),P(r,U);const n=lv(e.ptr,t.ptr,r.ptr);return n===0?void 0:kr.__wrap(n)}}class ar{static __wrap(e){const t=Object.create(ar.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();P_(e)}jointType(e){return d_(this.ptr,e)>>>0}jointBodyHandle1(e){return p_(this.ptr,e)}jointBodyHandle2(e){return f_(this.ptr,e)}jointFrameX1(e){const t=m_(this.ptr,e);return ke.__wrap(t)}jointFrameX2(e){const t=g_(this.ptr,e);return ke.__wrap(t)}jointAnchor1(e){const t=__(this.ptr,e);return U.__wrap(t)}jointAnchor2(e){const t=v_(this.ptr,e);return U.__wrap(t)}jointSetAnchor1(e,t){P(t,U),w_(this.ptr,e,t.ptr)}jointSetAnchor2(e,t){P(t,U),x_(this.ptr,e,t.ptr)}jointContactsEnabled(e){return S_(this.ptr,e)!==0}jointSetContactsEnabled(e,t){y_(this.ptr,e,t)}jointLimitsEnabled(e,t){return E_(this.ptr,e,t)!==0}jointLimitsMin(e,t){return M_(this.ptr,e,t)}jointLimitsMax(e,t){return b_(this.ptr,e,t)}jointSetLimits(e,t,r,n){T_(this.ptr,e,t,r,n)}jointConfigureMotorModel(e,t,r){R_(this.ptr,e,t,r)}jointConfigureMotorVelocity(e,t,r,n){A_(this.ptr,e,t,r,n)}jointConfigureMotorPosition(e,t,r,n,a){C_(this.ptr,e,t,r,n,a)}jointConfigureMotor(e,t,r,n,a,s){L_(this.ptr,e,t,r,n,a,s)}constructor(){const e=D_();return ar.__wrap(e)}createJoint(e,t,r,n){return P(e,kr),I_(this.ptr,e.ptr,t,r,n)}remove(e,t){U_(this.ptr,e,t)}len(){return N_(this.ptr)>>>0}contains(e){return O_(this.ptr,e)!==0}forEachJointHandle(e){try{F_(this.ptr,st(e))}finally{Ze[it++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{z_(this.ptr,e,st(t))}finally{Ze[it++]=void 0}}}class Wr{static __wrap(e){const t=Object.create(Wr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();H_(e)}constructor(){const e=B_();return Wr.__wrap(e)}get dt(){return ua(this.ptr)}get erp(){return ai(this.ptr)}get allowedLinearError(){return G_(this.ptr)}get predictionDistance(){return V_(this.ptr)}get maxVelocityIterations(){return k_(this.ptr)>>>0}get maxVelocityFrictionIterations(){return W_(this.ptr)>>>0}get maxStabilizationIterations(){return X_(this.ptr)>>>0}get minIslandSize(){return j_(this.ptr)>>>0}get maxCcdSubsteps(){return Y_(this.ptr)>>>0}set dt(e){kl(this.ptr,e)}set erp(e){Wl(this.ptr,e)}set allowedLinearError(e){q_(this.ptr,e)}set predictionDistance(e){K_(this.ptr,e)}set maxVelocityIterations(e){Z_(this.ptr,e)}set maxVelocityFrictionIterations(e){J_(this.ptr,e)}set maxStabilizationIterations(e){Q_(this.ptr,e)}set minIslandSize(e){$_(this.ptr,e)}set maxCcdSubsteps(e){ev(this.ptr,e)}}class sr{static __wrap(e){const t=Object.create(sr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();tv(e)}constructor(){const e=rv();return sr.__wrap(e)}forEachActiveRigidBodyHandle(e){try{iv(this.ptr,st(e))}finally{Ze[it++]=void 0}}}class $n{static __wrap(e){const t=Object.create($n.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Ig(e)}constructor(e){const t=Ug(e);return $n.__wrap(t)}up(){const e=Ng(this.ptr);return U.__wrap(e)}setUp(e){P(e,U),Og(this.ptr,e.ptr)}offset(){return Fg(this.ptr)}setOffset(e){zg(this.ptr,e)}slideEnabled(){return Hg(this.ptr)!==0}setSlideEnabled(e){Bg(this.ptr,e)}autostepMaxHeight(){try{const r=Ke(-16);Gg(r,this.ptr);var e=rt()[r/4+0],t=Gr()[r/4+1];return e===0?void 0:t}finally{Ke(16)}}autostepMinWidth(){try{const r=Ke(-16);Vg(r,this.ptr);var e=rt()[r/4+0],t=Gr()[r/4+1];return e===0?void 0:t}finally{Ke(16)}}autostepIncludesDynamicBodies(){const e=kg(this.ptr);return e===16777215?void 0:e!==0}autostepEnabled(){return Wg(this.ptr)!==0}enableAutostep(e,t,r){Xg(this.ptr,e,t,r)}disableAutostep(){jg(this.ptr)}maxSlopeClimbAngle(){return Yg(this.ptr)}setMaxSlopeClimbAngle(e){qg(this.ptr,e)}minSlopeSlideAngle(){return Kg(this.ptr)}setMinSlopeSlideAngle(e){Zg(this.ptr,e)}snapToGroundDistance(){try{const r=Ke(-16);Jg(r,this.ptr);var e=rt()[r/4+0],t=Gr()[r/4+1];return e===0?void 0:t}finally{Ke(16)}}enableSnapToGround(e){Qg(this.ptr,e)}disableSnapToGround(){$g(this.ptr)}snapToGroundEnabled(){return e_(this.ptr)!==0}computeColliderMovement(e,t,r,n,a,s,o,l,c,h,p){try{P(t,lt),P(r,ot),P(n,nn),P(s,U),t_(this.ptr,e,t.ptr,r.ptr,n.ptr,a,s.ptr,o,!_e(l),_e(l)?0:l,c,!_e(h),_e(h)?0:h,st(p))}finally{Ze[it++]=void 0}}computedMovement(){const e=ca(this.ptr);return U.__wrap(e)}computedGrounded(){return Ms(this.ptr)!==0}numComputedCollisions(){return r_(this.ptr)>>>0}computedCollision(e,t){return P(t,rn),i_(this.ptr,e,t.ptr)!==0}}class or{static __wrap(e){const t=Object.create(or.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();wv(e)}jointType(e){return cv(this.ptr,e)>>>0}jointFrameX1(e){const t=hv(this.ptr,e);return ke.__wrap(t)}jointFrameX2(e){const t=uv(this.ptr,e);return ke.__wrap(t)}jointAnchor1(e){const t=dv(this.ptr,e);return U.__wrap(t)}jointAnchor2(e){const t=pv(this.ptr,e);return U.__wrap(t)}jointContactsEnabled(e){return fv(this.ptr,e)!==0}jointSetContactsEnabled(e,t){mv(this.ptr,e,t)}jointLimitsEnabled(e,t){return gv(this.ptr,e,t)!==0}jointLimitsMin(e,t){return _v(this.ptr,e,t)}jointLimitsMax(e,t){return vv(this.ptr,e,t)}constructor(){const e=xv();return or.__wrap(e)}createJoint(e,t,r,n){return P(e,kr),Sv(this.ptr,e.ptr,t,r,n)}remove(e,t){yv(this.ptr,e,t)}contains(e){return Ev(this.ptr,e)!==0}forEachJointHandle(e){try{Mv(this.ptr,st(e))}finally{Ze[it++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{bv(this.ptr,e,st(t))}finally{Ze[it++]=void 0}}}class Rr{static __wrap(e){const t=Object.create(Rr.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();lx(e)}constructor(){const e=cx();return Rr.__wrap(e)}contacts_with(e,t){hx(this.ptr,e,dt(t))}contact_pair(e,t){const r=ux(this.ptr,e,t);return r===0?void 0:Ss.__wrap(r)}intersections_with(e,t){dx(this.ptr,e,dt(t))}intersection_pair(e,t){return px(this.ptr,e,t)!==0}}class ea{static __wrap(e){const t=Object.create(ea.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();sy(e)}constructor(){const e=oy();return ea.__wrap(e)}step(e,t,r,n,a,s,o,l,c,h){P(e,U),P(t,Wr),P(r,sr),P(n,Vr),P(a,Rr),P(s,lt),P(o,ot),P(l,ar),P(c,or),P(h,Hi),ly(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,s.ptr,o.ptr,l.ptr,c.ptr,h.ptr)}stepWithEvents(e,t,r,n,a,s,o,l,c,h,p,u,g,x){P(e,U),P(t,Wr),P(r,sr),P(n,Vr),P(a,Rr),P(s,lt),P(o,ot),P(l,ar),P(c,or),P(h,Hi),P(p,Qn),cy(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,s.ptr,o.ptr,l.ptr,c.ptr,h.ptr,p.ptr,dt(u),dt(g),dt(x))}}class ta{static __wrap(e){const t=Object.create(ta.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Bx(e)}colliderHandle(){return Gx(this.ptr)}point(){const e=ca(this.ptr);return U.__wrap(e)}isInside(){return Ms(this.ptr)!==0}featureType(){return Vx(this.ptr)>>>0}featureId(){try{const r=Ke(-16);kx(r,this.ptr);var e=rt()[r/4+0],t=rt()[r/4+1];return e===0?void 0:t>>>0}finally{Ke(16)}}}class ra{static __wrap(e){const t=Object.create(ra.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Hx(e)}point(){const e=ca(this.ptr);return U.__wrap(e)}isInside(){return Ms(this.ptr)!==0}}class nn{static __wrap(e){const t=Object.create(nn.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();hy(e)}constructor(){const e=uy();return nn.__wrap(e)}update(e,t){P(e,lt),P(t,ot),dy(this.ptr,e.ptr,t.ptr)}castRay(e,t,r,n,a,s,o,l,c,h,p){try{P(e,lt),P(t,ot),P(r,U),P(n,U);const u=py(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,s,o,!_e(l),_e(l)?0:l,!_e(c),_e(c)?0:c,!_e(h),_e(h)?0:h,st(p));return u===0?void 0:Es.__wrap(u)}finally{Ze[it++]=void 0}}castRayAndGetNormal(e,t,r,n,a,s,o,l,c,h,p){try{P(e,lt),P(t,ot),P(r,U),P(n,U);const u=fy(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,s,o,!_e(l),_e(l)?0:l,!_e(c),_e(c)?0:c,!_e(h),_e(h)?0:h,st(p));return u===0?void 0:ia.__wrap(u)}finally{Ze[it++]=void 0}}intersectionsWithRay(e,t,r,n,a,s,o,l,c,h,p,u){try{P(e,lt),P(t,ot),P(r,U),P(n,U),my(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,s,st(o),l,!_e(c),_e(c)?0:c,!_e(h),_e(h)?0:h,!_e(p),_e(p)?0:p,st(u))}finally{Ze[it++]=void 0,Ze[it++]=void 0}}intersectionWithShape(e,t,r,n,a,s,o,l,c,h){try{const g=Ke(-16);P(e,lt),P(t,ot),P(r,U),P(n,ke),P(a,be),gy(g,this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,s,!_e(o),_e(o)?0:o,!_e(l),_e(l)?0:l,!_e(c),_e(c)?0:c,st(h));var p=rt()[g/4+0],u=qn()[g/8+1];return p===0?void 0:u}finally{Ke(16),Ze[it++]=void 0}}projectPoint(e,t,r,n,a,s,o,l,c){try{P(e,lt),P(t,ot),P(r,U);const h=_y(this.ptr,e.ptr,t.ptr,r.ptr,n,a,!_e(s),_e(s)?0:s,!_e(o),_e(o)?0:o,!_e(l),_e(l)?0:l,st(c));return h===0?void 0:ta.__wrap(h)}finally{Ze[it++]=void 0}}projectPointAndGetFeature(e,t,r,n,a,s,o,l){try{P(e,lt),P(t,ot),P(r,U);const c=vy(this.ptr,e.ptr,t.ptr,r.ptr,n,!_e(a),_e(a)?0:a,!_e(s),_e(s)?0:s,!_e(o),_e(o)?0:o,st(l));return c===0?void 0:ta.__wrap(c)}finally{Ze[it++]=void 0}}intersectionsWithPoint(e,t,r,n,a,s,o,l,c){try{P(e,lt),P(t,ot),P(r,U),wy(this.ptr,e.ptr,t.ptr,r.ptr,st(n),a,!_e(s),_e(s)?0:s,!_e(o),_e(o)?0:o,!_e(l),_e(l)?0:l,st(c))}finally{Ze[it++]=void 0,Ze[it++]=void 0}}castShape(e,t,r,n,a,s,o,l,c,h,p,u,g){try{P(e,lt),P(t,ot),P(r,U),P(n,ke),P(a,U),P(s,be);const x=xy(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,s.ptr,o,l,c,!_e(h),_e(h)?0:h,!_e(p),_e(p)?0:p,!_e(u),_e(u)?0:u,st(g));return x===0?void 0:oa.__wrap(x)}finally{Ze[it++]=void 0}}intersectionsWithShape(e,t,r,n,a,s,o,l,c,h,p){try{P(e,lt),P(t,ot),P(r,U),P(n,ke),P(a,be),Sy(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,st(s),o,!_e(l),_e(l)?0:l,!_e(c),_e(c)?0:c,!_e(h),_e(h)?0:h,st(p))}finally{Ze[it++]=void 0,Ze[it++]=void 0}}collidersWithAabbIntersectingAabb(e,t,r){try{P(e,U),P(t,U),yy(this.ptr,e.ptr,t.ptr,st(r))}finally{Ze[it++]=void 0}}}class ia{static __wrap(e){const t=Object.create(ia.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Oy(e)}colliderHandle(){return sn(this.ptr)}normal(){const e=Yx(this.ptr);return U.__wrap(e)}toi(){return qx(this.ptr)}featureType(){return Kx(this.ptr)>>>0}featureId(){try{const r=Ke(-16);Zx(r,this.ptr);var e=rt()[r/4+0],t=rt()[r/4+1];return e===0?void 0:t>>>0}finally{Ke(16)}}}class Es{static __wrap(e){const t=Object.create(Es.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Jx(e)}colliderHandle(){return sn(this.ptr)}toi(){return ai(this.ptr)}}class na{static __wrap(e){const t=Object.create(na.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Wx(e)}normal(){const e=ha(this.ptr);return U.__wrap(e)}toi(){return ai(this.ptr)}featureType(){return Xx(this.ptr)>>>0}featureId(){try{const r=Ke(-16);jx(r,this.ptr);var e=rt()[r/4+0],t=rt()[r/4+1];return e===0?void 0:t>>>0}finally{Ke(16)}}}class lt{static __wrap(e){const t=Object.create(lt.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();U0(e)}rbTranslation(e){const t=Tv(this.ptr,e);return U.__wrap(t)}rbRotation(e){const t=Rv(this.ptr,e);return ke.__wrap(t)}rbSleep(e){Av(this.ptr,e)}rbIsSleeping(e){return Cv(this.ptr,e)!==0}rbIsMoving(e){return Lv(this.ptr,e)!==0}rbNextTranslation(e){const t=Pv(this.ptr,e);return U.__wrap(t)}rbNextRotation(e){const t=Dv(this.ptr,e);return ke.__wrap(t)}rbSetTranslation(e,t,r,n,a){Iv(this.ptr,e,t,r,n,a)}rbSetRotation(e,t,r,n,a,s){Uv(this.ptr,e,t,r,n,a,s)}rbSetLinvel(e,t,r){P(t,U),Nv(this.ptr,e,t.ptr,r)}rbSetAngvel(e,t,r){P(t,U),Ov(this.ptr,e,t.ptr,r)}rbSetNextKinematicTranslation(e,t,r,n){Fv(this.ptr,e,t,r,n)}rbSetNextKinematicRotation(e,t,r,n,a){zv(this.ptr,e,t,r,n,a)}rbRecomputeMassPropertiesFromColliders(e,t){P(t,ot),Hv(this.ptr,e,t.ptr)}rbSetAdditionalMass(e,t,r){Bv(this.ptr,e,t,r)}rbSetAdditionalMassProperties(e,t,r,n,a,s){P(r,U),P(n,U),P(a,ke),Gv(this.ptr,e,t,r.ptr,n.ptr,a.ptr,s)}rbLinvel(e){const t=Vv(this.ptr,e);return U.__wrap(t)}rbAngvel(e){const t=kv(this.ptr,e);return U.__wrap(t)}rbLockTranslations(e,t,r){Wv(this.ptr,e,t,r)}rbSetEnabledTranslations(e,t,r,n,a){Xv(this.ptr,e,t,r,n,a)}rbLockRotations(e,t,r){jv(this.ptr,e,t,r)}rbSetEnabledRotations(e,t,r,n,a){Yv(this.ptr,e,t,r,n,a)}rbDominanceGroup(e){return qv(this.ptr,e)}rbSetDominanceGroup(e,t){Kv(this.ptr,e,t)}rbEnableCcd(e,t){Zv(this.ptr,e,t)}rbMass(e){return Jv(this.ptr,e)}rbInvMass(e){return Qv(this.ptr,e)}rbEffectiveInvMass(e){const t=$v(this.ptr,e);return U.__wrap(t)}rbLocalCom(e){const t=e0(this.ptr,e);return U.__wrap(t)}rbWorldCom(e){const t=t0(this.ptr,e);return U.__wrap(t)}rbInvPrincipalInertiaSqrt(e){const t=r0(this.ptr,e);return U.__wrap(t)}rbPrincipalInertiaLocalFrame(e){const t=i0(this.ptr,e);return ke.__wrap(t)}rbPrincipalInertia(e){const t=n0(this.ptr,e);return U.__wrap(t)}rbEffectiveWorldInvInertiaSqrt(e){const t=a0(this.ptr,e);return aa.__wrap(t)}rbEffectiveAngularInertia(e){const t=s0(this.ptr,e);return aa.__wrap(t)}rbWakeUp(e){o0(this.ptr,e)}rbIsCcdEnabled(e){return l0(this.ptr,e)!==0}rbNumColliders(e){return c0(this.ptr,e)>>>0}rbCollider(e,t){return h0(this.ptr,e,t)}rbBodyType(e){return u0(this.ptr,e)>>>0}rbSetBodyType(e,t,r){d0(this.ptr,e,t,r)}rbIsFixed(e){return p0(this.ptr,e)!==0}rbIsKinematic(e){return f0(this.ptr,e)!==0}rbIsDynamic(e){return m0(this.ptr,e)!==0}rbLinearDamping(e){return g0(this.ptr,e)}rbAngularDamping(e){return _0(this.ptr,e)}rbSetLinearDamping(e,t){v0(this.ptr,e,t)}rbSetAngularDamping(e,t){w0(this.ptr,e,t)}rbSetEnabled(e,t){x0(this.ptr,e,t)}rbIsEnabled(e){return S0(this.ptr,e)!==0}rbGravityScale(e){return y0(this.ptr,e)}rbSetGravityScale(e,t,r){E0(this.ptr,e,t,r)}rbResetForces(e,t){M0(this.ptr,e,t)}rbResetTorques(e,t){b0(this.ptr,e,t)}rbAddForce(e,t,r){P(t,U),T0(this.ptr,e,t.ptr,r)}rbApplyImpulse(e,t,r){P(t,U),R0(this.ptr,e,t.ptr,r)}rbAddTorque(e,t,r){P(t,U),A0(this.ptr,e,t.ptr,r)}rbApplyTorqueImpulse(e,t,r){P(t,U),C0(this.ptr,e,t.ptr,r)}rbAddForceAtPoint(e,t,r,n){P(t,U),P(r,U),L0(this.ptr,e,t.ptr,r.ptr,n)}rbApplyImpulseAtPoint(e,t,r,n){P(t,U),P(r,U),P0(this.ptr,e,t.ptr,r.ptr,n)}rbUserData(e){return D0(this.ptr,e)>>>0}rbSetUserData(e,t){I0(this.ptr,e,t)}constructor(){const e=N0();return lt.__wrap(e)}createRigidBody(e,t,r,n,a,s,o,l,c,h,p,u,g,x,v,m,d,E,_,T,A,D,M,V){return P(t,U),P(r,ke),P(o,U),P(l,U),P(c,U),P(h,U),P(p,ke),O0(this.ptr,e,t.ptr,r.ptr,n,a,s,o.ptr,l.ptr,c.ptr,h.ptr,p.ptr,u,g,x,v,m,d,E,_,T,A,D,M,V)}remove(e,t,r,n,a){P(t,sr),P(r,ot),P(n,ar),P(a,or),F0(this.ptr,e,t.ptr,r.ptr,n.ptr,a.ptr)}len(){return z0(this.ptr)>>>0}contains(e){return H0(this.ptr,e)!==0}forEachRigidBodyHandle(e){try{B0(this.ptr,st(e))}finally{Ze[it++]=void 0}}propagateModifiedBodyPositionsToColliders(e){P(e,ot),G0(this.ptr,e.ptr)}}class ke{static __wrap(e){const t=Object.create(ke.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Fy(e)}constructor(e,t,r,n){const a=DS(e,t,r,n);return ke.__wrap(a)}static identity(){const e=IS();return ke.__wrap(e)}get x(){return ua(this.ptr)}get y(){return Yl(this.ptr)}get z(){return ai(this.ptr)}get w(){return US(this.ptr)}}class aa{static __wrap(e){const t=Object.create(aa.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Hy(e)}elements(){const e=WS(this.ptr);return tn(e)}}class sa{static __wrap(e){const t=Object.create(sa.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Gy(e)}constructor(){const e=By();return sa.__wrap(e)}serializeAll(e,t,r,n,a,s,o,l,c){P(e,U),P(t,Wr),P(r,sr),P(n,Vr),P(a,Rr),P(s,lt),P(o,ot),P(l,ar),P(c,or);const h=Iy(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,s.ptr,o.ptr,l.ptr,c.ptr);return tn(h)}deserializeAll(e){const t=Uy(this.ptr,dt(e));return t===0?void 0:ys.__wrap(t)}}class be{static __wrap(e){const t=Object.create(be.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();Qx(e)}static cuboid(e,t,r){const n=$x(e,t,r);return be.__wrap(n)}static roundCuboid(e,t,r,n){const a=eS(e,t,r,n);return be.__wrap(a)}static ball(e){const t=tS(e);return be.__wrap(t)}static halfspace(e){P(e,U);const t=rS(e.ptr);return be.__wrap(t)}static capsule(e,t){const r=iS(e,t);return be.__wrap(r)}static cylinder(e,t){const r=nS(e,t);return be.__wrap(r)}static roundCylinder(e,t,r){const n=aS(e,t,r);return be.__wrap(n)}static cone(e,t){const r=sS(e,t);return be.__wrap(r)}static roundCone(e,t,r){const n=oS(e,t,r);return be.__wrap(n)}static polyline(e,t){const r=ni(e,er),n=kt,a=Kn(t,er),s=lS(r,n,a,kt);return be.__wrap(s)}static trimesh(e,t){const r=ni(e,er),n=kt,a=Kn(t,er),s=cS(r,n,a,kt);return be.__wrap(s)}static heightfield(e,t,r,n){const a=ni(r,er),s=kt;P(n,U);const o=hS(e,t,a,s,n.ptr);return be.__wrap(o)}static segment(e,t){P(e,U),P(t,U);const r=uS(e.ptr,t.ptr);return be.__wrap(r)}static triangle(e,t,r){P(e,U),P(t,U),P(r,U);const n=dS(e.ptr,t.ptr,r.ptr);return be.__wrap(n)}static roundTriangle(e,t,r,n){P(e,U),P(t,U),P(r,U);const a=pS(e.ptr,t.ptr,r.ptr,n);return be.__wrap(a)}static convexHull(e){const t=ni(e,er),r=fS(t,kt);return r===0?void 0:be.__wrap(r)}static roundConvexHull(e,t){const r=ni(e,er),n=mS(r,kt,t);return n===0?void 0:be.__wrap(n)}static convexMesh(e,t){const r=ni(e,er),n=kt,a=Kn(t,er),s=gS(r,n,a,kt);return s===0?void 0:be.__wrap(s)}static roundConvexMesh(e,t,r){const n=ni(e,er),a=kt,s=Kn(t,er),o=_S(n,a,s,kt,r);return o===0?void 0:be.__wrap(o)}castShape(e,t,r,n,a,s,o,l,c){P(e,U),P(t,ke),P(r,U),P(n,be),P(a,U),P(s,ke),P(o,U);const h=vS(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,s.ptr,o.ptr,l,c);return h===0?void 0:la.__wrap(h)}intersectsShape(e,t,r,n,a){return P(e,U),P(t,ke),P(r,be),P(n,U),P(a,ke),wS(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr)!==0}contactShape(e,t,r,n,a,s){P(e,U),P(t,ke),P(r,be),P(n,U),P(a,ke);const o=xS(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a.ptr,s);return o===0?void 0:an.__wrap(o)}containsPoint(e,t,r){return P(e,U),P(t,ke),P(r,U),SS(this.ptr,e.ptr,t.ptr,r.ptr)!==0}projectPoint(e,t,r,n){P(e,U),P(t,ke),P(r,U);const a=yS(this.ptr,e.ptr,t.ptr,r.ptr,n);return ra.__wrap(a)}intersectsRay(e,t,r,n,a){return P(e,U),P(t,ke),P(r,U),P(n,U),ES(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a)!==0}castRay(e,t,r,n,a,s){return P(e,U),P(t,ke),P(r,U),P(n,U),MS(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,s)}castRayAndGetNormal(e,t,r,n,a,s){P(e,U),P(t,ke),P(r,U),P(n,U);const o=bS(this.ptr,e.ptr,t.ptr,r.ptr,n.ptr,a,s);return o===0?void 0:na.__wrap(o)}}class oa{static __wrap(e){const t=Object.create(oa.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();LS(e)}colliderHandle(){return sn(this.ptr)}toi(){return ai(this.ptr)}witness1(){const e=ha(this.ptr);return U.__wrap(e)}witness2(){const e=jl(this.ptr);return U.__wrap(e)}normal1(){const e=bs(this.ptr);return U.__wrap(e)}normal2(){const e=PS(this.ptr);return U.__wrap(e)}}class an{static __wrap(e){const t=Object.create(an.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();sx(e)}distance(){return ox(this.ptr)}point1(){const e=ca(this.ptr);return U.__wrap(e)}point2(){const e=ha(this.ptr);return U.__wrap(e)}normal1(){const e=jl(this.ptr);return U.__wrap(e)}normal2(){const e=bs(this.ptr);return U.__wrap(e)}}class la{static __wrap(e){const t=Object.create(la.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();TS(e)}toi(){return ua(this.ptr)}witness1(){const e=RS(this.ptr);return U.__wrap(e)}witness2(){const e=ql(this.ptr);return U.__wrap(e)}normal1(){const e=AS(this.ptr);return U.__wrap(e)}normal2(){const e=CS(this.ptr);return U.__wrap(e)}}class U{static __wrap(e){const t=Object.create(U.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();zy(e)}static zero(){const e=NS();return U.__wrap(e)}constructor(e,t,r){const n=OS(e,t,r);return U.__wrap(n)}get x(){return ua(this.ptr)}set x(e){kl(this.ptr,e)}get y(){return Yl(this.ptr)}set y(e){FS(this.ptr,e)}get z(){return ai(this.ptr)}set z(e){Wl(this.ptr,e)}xyz(){const e=zS(this.ptr);return U.__wrap(e)}yxz(){const e=HS(this.ptr);return U.__wrap(e)}zxy(){const e=BS(this.ptr);return U.__wrap(e)}xzy(){const e=GS(this.ptr);return U.__wrap(e)}yzx(){const e=VS(this.ptr);return U.__wrap(e)}zyx(){const e=kS(this.ptr);return U.__wrap(e)}}function ug(i){tn(i)}function dg(i){return dt(i)}function pg(i,e){const t=$e(e),r=typeof t=="number"?t:void 0;qn()[i/8+1]=_e(r)?0:r,rt()[i/4+0]=!_e(r)}function fg(i){const e=$e(i);return typeof e=="boolean"?e?1:0:2}function mg(i){return typeof $e(i)=="function"}function gg(i){const e=ia.__wrap(i);return dt(e)}function _g(i){const e=ws.__wrap(i);return dt(e)}function vg(){return vs(function(i,e,t){const r=$e(i).call($e(e),$e(t));return dt(r)},arguments)}function wg(){return vs(function(i,e,t,r){const n=$e(i).call($e(e),$e(t),$e(r));return dt(n)},arguments)}function xg(){return vs(function(i,e,t,r,n){const a=$e(i).call($e(e),$e(t),$e(r),$e(n));return dt(a)},arguments)}function Sg(i,e,t,r){const n=$e(i).bind($e(e),$e(t),$e(r));return dt(n)}function yg(i){const e=$e(i).buffer;return dt(e)}function Eg(i,e,t){const r=new Uint8Array($e(i),e>>>0,t>>>0);return dt(r)}function Mg(i){const e=new Uint8Array($e(i));return dt(e)}function bg(i,e,t){$e(i).set($e(e),t>>>0)}function Tg(i){return $e(i).length}function Rg(i,e,t){const r=new Float32Array($e(i),e>>>0,t>>>0);return dt(r)}function Ag(i,e,t){$e(i).set($e(e),t>>>0)}function Cg(i){return $e(i).length}function Lg(i){const e=new Float32Array(i>>>0);return dt(e)}function Pg(i,e){throw new Error(cg(i,e))}function Dg(){return dt(Bi)}URL=globalThis.URL;const f=await ag({"./rapier_wasm3d_bg.js":{__wbindgen_object_drop_ref:ug,__wbindgen_number_new:dg,__wbindgen_number_get:pg,__wbindgen_boolean_get:fg,__wbindgen_is_function:mg,__wbg_rawraycolliderintersection_new:gg,__wbg_rawcontactforceevent_new:_g,__wbg_call_168da88779e35f61:vg,__wbg_call_3999bee59e9f7719:wg,__wbg_call_e1f72c051cdab859:xg,__wbg_bind_10dfe70e95d2a480:Sg,__wbg_buffer_3f3d764d4747d564:yg,__wbg_newwithbyteoffsetandlength_d9aa266703cb98be:Eg,__wbg_new_8c3f0052272a457a:Mg,__wbg_set_83db9690f9353e79:bg,__wbg_length_9e1ae1900cb0fbd5:Tg,__wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4:Rg,__wbg_set_0e0314cf6675c1b9:Ag,__wbg_length_9a2deed95d22668d:Cg,__wbg_newwithlength_a7168e4a1e8f5e12:Lg,__wbindgen_throw:Pg,__wbindgen_memory:Dg}},ng),Bi=f.memory;f.version;const Ig=f.__wbg_rawkinematiccharactercontroller_free,Ug=f.rawkinematiccharactercontroller_new,Ng=f.rawkinematiccharactercontroller_up,Og=f.rawkinematiccharactercontroller_setUp,Fg=f.rawkinematiccharactercontroller_offset,zg=f.rawkinematiccharactercontroller_setOffset,Hg=f.rawkinematiccharactercontroller_slideEnabled,Bg=f.rawkinematiccharactercontroller_setSlideEnabled,Gg=f.rawkinematiccharactercontroller_autostepMaxHeight,Vg=f.rawkinematiccharactercontroller_autostepMinWidth,kg=f.rawkinematiccharactercontroller_autostepIncludesDynamicBodies,Wg=f.rawkinematiccharactercontroller_autostepEnabled,Xg=f.rawkinematiccharactercontroller_enableAutostep,jg=f.rawkinematiccharactercontroller_disableAutostep,Yg=f.rawkinematiccharactercontroller_maxSlopeClimbAngle,qg=f.rawkinematiccharactercontroller_setMaxSlopeClimbAngle,Kg=f.rawkinematiccharactercontroller_minSlopeSlideAngle,Zg=f.rawkinematiccharactercontroller_setMinSlopeSlideAngle,Jg=f.rawkinematiccharactercontroller_snapToGroundDistance,Qg=f.rawkinematiccharactercontroller_enableSnapToGround,$g=f.rawkinematiccharactercontroller_disableSnapToGround,e_=f.rawkinematiccharactercontroller_snapToGroundEnabled,t_=f.rawkinematiccharactercontroller_computeColliderMovement,ca=f.rawkinematiccharactercontroller_computedMovement,Ms=f.rawkinematiccharactercontroller_computedGrounded,r_=f.rawkinematiccharactercontroller_numComputedCollisions,i_=f.rawkinematiccharactercontroller_computedCollision,n_=f.__wbg_rawcharactercollision_free,a_=f.rawcharactercollision_new,sn=f.rawcharactercollision_handle,s_=f.rawcharactercollision_translationApplied,o_=f.rawcharactercollision_translationRemaining,ai=f.rawcharactercollision_toi,ha=f.rawcharactercollision_worldWitness1,l_=f.rawcharactercollision_worldWitness2,bs=f.rawcharactercollision_worldNormal1,c_=f.rawcharactercollision_worldNormal2,h_=f.__wbg_rawccdsolver_free,u_=f.rawccdsolver_new,d_=f.rawimpulsejointset_jointType,p_=f.rawimpulsejointset_jointBodyHandle1,f_=f.rawimpulsejointset_jointBodyHandle2,m_=f.rawimpulsejointset_jointFrameX1,g_=f.rawimpulsejointset_jointFrameX2,__=f.rawimpulsejointset_jointAnchor1,v_=f.rawimpulsejointset_jointAnchor2,w_=f.rawimpulsejointset_jointSetAnchor1,x_=f.rawimpulsejointset_jointSetAnchor2,S_=f.rawimpulsejointset_jointContactsEnabled,y_=f.rawimpulsejointset_jointSetContactsEnabled,E_=f.rawimpulsejointset_jointLimitsEnabled,M_=f.rawimpulsejointset_jointLimitsMin,b_=f.rawimpulsejointset_jointLimitsMax,T_=f.rawimpulsejointset_jointSetLimits,R_=f.rawimpulsejointset_jointConfigureMotorModel,A_=f.rawimpulsejointset_jointConfigureMotorVelocity,C_=f.rawimpulsejointset_jointConfigureMotorPosition,L_=f.rawimpulsejointset_jointConfigureMotor,P_=f.__wbg_rawimpulsejointset_free,D_=f.rawimpulsejointset_new,I_=f.rawimpulsejointset_createJoint,U_=f.rawimpulsejointset_remove,N_=f.rawimpulsejointset_len,O_=f.rawimpulsejointset_contains,F_=f.rawimpulsejointset_forEachJointHandle,z_=f.rawimpulsejointset_forEachJointAttachedToRigidBody,H_=f.__wbg_rawintegrationparameters_free,B_=f.rawintegrationparameters_new,ua=f.rawintegrationparameters_dt,G_=f.rawintegrationparameters_allowedLinearError,V_=f.rawintegrationparameters_predictionDistance,k_=f.rawintegrationparameters_maxVelocityIterations,W_=f.rawintegrationparameters_maxVelocityFrictionIterations,X_=f.rawintegrationparameters_maxStabilizationIterations,j_=f.rawintegrationparameters_minIslandSize,Y_=f.rawintegrationparameters_maxCcdSubsteps,kl=f.rawintegrationparameters_set_dt,Wl=f.rawintegrationparameters_set_erp,q_=f.rawintegrationparameters_set_allowedLinearError,K_=f.rawintegrationparameters_set_predictionDistance,Z_=f.rawintegrationparameters_set_maxVelocityIterations,J_=f.rawintegrationparameters_set_maxVelocityFrictionIterations,Q_=f.rawintegrationparameters_set_maxStabilizationIterations,$_=f.rawintegrationparameters_set_minIslandSize,ev=f.rawintegrationparameters_set_maxCcdSubsteps,tv=f.__wbg_rawislandmanager_free,rv=f.rawislandmanager_new,iv=f.rawislandmanager_forEachActiveRigidBodyHandle,nv=f.__wbg_rawgenericjoint_free,av=f.rawgenericjoint_spherical,sv=f.rawgenericjoint_prismatic,ov=f.rawgenericjoint_fixed,lv=f.rawgenericjoint_revolute,cv=f.rawmultibodyjointset_jointType,hv=f.rawmultibodyjointset_jointFrameX1,uv=f.rawmultibodyjointset_jointFrameX2,dv=f.rawmultibodyjointset_jointAnchor1,pv=f.rawmultibodyjointset_jointAnchor2,fv=f.rawmultibodyjointset_jointContactsEnabled,mv=f.rawmultibodyjointset_jointSetContactsEnabled,gv=f.rawmultibodyjointset_jointLimitsEnabled,_v=f.rawmultibodyjointset_jointLimitsMin,vv=f.rawmultibodyjointset_jointLimitsMax,wv=f.__wbg_rawmultibodyjointset_free,xv=f.rawmultibodyjointset_new,Sv=f.rawmultibodyjointset_createJoint,yv=f.rawmultibodyjointset_remove,Ev=f.rawmultibodyjointset_contains,Mv=f.rawmultibodyjointset_forEachJointHandle,bv=f.rawmultibodyjointset_forEachJointAttachedToRigidBody,Tv=f.rawrigidbodyset_rbTranslation,Rv=f.rawrigidbodyset_rbRotation,Av=f.rawrigidbodyset_rbSleep,Cv=f.rawrigidbodyset_rbIsSleeping,Lv=f.rawrigidbodyset_rbIsMoving,Pv=f.rawrigidbodyset_rbNextTranslation,Dv=f.rawrigidbodyset_rbNextRotation,Iv=f.rawrigidbodyset_rbSetTranslation,Uv=f.rawrigidbodyset_rbSetRotation,Nv=f.rawrigidbodyset_rbSetLinvel,Ov=f.rawrigidbodyset_rbSetAngvel,Fv=f.rawrigidbodyset_rbSetNextKinematicTranslation,zv=f.rawrigidbodyset_rbSetNextKinematicRotation,Hv=f.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders,Bv=f.rawrigidbodyset_rbSetAdditionalMass,Gv=f.rawrigidbodyset_rbSetAdditionalMassProperties,Vv=f.rawrigidbodyset_rbLinvel,kv=f.rawrigidbodyset_rbAngvel,Wv=f.rawrigidbodyset_rbLockTranslations,Xv=f.rawrigidbodyset_rbSetEnabledTranslations,jv=f.rawrigidbodyset_rbLockRotations,Yv=f.rawrigidbodyset_rbSetEnabledRotations,qv=f.rawrigidbodyset_rbDominanceGroup,Kv=f.rawrigidbodyset_rbSetDominanceGroup,Zv=f.rawrigidbodyset_rbEnableCcd,Jv=f.rawrigidbodyset_rbMass,Qv=f.rawrigidbodyset_rbInvMass,$v=f.rawrigidbodyset_rbEffectiveInvMass,e0=f.rawrigidbodyset_rbLocalCom,t0=f.rawrigidbodyset_rbWorldCom,r0=f.rawrigidbodyset_rbInvPrincipalInertiaSqrt,i0=f.rawrigidbodyset_rbPrincipalInertiaLocalFrame,n0=f.rawrigidbodyset_rbPrincipalInertia,a0=f.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt,s0=f.rawrigidbodyset_rbEffectiveAngularInertia,o0=f.rawrigidbodyset_rbWakeUp,l0=f.rawrigidbodyset_rbIsCcdEnabled,c0=f.rawrigidbodyset_rbNumColliders,h0=f.rawrigidbodyset_rbCollider,u0=f.rawrigidbodyset_rbBodyType,d0=f.rawrigidbodyset_rbSetBodyType,p0=f.rawrigidbodyset_rbIsFixed,f0=f.rawrigidbodyset_rbIsKinematic,m0=f.rawrigidbodyset_rbIsDynamic,g0=f.rawrigidbodyset_rbLinearDamping,_0=f.rawrigidbodyset_rbAngularDamping,v0=f.rawrigidbodyset_rbSetLinearDamping,w0=f.rawrigidbodyset_rbSetAngularDamping,x0=f.rawrigidbodyset_rbSetEnabled,S0=f.rawrigidbodyset_rbIsEnabled,y0=f.rawrigidbodyset_rbGravityScale,E0=f.rawrigidbodyset_rbSetGravityScale,M0=f.rawrigidbodyset_rbResetForces,b0=f.rawrigidbodyset_rbResetTorques,T0=f.rawrigidbodyset_rbAddForce,R0=f.rawrigidbodyset_rbApplyImpulse,A0=f.rawrigidbodyset_rbAddTorque,C0=f.rawrigidbodyset_rbApplyTorqueImpulse,L0=f.rawrigidbodyset_rbAddForceAtPoint,P0=f.rawrigidbodyset_rbApplyImpulseAtPoint,D0=f.rawrigidbodyset_rbUserData,I0=f.rawrigidbodyset_rbSetUserData,U0=f.__wbg_rawrigidbodyset_free,N0=f.rawrigidbodyset_new,O0=f.rawrigidbodyset_createRigidBody,F0=f.rawrigidbodyset_remove,z0=f.rawrigidbodyset_len,H0=f.rawrigidbodyset_contains,B0=f.rawrigidbodyset_forEachRigidBodyHandle,G0=f.rawrigidbodyset_propagateModifiedBodyPositionsToColliders,V0=f.__wbg_rawbroadphase_free,k0=f.rawbroadphase_new,W0=f.rawcolliderset_coTranslation,X0=f.rawcolliderset_coRotation,j0=f.rawcolliderset_coSetTranslation,Y0=f.rawcolliderset_coSetTranslationWrtParent,q0=f.rawcolliderset_coSetRotation,K0=f.rawcolliderset_coSetRotationWrtParent,Z0=f.rawcolliderset_coIsSensor,J0=f.rawcolliderset_coShapeType,Q0=f.rawcolliderset_coHalfspaceNormal,$0=f.rawcolliderset_coHalfExtents,ew=f.rawcolliderset_coSetHalfExtents,tw=f.rawcolliderset_coRadius,rw=f.rawcolliderset_coSetRadius,iw=f.rawcolliderset_coHalfHeight,nw=f.rawcolliderset_coSetHalfHeight,aw=f.rawcolliderset_coRoundRadius,sw=f.rawcolliderset_coSetRoundRadius,ow=f.rawcolliderset_coVertices,lw=f.rawcolliderset_coIndices,cw=f.rawcolliderset_coHeightfieldHeights,hw=f.rawcolliderset_coHeightfieldScale,uw=f.rawcolliderset_coHeightfieldNRows,dw=f.rawcolliderset_coHeightfieldNCols,pw=f.rawcolliderset_coParent,fw=f.rawcolliderset_coSetEnabled,mw=f.rawcolliderset_coIsEnabled,gw=f.rawcolliderset_coFriction,_w=f.rawcolliderset_coRestitution,vw=f.rawcolliderset_coDensity,ww=f.rawcolliderset_coMass,xw=f.rawcolliderset_coVolume,Sw=f.rawcolliderset_coCollisionGroups,yw=f.rawcolliderset_coSolverGroups,Ew=f.rawcolliderset_coActiveHooks,Mw=f.rawcolliderset_coActiveCollisionTypes,bw=f.rawcolliderset_coActiveEvents,Tw=f.rawcolliderset_coContactForceEventThreshold,Rw=f.rawcolliderset_coContainsPoint,Aw=f.rawcolliderset_coCastShape,Cw=f.rawcolliderset_coCastCollider,Lw=f.rawcolliderset_coIntersectsShape,Pw=f.rawcolliderset_coContactShape,Dw=f.rawcolliderset_coContactCollider,Iw=f.rawcolliderset_coProjectPoint,Uw=f.rawcolliderset_coIntersectsRay,Nw=f.rawcolliderset_coCastRay,Ow=f.rawcolliderset_coCastRayAndGetNormal,Fw=f.rawcolliderset_coSetSensor,zw=f.rawcolliderset_coSetRestitution,Hw=f.rawcolliderset_coSetFriction,Bw=f.rawcolliderset_coFrictionCombineRule,Gw=f.rawcolliderset_coSetFrictionCombineRule,Vw=f.rawcolliderset_coRestitutionCombineRule,kw=f.rawcolliderset_coSetRestitutionCombineRule,Ww=f.rawcolliderset_coSetCollisionGroups,Xw=f.rawcolliderset_coSetSolverGroups,jw=f.rawcolliderset_coSetActiveHooks,Yw=f.rawcolliderset_coSetActiveEvents,qw=f.rawcolliderset_coSetActiveCollisionTypes,Kw=f.rawcolliderset_coSetShape,Zw=f.rawcolliderset_coSetContactForceEventThreshold,Jw=f.rawcolliderset_coSetDensity,Qw=f.rawcolliderset_coSetMass,$w=f.rawcolliderset_coSetMassProperties,ex=f.__wbg_rawcolliderset_free,tx=f.rawcolliderset_new,rx=f.rawcolliderset_len,Xl=f.rawcolliderset_contains,ix=f.rawcolliderset_createCollider,nx=f.rawcolliderset_remove,ax=f.rawcolliderset_forEachColliderHandle,sx=f.__wbg_rawshapecontact_free,ox=f.rawshapecontact_distance,lx=f.__wbg_rawnarrowphase_free,cx=f.rawnarrowphase_new,hx=f.rawnarrowphase_contacts_with,ux=f.rawnarrowphase_contact_pair,dx=f.rawnarrowphase_intersections_with,px=f.rawnarrowphase_intersection_pair,fx=f.__wbg_rawcontactmanifold_free,mx=f.rawcontactpair_collider1,gx=f.rawcontactpair_collider2,_x=f.rawcontactpair_numContactManifolds,vx=f.rawcontactpair_contactManifold,wx=f.rawcontactmanifold_normal,xx=f.rawcontactmanifold_local_n1,Sx=f.rawcontactmanifold_local_n2,yx=f.rawcontactmanifold_subshape1,Ex=f.rawcontactmanifold_subshape2,Mx=f.rawcontactmanifold_num_contacts,bx=f.rawcontactmanifold_contact_local_p1,Tx=f.rawcontactmanifold_contact_local_p2,Rx=f.rawcontactmanifold_contact_dist,Ax=f.rawcontactmanifold_contact_fid1,Cx=f.rawcontactmanifold_contact_fid2,Lx=f.rawcontactmanifold_contact_impulse,Px=f.rawcontactmanifold_contact_tangent_impulse_x,Dx=f.rawcontactmanifold_contact_tangent_impulse_y,Ix=f.rawcontactmanifold_num_solver_contacts,Ux=f.rawcontactmanifold_solver_contact_point,Nx=f.rawcontactmanifold_solver_contact_dist,Ox=f.rawcontactmanifold_solver_contact_friction,Fx=f.rawcontactmanifold_solver_contact_restitution,zx=f.rawcontactmanifold_solver_contact_tangent_velocity,Hx=f.__wbg_rawpointprojection_free,Bx=f.__wbg_rawpointcolliderprojection_free,Gx=f.rawpointcolliderprojection_colliderHandle,Vx=f.rawpointcolliderprojection_featureType,kx=f.rawpointcolliderprojection_featureId,Wx=f.__wbg_rawrayintersection_free,Xx=f.rawrayintersection_featureType,jx=f.rawrayintersection_featureId,Yx=f.rawraycolliderintersection_normal,qx=f.rawraycolliderintersection_toi,Kx=f.rawraycolliderintersection_featureType,Zx=f.rawraycolliderintersection_featureId,Jx=f.__wbg_rawraycollidertoi_free,Qx=f.__wbg_rawshape_free,$x=f.rawshape_cuboid,eS=f.rawshape_roundCuboid,tS=f.rawshape_ball,rS=f.rawshape_halfspace,iS=f.rawshape_capsule,nS=f.rawshape_cylinder,aS=f.rawshape_roundCylinder,sS=f.rawshape_cone,oS=f.rawshape_roundCone,lS=f.rawshape_polyline,cS=f.rawshape_trimesh,hS=f.rawshape_heightfield,uS=f.rawshape_segment,dS=f.rawshape_triangle,pS=f.rawshape_roundTriangle,fS=f.rawshape_convexHull,mS=f.rawshape_roundConvexHull,gS=f.rawshape_convexMesh,_S=f.rawshape_roundConvexMesh,vS=f.rawshape_castShape,wS=f.rawshape_intersectsShape,xS=f.rawshape_contactShape,SS=f.rawshape_containsPoint,yS=f.rawshape_projectPoint,ES=f.rawshape_intersectsRay,MS=f.rawshape_castRay,bS=f.rawshape_castRayAndGetNormal,TS=f.__wbg_rawshapetoi_free,RS=f.rawshapetoi_witness1,AS=f.rawshapetoi_normal1,CS=f.rawshapetoi_normal2,LS=f.__wbg_rawshapecollidertoi_free,jl=f.rawshapecollidertoi_witness2,PS=f.rawshapecollidertoi_normal2,DS=f.rawrotation_new,IS=f.rawrotation_identity,Yl=f.rawrotation_y,US=f.rawrotation_w,NS=f.rawvector_zero,OS=f.rawvector_new,FS=f.rawvector_set_y,zS=f.rawvector_xyz,HS=f.rawvector_yxz,BS=f.rawvector_zxy,GS=f.rawvector_xzy,VS=f.rawvector_yzx,kS=f.rawvector_zyx,WS=f.rawsdpmatrix3_elements,XS=f.__wbg_rawdebugrenderpipeline_free,jS=f.rawdebugrenderpipeline_new,YS=f.rawdebugrenderpipeline_vertices,qS=f.rawdebugrenderpipeline_colors,KS=f.rawdebugrenderpipeline_render,ZS=f.__wbg_raweventqueue_free,JS=f.__wbg_rawcontactforceevent_free,QS=f.rawcontactforceevent_collider2,ql=f.rawcontactforceevent_total_force,$S=f.rawcontactforceevent_total_force_magnitude,ey=f.rawcontactforceevent_max_force_direction,ty=f.rawcontactforceevent_max_force_magnitude,ry=f.raweventqueue_new,iy=f.raweventqueue_drainCollisionEvents,ny=f.raweventqueue_drainContactForceEvents,ay=f.raweventqueue_clear,sy=f.__wbg_rawphysicspipeline_free,oy=f.rawphysicspipeline_new,ly=f.rawphysicspipeline_step,cy=f.rawphysicspipeline_stepWithEvents,hy=f.__wbg_rawquerypipeline_free,uy=f.rawquerypipeline_new,dy=f.rawquerypipeline_update,py=f.rawquerypipeline_castRay,fy=f.rawquerypipeline_castRayAndGetNormal,my=f.rawquerypipeline_intersectionsWithRay,gy=f.rawquerypipeline_intersectionWithShape,_y=f.rawquerypipeline_projectPoint,vy=f.rawquerypipeline_projectPointAndGetFeature,wy=f.rawquerypipeline_intersectionsWithPoint,xy=f.rawquerypipeline_castShape,Sy=f.rawquerypipeline_intersectionsWithShape,yy=f.rawquerypipeline_collidersWithAabbIntersectingAabb,Ey=f.__wbg_rawdeserializedworld_free,My=f.rawdeserializedworld_takeGravity,by=f.rawdeserializedworld_takeIntegrationParameters,Ty=f.rawdeserializedworld_takeIslandManager,Ry=f.rawdeserializedworld_takeBroadPhase,Ay=f.rawdeserializedworld_takeNarrowPhase,Cy=f.rawdeserializedworld_takeBodies,Ly=f.rawdeserializedworld_takeColliders,Py=f.rawdeserializedworld_takeImpulseJoints,Dy=f.rawdeserializedworld_takeMultibodyJoints,Iy=f.rawserializationpipeline_serializeAll,Uy=f.rawserializationpipeline_deserializeAll,Ny=f.__wbg_rawcontactpair_free,Oy=f.__wbg_rawraycolliderintersection_free,Fy=f.__wbg_rawrotation_free,zy=f.__wbg_rawvector_free,Hy=f.__wbg_rawsdpmatrix3_free;f.rawvector_set_x,f.rawvector_set_z,f.rawpointprojection_isInside,f.rawpointcolliderprojection_isInside,f.rawcolliderset_isHandleValid,f.rawshapecontact_point1,f.rawshapecontact_point2,f.rawshapecontact_normal2,f.rawpointprojection_point,f.rawpointcolliderprojection_point,f.rawrayintersection_normal,f.rawshapecollidertoi_witness1,f.rawshapecontact_normal1,f.rawshapecollidertoi_normal1,f.rawshapetoi_witness2;const By=f.rawserializationpipeline_new;f.rawintegrationparameters_erp,f.rawrayintersection_toi,f.rawraycollidertoi_toi,f.rawshapetoi_toi,f.rawshapecollidertoi_toi,f.rawrotation_x,f.rawrotation_z,f.rawvector_x,f.rawvector_y,f.rawvector_z,f.rawraycolliderintersection_colliderHandle,f.rawraycollidertoi_colliderHandle,f.rawshapecollidertoi_colliderHandle,f.rawcontactforceevent_collider1;const Gy=f.__wbg_rawserializationpipeline_free,Ke=f.__wbindgen_add_to_stack_pointer,Ts=f.__wbindgen_free,er=f.__wbindgen_malloc,Vy=f.__wbindgen_exn_store;class ky{constructor(e,t,r){this.x=e,this.y=t,this.z=r}}class N{static new(e,t,r){return new ky(e,t,r)}static intoRaw(e){return new U(e.x,e.y,e.z)}static zeros(){return N.new(0,0,0)}static fromRaw(e){if(!e)return null;let t=N.new(e.x,e.y,e.z);return e.free(),t}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z}}class Kl{constructor(e,t,r,n){this.x=e,this.y=t,this.z=r,this.w=n}}class Xe{static identity(){return new Kl(0,0,0,1)}static fromRaw(e){if(!e)return null;let t=new Kl(e.x,e.y,e.z,e.w);return e.free(),t}static intoRaw(e){return new ke(e.x,e.y,e.z,e.w)}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w}}class Wy{constructor(e){this.elements=e}get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}}class Zl{static fromRaw(e){const t=new Wy(e.elements());return e.free(),t}}var lr;(function(i){i[i.Dynamic=0]="Dynamic",i[i.Fixed=1]="Fixed",i[i.KinematicPositionBased=2]="KinematicPositionBased",i[i.KinematicVelocityBased=3]="KinematicVelocityBased"})(lr||(lr={}));class Jl{constructor(e,t,r){this.rawSet=e,this.colliderSet=t,this.handle=r}finalizeDeserialization(e){this.colliderSet=e}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(e,t){return this.rawSet.rbLockTranslations(this.handle,e,t)}lockRotations(e,t){return this.rawSet.rbLockRotations(this.handle,e,t)}setEnabledTranslations(e,t,r,n){return this.rawSet.rbSetEnabledTranslations(this.handle,e,t,r,n)}restrictTranslations(e,t,r,n){this.setEnabledTranslations(e,t,r,n)}setEnabledRotations(e,t,r,n){return this.rawSet.rbSetEnabledRotations(this.handle,e,t,r,n)}restrictRotations(e,t,r,n){this.setEnabledRotations(e,t,r,n)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(e){this.rawSet.rbSetDominanceGroup(this.handle,e)}enableCcd(e){this.rawSet.rbEnableCcd(this.handle,e)}translation(){let e=this.rawSet.rbTranslation(this.handle);return N.fromRaw(e)}rotation(){let e=this.rawSet.rbRotation(this.handle);return Xe.fromRaw(e)}nextTranslation(){let e=this.rawSet.rbNextTranslation(this.handle);return N.fromRaw(e)}nextRotation(){let e=this.rawSet.rbNextRotation(this.handle);return Xe.fromRaw(e)}setTranslation(e,t){this.rawSet.rbSetTranslation(this.handle,e.x,e.y,e.z,t)}setLinvel(e,t){let r=N.intoRaw(e);this.rawSet.rbSetLinvel(this.handle,r,t),r.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(e,t){this.rawSet.rbSetGravityScale(this.handle,e,t)}setRotation(e,t){this.rawSet.rbSetRotation(this.handle,e.x,e.y,e.z,e.w,t)}setAngvel(e,t){let r=N.intoRaw(e);this.rawSet.rbSetAngvel(this.handle,r,t),r.free()}setNextKinematicTranslation(e){this.rawSet.rbSetNextKinematicTranslation(this.handle,e.x,e.y,e.z)}setNextKinematicRotation(e){this.rawSet.rbSetNextKinematicRotation(this.handle,e.x,e.y,e.z,e.w)}linvel(){return N.fromRaw(this.rawSet.rbLinvel(this.handle))}angvel(){return N.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return N.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return N.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return N.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertiaSqrt(){return N.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle))}principalInertia(){return N.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return Xe.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertiaSqrt(){return Zl.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle))}effectiveAngularInertia(){return Zl.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(e){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,e))}setEnabled(e){this.rawSet.rbSetEnabled(this.handle,e)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(e,t){return this.rawSet.rbSetBodyType(this.handle,e,t)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(e){this.rawSet.rbSetLinearDamping(this.handle,e)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(e,t){this.rawSet.rbSetAdditionalMass(this.handle,e,t)}setAdditionalMassProperties(e,t,r,n,a){let s=N.intoRaw(t),o=N.intoRaw(r),l=Xe.intoRaw(n);this.rawSet.rbSetAdditionalMassProperties(this.handle,e,s,o,l,a),s.free(),o.free(),l.free()}setAngularDamping(e){this.rawSet.rbSetAngularDamping(this.handle,e)}resetForces(e){this.rawSet.rbResetForces(this.handle,e)}resetTorques(e){this.rawSet.rbResetTorques(this.handle,e)}addForce(e,t){const r=N.intoRaw(e);this.rawSet.rbAddForce(this.handle,r,t),r.free()}applyImpulse(e,t){const r=N.intoRaw(e);this.rawSet.rbApplyImpulse(this.handle,r,t),r.free()}addTorque(e,t){const r=N.intoRaw(e);this.rawSet.rbAddTorque(this.handle,r,t),r.free()}applyTorqueImpulse(e,t){const r=N.intoRaw(e);this.rawSet.rbApplyTorqueImpulse(this.handle,r,t),r.free()}addForceAtPoint(e,t,r){const n=N.intoRaw(e),a=N.intoRaw(t);this.rawSet.rbAddForceAtPoint(this.handle,n,a,r),n.free(),a.free()}applyImpulseAtPoint(e,t,r){const n=N.intoRaw(e),a=N.intoRaw(t);this.rawSet.rbApplyImpulseAtPoint(this.handle,n,a,r),n.free(),a.free()}}class cr{constructor(e){this.enabled=!0,this.status=e,this.translation=N.zeros(),this.rotation=Xe.identity(),this.gravityScale=1,this.linvel=N.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=N.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=N.zeros(),this.principalAngularInertia=N.zeros(),this.angularInertiaLocalFrame=Xe.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.dominanceGroup=0}static dynamic(){return new cr(lr.Dynamic)}static kinematicPositionBased(){return new cr(lr.KinematicPositionBased)}static kinematicVelocityBased(){return new cr(lr.KinematicVelocityBased)}static fixed(){return new cr(lr.Fixed)}static newDynamic(){return new cr(lr.Dynamic)}static newKinematicPositionBased(){return new cr(lr.KinematicPositionBased)}static newKinematicVelocityBased(){return new cr(lr.KinematicVelocityBased)}static newStatic(){return new cr(lr.Fixed)}setDominanceGroup(e){return this.dominanceGroup=e,this}setEnabled(e){return this.enabled=e,this}setTranslation(e,t,r){if(typeof e!="number"||typeof t!="number"||typeof r!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:r},this}setRotation(e){return Xe.copy(this.rotation,e),this}setGravityScale(e){return this.gravityScale=e,this}setAdditionalMass(e){return this.mass=e,this.massOnly=!0,this}setLinvel(e,t,r){if(typeof e!="number"||typeof t!="number"||typeof r!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:e,y:t,z:r},this}setAngvel(e){return N.copy(this.angvel,e),this}setAdditionalMassProperties(e,t,r,n){return this.mass=e,N.copy(this.centerOfMass,t),N.copy(this.principalAngularInertia,r),Xe.copy(this.angularInertiaLocalFrame,n),this.massOnly=!1,this}enabledTranslations(e,t,r){return this.translationsEnabledX=e,this.translationsEnabledY=t,this.translationsEnabledZ=r,this}restrictTranslations(e,t,r){return this.enabledTranslations(e,t,r)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(e,t,r){return this.rotationsEnabledX=e,this.rotationsEnabledY=t,this.rotationsEnabledZ=r,this}restrictRotations(e,t,r){return this.enabledRotations(e,t,r)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(e){return this.linearDamping=e,this}setAngularDamping(e){return this.angularDamping=e,this}setCanSleep(e){return this.canSleep=e,this}setSleeping(e){return this.sleeping=e,this}setCcdEnabled(e){return this.ccdEnabled=e,this}setUserData(e){return this.userData=e,this}}class da{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(e,t){let r=this.index(e);for(;this.data.length<=r;)this.data.push(null);this.data[r]==null&&(this.size+=1),this.data[r]=t}len(){return this.size}delete(e){let t=this.index(e);t<this.data.length&&(this.data[t]!=null&&(this.size-=1),this.data[t]=null)}clear(){this.data=new Array}get(e){let t=this.index(e);return t<this.data.length?this.data[t]:null}forEach(e){for(const t of this.data)t!=null&&e(t)}getAll(){return this.data.filter(e=>e!=null)}index(e){return this.fconv[0]=e,this.uconv[0]}}class Xy{constructor(e){this.raw=e||new lt,this.map=new da,e&&e.forEachRigidBodyHandle(t=>{this.map.set(t,new Jl(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createRigidBody(e,t){let r=N.intoRaw(t.translation),n=Xe.intoRaw(t.rotation),a=N.intoRaw(t.linvel),s=N.intoRaw(t.centerOfMass),o=N.intoRaw(t.angvel),l=N.intoRaw(t.principalAngularInertia),c=Xe.intoRaw(t.angularInertiaLocalFrame),h=this.raw.createRigidBody(t.enabled,r,n,t.gravityScale,t.mass,t.massOnly,s,a,o,l,c,t.translationsEnabledX,t.translationsEnabledY,t.translationsEnabledZ,t.rotationsEnabledX,t.rotationsEnabledY,t.rotationsEnabledZ,t.linearDamping,t.angularDamping,t.status,t.canSleep,t.sleeping,t.ccdEnabled,t.dominanceGroup);r.free(),n.free(),a.free(),s.free(),o.free(),l.free(),c.free();const p=new Jl(this.raw,e,h);return p.userData=t.userData,this.map.set(h,p),p}remove(e,t,r,n,a){for(let s=0;s<this.raw.rbNumColliders(e);s+=1)r.unmap(this.raw.rbCollider(e,s));n.forEachJointHandleAttachedToRigidBody(e,s=>n.unmap(s)),a.forEachJointHandleAttachedToRigidBody(e,s=>a.unmap(s)),this.raw.remove(e,t.raw,r.raw,n.raw,a.raw),this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachActiveRigidBody(e,t){e.forEachActiveRigidBodyHandle(r=>{t(this.get(r))})}getAll(){return this.map.getAll()}}class jy{constructor(e){this.raw=e||new Wr}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get erp(){return this.raw.erp}get allowedLinearError(){return this.raw.allowedLinearError}get predictionDistance(){return this.raw.predictionDistance}get maxVelocityIterations(){return this.raw.maxVelocityIterations}get maxVelocityFrictionIterations(){return this.raw.maxVelocityFrictionIterations}get maxStabilizationIterations(){return this.raw.maxStabilizationIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(e){this.raw.dt=e}set erp(e){this.raw.erp=e}set allowedLinearError(e){this.raw.allowedLinearError=e}set predictionDistance(e){this.raw.predictionDistance=e}set maxVelocityIterations(e){this.raw.maxVelocityIterations=e}set maxVelocityFrictionIterations(e){this.raw.maxVelocityFrictionIterations=e}set maxStabilizationIterations(e){this.raw.maxStabilizationIterations=e}set minIslandSize(e){this.raw.minIslandSize=e}set maxCcdSubsteps(e){this.raw.maxCcdSubsteps=e}}var hr;(function(i){i[i.Revolute=0]="Revolute",i[i.Fixed=1]="Fixed",i[i.Prismatic=2]="Prismatic",i[i.Spherical=3]="Spherical"})(hr||(hr={}));var Ql;(function(i){i[i.AccelerationBased=0]="AccelerationBased",i[i.ForceBased=1]="ForceBased"})(Ql||(Ql={}));class si{constructor(e,t,r){this.rawSet=e,this.bodySet=t,this.handle=r}static newTyped(e,t,r){switch(e.jointType(r)){case hr.Revolute:return new Ky(e,t,r);case hr.Prismatic:return new qy(e,t,r);case hr.Fixed:return new Yy(e,t,r);case hr.Spherical:return new Zy(e,t,r);default:return new si(e,t,r)}}finalizeDeserialization(e){this.bodySet=e}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return Xe.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return Xe.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return N.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return N.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(e){const t=N.intoRaw(e);this.rawSet.jointSetAnchor1(this.handle,t),t.free()}setAnchor2(e){const t=N.intoRaw(e);this.rawSet.jointSetAnchor2(this.handle,t),t.free()}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class $l extends si{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(e,t){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),e,t)}configureMotorModel(e){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),e)}configureMotorVelocity(e,t){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),e,t)}configureMotorPosition(e,t,r){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),e,t,r)}configureMotor(e,t,r,n){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),e,t,r,n)}}class Yy extends si{}class qy extends $l{rawAxis(){return Zn.X}}class Ky extends $l{rawAxis(){return Zn.AngX}}class Zy extends si{}class Jy{constructor(e){this.raw=e||new ar,this.map=new da,e&&e.forEachJointHandle(t=>{this.map.set(t,si.newTyped(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createJoint(e,t,r,n,a){const s=t.intoRaw(),o=this.raw.createJoint(s,r,n,a);s.free();let l=si.newTyped(this.raw,e,o);return this.map.set(o,l),l}remove(e,t){this.raw.remove(e,t),this.unmap(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}class oi{constructor(e,t){this.rawSet=e,this.handle=t}static newTyped(e,t){switch(e.jointType(t)){case hr.Revolute:return new eE(e,t);case hr.Prismatic:return new $y(e,t);case hr.Fixed:return new Qy(e,t);case hr.Spherical:return new tE(e,t);default:return new oi(e,t)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class ec extends oi{}class Qy extends oi{}class $y extends ec{rawAxis(){return Zn.X}}class eE extends ec{rawAxis(){return Zn.AngX}}class tE extends oi{}class rE{constructor(e){this.raw=e||new or,this.map=new da,e&&e.forEachJointHandle(t=>{this.map.set(t,oi.newTyped(this.raw,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}createJoint(e,t,r,n){const a=e.intoRaw(),s=this.raw.createJoint(a,t,r,n);a.free();let o=oi.newTyped(this.raw,s);return this.map.set(s,o),o}remove(e,t){this.raw.remove(e,t),this.map.delete(e)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}getAll(){return this.map.getAll()}}var pa;(function(i){i[i.Average=0]="Average",i[i.Min=1]="Min",i[i.Multiply=2]="Multiply",i[i.Max=3]="Max"})(pa||(pa={}));class iE{constructor(e){this.raw=e||new Hi}free(){this.raw&&this.raw.free(),this.raw=void 0}}class nE{constructor(e){this.raw=e||new sr}free(){this.raw&&this.raw.free(),this.raw=void 0}forEachActiveRigidBodyHandle(e){this.raw.forEachActiveRigidBodyHandle(e)}}class aE{constructor(e){this.raw=e||new Vr}free(){this.raw&&this.raw.free(),this.raw=void 0}}class sE{constructor(e){this.raw=e||new Rr,this.tempManifold=new oE(null)}free(){this.raw&&this.raw.free(),this.raw=void 0}contactsWith(e,t){this.raw.contacts_with(e,t)}intersectionsWith(e,t){this.raw.intersections_with(e,t)}contactPair(e,t,r){const n=this.raw.contact_pair(e,t);if(n){const a=n.collider1()!=e;let s;for(s=0;s<n.numContactManifolds();++s)this.tempManifold.raw=n.contactManifold(s),this.tempManifold.raw&&r(this.tempManifold,a),this.tempManifold.free();n.free()}}intersectionPair(e,t){return this.raw.intersection_pair(e,t)}}class oE{constructor(e){this.raw=e}free(){this.raw&&this.raw.free(),this.raw=void 0}normal(){return N.fromRaw(this.raw.normal())}localNormal1(){return N.fromRaw(this.raw.local_n1())}localNormal2(){return N.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(e){return N.fromRaw(this.raw.contact_local_p1(e))}localContactPoint2(e){return N.fromRaw(this.raw.contact_local_p2(e))}contactDist(e){return this.raw.contact_dist(e)}contactFid1(e){return this.raw.contact_fid1(e)}contactFid2(e){return this.raw.contact_fid2(e)}contactImpulse(e){return this.raw.contact_impulse(e)}contactTangentImpulseX(e){return this.raw.contact_tangent_impulse_x(e)}contactTangentImpulseY(e){return this.raw.contact_tangent_impulse_y(e)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(e){return N.fromRaw(this.raw.solver_contact_point(e))}solverContactDist(e){return this.raw.solver_contact_dist(e)}solverContactFriction(e){return this.raw.solver_contact_friction(e)}solverContactRestitution(e){return this.raw.solver_contact_restitution(e)}solverContactTangentVelocity(e){return N.fromRaw(this.raw.solver_contact_tangent_velocity(e))}}class on{constructor(e,t,r,n,a){this.distance=e,this.point1=t,this.point2=r,this.normal1=n,this.normal2=a}static fromRaw(e){if(!e)return null;const t=new on(e.distance(),N.fromRaw(e.point1()),N.fromRaw(e.point2()),N.fromRaw(e.normal1()),N.fromRaw(e.normal2()));return e.free(),t}}var ln;(function(i){i[i.Vertex=0]="Vertex",i[i.Edge=1]="Edge",i[i.Face=2]="Face",i[i.Unknown=3]="Unknown"})(ln||(ln={}));class fa{constructor(e,t){this.point=e,this.isInside=t}static fromRaw(e){if(!e)return null;const t=new fa(N.fromRaw(e.point()),e.isInside());return e.free(),t}}class ma{constructor(e,t,r,n,a){this.featureType=ln.Unknown,this.featureId=void 0,this.collider=e,this.point=t,this.isInside=r,a!==void 0&&(this.featureId=a),n!==void 0&&(this.featureType=n)}static fromRaw(e,t){if(!t)return null;const r=new ma(e.get(t.colliderHandle()),N.fromRaw(t.point()),t.isInside(),t.featureType(),t.featureId());return t.free(),r}}class ga{constructor(e,t,r,n){this.featureType=ln.Unknown,this.featureId=void 0,this.toi=e,this.normal=t,n!==void 0&&(this.featureId=n),r!==void 0&&(this.featureType=r)}static fromRaw(e){if(!e)return null;const t=new ga(e.toi(),N.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),t}}class _a{constructor(e,t,r,n,a){this.featureType=ln.Unknown,this.featureId=void 0,this.collider=e,this.toi=t,this.normal=r,a!==void 0&&(this.featureId=a),n!==void 0&&(this.featureType=n)}static fromRaw(e,t){if(!t)return null;const r=new _a(e.get(t.colliderHandle()),t.toi(),N.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),r}}class Rs{constructor(e,t){this.collider=e,this.toi=t}static fromRaw(e,t){if(!t)return null;const r=new Rs(e.get(t.colliderHandle()),t.toi());return t.free(),r}}class cn{constructor(e,t,r,n,a){this.toi=e,this.witness1=t,this.witness2=r,this.normal1=n,this.normal2=a}static fromRaw(e,t){if(!t)return null;const r=new cn(t.toi(),N.fromRaw(t.witness1()),N.fromRaw(t.witness2()),N.fromRaw(t.normal1()),N.fromRaw(t.normal2()));return t.free(),r}}class va extends cn{constructor(e,t,r,n,a,s){super(t,r,n,a,s),this.collider=e}static fromRaw(e,t){if(!t)return null;const r=new va(e.get(t.colliderHandle()),t.toi(),N.fromRaw(t.witness1()),N.fromRaw(t.witness2()),N.fromRaw(t.normal1()),N.fromRaw(t.normal2()));return t.free(),r}}class xt{static fromRaw(e,t){const r=e.coShapeType(t);let n,a,s,o,l,c,h;switch(r){case je.Ball:return new tc(e.coRadius(t));case je.Cuboid:return n=e.coHalfExtents(t),new rc(n.x,n.y,n.z);case je.RoundCuboid:return n=e.coHalfExtents(t),a=e.coRoundRadius(t),new ic(n.x,n.y,n.z,a);case je.Capsule:return l=e.coHalfHeight(t),c=e.coRadius(t),new nc(l,c);case je.Segment:return s=e.coVertices(t),new ac(N.new(s[0],s[1],s[2]),N.new(s[3],s[4],s[5]));case je.Polyline:return s=e.coVertices(t),o=e.coIndices(t),new lc(s,o);case je.Triangle:return s=e.coVertices(t),new sc(N.new(s[0],s[1],s[2]),N.new(s[3],s[4],s[5]),N.new(s[6],s[7],s[8]));case je.RoundTriangle:return s=e.coVertices(t),a=e.coRoundRadius(t),new oc(N.new(s[0],s[1],s[2]),N.new(s[3],s[4],s[5]),N.new(s[6],s[7],s[8]),a);case je.HalfSpace:return h=N.fromRaw(e.coHalfspaceNormal(t)),new lE(h);case je.TriMesh:return s=e.coVertices(t),o=e.coIndices(t),new cc(s,o);case je.HeightField:const p=e.coHeightfieldScale(t),u=e.coHeightfieldHeights(t),g=e.coHeightfieldNRows(t),x=e.coHeightfieldNCols(t);return new hc(g,x,u,p);case je.ConvexPolyhedron:return s=e.coVertices(t),o=e.coIndices(t),new As(s,o);case je.RoundConvexPolyhedron:return s=e.coVertices(t),o=e.coIndices(t),a=e.coRoundRadius(t),new Cs(s,o,a);case je.Cylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),new uc(l,c);case je.RoundCylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),a=e.coRoundRadius(t),new dc(l,c,a);case je.Cone:return l=e.coHalfHeight(t),c=e.coRadius(t),new pc(l,c);case je.RoundCone:return l=e.coHalfHeight(t),c=e.coRadius(t),a=e.coRoundRadius(t),new fc(l,c,a);default:throw new Error("unknown shape type: "+r)}}castShape(e,t,r,n,a,s,o,l,c){let h=N.intoRaw(e),p=Xe.intoRaw(t),u=N.intoRaw(r),g=N.intoRaw(a),x=Xe.intoRaw(s),v=N.intoRaw(o),m=this.intoRaw(),d=n.intoRaw(),E=cn.fromRaw(null,m.castShape(h,p,u,d,g,x,v,l,c));return h.free(),p.free(),u.free(),g.free(),x.free(),v.free(),m.free(),d.free(),E}intersectsShape(e,t,r,n,a){let s=N.intoRaw(e),o=Xe.intoRaw(t),l=N.intoRaw(n),c=Xe.intoRaw(a),h=this.intoRaw(),p=r.intoRaw(),u=h.intersectsShape(s,o,p,l,c);return s.free(),o.free(),l.free(),c.free(),h.free(),p.free(),u}contactShape(e,t,r,n,a,s){let o=N.intoRaw(e),l=Xe.intoRaw(t),c=N.intoRaw(n),h=Xe.intoRaw(a),p=this.intoRaw(),u=r.intoRaw(),g=on.fromRaw(p.contactShape(o,l,u,c,h,s));return o.free(),l.free(),c.free(),h.free(),p.free(),u.free(),g}containsPoint(e,t,r){let n=N.intoRaw(e),a=Xe.intoRaw(t),s=N.intoRaw(r),o=this.intoRaw(),l=o.containsPoint(n,a,s);return n.free(),a.free(),s.free(),o.free(),l}projectPoint(e,t,r,n){let a=N.intoRaw(e),s=Xe.intoRaw(t),o=N.intoRaw(r),l=this.intoRaw(),c=fa.fromRaw(l.projectPoint(a,s,o,n));return a.free(),s.free(),o.free(),l.free(),c}intersectsRay(e,t,r,n){let a=N.intoRaw(t),s=Xe.intoRaw(r),o=N.intoRaw(e.origin),l=N.intoRaw(e.dir),c=this.intoRaw(),h=c.intersectsRay(a,s,o,l,n);return a.free(),s.free(),o.free(),l.free(),c.free(),h}castRay(e,t,r,n,a){let s=N.intoRaw(t),o=Xe.intoRaw(r),l=N.intoRaw(e.origin),c=N.intoRaw(e.dir),h=this.intoRaw(),p=h.castRay(s,o,l,c,n,a);return s.free(),o.free(),l.free(),c.free(),h.free(),p}castRayAndGetNormal(e,t,r,n,a){let s=N.intoRaw(t),o=Xe.intoRaw(r),l=N.intoRaw(e.origin),c=N.intoRaw(e.dir),h=this.intoRaw(),p=ga.fromRaw(h.castRayAndGetNormal(s,o,l,c,n,a));return s.free(),o.free(),l.free(),c.free(),h.free(),p}}var je;(function(i){i[i.Ball=0]="Ball",i[i.Cuboid=1]="Cuboid",i[i.Capsule=2]="Capsule",i[i.Segment=3]="Segment",i[i.Polyline=4]="Polyline",i[i.Triangle=5]="Triangle",i[i.TriMesh=6]="TriMesh",i[i.HeightField=7]="HeightField",i[i.ConvexPolyhedron=9]="ConvexPolyhedron",i[i.Cylinder=10]="Cylinder",i[i.Cone=11]="Cone",i[i.RoundCuboid=12]="RoundCuboid",i[i.RoundTriangle=13]="RoundTriangle",i[i.RoundCylinder=14]="RoundCylinder",i[i.RoundCone=15]="RoundCone",i[i.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",i[i.HalfSpace=17]="HalfSpace"})(je||(je={}));class tc extends xt{constructor(e){super(),this.type=je.Ball,this.radius=e}intoRaw(){return be.ball(this.radius)}}class lE extends xt{constructor(e){super(),this.type=je.HalfSpace,this.normal=e}intoRaw(){let e=N.intoRaw(this.normal),t=be.halfspace(e);return e.free(),t}}class rc extends xt{constructor(e,t,r){super(),this.type=je.Cuboid,this.halfExtents=N.new(e,t,r)}intoRaw(){return be.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class ic extends xt{constructor(e,t,r,n){super(),this.type=je.RoundCuboid,this.halfExtents=N.new(e,t,r),this.borderRadius=n}intoRaw(){return be.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class nc extends xt{constructor(e,t){super(),this.type=je.Capsule,this.halfHeight=e,this.radius=t}intoRaw(){return be.capsule(this.halfHeight,this.radius)}}class ac extends xt{constructor(e,t){super(),this.type=je.Segment,this.a=e,this.b=t}intoRaw(){let e=N.intoRaw(this.a),t=N.intoRaw(this.b),r=be.segment(e,t);return e.free(),t.free(),r}}class sc extends xt{constructor(e,t,r){super(),this.type=je.Triangle,this.a=e,this.b=t,this.c=r}intoRaw(){let e=N.intoRaw(this.a),t=N.intoRaw(this.b),r=N.intoRaw(this.c),n=be.triangle(e,t,r);return e.free(),t.free(),r.free(),n}}class oc extends xt{constructor(e,t,r,n){super(),this.type=je.RoundTriangle,this.a=e,this.b=t,this.c=r,this.borderRadius=n}intoRaw(){let e=N.intoRaw(this.a),t=N.intoRaw(this.b),r=N.intoRaw(this.c),n=be.roundTriangle(e,t,r,this.borderRadius);return e.free(),t.free(),r.free(),n}}class lc extends xt{constructor(e,t){super(),this.type=je.Polyline,this.vertices=e,this.indices=t??new Uint32Array(0)}intoRaw(){return be.polyline(this.vertices,this.indices)}}class cc extends xt{constructor(e,t){super(),this.type=je.TriMesh,this.vertices=e,this.indices=t}intoRaw(){return be.trimesh(this.vertices,this.indices)}}class As extends xt{constructor(e,t){super(),this.type=je.ConvexPolyhedron,this.vertices=e,this.indices=t}intoRaw(){return this.indices?be.convexMesh(this.vertices,this.indices):be.convexHull(this.vertices)}}class Cs extends xt{constructor(e,t,r){super(),this.type=je.RoundConvexPolyhedron,this.vertices=e,this.indices=t,this.borderRadius=r}intoRaw(){return this.indices?be.roundConvexMesh(this.vertices,this.indices,this.borderRadius):be.roundConvexHull(this.vertices,this.borderRadius)}}class hc extends xt{constructor(e,t,r,n){super(),this.type=je.HeightField,this.nrows=e,this.ncols=t,this.heights=r,this.scale=n}intoRaw(){let e=N.intoRaw(this.scale),t=be.heightfield(this.nrows,this.ncols,this.heights,e);return e.free(),t}}class uc extends xt{constructor(e,t){super(),this.type=je.Cylinder,this.halfHeight=e,this.radius=t}intoRaw(){return be.cylinder(this.halfHeight,this.radius)}}class dc extends xt{constructor(e,t,r){super(),this.type=je.RoundCylinder,this.borderRadius=r,this.halfHeight=e,this.radius=t}intoRaw(){return be.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class pc extends xt{constructor(e,t){super(),this.type=je.Cone,this.halfHeight=e,this.radius=t}intoRaw(){return be.cone(this.halfHeight,this.radius)}}class fc extends xt{constructor(e,t,r){super(),this.type=je.RoundCone,this.halfHeight=e,this.radius=t,this.borderRadius=r}intoRaw(){return be.roundCone(this.halfHeight,this.radius,this.borderRadius)}}var Ls;(function(i){i[i.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",i[i.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",i[i.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",i[i.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",i[i.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",i[i.FIXED_FIXED=32]="FIXED_FIXED",i[i.DEFAULT=15]="DEFAULT",i[i.ALL=60943]="ALL"})(Ls||(Ls={}));class mc{constructor(e,t,r,n){this.colliderSet=e,this.handle=t,this._parent=r,this._shape=n}finalizeDeserialization(e){this.handle!=null&&(this._parent=e.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=xt.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return N.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}rotation(){return Xe.fromRaw(this.colliderSet.raw.coRotation(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(e){this.colliderSet.raw.coSetSensor(this.handle,e)}setShape(e){let t=e.intoRaw();this.colliderSet.raw.coSetShape(this.handle,t),t.free(),this._shape=e}setEnabled(e){this.colliderSet.raw.coSetEnabled(this.handle,e)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(e){this.colliderSet.raw.coSetRestitution(this.handle,e)}setFriction(e){this.colliderSet.raw.coSetFriction(this.handle,e)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(e){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,e)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(e){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,e)}setCollisionGroups(e){this.colliderSet.raw.coSetCollisionGroups(this.handle,e)}setSolverGroups(e){this.colliderSet.raw.coSetSolverGroups(this.handle,e)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(e){this.colliderSet.raw.coSetActiveHooks(this.handle,e)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(e){this.colliderSet.raw.coSetActiveEvents(this.handle,e)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(e){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,e)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(e){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,e)}setDensity(e){this.colliderSet.raw.coSetDensity(this.handle,e)}setMass(e){this.colliderSet.raw.coSetMass(this.handle,e)}setMassProperties(e,t,r,n){let a=N.intoRaw(t),s=N.intoRaw(r),o=Xe.intoRaw(n);this.colliderSet.raw.coSetMassProperties(this.handle,e,a,s,o),a.free(),s.free(),o.free()}setTranslation(e){this.colliderSet.raw.coSetTranslation(this.handle,e.x,e.y,e.z)}setTranslationWrtParent(e){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,e.x,e.y,e.z)}setRotation(e){this.colliderSet.raw.coSetRotation(this.handle,e.x,e.y,e.z,e.w)}setRotationWrtParent(e){this.colliderSet.raw.coSetRotationWrtParent(this.handle,e.x,e.y,e.z,e.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return N.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(e){const t=N.intoRaw(e);this.colliderSet.raw.coSetHalfExtents(this.handle,t)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(e){this.colliderSet.raw.coSetRadius(this.handle,e)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(e){this.colliderSet.raw.coSetRoundRadius(this.handle,e)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(e){this.colliderSet.raw.coSetHalfHeight(this.handle,e)}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let e=this.colliderSet.raw.coHeightfieldScale(this.handle);return N.fromRaw(e)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(e){let t=N.intoRaw(e),r=this.colliderSet.raw.coContainsPoint(this.handle,t);return t.free(),r}projectPoint(e,t){let r=N.intoRaw(e),n=fa.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,r,t));return r.free(),n}intersectsRay(e,t){let r=N.intoRaw(e.origin),n=N.intoRaw(e.dir),a=this.colliderSet.raw.coIntersectsRay(this.handle,r,n,t);return r.free(),n.free(),a}castShape(e,t,r,n,a,s,o){let l=N.intoRaw(e),c=N.intoRaw(r),h=Xe.intoRaw(n),p=N.intoRaw(a),u=t.intoRaw(),g=cn.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,l,u,c,h,p,s,o));return l.free(),c.free(),h.free(),p.free(),u.free(),g}castCollider(e,t,r,n,a){let s=N.intoRaw(e),o=N.intoRaw(r),l=va.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,s,t.handle,o,n,a));return s.free(),o.free(),l}intersectsShape(e,t,r){let n=N.intoRaw(t),a=Xe.intoRaw(r),s=e.intoRaw(),o=this.colliderSet.raw.coIntersectsShape(this.handle,s,n,a);return n.free(),a.free(),s.free(),o}contactShape(e,t,r,n){let a=N.intoRaw(t),s=Xe.intoRaw(r),o=e.intoRaw(),l=on.fromRaw(this.colliderSet.raw.coContactShape(this.handle,o,a,s,n));return a.free(),s.free(),o.free(),l}contactCollider(e,t){return on.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,e.handle,t))}castRay(e,t,r){let n=N.intoRaw(e.origin),a=N.intoRaw(e.dir),s=this.colliderSet.raw.coCastRay(this.handle,n,a,t,r);return n.free(),a.free(),s}castRayAndGetNormal(e,t,r){let n=N.intoRaw(e.origin),a=N.intoRaw(e.dir),s=ga.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,n,a,t,r));return n.free(),a.free(),s}}var Gi;(function(i){i[i.Density=0]="Density",i[i.Mass=1]="Mass",i[i.MassProps=2]="MassProps"})(Gi||(Gi={}));class pt{constructor(e){this.enabled=!0,this.shape=e,this.massPropsMode=Gi.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=Xe.identity(),this.translation=N.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=pa.Average,this.restitutionCombineRule=pa.Average,this.activeCollisionTypes=Ls.DEFAULT,this.activeEvents=0,this.activeHooks=0,this.mass=0,this.centerOfMass=N.zeros(),this.contactForceEventThreshold=0,this.principalAngularInertia=N.zeros(),this.angularInertiaLocalFrame=Xe.identity()}static ball(e){const t=new tc(e);return new pt(t)}static capsule(e,t){const r=new nc(e,t);return new pt(r)}static segment(e,t){const r=new ac(e,t);return new pt(r)}static triangle(e,t,r){const n=new sc(e,t,r);return new pt(n)}static roundTriangle(e,t,r,n){const a=new oc(e,t,r,n);return new pt(a)}static polyline(e,t){const r=new lc(e,t);return new pt(r)}static trimesh(e,t){const r=new cc(e,t);return new pt(r)}static cuboid(e,t,r){const n=new rc(e,t,r);return new pt(n)}static roundCuboid(e,t,r,n){const a=new ic(e,t,r,n);return new pt(a)}static heightfield(e,t,r,n){const a=new hc(e,t,r,n);return new pt(a)}static cylinder(e,t){const r=new uc(e,t);return new pt(r)}static roundCylinder(e,t,r){const n=new dc(e,t,r);return new pt(n)}static cone(e,t){const r=new pc(e,t);return new pt(r)}static roundCone(e,t,r){const n=new fc(e,t,r);return new pt(n)}static convexHull(e){const t=new As(e,null);return new pt(t)}static convexMesh(e,t){const r=new As(e,t);return new pt(r)}static roundConvexHull(e,t){const r=new Cs(e,null,t);return new pt(r)}static roundConvexMesh(e,t,r){const n=new Cs(e,t,r);return new pt(n)}setTranslation(e,t,r){if(typeof e!="number"||typeof t!="number"||typeof r!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:r},this}setRotation(e){return Xe.copy(this.rotation,e),this}setSensor(e){return this.isSensor=e,this}setEnabled(e){return this.enabled=e,this}setDensity(e){return this.massPropsMode=Gi.Density,this.density=e,this}setMass(e){return this.massPropsMode=Gi.Mass,this.mass=e,this}setMassProperties(e,t,r,n){return this.massPropsMode=Gi.MassProps,this.mass=e,N.copy(this.centerOfMass,t),N.copy(this.principalAngularInertia,r),Xe.copy(this.angularInertiaLocalFrame,n),this}setRestitution(e){return this.restitution=e,this}setFriction(e){return this.friction=e,this}setFrictionCombineRule(e){return this.frictionCombineRule=e,this}setRestitutionCombineRule(e){return this.restitutionCombineRule=e,this}setCollisionGroups(e){return this.collisionGroups=e,this}setSolverGroups(e){return this.solverGroups=e,this}setActiveHooks(e){return this.activeHooks=e,this}setActiveEvents(e){return this.activeEvents=e,this}setActiveCollisionTypes(e){return this.activeCollisionTypes=e,this}setContactForceEventThreshold(e){return this.contactForceEventThreshold=e,this}}class cE{constructor(e){this.raw=e||new ot,this.map=new da,e&&e.forEachColliderHandle(t=>{this.map.set(t,new mc(this,t,null))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}castClosure(e){return t=>{if(e)return e(this.get(t))}}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createCollider(e,t,r){let n=r!=null&&r!=null;if(n&&isNaN(r))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let a=t.shape.intoRaw(),s=N.intoRaw(t.translation),o=Xe.intoRaw(t.rotation),l=N.intoRaw(t.centerOfMass),c=N.intoRaw(t.principalAngularInertia),h=Xe.intoRaw(t.angularInertiaLocalFrame),p=this.raw.createCollider(t.enabled,a,s,o,t.massPropsMode,t.mass,l,c,h,t.density,t.friction,t.restitution,t.frictionCombineRule,t.restitutionCombineRule,t.isSensor,t.collisionGroups,t.solverGroups,t.activeCollisionTypes,t.activeHooks,t.activeEvents,t.contactForceEventThreshold,n,n?r:0,e.raw);a.free(),s.free(),o.free(),l.free(),c.free(),h.free();let u=n?e.get(r):null,g=new mc(this,p,u,t.shape);return this.map.set(p,g),g}remove(e,t,r,n){this.raw.remove(e,t.raw,r.raw,n),this.unmap(e)}unmap(e){this.map.delete(e)}get(e){return this.map.get(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}class hE{constructor(e){this.raw=e||new ea}free(){this.raw&&this.raw.free(),this.raw=void 0}step(e,t,r,n,a,s,o,l,c,h,p,u){let g=N.intoRaw(e);p?this.raw.stepWithEvents(g,t.raw,r.raw,n.raw,a.raw,s.raw,o.raw,l.raw,c.raw,h.raw,p.raw,u,u?u.filterContactPair:null,u?u.filterIntersectionPair:null):this.raw.step(g,t.raw,r.raw,n.raw,a.raw,s.raw,o.raw,l.raw,c.raw,h.raw),g.free()}}var gc;(function(i){i[i.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",i[i.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",i[i.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",i[i.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",i[i.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",i[i.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",i[i.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",i[i.ONLY_FIXED=6]="ONLY_FIXED"})(gc||(gc={}));class uE{constructor(e){this.raw=e||new nn}free(){this.raw&&this.raw.free(),this.raw=void 0}update(e,t){this.raw.update(e.raw,t.raw)}castRay(e,t,r,n,a,s,o,l,c,h){let p=N.intoRaw(r.origin),u=N.intoRaw(r.dir),g=Rs.fromRaw(t,this.raw.castRay(e.raw,t.raw,p,u,n,a,s,o,l,c,h));return p.free(),u.free(),g}castRayAndGetNormal(e,t,r,n,a,s,o,l,c,h){let p=N.intoRaw(r.origin),u=N.intoRaw(r.dir),g=_a.fromRaw(t,this.raw.castRayAndGetNormal(e.raw,t.raw,p,u,n,a,s,o,l,c,h));return p.free(),u.free(),g}intersectionsWithRay(e,t,r,n,a,s,o,l,c,h,p){let u=N.intoRaw(r.origin),g=N.intoRaw(r.dir),x=v=>s(_a.fromRaw(t,v));this.raw.intersectionsWithRay(e.raw,t.raw,u,g,n,a,x,o,l,c,h,p),u.free(),g.free()}intersectionWithShape(e,t,r,n,a,s,o,l,c,h){let p=N.intoRaw(r),u=Xe.intoRaw(n),g=a.intoRaw(),x=this.raw.intersectionWithShape(e.raw,t.raw,p,u,g,s,o,l,c,h);return p.free(),u.free(),g.free(),x}projectPoint(e,t,r,n,a,s,o,l,c){let h=N.intoRaw(r),p=ma.fromRaw(t,this.raw.projectPoint(e.raw,t.raw,h,n,a,s,o,l,c));return h.free(),p}projectPointAndGetFeature(e,t,r,n,a,s,o,l){let c=N.intoRaw(r),h=ma.fromRaw(t,this.raw.projectPointAndGetFeature(e.raw,t.raw,c,n,a,s,o,l));return c.free(),h}intersectionsWithPoint(e,t,r,n,a,s,o,l,c){let h=N.intoRaw(r);this.raw.intersectionsWithPoint(e.raw,t.raw,h,n,a,s,o,l,c),h.free()}castShape(e,t,r,n,a,s,o,l,c,h,p,u,g){let x=N.intoRaw(r),v=Xe.intoRaw(n),m=N.intoRaw(a),d=s.intoRaw(),E=va.fromRaw(t,this.raw.castShape(e.raw,t.raw,x,v,m,d,o,l,c,h,p,u,g));return x.free(),v.free(),m.free(),d.free(),E}intersectionsWithShape(e,t,r,n,a,s,o,l,c,h,p){let u=N.intoRaw(r),g=Xe.intoRaw(n),x=a.intoRaw();this.raw.intersectionsWithShape(e.raw,t.raw,u,g,x,s,o,l,c,h,p),u.free(),g.free(),x.free()}collidersWithAabbIntersectingAabb(e,t,r){let n=N.intoRaw(e),a=N.intoRaw(t);this.raw.collidersWithAabbIntersectingAabb(n,a,r),n.free(),a.free()}}class _c{constructor(e){this.raw=e||new sa}free(){this.raw&&this.raw.free(),this.raw=void 0}serializeAll(e,t,r,n,a,s,o,l,c){let h=N.intoRaw(e);const p=this.raw.serializeAll(h,t.raw,r.raw,n.raw,a.raw,s.raw,o.raw,l.raw,c.raw);return h.free(),p}deserializeAll(e){return wa.fromRaw(this.raw.deserializeAll(e))}}class dE{constructor(e,t){this.vertices=e,this.colors=t}}class pE{constructor(e){this.raw=e||new Jn}free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}render(e,t,r,n,a){this.raw.render(e.raw,t.raw,r.raw,n.raw,a.raw),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class fE{}class mE{constructor(e,t,r,n,a){this.params=t,this.bodies=r,this.colliders=n,this.queries=a,this.raw=new $n(e),this.rawCharacterCollision=new rn,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(e){let t=N.intoRaw(e);return this.raw.setUp(t)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(e){this._applyImpulsesToDynamicBodies=e}characterMass(){return this._characterMass}setCharacterMass(e){this._characterMass=e}offset(){return this.raw.offset()}setOffset(e){this.raw.setOffset(e)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(e){this.raw.setSlideEnabled(e)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(e,t,r){this.raw.enableAutostep(e,t,r)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(e){this.raw.setMaxSlopeClimbAngle(e)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(e){this.raw.setMinSlopeSlideAngle(e)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(e){this.raw.enableSnapToGround(e)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(e,t,r,n,a){let s=N.intoRaw(t);this.raw.computeColliderMovement(this.params.dt,this.bodies.raw,this.colliders.raw,this.queries.raw,e.handle,s,this._applyImpulsesToDynamicBodies,this._characterMass,r,n,this.colliders.castClosure(a)),s.free()}computedMovement(){return N.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(e,t){if(this.raw.computedCollision(e,this.rawCharacterCollision)){let r=this.rawCharacterCollision;return t=t??new fE,t.translationApplied=N.fromRaw(r.translationApplied()),t.translationRemaining=N.fromRaw(r.translationRemaining()),t.toi=r.toi(),t.witness1=N.fromRaw(r.worldWitness1()),t.witness2=N.fromRaw(r.worldWitness2()),t.normal1=N.fromRaw(r.worldNormal1()),t.normal2=N.fromRaw(r.worldNormal2()),t.collider=this.colliders.get(r.handle()),t}else return null}}class wa{constructor(e,t,r,n,a,s,o,l,c,h,p,u,g,x){this.gravity=e,this.integrationParameters=new jy(t),this.islands=new nE(r),this.broadPhase=new aE(n),this.narrowPhase=new sE(a),this.bodies=new Xy(s),this.colliders=new cE(o),this.impulseJoints=new Jy(l),this.multibodyJoints=new rE(c),this.ccdSolver=new iE(h),this.queryPipeline=new uE(p),this.physicsPipeline=new hE(u),this.serializationPipeline=new _c(g),this.debugRenderPipeline=new pE(x),this.characterControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.queryPipeline.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(e=>e.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.queryPipeline=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0}static fromRaw(e){return e?new wa(N.fromRaw(e.takeGravity()),e.takeIntegrationParameters(),e.takeIslandManager(),e.takeBroadPhase(),e.takeNarrowPhase(),e.takeBodies(),e.takeColliders(),e.takeImpulseJoints(),e.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(e){return new _c().deserializeAll(e)}debugRender(){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase),new dE(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(e,t){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,e,t),this.queryPipeline.update(this.bodies,this.colliders)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}updateSceneQueries(){this.propagateModifiedBodyPositionsToColliders(),this.queryPipeline.update(this.bodies,this.colliders)}get timestep(){return this.integrationParameters.dt}set timestep(e){this.integrationParameters.dt=e}get maxVelocityIterations(){return this.integrationParameters.maxVelocityIterations}set maxVelocityIterations(e){this.integrationParameters.maxVelocityIterations=e}get maxVelocityFrictionIterations(){return this.integrationParameters.maxVelocityFrictionIterations}set maxVelocityFrictionIterations(e){this.integrationParameters.maxVelocityFrictionIterations=e}get maxStabilizationIterations(){return this.integrationParameters.maxStabilizationIterations}set maxStabilizationIterations(e){this.integrationParameters.maxStabilizationIterations=e}createRigidBody(e){return this.bodies.createRigidBody(this.colliders,e)}createCharacterController(e){let t=new mE(e,this.integrationParameters,this.bodies,this.colliders,this.queryPipeline);return this.characterControllers.add(t),t}removeCharacterController(e){this.characterControllers.delete(e),e.free()}createCollider(e,t){let r=t?t.handle:void 0;return this.colliders.createCollider(this.bodies,e,r)}createImpulseJoint(e,t,r,n){return this.impulseJoints.createJoint(this.bodies,e,t.handle,r.handle,n)}createMultibodyJoint(e,t,r,n){return this.multibodyJoints.createJoint(e,t.handle,r.handle,n)}getRigidBody(e){return this.bodies.get(e)}getCollider(e){return this.colliders.get(e)}getImpulseJoint(e){return this.impulseJoints.get(e)}getMultibodyJoint(e){return this.multibodyJoints.get(e)}removeRigidBody(e){this.bodies&&this.bodies.remove(e.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(e,t){this.colliders&&this.colliders.remove(e.handle,this.islands,this.bodies,t)}removeImpulseJoint(e,t){this.impulseJoints&&this.impulseJoints.remove(e.handle,t)}removeMultibodyJoint(e,t){this.impulseJoints&&this.multibodyJoints.remove(e.handle,t)}forEachCollider(e){this.colliders.forEach(e)}forEachRigidBody(e){this.bodies.forEach(e)}forEachActiveRigidBody(e){this.bodies.forEachActiveRigidBody(this.islands,e)}castRay(e,t,r,n,a,s,o,l){return this.queryPipeline.castRay(this.bodies,this.colliders,e,t,r,n,a,s?s.handle:null,o?o.handle:null,this.colliders.castClosure(l))}castRayAndGetNormal(e,t,r,n,a,s,o,l){return this.queryPipeline.castRayAndGetNormal(this.bodies,this.colliders,e,t,r,n,a,s?s.handle:null,o?o.handle:null,this.colliders.castClosure(l))}intersectionsWithRay(e,t,r,n,a,s,o,l,c){this.queryPipeline.intersectionsWithRay(this.bodies,this.colliders,e,t,r,n,a,s,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}intersectionWithShape(e,t,r,n,a,s,o,l){let c=this.queryPipeline.intersectionWithShape(this.bodies,this.colliders,e,t,r,n,a,s?s.handle:null,o?o.handle:null,this.colliders.castClosure(l));return c!=null?this.colliders.get(c):null}projectPoint(e,t,r,n,a,s,o){return this.queryPipeline.projectPoint(this.bodies,this.colliders,e,t,r,n,a?a.handle:null,s?s.handle:null,this.colliders.castClosure(o))}projectPointAndGetFeature(e,t,r,n,a,s){return this.queryPipeline.projectPointAndGetFeature(this.bodies,this.colliders,e,t,r,n?n.handle:null,a?a.handle:null,this.colliders.castClosure(s))}intersectionsWithPoint(e,t,r,n,a,s,o){this.queryPipeline.intersectionsWithPoint(this.bodies,this.colliders,e,this.colliders.castClosure(t),r,n,a?a.handle:null,s?s.handle:null,this.colliders.castClosure(o))}castShape(e,t,r,n,a,s,o,l,c,h,p){return this.queryPipeline.castShape(this.bodies,this.colliders,e,t,r,n,a,s,o,l,c?c.handle:null,h?h.handle:null,this.colliders.castClosure(p))}intersectionsWithShape(e,t,r,n,a,s,o,l,c){this.queryPipeline.intersectionsWithShape(this.bodies,this.colliders,e,t,r,this.colliders.castClosure(n),a,s,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}collidersWithAabbIntersectingAabb(e,t,r){this.queryPipeline.collidersWithAabbIntersectingAabb(e,t,this.colliders.castClosure(r))}contactsWith(e,t){this.narrowPhase.contactsWith(e.handle,this.colliders.castClosure(t))}intersectionsWith(e,t){this.narrowPhase.intersectionsWith(e.handle,this.colliders.castClosure(t))}contactPair(e,t,r){this.narrowPhase.contactPair(e.handle,t.handle,r)}intersectionPair(e,t){return this.narrowPhase.intersectionPair(e.handle,t.handle)}}class gE{constructor(e){ya(this,"getRandSpheres",(e,t,r)=>e.map((n,a)=>{const s=new hs(t[a],64,32),o=new Ym({roughness:0,metalness:1}),l=new br(s,o);return l.position.clone,l.position.copy(n),r.add(l),l}));this.spheresCount=10,this.centersOfSpheres=this.getRandCentersOfSpheres(this.spheresCount),this.radiusesOfSpheres=this.getRandRadiusesOfSpheres(this.spheresCount),this.spheresArr=this.getRandSpheres(this.centersOfSpheres,this.radiusesOfSpheres,e)}getRandCentersOfSpheres(e){return new Array(e).fill(0).map(()=>new F(Math.random()*6-3,Math.random()*6-3,Math.random()*6-3))}getRandRadiusesOfSpheres(e){return new Array(e).fill(0).map(()=>Math.random()+.5)}}class _E{constructor({spheres:e,viewer:t}){this.world=new wa(new F),this.worldBodies=[],this.worldBodies.push(...this.addSpheresToWorld(e,this.world)),this.animateWorld(t,this.worldBodies,this.world)}addSpheresToWorld(e,t){return e.centersOfSpheres.map((r,n)=>{const a=cr.dynamic().setTranslation(r.x,r.y,r.z),s=t.createRigidBody(a);s.mass=1.3333333333333333*Math.PI*e.radiusesOfSpheres[n];const o=pt.ball(e.radiusesOfSpheres[n]);return t.createCollider(o,s),{body:s,mesh:e.spheresArr[n]}})}animateWorld(e,t,r){let n=-.3;window.addEventListener("mousedown",()=>n=.15),window.addEventListener("mouseup",()=>n=-.3),e.addToAnimationQueue("animate-world",()=>{r.step(),t.forEach(({body:a,mesh:s})=>{s.position.copy(a.translation()),a.applyImpulse(s.position.clone().multiplyScalar(n))})})}}class vE{constructor(){const e=document.body;this.viewer=new ig(e),this.spheres=new gE(this.viewer.scene),this.physicWorld=new _E({spheres:this.spheres,viewer:this.viewer})}}new vE})();
