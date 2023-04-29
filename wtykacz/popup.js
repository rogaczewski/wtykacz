
document.querySelector('#btn-h1').addEventListener('click',()=>{CheckElements('h1')})


const CheckElements =(el)=>{

  chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{ 
      chrome.tabs.sendMessage(tabs[0].id,{ from:'popups',subject:'check',element:el })
   })
  
}



