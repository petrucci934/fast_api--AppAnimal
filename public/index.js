async function carregar_animais(){
 const response = await axios.get("http://localhost:8000/animais/")
      const animais = response.data
      const lista = document.getElementById("lista_animais")
      
      animais.forEach(animal => {        
          const item = document.createElement("li")
          item.innerText = animal.nome    
          lista.appendChild(item)
      });
      
}
function cadastrar_animal() {
    const form_animal = document.getElementById("form_animal");
    const input_nome = document.getElementById("nome");

    form_animal.onsubmit = async (event) => {
        event.preventDefault();
        const nome_animal = input_nome.value;

        try {
            await axios.post("http://localhost:8000/animais/", {
                id:"",
                nome: nome_animal,
                idade: 45,
                sexo: "Fêmea",
                cor: "Branco",
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