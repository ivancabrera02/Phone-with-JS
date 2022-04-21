const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
const del = document.getElementById("del")
const enter = document.getElementById("enter")
const show = document.getElementById("show")
const look = document.getElementById("input1")
const power = document.getElementById("power")
const flex = document.getElementById("flex-container")
const phoneBorder = document.getElementById("phone-border")
const inputPassword = document.getElementById("input-password")
const inputButton = document.getElementById("input-button")
const inputGenerate = document.getElementById("input-generate")
const parrafo = document.getElementById("parrafo")

one.addEventListener("click", showOne)

function showOne(){
    look.value += 1

    show.addEventListener("click", showPasswd)

    function showPasswd(){
      look.setAttribute("type", "text")
      show.innerHTML = "HIDE"

      show.addEventListener("click", hidePasswd)
      show.removeEventListener("click", showPasswd)
    }

    function hidePasswd(){
        look.setAttribute("type", "password")
        show.innerHTML = "SHOW"

        show.addEventListener("click", showPasswd)
        show.removeEventListener("click", hidePasswd)
      }
}

two.addEventListener("click", showTwo)

function showTwo(){
    look.value += 2

    show.addEventListener("click", showPasswd)

    function showPasswd(){
      look.setAttribute("type", "text")
      show.innerHTML = "HIDE"

      show.addEventListener("click", hidePasswd)
      show.removeEventListener("click", showPasswd)
    }

    function hidePasswd(){
        look.setAttribute("type", "password")
        show.innerHTML = "SHOW"

        show.addEventListener("click", showPasswd)
        show.removeEventListener("click", hidePasswd)
      }
}

three.addEventListener("click", showThree)

function showThree(){
    look.value += 3

    show.addEventListener("click", showPasswd)

    function showPasswd(){
      look.setAttribute("type", "text")
      show.innerHTML = "HIDE"

      show.addEventListener("click", hidePasswd)
      show.removeEventListener("click", showPasswd)
    }

    function hidePasswd(){
        look.setAttribute("type", "password")
        show.innerHTML = "SHOW"

        show.addEventListener("click", showPasswd)
        show.removeEventListener("click", hidePasswd)
      }
}

four.addEventListener("click", showFour)

function showFour(){
    look.value += 4

    show.addEventListener("click", showPasswd)

    function showPasswd(){
      look.setAttribute("type", "text")
      show.innerHTML = "HIDE"

      show.addEventListener("click", hidePasswd)
      show.removeEventListener("click", showPasswd)
    }

    function hidePasswd(){
        look.setAttribute("type", "password")
        show.innerHTML = "SHOW"

        show.addEventListener("click", showPasswd)
        show.removeEventListener("click", hidePasswd)
      }
}

five.addEventListener("click", showFive)

function showFive(){
    look.value += 5

    show.addEventListener("click", showPasswd)

    function showPasswd(){
      look.setAttribute("type", "text")
      show.innerHTML = "HIDE"

      show.addEventListener("click", hidePasswd)
      show.removeEventListener("click", showPasswd)
    }

    function hidePasswd(){
        look.setAttribute("type", "password")
        show.innerHTML = "SHOW"

        show.addEventListener("click", showPasswd)
        show.removeEventListener("click", hidePasswd)
      }
}

six.addEventListener("click", showSix)

function showSix(){
    look.value += 6

    show.addEventListener("click", showPasswd)

    function showPasswd(){
      look.setAttribute("type", "text")
      show.innerHTML = "HIDE"

      show.addEventListener("click", hidePasswd)
      show.removeEventListener("click", showPasswd)
    }

    function hidePasswd(){
        look.setAttribute("type", "password")
        show.innerHTML = "SHOW"

        show.addEventListener("click", showPasswd)
        show.removeEventListener("click", hidePasswd)
      }
}

seven.addEventListener("click", showSeven)

function showSeven(){
    look.value += 7

    show.addEventListener("click", showPasswd)

    function showPasswd(){
      look.setAttribute("type", "text")
      show.innerHTML = "HIDE"

      show.addEventListener("click", hidePasswd)
      show.removeEventListener("click", showPasswd)
    }

    function hidePasswd(){
        look.setAttribute("type", "password")
        show.innerHTML = "SHOW"

        show.addEventListener("click", showPasswd)
        show.removeEventListener("click", hidePasswd)
      }
}

eight.addEventListener("click", showEight)

function showEight(){
    look.value += 8

    show.addEventListener("click", showPasswd)

    function showPasswd(){
      look.setAttribute("type", "text")
      show.innerHTML = "HIDE"

      show.addEventListener("click", hidePasswd)
      show.removeEventListener("click", showPasswd)
    }

    function hidePasswd(){
        look.setAttribute("type", "password")
        show.innerHTML = "SHOW"

        show.addEventListener("click", showPasswd)
        show.removeEventListener("click", hidePasswd)
      }
}

nine.addEventListener("click", showNine)

function showNine(){
    look.value += 9

    show.addEventListener("click", showPasswd)

    function showPasswd(){
      look.setAttribute("type", "text")
      show.innerHTML = "HIDE"

      show.addEventListener("click", hidePasswd)
      show.removeEventListener("click", showPasswd)
    }

    function hidePasswd(){
        look.setAttribute("type", "password")
        show.innerHTML = "SHOW"

        show.addEventListener("click", showPasswd)
        show.removeEventListener("click", hidePasswd)
      }
}

zero.addEventListener("click", showZero)

function showZero(){
  look.value += 0

  show.addEventListener("click", showPasswd)

    function showPasswd(){
      look.setAttribute("type", "text")
      show.innerHTML = "HIDE"

      show.addEventListener("click", hidePasswd)
      show.removeEventListener("click", showPasswd)
    }

    function hidePasswd(){
        look.setAttribute("type", "password")
        show.innerHTML = "SHOW"

        show.addEventListener("click", showPasswd)
        show.removeEventListener("click", hidePasswd)
      }
}

del.addEventListener("click", clearAll)

function clearAll(){
    look.value = ""
}

showTime();

function showTime(){

  myDate = new Date()
  hours = myDate.getHours()
  minutes = myDate.getMinutes()
  seconds = myDate.getSeconds()

  if (hours < 10) hours = 0 + hours

  if (minutes < 10) minutes = "0" + minutes

  if (seconds < 10) seconds = "0" + seconds

  $("#reloj").text(hours+ ":" +minutes+ ":" +seconds)
  setTimeout("showTime()", 1000)
}

power.addEventListener("click", powerOff)

function powerOff(){
  flex.style.display = "none"
  phoneBorder.style.backgroundColor = "black"
  phoneBorder.classList.remove("phone-border")
  power.style.backgroundImage = "url(imagenes/poweron.png)"

  power.addEventListener("click", powerOn)
  power.removeEventListener("click", powerOff)
}

function powerOn(){
  flex.style.display = "flex"
  phoneBorder.classList.add("phone-border")
  power.style.backgroundImage = "url(imagenes/poweroff.png)"

  power.addEventListener("click", powerOff)
  power.removeEventListener("click", powerOn)
}

inputButton.addEventListener("click", confirmPassword)

let password = null

function confirmPassword(){
  password = inputPassword.value
  inputPassword.value = ""
}

enter.addEventListener("click", unlock)

function unlock(){
  const input = look.value
  if(password == input){
    flex.style.display = "none"
  }
}

inputGenerate.addEventListener("click", randomGenerate)

function randomGenerate(){
  password = Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000;
  parrafo.innerHTML = `Tu nuevo PIN es ${password}`

  unlock()
}