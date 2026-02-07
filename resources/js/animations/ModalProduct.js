import gsap from "gsap";

export class ModalProduct {
   constructor(scope) {
      this.ctx = null;
      this.scope = scope;
      this.hoverInstances = [];
      this.init();
   }

   init() {
      const modal = this.scope.querySelector('#product-detail-overlay');
      const sheet = modal.querySelector("#product-detail-overlay-sheet");

      const els = { //modal elements
         name: modal.querySelector('#modal-name'),
         description: modal.querySelector('#modal-description'),
         img: modal.querySelector("#modal-img"),
         variantsContainer: modal.querySelector('#modal-variants-container'),
         price: modal.querySelector('#modal-price'),
         buyButton: modal.querySelector('#modal-buy-button')
      }

      this.ctx = gsap.context(() => {
         const productCards = this.scope.querySelectorAll('.product-card');

         const timeline = gsap.timeline({ 
            paused: true, 
         });

         gsap.set(modal, { autoAlpha: 0 })

         timeline
         .to(modal, { autoAlpha: 1, duration: 0.3 })
         .to(sheet, { translateY: 0, duration: 1, ease: 'expo.inOut'}, "<")

         productCards.forEach(element => {
            element.addEventListener('click', (e) => {
               e.preventDefault();
               
               const data = JSON.parse(e.currentTarget.dataset.product);

               els.name.innerText = data.name;
               els.description.innerText = data.description;
               els.img.src = data.img_url; 
               els.buyButton.disabled = true;

               els.variantsContainer.innerHTML = '';
               els.price.innerText = 'Select Size'

               data.variants.forEach((v) => {
                  const sizeBtn = document.createElement("button");
                  sizeBtn.type = 'button';
                  sizeBtn.className = "text-sm z-51 px-4";
                  sizeBtn.innerText = v.size

                  sizeBtn.addEventListener('click', () => {
                     gsap.to(els.variantsContainer.children, {
                        color: '#4A4036',
                        backgroundColor: "#FFFFFF",
                        duration: 0.3,
                        onStart: () => {
                           Array.from(els.variantsContainer.children).forEach(e => {
                              e.disabled = false;
                           })
                        }
                     })

                     gsap.to(sizeBtn, {
                        color: '#FFFFFF',
                        backgroundColor: "#C27A59",
                        duration: 0.3,
                        delay: 0.3, 
                        onStart: () => {
                           sizeBtn.disabled = true;
                        }
                     })

                     els.price.innerText = v.price;
                     els.buyButton.disabled = false;

                  })

                  els.variantsContainer.appendChild(sizeBtn)
               })

               timeline.play();
            })
         });

         window.closeOverlay = () => {
            timeline.reverse();
         }
      })
   }
}