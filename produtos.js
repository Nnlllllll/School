const produtos = [
    {"id":1,"nome": "Notebook dell", "preço": 501},
    {"id":2,"nome": "Notebook Acer", "preço": 400},
    {"id":3,"nome": "Notebook ThinkPad", "preço": 1500},
    {"id":4,"nome": "Notebook Samsung", "preço": 200},
    {"id":5,"nome": "Impressora", "preço": 3500},
]

const nomes = [];
for (let i = 0; i <= 4; i++){
    const { nome } = produtos[i];
    nomes.push(nome);
  }


const filtro500 = produtos.filter(produtos => produtos.preço > 500);

let somatotal = 0;
for(let i = 0; i <=4; i++){
    somatotal = somatotal + produtos[i].preço;
};

module.exports={
    somatotal,
    filtro500,
    nomes
}


