const $ = (selector) => document.querySelector(selector)

const $nMomento = $('#nMomento')
const $tMomento = $('#tMomento')
const $tInMomento = $('#tInMomento')
const $btnGenerate = $('#generate')

const Momento = (nMomento, tMomento, tInMomento) => {
    return `
    <div id="accordion">
  <div class="card">
    <div class="card-header">
      <!-- href = #epa + n° etapa, ejemplo: #epa2 -->
      <h5>
        <a class="card-link" data-toggle="collapse" href="#epa${nMomento}"aria-expanded="true"><span style=""><span style=""><span style="color: rgb(0, 15, 159);"><img src="https://escueladigital3.mendoza.edu.ar/draftfile.php/13544/user/draft/892811634/Recurso%2029.png" alt="" width="40" height="173" role="presentation" class="img-fluid atto_image_button_left"><strong> ${tMomento} </strong><img src="https://escueladigital3.mendoza.edu.ar/draftfile.php/13544/user/draft/892811634/Recurso%2023.png" alt="flecha abajo" width="25" height="14" role="presentation" class="img-fluid atto_image_button_text-bottom"></span></span></span></a>
      </h5>
    </div>
        <!-- id = epa + n° etapa, ejemplo: epa2 -->
    <div id="epa${nMomento}" class="collapse show" data-parent="#accordion" style="">

      <!-- Agregar todo dentro de esta parte 👇 -->
      <h1>${tInMomento !== "" ? tInMomento : "Cambiar o Borrar"}</h1>
            


      <!-- Agregar todo dentro de esta parte ☝️ -->
        <h1>Esto lo borran cuando terminen el momento/etapa</h1>
    </div>
  </div>
</div>
    `
}

const generateMomento = () => {
    const nMomento = ($nMomento.value).trim()
    const tMomento = ($tMomento.value).trim()
    const tInMomento = ($tInMomento.value).trim()

    if(tMomento === "" || nMomento === "") return alert("N° de momento o titulo de momento no puede estar vacio")
    
    const momento =Momento(nMomento, tMomento, tInMomento)

    $nMomento.value = ''
    $tMomento.value = ''
    $tInMomento.value = ''

    return momento
}

$btnGenerate.addEventListener('click', (e) => {
    e.preventDefault();
    const momento = generateMomento()
    $('#code').innerText = ""
    $('#code').innerText = momento
})