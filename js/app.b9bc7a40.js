(function(){var e={1993:function(e){function n(e){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}))}n.keys=function(){return[]},n.resolve=n,n.id=1993,e.exports=n},1875:function(e){function n(e){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}))}n.keys=function(){return[]},n.resolve=n,n.id=1875,e.exports=n},9396:function(e,n,o){"use strict";var a=o(9242),t=o(3396);function u(e,n,o,a,u,l){const r=(0,t.up)("ion-router-outlet"),i=(0,t.up)("ion-app");return(0,t.wg)(),(0,t.j4)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r)])),_:1})}var l=o(7384),r=(0,t.aZ)({name:"App",components:{IonApp:l.dr,IonRouterOutlet:l.jP}}),i=o(89);const s=(0,i.Z)(r,[["render",u]]);var d=s,c=o(2248);const m=(0,t.Uk)("Tone Cluster v0.1"),p=(0,t.Uk)("Nueva partida"),f=(0,t.Uk)("Mis partidas"),g=(0,t.Uk)("Cerrar sesión");function w(e,n,o,a,u,l){const r=(0,t.up)("ion-title"),i=(0,t.up)("ion-toolbar"),s=(0,t.up)("ion-header"),d=(0,t.up)("ion-label"),c=(0,t.up)("ion-item"),w=(0,t.up)("ion-list"),_=(0,t.up)("ion-content"),v=(0,t.up)("ion-menu"),I=(0,t.up)("ion-menu-button"),h=(0,t.up)("ion-buttons"),b=(0,t.up)("ion-router-outlet"),W=(0,t.up)("ion-page");return(0,t.wg)(),(0,t.j4)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(v,{"menu-id":"menu-id","content-id":"main-content"},{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[m])),_:1})])),_:1})])),_:1}),(0,t.Wm)(_,{class:"ion-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{onClick:n[0]||(n[0]=n=>e.onClickItemMenu("nuevoJuego"))},{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[p])),_:1})])),_:1}),(0,t.Wm)(c,{onClick:n[1]||(n[1]=n=>e.onClickItemMenu("cargar"))},{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[f])),_:1})])),_:1}),(0,t.Wm)(c,{onClick:n[2]||(n[2]=n=>e.onClickItemMenu("login"))},{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[g])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(h,{slot:"start"},{default:(0,t.w5)((()=>[(0,t.Wm)(I)])),_:1})])),_:1})])),_:1}),(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,{id:"main-content"})])),_:1})])),_:1})}o(7658);var _=o(2483),v=o(5534),I=o(1020);const h=(0,I.Q_)("juego",{state:()=>({partida:null,usuario:null,misPartidas:null,busquedaJugador:[],jugadoresNuevoJuego:[]}),actions:{setUsuario(e,n,o,a){const t={id:e,nombre:n,tokenAcceso:o,tokenRefresco:a};this.usuario=t},setBusquedaJugadores(e){const n=[];e.map((e=>{const o={id:e[0],nombre:e[1]};0==this.jugadoresNuevoJuego.filter((e=>e.nombre===o.nombre)).length&&n.push(o)})),this.busquedaJugador=n},addJugadorNuevoJuego(e){this.jugadoresNuevoJuego.filter((n=>n.nombre===e.nombre)).length>0||this.jugadoresNuevoJuego.push(e)},quitaJugadorBusqueda(e){this.busquedaJugador=this.busquedaJugador.filter((n=>n.nombre!=e.nombre))},quitaJugadorNuevoJuego(e){this.jugadoresNuevoJuego=this.jugadoresNuevoJuego.filter((n=>n.nombre!=e.nombre))},setPartida(e){this.partida=e},setMisPartidas(e){this.misPartidas=e}},getters:{getUsuario(e){return e.usuario},getBusquedaJugadores(e){return e.busquedaJugador},getJugadoresNuevoJuego(e){return e.jugadoresNuevoJuego},getPartida(e){return e.partida},getMisPartidas(e){return e.misPartidas}}});var b=(0,t.aZ)({name:"ViewMenu",components:{IonPage:l._i,IonContent:l.W2,IonGrid:l.jY,IonRow:l.Nd,IonCol:l.wI,IonList:l.q_,IonButton:l.YG,IonItem:l.Ie,IonLabel:l.Q$,IonTitle:l.wd,IonToolbar:l.sr,IonHeader:l.Gu,IonMenu:l.z0,IonMenuButton:l.fG,IonButtons:l.Sm,IonBadge:l.yp,IonIcon:l.gu,IonRouterOutlet:l.jP},setup(){const e=h(),n=(0,_.tv)(),o=e.getMisPartidas.length>0?e.getMisPartidas[0]:null;return(0,t.bv)((()=>{e.getUsuario||n.push({name:"login"})})),{ultimaPartida:o,onClickItemMenu:e=>{v.m.close("menu-id"),n.push({name:e})}}}});const W=(0,i.Z)(b,[["render",w],["__scopeId","data-v-caa448a2"]]);var C=W,k=o.p+"img/piano.ca93c9b6.png",U=o.p+"img/llave_sol.f0946017.png";const j=(0,t.Uk)("Usuarie o contraseña incorrecta"),y=(0,t.Uk)("Por favor, intenta de nuevo"),P=(0,t._)("br",null,null,-1),q=(0,t._)("br",null,null,-1),J=(0,t._)("img",{alt:"iconoUsuario",src:k},null,-1),N=(0,t.Uk)("Usuario"),B=(0,t._)("img",{alt:"iconoContraseña",src:U},null,-1),M=(0,t.Uk)("Contraseña"),z=(0,t.Uk)("¡Entrar!"),H=(0,t.Uk)("No tengo cuenta");function V(e,n,o,a,u,l){const r=(0,t.up)("ion-card-title"),i=(0,t.up)("ion-card-subtitle"),s=(0,t.up)("ion-card-header"),d=(0,t.up)("ion-card"),c=(0,t.up)("ion-col"),m=(0,t.up)("ion-row"),p=(0,t.up)("ion-thumbnail"),f=(0,t.up)("ion-label"),g=(0,t.up)("ion-input"),w=(0,t.up)("ion-item"),_=(0,t.up)("ion-button"),v=(0,t.up)("ion-list"),I=(0,t.up)("ion-img"),h=(0,t.up)("ion-grid"),b=(0,t.up)("ion-content"),W=(0,t.up)("ion-page");return(0,t.wg)(),(0,t.j4)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,{fullscreen:!0},{default:(0,t.w5)((()=>[(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[e.error?((0,t.wg)(),(0,t.j4)(m,{key:0},{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[j])),_:1}),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[y])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})):(0,t.kq)("",!0),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[P,q])),_:1})])),_:1}),(0,t.Wm)(m,{class:"ion-justify-content-center"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{size:"6"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{slot:"start"},{default:(0,t.w5)((()=>[J])),_:1}),(0,t.Wm)(f,{position:"floating"},{default:(0,t.w5)((()=>[N])),_:1}),(0,t.Wm)(g,{label:"Usuario",labelPlacement:"floating",placeholder:"Usuario",modelValue:e.usuario,"onUpdate:modelValue":n[0]||(n[0]=n=>e.usuario=n)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{slot:"start"},{default:(0,t.w5)((()=>[B])),_:1}),(0,t.Wm)(f,{position:"floating"},{default:(0,t.w5)((()=>[M])),_:1}),(0,t.Wm)(g,{placeholder:"Contraseña",modelValue:e.contrasena,"onUpdate:modelValue":n[1]||(n[1]=n=>e.contrasena=n),type:"password"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(_,{slot:"start",onClick:e.login},{default:(0,t.w5)((()=>[z])),_:1},8,["onClick"]),(0,t.Wm)(_,{slot:"end",onClick:e.registro},{default:(0,t.w5)((()=>[H])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),(0,t.Wm)(c,{size:"3"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{src:"https://drive.google.com/uc?id=1GLn2TC8HqULuNRsHGDIjl70NXc0HiRRd&export=download",alt:"ToneCluster"})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var D=o(4870),T=(0,t.aZ)({name:"ViewLogin",components:{IonPage:l._i,IonContent:l.W2,IonGrid:l.jY,IonRow:l.Nd,IonCol:l.wI,IonInput:l.pK,IonButton:l.YG,IonList:l.q_,IonItem:l.Ie,IonLabel:l.Q$,IonCard:l.PM,IonCardTitle:l.Dq,IonCardSubtitle:l.tO,IonCardHeader:l.Zi,IonImg:l.Xz,IonThumbnail:l.Bs},setup(){const e=h(),n=(0,_.tv)(),o=(0,D.iH)(""),a=(0,D.iH)(""),u=(0,D.iH)(!1),l=(0,t.f3)("axios");return{usuario:o,contrasena:a,error:u,login:()=>{u.value=!1,l.post("/login/",{u:o.value,p:a.value}).then((o=>{"error"in o.data?u.value=!0:(e.setUsuario(o.data.id,o.data.user,o.data.access_token,o.data.refresh_token),e.setMisPartidas(o.data.partidas),n.push({path:"/menu/cargar"}))}))},registro:()=>{n.push({path:"/registro"})}}}});const x=(0,i.Z)(T,[["render",V]]);var R=x;const O={key:0},G=(0,t.Uk)("¡Cargando!"),L=(0,t.Uk)("Gracias por espera"),Z=(0,t.Uk)(" Estamos preparando el tablero ");function E(e,n,o,a,u,l){const r=(0,t.up)("PhaserContainer"),i=(0,t.up)("ion-card-title"),s=(0,t.up)("ion-card-subtitle"),d=(0,t.up)("ion-card-header"),c=(0,t.up)("ion-card-content"),m=(0,t.up)("ion-card"),p=(0,t.up)("ion-content"),f=(0,t.up)("ion-page");return(0,t.wg)(),(0,t.j4)(f,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{fullscreen:!0},{default:(0,t.w5)((()=>[e.partida_id&&e.store.getUsuario?((0,t.wg)(),(0,t.iD)("div",O,[((0,t.wg)(),(0,t.j4)(t.n4,null,{fallback:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[G])),_:1}),(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[L])),_:1})])),_:1}),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[Z])),_:1})])),_:1})])),default:(0,t.w5)((()=>[((0,t.wg)(),(0,t.j4)(r,{partida_id:e.partida_id,usuario_id:e.store.getUsuario.id,key:e.counter,ref:"childComponentRef"},null,8,["partida_id","usuario_id"]))])),_:1}))])):(0,t.kq)("",!0)])),_:1})])),_:1})}const Y={class:"contenedorJuego"};var A=(0,t.aZ)({__name:"PhaserContainer",props:{partida_id:{type:String,required:!0},usuario_id:{type:Number,required:!0}},async setup(e,{expose:n}){let a,u;const l=e,{partida_id:r,usuario_id:i}=(0,D.BK)(l);let s=null;const d="game-container",c=([a,u]=(0,t.mv)((()=>o.e(238).then(o.bind(o,6684)))),a=await a,u(),a);(0,t.bv)((()=>{s=c.launch(d),s.scene.start("BootScene",{partida_id:r.value,usuario_id:i.value})}));const m=()=>{s.destroy(!0)};return n({destruyeJuego:m}),(e,n)=>((0,t.wg)(),(0,t.iD)("div",Y,[(0,t._)("div",{id:d})]))}});const S=(0,i.Z)(A,[["__scopeId","data-v-2a94384c"]]);var K=S,F=(0,t.aZ)({name:"ViewJuego",components:{IonPage:l._i,IonContent:l.W2,PhaserContainer:K,IonButton:l.YG,IonCard:l.PM,IonCardContent:l.FN,IonCardHeader:l.Zi,IonCardSubtitle:l.tO,IonCardTitle:l.Dq},setup(){const e=h(),n=(0,_.tv)(),o=(0,_.yj)(),a=(0,D.iH)(""),u=(0,D.iH)(),r=(0,D.iH)(0);return(0,t.bv)((()=>{e.getUsuario||n.push({name:"login"})})),(0,l.Yr)((()=>{a.value=o.params["id"],r.value=r.value+1,999==r.value&&(r.value=0)})),(0,l.RD)((()=>{console.log("view juego did leave"),u.value.metodo()})),(0,l.KA)((()=>{console.log("view juego will enter")})),(0,l.l3)((()=>{console.log("view juego will leave")})),{PhaserContainer:K,store:e,partida_id:a,childComponentRef:u,counter:r}}});const Q=(0,i.Z)(F,[["render",E]]);var X=Q,$=o(7139);const ee=e=>((0,t.dD)("data-v-934454f4"),e=e(),(0,t.Cn)(),e),ne=ee((()=>(0,t._)("h1",null,"Busca amigxs para jugar con su nombre de usuarix",-1))),oe=(0,t.Uk)("Buscar"),ae={key:0},te=(0,t.Uk)(" Jugadores para el próximo juego: "),ue=(0,t.Uk)("¡Comenzar nuevo juego!");function le(e,n,o,a,u,l){const r=(0,t.up)("ion-col"),i=(0,t.up)("ion-row"),s=(0,t.up)("ion-input"),d=(0,t.up)("ion-card"),c=(0,t.up)("ion-button"),m=(0,t.up)("ion-label"),p=(0,t.up)("ion-item"),f=(0,t.up)("ion-list"),g=(0,t.up)("ion-grid"),w=(0,t.up)("ion-content"),_=(0,t.up)("ion-page");return(0,t.wg)(),(0,t.j4)(_,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,{class:"ion-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{style:{"max-width":"70%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[ne])),_:1})])),_:1}),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{fill:"outline",placeholder:"Nombre de usuario",modelValue:e.inputBusqueda,"onUpdate:modelValue":n[0]||(n[0]=n=>e.inputBusqueda=n),onInput:e.onChangeBusqueda},null,8,["modelValue","onInput"])])),_:1}),(0,t.Wm)(c,{onClick:e.onChangeBusqueda},{default:(0,t.w5)((()=>[oe])),_:1},8,["onClick"]),e.muestraAdvertencia?((0,t.wg)(),(0,t.iD)("h3",ae,"Ingresa más caracteres porfavor")):(0,t.kq)("",!0)])),_:1})])),_:1}),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(f,{lines:"inset"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.store.getBusquedaJugadores,(n=>((0,t.wg)(),(0,t.j4)(p,{class:"ion-text-center"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{onClick:o=>e.onClickItem(n)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,$.zw)(n.nombre),1)])),_:2},1032,["onClick"])])),_:2},1024)))),256))])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[te])),_:1})])),_:1}),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(f,{lines:"inset"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"ion-text-center"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("h1",null,(0,$.zw)(e.store.getUsuario?.nombre)+" (sí, eres tú :D) ",1)])),_:1})])),_:1}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.store.getJugadoresNuevoJuego,(n=>((0,t.wg)(),(0,t.j4)(p,{class:"ion-text-center"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{onClick:o=>e.onClickItemDelete(n)},{default:(0,t.w5)((()=>[(0,t._)("h1",null,(0,$.zw)(n.nombre),1)])),_:2},1032,["onClick"])])),_:2},1024)))),256))])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{onClick:e.nuevoJuego},{default:(0,t.w5)((()=>[ue])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var re=(0,t.aZ)({name:"ViewNuevoJuego",components:{IonPage:l._i,IonContent:l.W2,IonGrid:l.jY,IonRow:l.Nd,IonCol:l.wI,IonInput:l.pK,IonCard:l.PM,IonButton:l.YG,IonList:l.q_,IonItem:l.Ie,IonLabel:l.Q$,IonTitle:l.wd,IonToolbar:l.sr,IonHeader:l.Gu,IonMenu:l.z0,IonMenuButton:l.fG,IonButtons:l.Sm},setup(){const e=h(),n=(0,_.tv)(),o=(0,D.iH)(""),a=(0,D.iH)(!1);var u=3;const l=(0,t.f3)("axios");var r=null;return(0,t.bv)((()=>{e.getUsuario?r={headers:{Authorization:"Bearer "+e.getUsuario.tokenAcceso}}:n.push({name:"login"})})),{USERNAME_MIN_LENGTH:u,muestraAdvertencia:a,inputBusqueda:o,store:e,onClickItem:n=>{e.addJugadorNuevoJuego({id:n.id,nombre:n.nombre}),e.quitaJugadorBusqueda({id:n.id,nombre:n.nombre})},onClickItemDelete:n=>{e.quitaJugadorNuevoJuego({id:n.id,nombre:n.nombre})},onChangeBusqueda:n=>{o.value.length>=u?(a.value=!1,l.get("buscaUsuarios/"+o.value,r).then((n=>{e.setBusquedaJugadores(n.data)}))):a.value=!0},nuevoJuego:()=>{l.post("/nuevaPartida/",{usuario:e.getUsuario?.id,jugadores:e.getJugadoresNuevoJuego},r).then((o=>{e.setPartida(o.data),n.push({name:"juego",params:{id:o.data.pk}})}))},onClickItemMenu:e=>{v.m.close("menu-id"),n.push({name:e})}}}});const ie=(0,i.Z)(re,[["render",le],["__scopeId","data-v-934454f4"]]);var se=ie;const de=e=>((0,t.dD)("data-v-c081d64a"),e=e(),(0,t.Cn)(),e),ce=(0,t.Uk)(" aqui va un carrusel con fotos que explican como jugar"),me=de((()=>(0,t._)("br",null,null,-1))),pe=(0,t.Uk)(" quizas, si alcanza el tiempo, hacer un mini juego que explique como jugar ");function fe(e,n,o,a,u,l){const r=(0,t.up)("ion-col"),i=(0,t.up)("ion-row"),s=(0,t.up)("ion-grid"),d=(0,t.up)("ion-content"),c=(0,t.up)("ion-page");return(0,t.wg)(),(0,t.j4)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,{class:"background ion-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[ce,me,pe])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var ge=(0,t.aZ)({name:"ViewTutorial",components:{IonPage:l._i,IonContent:l.W2,IonGrid:l.jY,IonRow:l.Nd,IonCol:l.wI,IonLabel:l.Q$,IonItem:l.Ie,IonList:l.q_,IonTitle:l.wd,IonToolbar:l.sr,IonHeader:l.Gu,IonMenu:l.z0,IonMenuButton:l.fG,IonButtons:l.Sm,IonButton:l.YG},setup(){const e=h(),n=(0,_.tv)();return(0,t.bv)((()=>{e.getUsuario||n.push({name:"login"})})),{onClickItemMenu:e=>{v.m.close("menu-id"),n.push({name:e})}}}});const we=(0,i.Z)(ge,[["render",fe],["__scopeId","data-v-c081d64a"]]);var _e=we;const ve=e=>((0,t.dD)("data-v-5ec70ce0"),e=e(),(0,t.Cn)(),e),Ie={key:0},he=(0,t.Uk)("Ver partidas finalizadas"),be={key:0},We={key:1},Ce={class:"ion-padding",slot:"content"},ke=ve((()=>(0,t._)("h3",null,"Vista previa de la partida:",-1))),Ue={key:0},je=(0,t.Uk)("¡Entrar!"),ye={key:1},Pe=ve((()=>(0,t._)("h2",null,"Aún no tienes partidas. Crea un nuevo juego en el menú",-1))),qe=[Pe];function Je(e,n,o,a,u,l){const r=(0,t.up)("ion-refresher-content"),i=(0,t.up)("ion-refresher"),s=(0,t.up)("ion-toggle"),d=(0,t.up)("ion-label"),c=(0,t.up)("ion-item"),m=(0,t.up)("ion-list"),p=(0,t.up)("ion-badge"),f=(0,t.up)("ion-button"),g=(0,t.up)("ion-accordion"),w=(0,t.up)("ion-accordion-group"),_=(0,t.up)("ion-content"),v=(0,t.up)("ion-page");return(0,t.wg)(),(0,t.j4)(v,null,{default:(0,t.w5)((()=>[(0,t.Wm)(_,{class:"ion-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{slot:"fixed",onIonRefresh:n[0]||(n[0]=n=>e.handleRefresh(n))},{default:(0,t.w5)((()=>[(0,t.Wm)(r)])),_:1}),e.store.getMisPartidas&&e.store.getMisPartidas.length>0?((0,t.wg)(),(0,t.iD)("div",Ie,[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{onIonChange:e.cambiaVerFinalizadas,checked:e.verFinalizadas},null,8,["onIonChange","checked"]),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[he])),_:1})])),_:1})])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.store.getMisPartidas,(n=>((0,t.wg)(),(0,t.j4)(g,null,{default:(0,t.w5)((()=>[e.mostrar(n)?((0,t.wg)(),(0,t.j4)(c,{key:0,slot:"header",color:e.colorItem(n)},{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[n.finalizado?((0,t.wg)(),(0,t.iD)("h1",be,"Partida finalizada")):((0,t.wg)(),(0,t.iD)("h1",We,(0,$.zw)(e.store.getUsuario&&e.store.getUsuario.nombre==n.usuarioTurno?"¡Es tu turno!":"Es el turno de: "+n.usuarioTurno),1)),(0,t._)("h2",null,"Juego creado el "+(0,$.zw)(n.creacionHR),1),(0,t._)("div",null,[(0,t.Wm)(p,{color:"primary"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,$.zw)(n.jugador1__username),1)])),_:2},1024),(0,t.Wm)(p,{color:"secondary"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,$.zw)(n.jugador2__username),1)])),_:2},1024),(0,t.Wm)(p,{color:"tertiary"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,$.zw)(n.jugador3__username),1)])),_:2},1024),(0,t.Wm)(p,{color:"success"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,$.zw)(n.jugador4__username),1)])),_:2},1024)]),(0,t._)("h2",null,"Última jugada: "+(0,$.zw)(n.modificacionHR),1)])),_:2},1024)])),_:2},1032,["color"])):(0,t.kq)("",!0),(0,t._)("div",Ce,[ke,n.detalles?((0,t.wg)(),(0,t.iD)("table",Ue,[(0,t._)("tbody",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(n.detalles.tablero,(n=>((0,t.wg)(),(0,t.iD)("tr",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(n,(n=>((0,t.wg)(),(0,t.iD)("td",{class:(0,$.C_)(e.claseCasilla(n))},[(0,t._)("div",{style:(0,$.j5)(n.ficha?"color: black":"color: white")},(0,$.zw)(n.ficha?"comodin"==n.ficha.nota?"©":n.ficha.nota:"X"),5)],2)))),256))])))),256))])])):(0,t.kq)("",!0),(0,t.Wm)(f,{onClick:o=>e.onClickItem(n)},{default:(0,t.w5)((()=>[je])),_:2},1032,["onClick"])])])),_:2},1024)))),256))])),_:1})])):((0,t.wg)(),(0,t.iD)("div",ye,qe))])),_:1})])),_:1})}var Ne=(0,t.aZ)({name:"ViewCargar",components:{IonPage:l._i,IonContent:l.W2,IonGrid:l.jY,IonRow:l.Nd,IonCol:l.wI,IonCard:l.PM,IonList:l.q_,IonItem:l.Ie,IonLabel:l.Q$,IonAccordionGroup:l.eh,IonAccordion:l.We,IonRefresher:l.nJ,IonRefresherContent:l.Wo,IonButton:l.YG,IonBadge:l.yp,IonToggle:l.ho},setup(){const e=(0,t.f3)("axios"),n=h(),o=(0,_.tv)(),a=(0,D.iH)(!1);var u=n.getUsuario?{headers:{Authorization:"Bearer "+n.getUsuario.tokenAcceso}}:null;return(0,t.bv)((()=>{n.getUsuario||o.push({name:"login"})})),{store:n,verFinalizadas:a,onClickItem:e=>{let n=e.id;o.push({name:"juego",params:{id:n}})},handleRefresh:o=>{setTimeout((()=>{e.get("/misPartidas/",u).then((e=>{n.setMisPartidas(e.data),o.target.complete()}))}),2e3)},colorItem:e=>e.finalizado?"":n.getUsuario&&n.getUsuario.nombre==e.usuarioTurno?"warning":"light",claseCasilla:e=>e.ficha?"ficha":"",mostrar:e=>!e.finalizado||a.value,cambiaVerFinalizadas:()=>{a.value=!a.value}}}});const Be=(0,i.Z)(Ne,[["render",Je],["__scopeId","data-v-5ec70ce0"]]);var Me=Be,ze=o.p+"img/correo.0eb6725c.png";const He=e=>((0,t.dD)("data-v-2db6b604"),e=e(),(0,t.Cn)(),e),Ve=He((()=>(0,t._)("img",{alt:"IconoUsuario",src:k},null,-1))),De=(0,t.Uk)("Usuario"),Te=He((()=>(0,t._)("img",{alt:"IconoCorreo",src:ze},null,-1))),xe=(0,t.Uk)("Correo"),Re=He((()=>(0,t._)("img",{alt:"Silhouette of mountains",src:U},null,-1))),Oe=(0,t.Uk)("Contraseña"),Ge=(0,t.Uk)("Repite la contraseña"),Le=(0,t.Uk)(" Crear usuario ");function Ze(e,n,o,a,u,l){const r=(0,t.up)("ion-thumbnail"),i=(0,t.up)("ion-label"),s=(0,t.up)("ion-input"),d=(0,t.up)("ion-item"),c=(0,t.up)("ion-list"),m=(0,t.up)("ion-col"),p=(0,t.up)("ion-row"),f=(0,t.up)("ion-card-title"),g=(0,t.up)("ion-card-header"),w=(0,t.up)("ion-card"),_=(0,t.up)("ion-button"),v=(0,t.up)("ion-grid"),I=(0,t.up)("ion-content"),h=(0,t.up)("ion-page");return(0,t.wg)(),(0,t.j4)(h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(I,{fullscreen:!0},{default:(0,t.w5)((()=>[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,{class:"center"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{slot:"start"},{default:(0,t.w5)((()=>[Ve])),_:1}),(0,t.Wm)(i,{position:"floating"},{default:(0,t.w5)((()=>[De])),_:1}),(0,t.Wm)(s,{label:"Usuario",labelPlacement:"floating",placeholder:"Usuario",modelValue:e.usuario,"onUpdate:modelValue":n[0]||(n[0]=n=>e.usuario=n),disabled:e.desactiva},null,8,["modelValue","disabled"])])),_:1}),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{slot:"start"},{default:(0,t.w5)((()=>[Te])),_:1}),(0,t.Wm)(i,{position:"floating"},{default:(0,t.w5)((()=>[xe])),_:1}),(0,t.Wm)(s,{label:"Correo electrónico",labelPlacement:"floating",placeholder:"usuario@dominio.com",modelValue:e.correo,"onUpdate:modelValue":n[1]||(n[1]=n=>e.correo=n),type:"email",disabled:e.desactiva},null,8,["modelValue","disabled"])])),_:1}),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{slot:"start"},{default:(0,t.w5)((()=>[Re])),_:1}),(0,t.Wm)(i,{position:"floating"},{default:(0,t.w5)((()=>[Oe])),_:1}),(0,t.Wm)(s,{placeholder:"Contraseña",modelValue:e.contrasena,"onUpdate:modelValue":n[2]||(n[2]=n=>e.contrasena=n),type:"password",onIonChange:e.inputPassCambia,disabled:e.desactiva},null,8,["modelValue","onIonChange","disabled"])])),_:1}),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{slot:"start"}),(0,t.Wm)(i,{position:"floating"},{default:(0,t.w5)((()=>[Ge])),_:1}),(0,t.Wm)(s,{placeholder:"Contraseña",modelValue:e.contrasena2,"onUpdate:modelValue":n[3]||(n[3]=n=>e.contrasena2=n),type:"password",onIonChange:e.inputPassCambia,disabled:e.desactiva},null,8,["modelValue","onIonChange","disabled"])])),_:1})])),_:1})])),_:1})])),_:1}),""!=e.mensaje?((0,t.wg)(),(0,t.j4)(p,{key:0},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,$.zw)(e.mensaje),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})):(0,t.kq)("",!0),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(_,{onClick:e.creaUsuario,disabled:e.desactiva},{default:(0,t.w5)((()=>[Le])),_:1},8,["onClick","disabled"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var Ee=(0,t.aZ)({name:"ViewRegistro",components:{IonPage:l._i,IonContent:l.W2,IonGrid:l.jY,IonRow:l.Nd,IonCol:l.wI,IonInput:l.pK,IonButton:l.YG,IonList:l.q_,IonItem:l.Ie,IonLabel:l.Q$,IonCard:l.PM,IonCardTitle:l.Dq,IonCardSubtitle:l.tO,IonCardHeader:l.Zi,IonImg:l.Xz,IonThumbnail:l.Bs},setup(){const e=(0,D.iH)(""),n=(0,D.iH)(""),o=(0,D.iH)(""),a=(0,D.iH)(""),u=(0,D.iH)(""),l=(0,D.iH)(!1),r=(0,D.iH)(!1),i=(0,t.f3)("axios");return{usuario:e,contrasena:n,contrasena2:o,correo:a,error:l,mensaje:u,desactiva:r,creaUsuario:()=>{n.value==o.value?(l.value=!1,i.post("/registro/",{u:e.value,c:a.value,p:n.value,p2:o.value}).then((e=>{console.log(e.data),"error"in e.data?u.value=e.data.error:(r.value=!0,u.value="Usuarix creadx. Vuelve al inicio e intenta ingresar con tu nuevo usuario y contraseña :-)")}))):u.value="Las contraseñas deben ser iguales"},inputPassCambia:()=>{n.value!=o.value?u.value="Las contraseñas deben ser iguales":u.value=""}}}});const Ye=(0,i.Z)(Ee,[["render",Ze],["__scopeId","data-v-2db6b604"]]);var Ae=Ye;const Se=[{path:"/",name:"login",component:R},{path:"/registro",name:"registro",component:Ae},{path:"/menu/",name:"menu",component:C,children:[{path:"juego",name:"juego",component:X},{path:"nuevoJuego",name:"nuevoJuego",component:se},{path:"tutorial",name:"tutorial",component:_e},{path:"cargar",name:"cargar",component:Me}]}],Ke=(0,c.p7)({history:(0,c.PO)("/"),routes:Se});var Fe=Ke,Qe=(o(8851),o(1292),o(1633),o(1045),o(6187),o(2299),o(3423),o(4687),o(9147),o(6250),o(5939));const Xe=Qe.Z.create();Xe.defaults.xsrfHeaderName="X-CSRFTOKEN",Xe.defaults.xsrfCookieName="csrftoken",Xe.defaults.baseURL="https://proyectouniacc.eastus.cloudapp.azure.com/";const $e=(0,I.WB)(),en=(0,a.ri)(d).use(l.oX).use(Fe).use($e);en.provide("pinia",$e),en.provide("axios",Xe),Fe.isReady().then((()=>{en.mount("#app")}))}},n={};function o(a){var t=n[a];if(void 0!==t)return t.exports;var u=n[a]={exports:{}};return e[a].call(u.exports,u,u.exports,o),u.exports}o.m=e,function(){var e=[];o.O=function(n,a,t,u){if(!a){var l=1/0;for(d=0;d<e.length;d++){a=e[d][0],t=e[d][1],u=e[d][2];for(var r=!0,i=0;i<a.length;i++)(!1&u||l>=u)&&Object.keys(o.O).every((function(e){return o.O[e](a[i])}))?a.splice(i--,1):(r=!1,u<l&&(l=u));if(r){e.splice(d--,1);var s=t();void 0!==s&&(n=s)}}return n}u=u||0;for(var d=e.length;d>0&&e[d-1][2]>u;d--)e[d]=e[d-1];e[d]=[a,t,u]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var a in n)o.o(n,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(n,a){return o.f[a](e,n),n}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{16:"7959b51a",238:"5ff4c42d",343:"f04793f4",433:"482df038",482:"c57595f1",502:"c89f20c8",520:"a888fe85",727:"5eb95bb7",728:"83cbac22",799:"6c373874",990:"8fb50b12",993:"8cb75639"}[e]+".js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="front:";o.l=function(a,t,u,l){if(e[a])e[a].push(t);else{var r,i;if(void 0!==u)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var c=s[d];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==n+u){r=c;break}}r||(i=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.setAttribute("data-webpack",n+u),r.src=a),e[a]=[t];var m=function(n,o){r.onerror=r.onload=null,clearTimeout(p);var t=e[a];if(delete e[a],r.parentNode&&r.parentNode.removeChild(r),t&&t.forEach((function(e){return e(o)})),n)return n(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),i&&document.head.appendChild(r)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={143:0};o.f.j=function(n,a){var t=o.o(e,n)?e[n]:void 0;if(0!==t)if(t)a.push(t[2]);else{var u=new Promise((function(o,a){t=e[n]=[o,a]}));a.push(t[2]=u);var l=o.p+o.u(n),r=new Error,i=function(a){if(o.o(e,n)&&(t=e[n],0!==t&&(e[n]=void 0),t)){var u=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;r.message="Loading chunk "+n+" failed.\n("+u+": "+l+")",r.name="ChunkLoadError",r.type=u,r.request=l,t[1](r)}};o.l(l,i,"chunk-"+n,n)}},o.O.j=function(n){return 0===e[n]};var n=function(n,a){var t,u,l=a[0],r=a[1],i=a[2],s=0;if(l.some((function(n){return 0!==e[n]}))){for(t in r)o.o(r,t)&&(o.m[t]=r[t]);if(i)var d=i(o)}for(n&&n(a);s<l.length;s++)u=l[s],o.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return o.O(d)},a=self["webpackChunkfront"]=self["webpackChunkfront"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(9396)}));a=o.O(a)})();
//# sourceMappingURL=app.b9bc7a40.js.map