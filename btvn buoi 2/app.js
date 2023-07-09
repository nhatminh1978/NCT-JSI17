//bai 1
// class Animal {
//     constructor(name){
//         this.name = name
//     }
// }
// class Rabbit extends Animal {
//     constructor(name){
//         super(name)
//         this.name = name
//         this.created = Date.now()
//     }
// }
// let rabbit = new Rabbit("White Rabbit")
// alert(rabbit.name)
//bai 2
class Clock {
    constructor({template}){
        this.template = template
    }
    render(){
        let date = new Date()
        let hours = date.getHours()
        if(hours < 10) hours = '0' + hours
        let mins = date.getMinutes()
        if(mins < 10) mins = '0' + mins
        let secs = date.getSeconds()
        if(secs < 10) secs = '0' + secs
        let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs)
        console.log(output);


    }
    stop() {
        clearInterval(this.timer)
    }
    start() {
        this.render()
        this.timer = setInterval(() => this.render(), 1000)
    }
}

let clock = new Clock({template: 'h:m:s'});

//bai 3
// class PhanSo {
//   constructor() {
//     this.tu = 0;
//     this.mau = 1;
//   }
//   set(t, m) {
//     this.tu = t;
//     this.mau = m;
//   }
//   nhap() {
//     this.tu = parseInt(prompt("nhap tu so"));
//     this.mau = parseInt(prompt("nhap mau so"));

//   }
//   xuat() {
//     console.log(this.tu + "/" + this.mau);
//   } 1
//   cong(a) {
//     this.tu = this.tu * a.mau + this.mau * a.tu;
//     this.mau = this.mau * a.mau;
//   }
//   tru(a) {
//     this.tu = this.tu * a.mau - this.mau * a.tu;
//     this.mau = this.mau * a.mau;
//   }
//   nhan(a) {
//     this.tu = this.tu * a.tu;
//     this.mau = this.mau * a.mau;
//   }
//   chia(a) {
//     this.tu = this.tu * a.mau;
//     this.mau = this.mau * a.tu;
//   }
// }

// const a = new PhanSo();
// const b = new PhanSo();
// const c = new PhanSo();

// a.nhap();
// b.nhap();
// console.log(a,b)
// console.log("Cong = ");
// c.set(a.tu, a.mau);
// c.cong(b);
// c.xuat();

// console.log("Tru = ");
// c.set(a.tu, a.mau);
// c.tru(b);
// c.xuat();

// console.log("Nhan = ");
// c.set(a.tu, a.mau);
// c.nhan(b);
// c.xuat();

// console.log("chia = ");
// c.set(a.tu, a.mau);
// c.chia(b);
// c.xuat();
