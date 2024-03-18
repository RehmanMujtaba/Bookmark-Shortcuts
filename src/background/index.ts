console.log('background is running')

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'COUNT') {
    console.log('background has received a message from popup, and count is ', request?.count)
  }
})

chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
  console.log(message)
  console.log(sender)
  sendResponse("Received message in background!!")
})

  