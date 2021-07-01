<template>
    <div>
        <h1> Commander </h1>
        <h2> Produits disponibles </h2>
        <div class="card-deck">
            <Produit v-for="produit in produits" :key="produit.nom" :nom="produit.nom" role="commander" :prix="produit.prix" v-on:commande="ajouterProduit" />
        </div>
        <hr />
        <h2> Produits commandés </h2>
        <div class="card-deck">
            <Produit v-for="produit in commandes" :key="produit.nom" :nom="produit.nom" :prix="produit.prix" />
        </div>
    </div>
</template>

<script>

import Produit from '@/components/Produit.vue'
import { mapState, mapActions } from 'vuex';

export default {
    components: {
        Produit
    },
    methods: {
        ...mapActions(['ajouterProduit'])

    },
    computed: {
        ...mapState({produits : 'produits', commandes : 'commandes'})

    },
}
</script>

<style scoped>

</style>