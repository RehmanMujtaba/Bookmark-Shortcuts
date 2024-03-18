console.info('contentScript is running')

window.addEventListener('keypress', function (key) {
  console.log(key.key)
  let keyvalue = key.key
  chrome.runtime.sendMessage(null, keyvalue, (response) => {
    console.log('Sent key value' + response)
  })
})
