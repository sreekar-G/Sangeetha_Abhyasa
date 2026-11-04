/* Shared list of tools: add a new tool here once, and the tab bar on every page
   plus the cards on the home page update automatically. */
(function(){
  var TOOLS=[
    {id:"aadi",name:"Aadi",desc:"8 aksharas · I4 O O · chatusra jathi triputa",pat:"cfffcwcw"},
    {id:"rupaka",name:"Rupaka",desc:"3 counts · clap, clap, wave · “ta ki ta”",pat:"ccw"},
    {id:"misra-chapu",name:"Misra chapu",desc:"7 aksharas · 3 + 2 + 2 · “ta ki ta · ta ka · di mi”",pat:"wccc"}
  ];
  var base=document.currentScript.src.replace(/tools\.js[^/]*$/,"");
  var cur=document.body.getAttribute("data-tool")||"home";
  function esc(t){return t.replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]})}
  var nav=document.getElementById("tabs");
  if(nav){
    var items=[{id:"home",name:"Home",href:base}].concat(TOOLS.map(function(t){return{id:t.id,name:t.name,href:base+t.id+"/"}}));
    nav.innerHTML=items.map(function(t){return '<a href="'+t.href+'"'+(t.id===cur?' aria-current="page"':'')+'>'+esc(t.name)+'</a>'}).join("");
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