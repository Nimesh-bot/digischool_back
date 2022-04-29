exports.error_hand = (err)=>{
    const erro = String(err)
    const er = erro.split('\n')[0].split(':')[0].trim()
    console.log(erro)

    if(er.startsWith("ValidationError")){
        return(erro.split('\n')[0].split(':')[2].split(',')[0].trim())

    }
}