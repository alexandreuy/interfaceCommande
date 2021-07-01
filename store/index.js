export default {
    state: () => ({
        produits: [
            { nom: 'Pizza', prix: 3.0, note: 3.5, quantite:0 },
            { nom: 'Frites', prix: 2.0, note: 4, quantite:0 },
            { nom: 'Hamburger', prix: 2.5, note: 5, quantite:0 },
            { nom: 'Cheese', prix: 3.0, note: 2 , quantite:0}
        ],
        commandes: [],

        produitsUne: []

    }),
    mutations: {
        ADD_PRODUCT(state, payload){
            state.commandes.push(payload);
        },

        ADD_BEST_PRODUCT(state){
            state.produitsUne.push(state.produits.filter(produit => state.produits.note >= 3.5));
        }
    },
    actions: {
        ajouterProduit(context, payload){
            context.commit('ADD_PRODUCT', payload )
        },

        addBestProduct(context){
            context.commit('ADD_BEST_PRODUCT')
        }
    }
}
