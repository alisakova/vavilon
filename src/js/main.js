var dataTabs = document.querySelector(".data-tabs");
var tabs = document.querySelector(".tabs");
var dataTabsTab = document.querySelectorAll('.data-tabs .data-tabs__tab');
var dataTabsContent = document.querySelectorAll('.data-tabs .data-tabs__content');
var dataTabsContainer = document.querySelector('.data-tabs__container');
var tabsTab = document.querySelectorAll('.tabs .tabs__tab');
var tabsContent = document.querySelectorAll('.tabs .tabs__content');
var tabsContainer = document.querySelector('.tabs__container');
var eventFired = 0;

window.onresize = function() {
  if (window.innerWidth < 700 && !eventFired) {
    eventFired = 1;
    if (tabs) {
      changeTabs();
    }
    if (dataTabs) {
      changeDataTabs();
    }
  }
  if (window.innerWidth >= 700) {
    eventFired = 0;
    if (tabs) {
      if (!tabs.classList.contains('_tabs')) {
        initTabs();
      }
    }

    if (dataTabs) {
      if (!dataTabs.classList.contains('_tabs')) {
        initDataTabs();
      }
    }
  }
}

if (window.innerWidth < 700) {
  if (tabs) {
    changeTabs();
    eventFired = 1;
  }
  if (dataTabs) {
    changeDataTabs();
    eventFired = 1;
  }
}

function initTabs() {
  tabs.classList.add("_tabs");
  tabsTab.forEach(function(tab) {
    tab.classList.add('_tabs-tab');
    tab.onclick = function() {
      return true;
    }
  })
  var tabsContentNew = document.querySelectorAll('._tabs .tabs__container .tabs__content');
  tabsContentNew.forEach(function(content, index2) {
    var newContent = content.cloneNode(true);
    var parent = content.parentNode;
    tabsContainer.removeChild(content);
    newContent.classList.add('_tabs-content');
    newContent.classList.remove('panel');
    if (index2 <= 5) {
      tabs.appendChild(newContent);
    }
  })
}

function initDataTabs() {
  dataTabs.classList.add("_tabs");
  dataTabsTab.forEach(function(tab) {
    tab.classList.add('_tabs-tab');
    tab.onclick = function() {
      return true;
    }
  })
  dataTabsContent.forEach(function(content, index2) {
    var newContent = content.cloneNode(true);
    var parent = content.parentNode;
    parent.removeChild(content);
    newContent.classList.add('_tabs-content');
    newContent.classList.remove('panel');
    if (index2 <= 5) {
      dataTabs.appendChild(newContent);
    }
  })
}

function changeDataTabs() {
  console.log('changedataTabs');
  if (dataTabs) {
    dataTabs.classList.remove("_tabs");
    dataTabsTab.forEach(function(tab, index) {
      if (tab.classList.contains("_default")) {
        tab.classList.remove("_default");
      }
      tab.classList.add("accordion");
      tab.classList.remove("_tabs-tab");
      tab.onclick = function() {
        return false;
      }
      tab.addEventListener("click", function(e) {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      })
    });
    dataTabsContent.forEach(function(content, index2) {
      var newContent = content.cloneNode(true);
      var parent = content.parentNode;
      parent.removeChild(content);
      newContent.classList.add('panel');
      newContent.classList.remove('_tabs-content');
      if (index2 <= 3) {
        dataTabsContainer.insertBefore(newContent, dataTabsTab[index2].nextSibling);
      }
    })
  }
}

function changeTabs() {
  if (tabs) {
    tabs.classList.remove("_tabs");
    tabsTab.forEach(function(tab, index) {
      if (tab.classList.contains("_default")) {
        tab.classList.remove("_default");
      }
      tab.classList.remove("_tabs-tab");
      tab.onclick = function() {
        return false;
      }
    });
    tabsContent.forEach(function(content, index2) {
      var newContent = content.cloneNode(true);
      var parent = content.parentNode;
      console.log(parent);
      parent.removeChild(content);
      newContent.classList.remove('_tabs-content');
      if (index2 <= 5) {
        tabsContainer.insertBefore(newContent, tabsTab[index2].nextSibling);
      }
    })
  }
}
