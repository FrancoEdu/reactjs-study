import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useState, useEffect } from "react";

//https://api.github.com/orgs/rockeatseat/repos

export function RepositoryList() {
    const [repositories, setRepositorios] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/FrancoEdu/repos").then(response=>response.json())
        .then(data=>setRepositorios(data)) //quando eu obtiver uma resposta da api, vou converter essa resposta para json, quando convertido terei os dados
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    );
}