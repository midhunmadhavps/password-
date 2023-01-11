$(document).ready(function() {
    let $pw = $('#password');
    let $t = $('#toggle');
    
    function setOriginalState() {
      $pw.attr('type', 'password');
      $t.attr('src','eyeimage.jpeg');
    }
  
    $t.on('click', () => {
      const isPw = $pw.attr('type') === 'password'
      
      if (isPw) {
        $pw.attr('type', 'text');
        $t.attr('src','eyeslash.jpeg');
        
        setTimeout(setOriginalState, 10000);
      } else {
        setOriginalState();
      }
    })
  });
