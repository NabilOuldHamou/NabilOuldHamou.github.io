document.addEventListener('DOMContentLoaded', function() {
 
    var contact = document.querySelector('#contact-window')
    var portfolio = document.querySelector('#portfolio-window')

    document.getElementsByTagName('form')[0].onsubmit = function(evt) {
      evt.preventDefault();
      executeCommand();
      window.scrollTo(0,150);
    }

    document.getElementById('terminal_input').focus();

    var textInputValue = document.getElementById('terminal_input').value.trim();
   
    var textResultsValue = document.getElementById('terminal_results').innerHTML;
   
    var clearInput = function(){
      document.getElementById('terminal_input').value = "";
    }
   
    var scrollToBottomOfResults = function(){
      var terminalResultsDiv = document.getElementById('terminal_results');
      terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    }

    scrollToBottomOfResults();

    var addTextToResults = function(textToAdd){
      document.getElementById('terminal_results').innerHTML += "<p>" + textToAdd + "</p>";
      scrollToBottomOfResults();
    }

    var clearResults = function() {
      document.getElementById('terminal_results').innerHTML = "";
    }
   
    var showHelp = function(){
      var helpKeyWords = [
        "- About : Gives you informations about me.",
        "- Contact : Opens the contact page to send me an e-mail.",
        "- Portfolio : Opens my portfolio.",
        "- Help : Opens this menu.",
        "- Clear : Clears the terminal."
      ].join('<br>');
      addTextToResults(helpKeyWords);
    }

    var textReplies = function() {

        switch(textInputValueLowerCase){
            case "about":
                clearInput();
                addTextToResults("Hello, my name is <span class=\"highlight\">Nabil Ould Hamou</span>. I am a french computer science student, I always had an interested in programming and computers, that lead me to pursuing a career in the computer science field. I am mostly working as a software programmer.");
                break;

            case "contact":
                clearInput();
                addTextToResults("Opening the contact page...");

                const contactWindow = new WinBox({
                  title: 'Contact',
                  width: '300px',
                  height: '300px',
                  top: 50,
                  left: 50,
                  mount: contact,
                  onfocus: function () {
                    this.setBackground('#00aa00')
                  },
                  onblur: function () {
                    this.setBackground('#777')
                  },
                })

                break;

            case "portfolio":
                clearInput();
                addTextToResults("Opening the portfolio page...");

                const portfolioWindow = new WinBox({
                  title: 'Portfolio',
                  width: '300px',
                  height: '300px',
                  top: 90,
                  left: 80,
                  mount: portfolio,
                  onfocus: function () {
                    this.setBackground('#00aa00')
                  },
                  onblur: function () {
                    this.setBackground('#777')
                  },
                })

                break;  

            case "help":
            case "?":
                clearInput();
                showHelp();
                break;

            case "clear":
              clearInput();
              clearResults();
              break;

            default:
                clearInput();
                addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " does not exist. Type </i><b>help</b><i> to see all commands.</i></p>");
                break;
        }
    }
   
    var executeCommand = function() {
        textInputValue = document.getElementById('terminal_input').value.trim();
        textInputValueLowerCase = textInputValue.toLowerCase();

        if (textInputValue != ""){
            addTextToResults("<p class='userInput'>> " + textInputValue + "</p>");
            textReplies();
        }
    };
   
});