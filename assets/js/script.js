/* Author: Aniket*/
// Get Tab heading links and tab content images
var tabHead = document.querySelectorAll(".galleryLinks li");
var tabcontent = document.querySelectorAll(".projects li");
//Filtered Tab Function Started
function FilteredTabs(tabHead,tabcontent) {
  var tabLinks = Array.from(tabHead);
  //Assign click function to every tabLink 
  tabLinks.forEach(function(e) {
    e.addEventListener("click", Filter);
  });
  //Make first tab Link active at start
  function firstActive() {
    for (var link in tabLinks) {
      if(tabLinks[link] === tabLinks[0])
        MakeItActive(tabLinks[link]);
    }
  }
  firstActive();
// Tabs Filtering Function started
  function Filter(evt) {
    var currentTab = evt.currentTarget;
    // remove active from all tab links
    for( tab in tabLinks) {
      tabLinks[tab].classList.contains('tabActive');
      tabLinks[tab].classList.remove('tabActive');    
    }
    // Make clicked tab only active
    currentTab.classList.add('tabActive');
    var currentClasses = currentTab.classList;
    var currentClass  = currentClasses[1];
    // check weather the the tab links class matches with the images class
    // if matches make it visible accordingly
    tabcontent.forEach(function(image){
      if(currentClass === "All") {
        image.classList.remove("hide");
        image.classList.add('show');
      } else if(currentClass === image.classList[1]) {
        image.classList.remove("hide");
        image.classList.add('show');
      } else {
        image.classList.add("hide");  
      }
    })
  }
// Make Selected tabLink Active on event fire
  function MakeItActive(currentTabLink) {
    currentTabLink.className += " tabActive";
  }
}
// calling filteredTab Function
FilteredTabs(tabHead,tabcontent);