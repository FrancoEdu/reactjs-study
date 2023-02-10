type User = {
    name: string,
    email: string,
    address:{
        city: string,
        state?: string
    }
}

function showWelcomeMessage(user: User){ //definindo a tipagem
    return `Welcome ${user.name}, your e-mail is ${user.email}`
}