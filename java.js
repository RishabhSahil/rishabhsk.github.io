document.getElementById('frmsearch').onsubmit = function() {
    window.location = 'https://rishabhsahil.github.io/#gsc.tab=0&gsc.q='+  document.getElementById('textSearch').value;
    return false;		
}