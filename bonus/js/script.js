const { createApp } = Vue;

  createApp({
    data() {
    return {
        activeImg: 0,
        slides: [
            {
            image: 'img/01.webp',
            title: 'Marvel\'s Spiderman Miles Morale',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, 
            {
            image: 'img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            },
            {
            image: 'img/03.webp',
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            },
            {
            image: 'img/04.webp',
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            },
            {
            image: 'img/05.webp',
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ]
      };
    },
    methods: {
        // Aggiungiamo metodo per andare avanti con immagini
        nextImage(){
            // Incrementiamo il valore di activeImg
            this.activeImg++;

            // Condizione che effettua loop infinito
            if(this.activeImg > this.slides.length - 1){
                this.activeImg = 0;
            };
        },

        // Aggiungiamo metodo per andare indietro con immagini
        prevImage(){
            // Decrementiamo il valore di activeImg
            this.activeImg--;

            // Condizione che effettua loop infinito
            if(this.activeImg < 0){
                this.activeImg = this.slides.length - 1;
            };  
        },

        // al click su una thumb, visualizzare in grande l’immagine corrispondente
        clickThumb(){
            
        }
    }
  }).mount('#app');