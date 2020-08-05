import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import Loader from '../../../components/Loader';
import categoriasRepositories from '../../../repositories/categorias';

import {
  StyledLiItem, StyledLi, Dot, FormWrapper, StyledButtonLink,
} from '../styles';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    cor: '#FF0000',
    link_extra: {
      text: '',
      url: '',
    },
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepositories.getAll()
      .then((categoriasSalvas) => setCategorias(categoriasSalvas));
  }, []);

  return (
    <PageDefault>

      {categorias.length === 0 && (<Loader />)}

      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <FormWrapper>

        <form onSubmit={function handleSubmit(info) {
          info.preventDefault();

          categoriasRepositories.insert({
            titulo: values.titulo,
            cor: values.cor,
            link_extra: {
              text: values.text,
              url: values.url,
            },
          });

          setCategorias([
            ...categorias,
            values,
          ]);

          clearForm();
        }}
        >

          <FormField
            label="Nome da Categoria"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="Text"
            type="text"
            name="text"
            value={values.text}
            onChange={handleChange}
          />

          <FormField
            label="Url"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <Button>Cadastrar</Button>
          <StyledButtonLink to="/">
            Home
          </StyledButtonLink>
        </form>

        <StyledLi>
          <>
            <h2>Categorias Registradas:</h2>

            {categorias.map((categoria) => (
              <StyledLiItem key={`${categoria.titulo}${categoria.indice}`}>
                <Dot />
                <span>{categoria.titulo}</span>
              </StyledLiItem>
            ))}
          </>
        </StyledLi>

      </FormWrapper>

    </PageDefault>
  );
}

export default CadastroCategoria;
