$(function () {
  console.log('hi')
  // Start by defining global variables
  const wrapper = $('.tab-container')
  const allTabs = wrapper.find('.tab-inhalt > div')
  const tabMenu = wrapper.find('.tab-auswahl > li')
  const line = $('<div class="line"></div>').appendTo(tabMenu)
  
  // Hide the tabs that are not first
  allTabs.not(':first-of-type').hide()
  // Change the width of the first lines to 100% when page is loaded
  tabMenu.filter(':first-of-type').find(':first').width('100%')


  // For each tab
  // set the data attribute of the li and the div
  tabMenu.each( function (i) {
    $(this).attr('data-tab', 'tab' + i)
  })

  allTabs.each( function (i) {
    $(this).attr('data-tab', 'tab' + i)
  })

  tabMenu.on('click', function (){
    
    let dataTab = $(this).data('tab')
    let getWrapper = $(this).closest(wrapper)

    // We remove 'active' for, the tans and add it to the clicked tab
    getWrapper.find(tabMenu).removeClass('active')
    $(this).addClass('active')

    //Reset the width of all lines
    getWrapper.find('.line').width(0)
    // Animate the width of clicked line
    $(this).find(line).animate({width: '100%'}, 'fast')

    // We reset all the content divs
    getWrapper.find(allTabs).hide()
    // show the tab content using it's corresponding data attribute
    getWrapper.find(allTabs).filter(`[data-tab=${dataTab}]`).show()

  })
})