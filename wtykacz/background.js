chrome.commands.onCommand.addListener(function (brand) {
    chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{ 
        chrome.tabs.sendMessage(tabs[0].id,{ from:'background',subject:'change'})
     });
}

)

/*
chrome.commands.onCommand.addListener(function (command) {
  console.log(`Command "${command}" triggered`);

  const CheckElements =(el)=>{

    chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{ 
        chrome.tabs.sendMessage(tabs[0].id,{ from:'background',subject:'change'})
     });
    
  }
  
  
});
*/