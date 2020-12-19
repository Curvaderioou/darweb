if (window.SimpleAnime){
new SimpleAnime();
}

new SimpleForm({
  form: ".formphp", // seletor do formulário
  button: "#enviar", // seletor do botão
  erro: 
  "<div id='form-erro'><h2>Ocorreu um erro!</h2><p>Você pode tentar novamente ou enviar direto para felipedegenerportella@bikcraft.com.</p></div>", // mensagem de erro
  sucesso: 
  "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
});
