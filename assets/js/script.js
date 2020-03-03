/* Author: Aniket*/

function FilteredTabs() {
  var tabHead = document.querySelectorAll(".galleryLinks li");
  var tabBody = document.querySelectorAll(".projects li");
  var tabLinks = Array.from(tabHead);
  var tabContent = Array.from(tabBody);

  tabLinks.forEach(function(e) {
    e.addEventListener("click", TabsofGallery);
  });

  function firstActive() {
    for (var link in tabLinks) {
      if(tabLinks[link] === tabLinks[0])
        preActive(tabLinks[link]);
    }
  }
  firstActive();

  function TabsofGallery(evt) {
    var currentTab = evt.currentTarget;
    for( tab in tabLinks) {
      tabLinks[tab].classList.contains('tabActive');
      tabLinks[tab].classList.remove('tabActive');    
    }
    currentTab.classList.add('tabActive');

    var currentClasses = currentTab.classList;
    var currentClass  = currentClasses[1];

    tabBody.forEach(function(j){
      if(currentClass === "All") {
        j.classList.remove("hide");
        j.classList.add('show');
      } else if(currentClass === j.classList[1]) {
      j.classList.remove("hide");
      j.classList.add('show');
      }
      else {
        j.classList.add("hide");  
      }
    })
    }

  function preActive(currentTabLink) {
    currentTabLink.className += " tabActive";
  }
}

FilteredTabs();