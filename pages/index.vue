<template>
    <div>
        <h1> Accueil </h1>
    
        <h2> Produits à la une</h2>
        <div class="card-deck">
            <Produit v-for="produit in produitsUne[0]" :key="produit.nom" :nom="produit.nom" :prix="produit.prix" role="alaune" :note=produit.note />
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
    computed: {
        ...mapState({ produitsUne: 'produitsUne' })


    },
    methods: {
        ...mapActions({ bestProduct: 'addBestProduct' })
    },

    beforeMount() {
        this.bestProduct()
    }

}
</script>

<style>

</style>
