export const useRessourcesStore = defineStore('ressources',{
    //l'état initial de toutes les variables 
    state: () => ({
        ressourceMailObject: [{
            id:'contact', label: 'Prise de contact', disabled: true
        }]
    }),
    //Equivalent des computed 
    getters: {
        getNotDisabled: (state) => state.ressourceMailObject.filter((element) => !element.disabled)
    },
    actions: {
        login() {

        }
    }
})

/*export const useUserStore = defineStore ('user',{
    state: () => ({
        profile: null,
        games: [], 
        social_medias: []

    }),
    getters: {
        isAuthenticated: (state) => !!state.profile
    },
    actions: {
        loadUser: () => {
            //il va appeler une api
            //et va stocker dans mon state l'user
        }
    }
})
//Ou encore, on peut faire d'une autre manière


export const useUserStore = defineStore ('user',() =>{
    const profile = ref(null)
    const games = ref ([])
    const social_medias = ref ([])

    const isAuthenticated = computed (()==>!!profile.value)
    const loadUser = () => {
        //il va appeler une api
        // et va stocker dans mon profile.vue

    }
    return {
        profile,
        games,
        social_medias,
        isAuthenticated,
        loadUser
    }

})

*/