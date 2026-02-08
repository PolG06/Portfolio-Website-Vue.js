export const useUserStore = defineStore('user', () => {
    
    const contactReasons = ref([
        { id: 1, label: 'Demande de partenariat', value: 'partenariat' },
        { id: 2, label: 'Bug technique', value: 'bug' },
        { id: 3, label: 'Question(s) personnelle(s)', value: 'question_personnelle' },
        { id: 4, label: "Demande d'entretien", value: 'entretien' },
        { id: 5, label: 'Question à propos de mes données', value: 'question_data' },
        { id: 6, label: 'Autre', value: 'other' }
    ])

    
    const languages = ref([
        { label: "Français", value: "fr", icon: "circle-flags:fr" },
        { label: "English", value: "en", icon: "circle-flags:en" },
        { label: "Español", value: "es", icon: "circle-flags:es" },
        { label: "Deutsch", value: "de", icon: "circle-flags:de" }
    ])

    const competences = ref([
        { domain: "Developpement", sous_domains:["Front-End (HTML / CSS / JS)","Programmation Orientée Objet (Python, Java, C#)", "Programmation Python (bibliothèque Pygame)", "Macro-VBA", "Notions de GitHub", "Scripting Powershell"]},
         { domain: "Systèmes & Réseaux", sous_domains:["Cisco Packet Tracer","Notions de cybersécurité offensive", "Windows client / serveur", "Notions de Linux", "Notions de Supervision (Syslog, Zabbix)", "Domotique"]},
          { domain: "Bases de données", sous_domains:["Conception de bases de données SQL", "Bases de données NoSQL"]},
           { domain: "Autres", sous_domains:["Pack office","Mathématiques"]}
    ])

    return {
        contactReasons,
        languages, 
        competences
    }
})