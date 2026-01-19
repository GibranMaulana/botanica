let instances = [];

const collectionView = {
   namespace: 'collection',

   beforeEnter(data) {
      
   }, 

   afterLeave(data) {
      instances.forEach(e => {
         e.kill()
      })

      instances = []
   }
}