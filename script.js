const id = 111
let userName = "Ana"

console.log(id,userName)


if(id == 111 || userName == "Ana"){
  console.log("Deseja mudar sua senha?")
}
else{
  console.log("Você não pode mudar a sua senha!")
}

let senhaLog = "Cruz4353"
const admSite = true

console.log(senhaLog,admSite)

if(userName == "Ana" && senhaLog == "Cruz4353"){
  console.log("Por favor, insira sua nova senha")
}
else{
  console.log("Username / senha incorretos")
}
if (userName == "Ana" && senhaLog == "Cruz4353" && admSite == true){
  console.log("Bem-vindo(a) à área do administrador")
}
else{
  console.log("Você não pode acessar essa parte do sistema")
}


let usuario01 = {
  id: 1,
  nome: "Ana",
  idade: 27,
  sexo: "Feminino",
} 

console.log(usuario01["nome"])
console.log(usuario01.id)

if (usuario01.id ===3){
  console.log("Seu usuário está correto, o que deseja fazer ?")
}
else{
  console.log("Seu usuário não está correto, repita a informação!")
}

// comentario no javascript é ctrl + ;
