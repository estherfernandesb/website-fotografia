# Website Fotográfico - React.Js + Vite

## Visão Geral

Este projeto é um website fotográfico desenvolvido em React para exibir o trabalho de Lucas Esteves Bastos, fotógrafo e publicitário. O site foi construído para reforçar conhecimentos em front-end, utilizando React, Yarn e styled-components.

## Estrutura do Projeto

O projeto foi organizado em componentes reutilizáveis:

- `Header` - Cabeçalho do site
    
- `Body` - Conteúdo principal (documentado aqui)
    
- `Footer` - Rodapé do site
    

## Componente Body

### Descrição

O componente `Body` é responsável pelo conteúdo principal do site, contendo quatro seções:

1. Sobre o fotógrafo
    
2. Galeria de fotos
    
3. Projetos
    
4. Contato
    

### Tecnologias Utilizadas

- React (v17 ou superior)
    
- styled-components (para estilização CSS-in-JS)
    
- Yarn (gerenciador de pacotes)
  
### Funcionalidades

1. **Seção "Sobre"**:
    
    - Apresentação do fotógrafo
        
    - Breve descrição do seu objetivo
        
    - Link para página detalhada
        
2. **Seção "Galeria"**:
    
    - Imagem representativa
        
    - Link para a galeria completa
        
3. **Seção "Projetos"**:
    
    - Imagem representativa
        
    - Link para os projetos
        
4. **Seção "Contato"**:
    
    - Imagem representativa
        
    - Link para informações de contato
        

### Estilização

- Uso de `styled-components` para CSS-in-JS
    
- Efeitos hover nas imagens e links
    
- Tipografia Cinzel para um estilo elegante
    
- Layout responsivo com imagens cobrindo toda a área
    
- Transições suaves para interações do usuário
    

### Variáveis CSS

O projeto utiliza variáveis CSS para cores:

- `--primary`: cor de fundo principal
    
- `--text`: cor do texto
    
- `--ciano`: cor de destaque em hover
    

### Responsividade

O componente foi desenvolvido com:

- Altura de viewport (100vh) para cada seção
    
- Imagens que cobrem toda a área disponível (`object-fit: cover`)
    
- Posicionamento absoluto para os textos sobrepostos
    

## Como Executar o Projeto

1. Clone o repositório
    
2. Instale as dependências com `yarn install`
    
3. Execute o projeto com `yarn start`
    

## Dependências

- React
    
- styled-components
    
- Yarn (como gerenciador de pacotes)
    

## Próximos Passos (Melhorias Possíveis)

1. Implementar rotas para cada seção
    
2. Adicionar mais interatividade com JavaScript
    
3. Melhorar a responsividade para mobile
    
4. Criar um carrossel para a galeria
    
5. Adicionar formulário de contato funcional
