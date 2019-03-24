var dataTabs = document.querySelector(".data-tabs");
var tabs = document.querySelector(".tabs");
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
  tabsTab.forEach(function(tab, index) {
    if (index === 0) {
      tab.classList.add('_default');
    }
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
    if (index2 <= 5) {
      tabs.appendChild(newContent);
    }
  })
}

var dataTabsMap = {
  "btn-data-1": "data-1",
  "btn-data-2": "data-2",
  "btn-data-3": "data-3",
  "btn-data-4": "data-4",
}

function initDataTabs() {
  dataTabs.classList.add("_tabs");
  var dataTabsTab = document.querySelectorAll('._tabs .data-tabs__tab');
  dataTabsTab.forEach(function(tab, index) {
    if (tab.classList.contains('active')) {
      tab.classList.remove('active');
    }
    if (index === 0) {
      tab.classList.add('_default');
      tab.classList.add('active');
    }
    tab.classList.remove('accordion');
    tab.classList.add('_tabs-tab');

    tab.onclick = function(e) {
      var id = tab.id;
      openTab(e, dataTabsMap[id]);
    }
    tab.removeEventListener("click", addAccordion, false);
  })
  var dataTabsContent = document.querySelectorAll('.data-tabs .data-tabs__container .data-tabs__content');
  dataTabsContent.forEach(function(content, index2) {
    var newContent = content.cloneNode(true);
    var parent = content.parentNode;
    parent.removeChild(content);
    newContent.classList.add('_tabs-content');
    newContent.classList.remove('panel');
    newContent.style.maxHeight = '';
    newContent.style.display = 'none';
    if (index2 === 0) {
      newContent.style.display = 'block';
    }
    if (index2 <= 5) {
      dataTabs.appendChild(newContent);
    }
  })
}

function changeDataTabs() {
  if (dataTabs) {
    var dataTabsTab = document.querySelectorAll('.data-tabs .data-tabs__tab');
    dataTabs.classList.remove("_tabs");
    dataTabsTab.forEach(function(tab, index) {
      if (tab.classList.contains("_default")) {
        tab.classList.remove("_default");
      }
      if (tab.classList.contains("active")) {
        tab.classList.remove("active");
      }
      tab.classList.add("accordion");
      tab.classList.remove("_tabs-tab");
      tab.onclick = function() {
        return false;
      }
      tab.addEventListener("click", addAccordion, false);
    });
    var dataTabsContent = document.querySelectorAll('.data-tabs .data-tabs__content');
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
    var tabsContent = document.querySelectorAll('.tabs .tabs__content');
    tabsContent.forEach(function(content, index2) {
      var newContent = content.cloneNode(true);
      var parent = content.parentNode;
      parent.removeChild(content);
      newContent.classList.remove('_tabs-content');
      if (index2 <= 5) {
        tabsContainer.insertBefore(newContent, tabsTab[index2].nextSibling);
      }
    })
  }
}

function addAccordion(evt) {
  evt.target.classList.toggle('active');
  var panel = evt.target.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }
}
