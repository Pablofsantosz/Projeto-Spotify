//Arquivo de comentarios

import React from 'react'

const App2 = () => {
  return (
    <div>App2</div>
  )
}

export default App2
//rafce(comando) que cria uma funtion arrow == react arrow function componet export 
    //Maneira rapida de criar nosso componetes

/*  Invez de
const App2 = () => <h1>ola mundo</h1>;

*/


//Nomeação de Componete
    // PascalCase
    // exemplo: MainSection


// Export default, posso importar com qualquer nome e sem chaves.
// export " sem default", so posso importar entre chaves e com nome exportado


// Self closing tag|(uma tag que se fecha soznha)
    // <Header></Header>
    // <Heade/>



// Forma de nomear COMPONENTES(PASCALCASE)
// Nomeaçaõ de variavel, funcao...
    // camelCase
    


    /*.caixa {
        display: block;  /* O elemento é do tipo bloco (ocupa toda a largura da linha) 
        
        width: 387px;     Largura do conteúdo (Content) 
        height: 94.438px;  Altura do conteúdo (Content) 
      
        /* Padding = espaço interno entre o conteúdo e a borda 
        padding: 8px;    
      
         Border = linha ao redor do padding 
        border: 1px solid black;  
      
        /* Margin = espaço externo que separa esse elemento de outros elementos 
        margin: 8px;     
      }
      
      
      --- Box Model (Modelo de Caixa) explicado ---
      
      Content -> O conteúdo visível (texto, imagem, etc)
      Padding -> Espaço entre o conteúdo e a borda (8px em todos os lados)
      Border  -> Linha ao redor do padding (1px sólido preto)
      Margin  -> Espaço fora da borda que separa de outros elementos (8px)
      
      Largura total do elemento na tela:
      width + padding*2 + border*2 + margin*2
      387 + (8*2) + (1*2) + (8*2)
      
      Altura total do elemento na tela:
      height + padding*2 + border*2 + margin*2
      94.438 + (8*2) + (1*2) + (8*2)
    */


//Nomeação de classes em CSS
    // Metodologia BEM
    // Blocks
    // Elementes
    // Modifiers
// Bloco__elemento --modificador
    //header
    //header__link
    //header__link--small

//restrição do react ele so pode devolver um elemento por isso usar a tag vazia
    // Tag vazia em react
    // No react App.jsx ele so pode retornar um componete por vez por isso entra a tag vazia para funcionar corretamente


    
//Componentes recebem "Props"
    //Props   = passagem de argumentos e parametros para definir uma diferenças entre commponentes onde por exemplo na main tem dois conpontes um com "Artistas populares" de titulo e outro com outro titulo usamos o props  , como componetes sao funções é como se fosse os parametros que a funções recebem



 /* {items === 5 ? (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        ) : (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        )} */




/*<div className="item-list__container">
  { 
    // Cria um array com a quantidade de itens especificada pela prop 'items'
    // Exemplo: se items = 5 → cria um array com 5 posições

    Array(items)

      // Preenche o array vazio com 'undefined' (ou qualquer valor),
      // isso é necessário porque o .map() não funciona em posições "vazias"
      // Exemplo: [undefined, undefined, undefined, undefined, undefined]
      .fill()

      // Para cada elemento do array, renderiza um <SingleItem />
      // O resultado será a renderização de exatamente 'items' SingleItems
      .map(() => (
        <SingleItem />
      )) 
  }
</div>
*/
