import { Repository } from "typeorm";
import * as momentTz from 'moment-timezone';

import { Product } from "../../models/product.model";

export async function populateProduct(productRepository: Repository<Product>) {
    const now = momentTz(new Date()).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');

    const products = [
        {
            name_product: 'Samsung M20',
            image_product: 'https://imagens.trocafone.com/images/phones/samsung-galaxy-m20-azul-oceano-frente.png',
            price_product: 799.99,
            createdAt: now,
            updatedAt: now,
            categories: [
                {id_category: 4}
            ]
        },
        {
            name_product: 'Regata Masculina Juvenil',
            image_product: 'https://http2.mlstatic.com/D_NQ_NP_668528-MLB44029065014_112020-O.webp',
            price_product: 36.00,
            createdAt: now,
            updatedAt: now,
            categories: [
                {id_category: 1},
                {id_category: 3}
            ]
        },
        {
            name_product: 'Boneco Batman 30 Cm',
            image_product: 'https://http2.mlstatic.com/D_NQ_NP_640903-MLB44398100733_122020-O.webp',
            price_product: 98.99,
            createdAt: now,
            updatedAt: now,
            categories: [
                {id_category: 2}
            ]
        },
        {
            name_product: 'Notebook Dell Inspiron',
            image_product: 'https://http2.mlstatic.com/D_NQ_NP_745897-MLB43369978739_092020-O.webp',
            price_product: 5.699,
            createdAt: now,
            updatedAt: now,
            categories: [
                {id_category: 5}
            ]
        },
        {
            name_product: 'Bola Basquete Penalty',
            image_product: 'https://http2.mlstatic.com/D_NQ_NP_904005-MLB44012162829_112020-O.webp',
            price_product: 219.90,
            createdAt: now,
            updatedAt: now,
            categories: [
                {id_category: 6}
            ]
        },
        {
            name_product: 'Bola Topper Campo ',
            image_product: 'https://http2.mlstatic.com/D_NQ_NP_650449-MLB43930080643_102020-O.webp',
            price_product: 149.90,
            createdAt: now,
            updatedAt: now,
            categories: [
                {id_category: 6}
            ]
        },
        {
            name_product: 'Combo De Kit Maquiagem',
            image_product: 'https://http2.mlstatic.com/D_NQ_NP_937311-MLB44386417504_122020-O.webp',
            price_product: 89.80,
            createdAt: now,
            updatedAt: now,
            categories: [
                {id_category: 3}
            ]
        },
        {
            name_product: 'Carrinho Infantil',
            image_product: 'https://http2.mlstatic.com/D_NQ_NP_971571-MLB44270487378_122020-O.webp',
            price_product: 39.87,
            createdAt: now,
            updatedAt: now,
            categories: [
                {id_category: 2}
            ]
        },
        {
            name_product: 'Totokinha Menino Cardoso',
            image_product: 'https://http2.mlstatic.com/D_NQ_NP_728305-MLB40162673221_122019-O.webp',
            price_product: 61.59,
            createdAt: now,
            updatedAt: now,
            categories: [
                {id_category: 2}
            ]
        },
        {
            name_product: 'Notebook Positivo Motion',
            image_product: 'https://http2.mlstatic.com/D_NQ_NP_726458-MLB44094974651_112020-O.webp',
            price_product: 1699.90,
            createdAt: now,
            updatedAt: now,
            categories: [
                {id_category: 5}
            ]
        },
        {
            name_product: 'Jogo De Basquete Brinquedo Esportivo',
            image_product: 'https://http2.mlstatic.com/D_NQ_NP_972663-MLB31490169043_072019-O.webp',
            price_product: 172.98,
            createdAt: now,
            updatedAt: now,
            categories: [
                {id_category: 2},
                {id_category: 6}
            ]
        }
    ]

    await productRepository.save(products);
}