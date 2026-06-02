import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [

    {
      id: 1,
      name: 'LIPS',
      description: 'Violet Color 101 lipstick',
      price: 320,
      image: 'https://t3.ftcdn.net/jpg/19/03/10/00/240_F_1903100098_QkZo906RJsUZ2xvXybNYnMqGT0zT0acf.jpg'
    },

    {
      id: 2,
      name: 'LIPS',
      description: 'Red Color 202 lipstick',
      price: 220,
      image: 'https://t4.ftcdn.net/jpg/15/44/19/51/240_F_1544195182_e8XghoSpVwBDrnX1jwwwmrpGDzdiBvfZ.jpg'
    },

    {
      id: 3,
      name: 'LIPS',
      description: 'Nude Color 303 lipstick',
      price: 350,
      image: 'https://t4.ftcdn.net/jpg/18/36/09/51/240_F_1836095142_7DpOEnecgKdtrTntCUouj1n1m6O9wC0f.jpg'
    },

    {
      id: 4,
      name: 'LIPS',
      description: 'Shimmering Lipgloss',
      price: 220,
      image: 'https://t3.ftcdn.net/jpg/16/87/89/74/240_F_1687897481_N0MThsSHISnYrwY2aCXMOQXVZgwoMAz7.jpg'
    },

    {
      id: 5,
      name: 'LIPS',
      description: 'Glossy Lipgloss',
      price: 248,
      image: 'https://t4.ftcdn.net/jpg/05/37/21/09/240_F_537210960_exAB1QkwN5xQvdaPqu6NR9kTJN2GI5qW.jpg'
    },


    {
      id: 6,
      name: 'LIPS',
      description: 'Sparkly Lipgloss',
      price: 265,
      image: 'https://t3.ftcdn.net/jpg/12/79/92/14/240_F_1279921468_Wxr4GaP18lCpuj4hqhCY8nXCjHCVuzqC.jpg'
    },
    {
      id: 7,
      name: 'FACE',
      description: 'Light medium 115 foundation',
      price: 650,
      image: 'https://t3.ftcdn.net/jpg/07/08/60/40/240_F_708604068_GZWqUhc3fVtejsWodPe44vE7rOwT6bER.jpg'
    },
    {
      id: 8,
      name: 'FACE',
      description: 'Medium weight 226 foundation',
      price: 695,
      image: 'https://t4.ftcdn.net/jpg/18/56/90/57/240_F_1856905769_PeWEwEtOuuFXARBFnzeAGMBIkDDPKSqy.jpg'
    },
    {
      id: 9,
      name: 'FACE',
      description: 'Dark 337 foundation',
      price: 520,
      image: 'https://t3.ftcdn.net/jpg/07/08/60/40/240_F_708604076_cFt9atUYtgHqkkTrXR2ZfJZfaRGoDyJ5.jpg'
    },
    {
      id: 10,
      name: 'FACE',
      description: 'Light weight 115 concealer',
      price: 220,
      image: 'https://t3.ftcdn.net/jpg/17/23/64/36/240_F_1723643645_3FVuGO2YiZjl4q0W9VfSvRhEU9FNqgnN.jpg'
    },
    {
      id: 11,
      name: 'FACE',
      description: 'Medium weight 226 concealer',
      price: 265,
      image: 'https://t4.ftcdn.net/jpg/18/66/38/47/240_F_1866384767_OCayGwnYfXuoaOp8soOgsfo0aUXRULQA.jpg'
    },
    {
      id: 12,
      name: 'FACE',
      description: 'Dark 337 concealer',
      price: 298,
      image: 'https://t3.ftcdn.net/jpg/18/42/09/32/240_F_1842093267_lWtarceorCOnqZy5wGBAp3w9dKB2bYTZ.jpg'
    },
    {
      id: 13,
      name: 'EYES',
      description: 'Shimmering Eyes XXL volume Mascara',
      price: 200,
      image: 'https://t4.ftcdn.net/jpg/05/89/94/49/240_F_589944977_GDBOkW0rERFbTBzuxnb32bj3eJlJXGX4.jpg'
    },
    {
      id: 14,
      name: 'EYES',
      description: 'Waterproof multi-effect volume Mascara',
      price: 295,
      image: 'https://t4.ftcdn.net/jpg/05/26/79/51/240_F_526795112_O82LLI7WOaX26XMVu2kEj9k7yA6Sc4FK.jpg'
    },
    {
      id: 15,
      name: 'EYES',
      description: 'Blackest Black XXL volume Mascara',
      price: 260,
      image: 'https://t3.ftcdn.net/jpg/02/57/58/16/240_F_257581664_0Eu98Du58BrP7O4iZ0I1bMeuwiIjoSje.jpg'
    },
    {
      id: 16,
      name: 'EYES',
      description: 'Smoky Eyes - 15 shade eyeshadow palette',
      price: 250,
      image: 'https://t4.ftcdn.net/jpg/05/33/57/45/240_F_533574579_bGLX7xpzk1xzfUshhZNR1xjLS0G6QPEM.jpg'
    },
    {
      id: 17,
      name: 'EYES',
      description: 'Pink Patootie - 9 shade eyeshadow palette',
      price: 180,
      image: 'https://t4.ftcdn.net/jpg/04/87/30/89/240_F_487308987_kpsCWq8gE2HzT85Ze72nUhbcm87okHQf.jpg'
    },
    {
      id: 18,
      name: 'EYES',
      description: 'Nude Mood - 7 shade eyeshadow palette',
      price: 150,
      image: 'https://t3.ftcdn.net/jpg/18/51/36/70/240_F_1851367093_hPlsKBZnrJhnnbTKtCNK2jcrtXkvoG13.jpg'
    },
    {
      id: 19,
      name: 'EYES',
      description: 'Waterproof Black Liquid Eyeliner',
      price: 155,
      image: 'https://t3.ftcdn.net/jpg/02/66/52/14/240_F_266521459_rI0t9HgDerevXdfbpa8id83ZN3NC6efo.jpg'
    },
    {
      id: 20,
      name: 'EYES',
      description: 'Brown Liquid Eyeliner',
      price: 155,
      image: 'https://t4.ftcdn.net/jpg/09/98/05/53/240_F_998055316_fT2nFRBJX0f6IYpyxY7zmpajsm9o3KNR.jpg'
    },

    {
      id: 21,
      name: 'EYES',
      description: 'Waterproof White Liquid Eyeliner',
      price: 155,
      image: 'https://t3.ftcdn.net/jpg/02/39/21/50/240_F_239215027_R54vFPqCboPOIfcxaTWdRPYRGswYqQP7.jpg'
    },
    {
      id: 22,
      description: 'Makeup Brushes set  - Champagne',
      name: 'EYES',
      price: 350,
      image: 'https://t3.ftcdn.net/jpg/06/11/36/38/240_F_611363844_yOnThFbH27Nqv0SGaDCqRdiQKFS9R4tH.jpg'
    },
    {
      id: 23,
      name: 'SKINCARE',
      price: 350,
      description: '50ml Hydrating Serum',
      image: 'https://t4.ftcdn.net/jpg/02/68/91/35/240_F_268913574_dhDyQMM0qwPp8eUtjedMqw239vHyglwA.jpg'
    },
    {
      id: 24,
      name: 'SKINCARE',
      description: '24ml Hydrating Face Primer',
      price: 350,
      image: 'https://t3.ftcdn.net/jpg/08/32/35/92/240_F_832359299_zKdDh7aBbpmYz9xjndJK2IUJPpaxVapQ.jpg'
    }
    

  ];

  

  getProducts(){

    return this.products;

  }
  

}
