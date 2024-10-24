async function carregar_animais(){
 const response = await axios.get("http://localhost:8000/animais/")
      const animais = response.data
      const lista = document.getElementById("lista_animais")
      
      animais.forEach(animal => {  
          const item = document.createElement("li")
          const {nome,idade,sexo,cor,id} = animal
          const linha = `${nome} -- idade : ${idade} -- sexo : ${sexo} -- cor : ${cor} -- id: ${id}`     
          item.innerText = linha  
          lista.appendChild(item)
      });
      
}
function cadastrar_animal() {
    const form_animal = document.getElementById("form_animal");
    const input_nome = document.getElementById("nome");
    const input_idade = document.getElementById("idade");
    const input_sexo = document.getElementById("sexo");
    const input_cor = document.getElementById("cor");

    form_animal.onsubmit = async (event) => {
        event.preventDefault();
        const nome_animal = input_nome.value;
        const idade_animal = input_idade.value;
        const sexo_animal = input_sexo.value;
        const cor_animal = input_cor.value;

        try {
            await axios.post("http://localhost:8000/animais/", {
                id:"",
                nome: nome_animal,
                idade: idade_animal,
                sexo:sexo_animal,
                cor: cor_animal,
            });
            alert("Animal cadastrado com sucesso");
            window.location.reload();
        } catch (error) {
            console.error("Erro ao cadastrar o animal:", error);
            alert("Erro ao cadastrar o animal");
        }
        
    };
}



function app(){
    console.log("App iniciada");
    carregar_animais()
    cadastrar_animal()
    
}
app()