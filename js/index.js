function cadastrar(){
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let tel = document.getElementById('tel').value
    let objetivo = document.getElementById('objetivo').value
    switch(objetivo){
        case '1':
            objetivo = 'Conseguir um Emprego'
            break;
        case '2':
            objetivo = 'Mudar de Carreira'
            break;
        case '3':
            objetivo = 'Aprender Programação'
            break;
        case '4':
            objetivo = 'Aprender Soft-Skills'
            break;
        case '5':
            objetivo = 'Conhecer Profissionais'
            break;
        case '6':
            objetivo = 'Ter Mentoria Profissional'
            break;
        case '7':
            objetivo = 'Acesso a Comunidade'
            break;
        case '8':
            objetivo = 'Outros'
            break;
        
    }
    let conhecer = document.getElementById('conhece').value
    switch(conhecer){
        case 'a':
            conhecer = 'Facebook/Instagram'
            break;
        case 'b':
            conhecer = 'Anuncio do Google'
            break;
        case 'c':
            conhecer = 'Por Alguma Empresa'
            break;
        case 'd':
            conhecer = 'Imprensa'
            break;
        case 'e':
            conhecer = 'Indicação de Amigos'
            break;
        case 'f':
            conhecer = 'Panfletos/Jornais'
            break;
        case 'g':
            conhecer = 'Pesquisa do Google'
            break;
    }
    let politica = document.getElementById('politica').value

    if(nome == '' || email == '' || tel == '' || objetivo == '' || conhecer == ''){
        document.getElementById('aviso').innerHTML = 'Você precisa preencher todos os campos!'
        document.getElementById('aviso').style.color = 'red'
        document.getElementById('aviso').style.marginBottom = '-15px'
        document.getElementById('aviso').style.textDecoration = 'underline'
    }else if(politica ==='s'){

        document.getElementById('dnome').value = nome
        document.getElementById('demail').value = email
        document.getElementById('dtel').value = tel
        document.getElementById('dobj').value = objetivo
        document.getElementById('conhecer').value = conhecer
        document.getElementById('politic').value = 'Sim'
        document.getElementById('aviso').innerHTML = ''
        
    }else if(politica === 'n' || '--' || ''){
        document.getElementById('aviso').innerHTML = 'Você precisa aceitar os termos'
        document.getElementById('aviso').style.color = 'red'
        document.getElementById('aviso').style.marginBottom = '-15px'
        document.getElementById('aviso').style.textDecoration = 'underline'
    }
    
   
}

function confirmar(){

    let dnome = document.getElementById('dnome').value
    let demail = document.getElementById('demail').value
    let dtel = document.getElementById('dtel').value

    if(dnome, demail, dtel != ''){
        document.getElementById('titulo').innerHTML = ''
        document.getElementById('texto').innerHTML = ''
        document.getElementById('texto2').innerHTML = ''
        document.getElementById('titulo').className = 'destaque'
        document.getElementById('titulo').innerHTML = `Parabens ${dnome}!!!`
        document.getElementById('texto').innerHTML = `Avisaremos no seu Celular ${dtel} \n e no seu E-mail ${demail} \n sobre as proximas etapas!!`


    }
}

function corrigir(){
    document.getElementById('dnome').value = ''
    document.getElementById('demail').value = ''
    document.getElementById('dtel').value = ''
    document.getElementById('dobj').value = ''
    document.getElementById('conhecer').value = ''
    document.getElementById('politic').value = ''
}