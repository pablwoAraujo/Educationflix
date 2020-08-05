import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import { StyledButtonLink, FormWrapper } from '../styles';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <FormWrapper>

        <form onSubmit={(event) => {
          event.preventDefault();

          const catEscolhida = categorias.find(
            (categoria) => categoria.titulo === values.categoria,
          );

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: catEscolhida.id,
          })
            .then(() => {
              history.push('/');
            });
        }}
        >
          <FormField
            label="Título do Vídeo"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="URL"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Categoria"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />

          <Button type="submit">
            Cadastrar
          </Button>

          <StyledButtonLink to="/cadastro/categoria">
            Cadastrar Categoria
          </StyledButtonLink>
        </form>
      </FormWrapper>
    </PageDefault>
  );
}

export default CadastroVideo;
