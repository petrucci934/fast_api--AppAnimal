from fastapi import FastAPI
from typing import List,Optional
from pydantic import BaseModel
from uuid import uuid4
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


origins = ["http://127.0.0.1:5500"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Animal(BaseModel):
    id: Optional[str]
    nome: str
    idade: int
    sexo: str
    cor: str

banco: List[Animal] = []

@app.get("/animais/")

def listar_animais():
    return banco

@app.get("/animais/{animal_id}")

def listar_animal_id(animal_id: str):
    animal = next((animal for animal in banco if animal.id == animal_id), None)
    if animal:
        return animal
    return {"error": "Animal não encontrado"}



@app.post("/animais/")

def cadastrar_animal(animal: Animal):
    animal.id = str(uuid4())
    banco.append(animal)
    return {"Animal cadastrado com sucesso !"}


@app.delete("/animais/{animal_id}")

def deletar_animal_id(animal_id: str):
    animal = next((animal for animal in banco if animal.id == animal_id), None)
    if animal:
        banco.remove(animal) 
        return {"message": "Animal deletado com sucesso!"}
    return {"error": "Animal não encontrado"}
