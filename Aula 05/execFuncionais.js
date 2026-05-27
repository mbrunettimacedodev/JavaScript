/*
Crie um programa com a idade do aluno e se ele possui autorização(responda com sim ou nao).
O sistema deve mostrar:
- Acesso permitido, se o aluno tiver 14 anos ou mais e autorização = sim.
- Acesso permitido com responsavel, se o aluno tiver 12 ou 13 anos e autorização = sim
- Acesso negado, se o aluno tiver menos de 12 anos ou se nao tiver autorizacao*/ 

idadeAluno = 14
autorizacao = "sim"


if(idadeAluno >= 14 && autorizacao == "sim"){
    console.log("Acesso permitido!")
}else if((idadeAluno == 12 || idadeAluno == 13) && autorizacao == "sim"){
    console.log("Acesso permitido com responsável")
}else if(idadeAluno < 12 || autorizacao == "nao"){
    console.log("Acesso negado")
}else{
    console.log("Valor inválido")
}

