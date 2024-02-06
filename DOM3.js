
window.addEventListener('keydown', (e) => {
    const insert = document.getElementById('insert')
    insert.innerHTML = `
    <div class="key">
        ${e.key}    
        <small>e.key</small>
    </div>

   <div class="key">
        ${e.keyCode} 
        <small>e.keyCode</small>
    </div>

   <div class="key">
        ${e.code} 
        <small>e.Code</small>
    </div><br>
    <button onclick="refreshPage()">Refresh Page</button>
    ` 
    const btn =document.querySelector('button')
    function refreshPage() {
        // Reload the current URL
        location.reload();
      }
      btn.addEventListener('click',refreshPage)
     
})