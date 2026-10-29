/* Envío de formularios vía Web3Forms — único punto de configuración para
   autodiagnósticos y contacto. Los datos van del navegador a Web3Forms. */
(function(){
  var ENDPOINT='https://api.web3forms.com/submit';
  var ACCESS_KEY='ae96a81b-fc42-41e3-a4c7-5c16fc1a9ba3';
  var TIMEOUT_MS=15000;

  function submit(payload){
    var body={access_key:ACCESS_KEY};
    Object.keys(payload).forEach(function(k){body[k]=payload[k];});
    var ctrl=window.AbortController?new AbortController():null;
    var timer=ctrl?setTimeout(function(){ctrl.abort();},TIMEOUT_MS):null;
    return fetch(ENDPOINT,{
      method:'POST',
      headers:{'Content-Type':'application/json',Accept:'application/json'},
      body:JSON.stringify(body),
      signal:ctrl?ctrl.signal:undefined
    }).then(function(res){return res.json();})
      .then(function(d){if(timer)clearTimeout(timer);return d;},
            function(e){if(timer)clearTimeout(timer);throw e;});
  }

  window.IntelixForms={submit:submit};
})();
