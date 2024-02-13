interface UserProfile {
    name: string;
    surname: string;
}

class BankAccount {
     user: UserProfile;
      constructor(user: UserProfile){
        this.user = user;
      }
}




const getUserFromUsBank = (name, surname) => {
    return {
      name,
      surname
    }
}

const michaelJacksonProfile = getUserFromUsBank("Michael", "Jackson");  //  name: Michael, surname: Jackson

const michaelJacksonBankAccount = new BankAccount(michaelJacksonProfile);




const getUserFromFrBank = ( prenom, nom) => {
    return {
      prenom,
      nom
    }
}


const zinedineZidaneProfile = getUserFromFrBank("Zinedine", "Zidane");  //  prenom: Zinedine, nom: Jackson

const zinedineZidaneBankAccount = new BankAccount(zinedineZidaneProfile);



class FrenchToEnglishUserAdapter implements UserProfile {
    name: string;
    surname: string;
    constructor(user: {nom: string, prenom: string}){
        this.name = user.prenom;
        this.surname = user.nom;
    }

}



const translatedZinedineZidaneProfile = new FrenchToEnglishUserAdapter(getUserFromFrBank("Zinedine", "Zidane"));  //  name: Zinedine, surname: Zidane

const validZinedineZidaneBankAccount = new BankAccount(translatedZinedineZidaneProfile);


