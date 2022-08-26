 //STICKY SIDEBART      
    const postDetails = document.querySelector(".servicesList");
    const postSidebar = document.querySelector(".sidebar");
    const postSidebarContent = document.querySelector(".sidebar > ul");

    const controllerpin = new ScrollMagic.Controller();
    const scenepin = new ScrollMagic.Scene({
      triggerElement: postSidebar,
      triggerHook: 0,
      duration: getDuration
    })
//    .addIndicators()
    .addTo(controllerpin);

    if (window.matchMedia("(min-width: 991px)").matches) {
      scenepin.setPin(postSidebar, {pushFollowers: false});
    }

    // in your projects, you might want to debounce resize event for better performance
    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 991px)").matches) {
        scenepin.setPin(postSidebar, {pushFollowers: false});
      } else {
        scenepin.removePin(postSidebar, true);
      }
    });

    function getDuration() {
      return postDetails.offsetHeight - postSidebarContent.offsetHeight;
    }