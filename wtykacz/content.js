chrome.runtime.onMessage.addListener((msg, sender, response) => {

  if( (msg.from==='popups')&&(msg.subject==='check') ){
    
    let text = document.activeElement.value;
    let brandr = text.replace(/(hardox|strenx|docol|greencoat|armox|ramor|duroxite|domex|laser|toolox)\s*®*\s*\.?/gi, function (brand) {
    let b = brand.slice(0,1).toUpperCase();
    let rand = brand.slice(1).toLowerCase().replace(/®*\.?/g, "");
    if (brand.endsWith(".")) {
      return b + rand.trimEnd() + "®.";
    } else {
      return b + rand.trimEnd() + "® ";
    };
  })
  
  document.activeElement.value = brandr.trim();

  }  else if( (msg.from==='background')&&(msg.subject==='change') ){

    let text = document.activeElement.value;
    let brandr = text.replace(/(hardox|strenx|docol|greencoat|armox|ramor|duroxite|domex|laser|toolox)\s*®*\s*\.?/gi, function (brand) {
    let b = brand.slice(0,1).toUpperCase();
    let rand = brand.slice(1).toLowerCase().replace(/®*\.?/g, "");
    if (brand.endsWith(".")) {
      return b + rand.trimEnd() + "®.";
    } else {
      return b + rand.trimEnd() + "® ";
    };
  })
  
  document.activeElement.value = brandr.trim();
}
});


