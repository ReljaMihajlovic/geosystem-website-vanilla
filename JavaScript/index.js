function getScrollHeight(elm, elm_padding){
    var savedValue = elm.value
    elm.value = ''
    elm._baseScrollHeight = elm.scrollHeight - elm_padding;
    elm.value = savedValue
  }
  
  function onExpandableTextareaInput({ target:elm }){
    // make sure the input event originated from a textarea and it's desired to be auto-expandable
    if( !elm.classList.contains('autoExpand') || !elm.nodeName == 'TEXTAREA' ) return
    let elm_padding = parseInt(window.getComputedStyle(elm, null).getPropertyValue('padding-block')) * 2;
    var minRows = elm.getAttribute('data-min-rows')|0, rows;
    !elm._baseScrollHeight && getScrollHeight(elm, elm_padding);
    elm.rows = minRows
    rows = parseInt((elm.scrollHeight - elm_padding - elm._baseScrollHeight) / elm._baseScrollHeight);
    elm.rows = minRows + rows
  }
  
  // global delegated event listener
  const message_txtarea = document.getElementById("message");
  message_txtarea.addEventListener("input", onExpandableTextareaInput);