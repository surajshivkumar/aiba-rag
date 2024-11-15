/*
 * it-rt-chatbot_wrapper_v2.js
 * USF IT Research Technology.
 * Jason Hair. 2024.
  */
(function() {
  //
  // Check if document is ready and call the callback function
  //
  function onDocumentReady(fn) {
    "loading" !== document.readyState
        ? fn()
        : document.addEventListener
        ? document.addEventListener("DOMContentLoaded", fn)
        : document.attachEvent("onreadystatechange", function () {
              "loading" !== document.readyState && fn();
          });
  }
  
  function isNullOrEmpty(v) {
    return null === v || "" === v;
  }

  //
  // Get the chatbot <script> attributes for ID="USF-IT-RT-ChatbotWrapper".
  //
  function getAttributeOrDefault(attributeName, defaultValue) {
    var e = document.getElementById("USF-IT-RT-ChatbotWrapper");
    var attributeValue = e.getAttribute(attributeName);
    return isNullOrEmpty(attributeValue) ? defaultValue : attributeValue;
  }
  
 
  // 
  //Load the CSS for chatbot
  //
  function loadCSS() {

    // load CSS corresponding to the chatbot_wrapper.js version.
    var currentScriptSrc = getAttributeOrDefault('src', '');
    if (currentScriptSrc) {
      var scriptName = currentScriptSrc.split('/').pop();
      var cdnPath = currentScriptSrc.replace(scriptName, '');
      var cssLinkChatbot = document.createElement('link');
      cssLinkChatbot.href = cdnPath + "chatbot_wrapper_v2.css";  // ! UPDATE for each version !
      cssLinkChatbot.rel = "stylesheet";
      cssLinkChatbot.type = "text/css";
      document.head.appendChild(cssLinkChatbot);
    }

    // loac CSS for googleAPIs material icons
    var cssLinkMaterial = document.createElement("link");
    cssLinkMaterial.href = "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp";
    cssLinkMaterial.rel = "stylesheet";
    cssLinkMaterial.type = "text/css";
    document.head.appendChild(cssLinkMaterial);
  }

  //
  // Main function to initialize chatbot features
  //
  function initChatBot() {
    // load attribute values
    var chatCanvas = getAttributeOrDefault('chatbot-canvas', '');
    var chatEndpoint = getAttributeOrDefault('chatbot-endpoint', '');

    // add button to open chatbot.
    var chatIcon = document.createElement('button');
    chatIcon.id = 'chatbot-icon';
    chatIcon.setAttribute('aria-label', 'start chatbot');
    chatIcon.innerHTML = 'Start Chat &nbsp; <i class="material-icons" aria-hidden="true">chat</i>';
    document.body.appendChild(chatIcon);

    // create wrapper to hold the iframe of the chatbot
    var frameWrapper = document.createElement('div');
    frameWrapper.id = 'chatbot-frame-wrapper';
    document.body.appendChild(frameWrapper);

    // create [X] button to close chatbot
    var closeButton = document.createElement('button');
    closeButton.id = 'chatbot-close';
    closeButton.setAttribute('aria-label', 'close chatbot');
    closeButton.innerHTML = '<i class="material-icons" aria-hidden="true">close</i>';
    frameWrapper.appendChild(closeButton);

    // smooth chatbot animations on open/close
    closeButton.addEventListener('click', function() {
      frameWrapper.style.transition = 'transform 0.3s ease-in-out';
      frameWrapper.style.transform = 'scale(0)';
      setTimeout(() => {
        frameWrapper.classList.remove('show');
        frameWrapper.style.visibility = 'hidden';
        frameWrapper.style.opacity = '0';
      }, 300);
    });

    // add Iframe inside wrapper
    var iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.src = chatCanvas + "?chatbot-endpoint=" + chatEndpoint;
    frameWrapper.appendChild(iframe);

    // implement open/close effects
    chatIcon.addEventListener('click', function() {
      if (frameWrapper.classList.contains('show')) {
        frameWrapper.style.transform = 'scale(0)';
        setTimeout(() => {
          frameWrapper.classList.remove('show');
          frameWrapper.style.visibility = 'hidden';
          frameWrapper.style.opacity = '0';
        }, 300);
      } else {
        frameWrapper.style.visibility = 'visible';
        frameWrapper.style.opacity = '1';
        frameWrapper.style.transform = 'scale(1)';
        frameWrapper.classList.add('show');
      }
    });
  }

  // Initialize components once the document is ready
  onDocumentReady(function() {
    var e = document.getElementById("USF-IT-RT-ChatbotWrapper");
    if (e) {
      loadCSS();
      initChatBot();
    } else console.error("USF-IT-RT-ChatbotWrapper not found.");
    
  });

})();