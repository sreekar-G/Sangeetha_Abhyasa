/* Shared list of tools: add a new tool here once, and the tab bar on every page
   plus the cards on the home page update automatically. */
(function(){
  var TOOLS=[
    {id:"aadi",name:"Aadi",desc:"8 aksharas · I4 O O · chatusra jathi triputa",pat:"cfffcwcw"},
    {id:"rupaka",name:"Rupaka",desc:"3 counts · clap, clap, wave · “ta ki ta”",pat:"ccw"},
    {id:"misra-chapu",name:"Misra chapu",desc:"7 aksharas · 3 + 2 + 2 · “ta ki ta · ta ka · di mi”",pat:"wccc"},
    {id:"khanda-chapu",name:"Khanda chapu",desc:"5 aksharas · 2 + 1 + 2 · “ta ka · ta · ki ta”",pat:"ccc"},
    {id:"khanda-triputa",name:"Khanda triputa",desc:"9 aksharas · I5 O O · khanda jathi triputa",pat:"cffffcwcw"}
  ];
  var base=document.currentScript.src.replace(/tools\.js[^/]*$/,"");
  var cur=document.body.getAttribute("data-tool")||"home";
  function esc(t){return t.replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]})}
  var nav=document.getElementById("tabs");
  if(nav){
    var st=document.createElement("style");
    st.textContent=".tabs{overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch}.tabs::-webkit-scrollbar{display:none}.tabs a{flex:0 0 auto;padding:8px 12px;white-space:nowrap}";
    document.head.appendChild(st);
    var items=[{id:"home",name:"Home",href:base}].concat(TOOLS.map(function(t){return{id:t.id,name:t.name,href:base+t.id+"/"}}));
    nav.innerHTML=items.map(function(t){return '<a href="'+t.href+'"'+(t.id===cur?' aria-current="page"':'')+'>'+esc(t.name)+'</a>'}).join("");
    var on=nav.querySelector("[aria-current]");if(on&&on.scrollIntoView)on.scrollIntoView({block:"nearest",inline:"center"});
  }
  var list=document.getElementById("toolList");
  if(list){
    list.innerHTML=TOOLS.map(function(t){
      var pat=t.pat.split("").map(function(k){return '<i class="'+k+'"></i>'}).join("");
      return '<a class="tool" href="'+base+t.id+'/"><span class="pat" aria-hidden="true">'+pat+'</span>'
        +'<span><h2>'+esc(t.name)+'</h2><p>'+esc(t.desc)+'</p></span><span class="go-arrow" aria-hidden="true">›</span></a>';
    }).join("");
  }
})();