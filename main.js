function send (){

    const f_name = document.getElementById("f_name")
    const l_name = document.getElementById("l_name")
    const message = document.getElementById("message")

    const firstName = f_name.value
    const lastName = l_name.value
    const messageValue = message.value

    f_name.style.backgroundColor = ""
    l_name.style.backgroundColor = ""
    message.style.backgroundColor = ""

    if (firstName.length === 0){
        alert("אנא מלא שם פרט ❌ ")
        event.preventDefault()
        f_name.style.backgroundColor = "pink"
        return
    }

    if (lastName.length === 0){
        alert("אנא מלא שם משפחה ❌ ")
        event.preventDefault()
        l_name.style.backgroundColor = "pink"
        return
    }


    if (messageValue.length === 0){
        alert("אנא מלא שם הודעה ❌ ")
        event.preventDefault()
        message.style.backgroundColor = "pink"
        return
    }
}
