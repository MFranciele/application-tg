import { useEffect, useState } from "react";
import { listUserModel, userModel } from "../../models/user-model";
import { getUser, deleteUser, updateUser, createUser } from "../../services/user-services";
import './table.css';

export function TableUsers() {
  const [users, setUsers] = useState<listUserModel>([]);
  const [user, setUser] = useState<userModel | null>(null);

  async function getAllUsers() {
    try {
      const result = await getUser();
      setUsers(result || []);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  async function handleDeleteUser(id: number) {
    try {
      const success = await deleteUser(id);
      if (success) {
        setUsers(users.filter(user => user.id !== id));
      }
    } catch (error) {
      console.error("Erro ao excluir usuário:  ", error);
    }
  }

  function handleEditUser(user: userModel) {
    setUser(user);
  }

  function handleCreateUser() {
    setUser({ id: 0, name: "", email: "" }); 
  }

  async function handleSaveUser() {
    if (user) {
      try {
        if (user.id === 0) {
          const newUser = await createUser(user);
          setUsers([...users, newUser]);
        } else {
          const updatedUser = await updateUser(user.id, user);
          setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
        }
        setUser(null); 
      } catch (error) {
        console.error("Erro ao salvar usuário: ", error);
      }
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="container">
      <h2>Demonstrativo de CRUD básico</h2>
        <div className="display"> 
            <h3>Gerenciamento de usuários</h3>
            <button className="button" onClick={handleCreateUser}>
              <i className="fas fa-user-plus"></i>
            </button>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user: userModel) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name || "N/A"}</td>
                    <td>{user.email || "N/A"}</td>
                    <td>
                      <div className="cell">
                        <button className="button" onClick={() => handleEditUser(user)}><i className="fas fa-pen"></i></button>
                        <button className="button" onClick={() => handleDeleteUser(user.id)}><i className="fas fa-trash"></i></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>Nenhum usuário encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
  
      {user && (
        <>
          <div className="modal-overlay" onClick={() => setUser(null)}></div>
          <div className="edit-form">
            <h3>{user.id === 0 ? "Criar Novo Usuário" : "Editar Usuário"}</h3>
            <div>
              <label>
                Nome:
                <input
                  type="text"
                  className="label"
                  value={user.name || ""}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </label>
            </div>
            <div>
              <label>
                Email:
                <input
                  type="email"
                  className="label"
                  value={user.email || ""}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </label>  
            </div>
            <div className="cell">
              <button onClick={() => setUser(null)}>Cancelar</button>
              <button onClick={handleSaveUser}>Salvar</button>
            </div>
          </div>
        </>
      )}
    </>
  );
 }