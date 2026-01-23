export const createView = (namespace, animationClasses = []) => {
   let instances = [];

   return {
      namespace,
      beforeEnter(data) {
         const container = data.next.container;

         animationClasses.forEach(e => {
            instances.push(new e(container));
         })
      },

      afterLeave(data) {
         instances.forEach(e => {
            e.kill()
         })

         instances = [];
      }
   }
}