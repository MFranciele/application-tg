import { userModel } from "../models/user-model";

const url = 'https://0.0.0.0:8080/api/users';

export const getUser = async () =>{
  try {
    const response = await fetch(url);
    if(!response.ok){
      throw new Error('Erro ao buscar dados');
    }
    const data = await response.json();
    console.log('data:', data);
    return data;
  } catch (erro){
    return null;
  }
};

export const createUser = async (user: userModel) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return null;
  }
};

export const updateUser = async (id: number, updatedUser: any) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    });
    if (!response.ok) {
      throw new Error('Erro ao atualizar usuário');
    }
    const data = await response.json();
    console.log('Usuário atualizado:', data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteUser = async (id: number) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Erro ao deletar usuário');
    }
    console.log('Usuário deletado');
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
