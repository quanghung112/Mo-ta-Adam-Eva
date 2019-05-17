let Apple=function (){
    this.weight = 20;
    this.status=true;
    this.getWeight=function () {
        return this.weight;
    };
    this.decreaseWeight=function () {
        if (this.weight>0){
            this.weight--;
        }
    };
    this.isEmpty=function () {
        if (this.status){
            return 'Van con'
        }else {
            return "Da het"
        }
    }
};
let Human=function (name,gender,weight) {
    this.name=name;
    this.gender=gender;
    this.weight=weight;
    this.getGender=function () {
        if (this.gender){
            return 'Male';
        }else {
            return  'Female'
        }
    };
    this.checkApple=function (apple) {
        if (apple.weight>0){
            apple.status=true;
            return apple.status
        }else{
            apple.status=false;
            return apple.status
        }
    };
    this.setGender=function (gender) {
        this.gender=gender;
    };
    this.eatApple=function (apple) {
        apple.decreaseWeight()
    };
    this.talk=function (name) {
        name.listen=this.sound;
        return name.listen
    };
    this.Say=function (sound) {
        this.sound=sound;
    }
};
let apple=new Apple();
document.getElementById('Status').innerHTML=apple.isEmpty();
document.getElementById('Weight').innerHTML=apple.weight;
let Adam= new Human('Adam',true,60);
let Eva= new Human('Eva',false,50);
function Speak(human1,human2) {
    let msg=document.getElementById(human1.name+'speak').value;
    human1.Say(msg);
    let msgListen= human1.talk(human2);
    document.getElementById('Listen'+human1.name).innerHTML=msgListen;
    document.getElementById(human1.name+'speak').value='';
}
function Eat(human) {
    let check= human.checkApple(apple);
    if (check){
        human.eatApple(apple)
        document.getElementById('Weight').innerHTML=apple.weight;
    }else {
        document.getElementById('Status').innerHTML=apple.isEmpty();
    }
}
function AdamSpeak() {
    Speak(Adam,Eva);
}
function EvaSpeak() {
    Speak(Eva,Adam);
}
function Adameat() {
    Eat(Adam);
}
function Evaeat() {
    Eat(Eva);
}

