import{a as L}from"./chunk-O7FSSDTK.js";import"./chunk-LAIOXAAA.js";import{a as T,b as c,c as q,d as z,e as F,f as N,g as V,h as D,i as G}from"./chunk-CG5UB6QT.js";import{a as R}from"./chunk-EZA3D2WA.js";import{m as w,p as k}from"./chunk-AJNMQDW7.js";import{a as O,b as I}from"./chunk-JDOLN2CX.js";import{$a as o,Ja as m,Ka as g,Ub as y,Vb as E,Xa as l,Xb as M,Za as i,ab as r,bb as f,ca as v,fb as x,gb as u,lb as s,oc as P,pc as _,qb as b,rb as C,ub as h,vb as S}from"./chunk-MAJDB3HN.js";function j(e,t){if(e&1&&f(0,"app-backend-error-messages",13),e&2){let n=t.ngIf;i("backendErrors",n)}}function A(e,t){e&1&&(o(0,"div"),s(1," Username is required. "),r())}function B(e,t){if(e&1&&(o(0,"div",14),l(1,A,2,0,"div",15),r()),e&2){let n=u();m(),i("ngIf",n.form.controls.username.errors==null?null:n.form.controls.username.errors.required)}}function U(e,t){e&1&&(o(0,"div"),s(1," Email is required. "),r())}function $(e,t){e&1&&(o(0,"div"),s(1," Email is not valid. "),r())}function H(e,t){if(e&1&&(o(0,"div",14),l(1,U,2,0,"div",15)(2,$,2,0,"div",15),r()),e&2){let n=u();m(),i("ngIf",n.form.controls.email.errors==null?null:n.form.controls.email.errors.required),m(),i("ngIf",n.form.controls.email.errors==null?null:n.form.controls.email.errors.email)}}function J(e,t){e&1&&(o(0,"div"),s(1," Password is required. "),r())}function K(e,t){e&1&&(o(0,"div"),s(1," Password must be at least 6 characters long. "),r())}function Q(e,t){if(e&1&&(o(0,"div",14),l(1,J,2,0,"div",15)(2,K,2,0,"div",15),r()),e&2){let n=u();m(),i("ngIf",n.form.controls.password.errors==null?null:n.form.controls.password.errors.required),m(),i("ngIf",n.form.controls.password.errors==null?null:n.form.controls.password.errors.minlength)}}var W=()=>["/login"],de=(()=>{let t=class t{constructor(p,d){this.fb=p,this.store=d}ngOnInit(){this.initializeForm(),this.initializeValues()}initializeForm(){console.log("initializeForm"),this.form=this.fb.group({username:["",c.required],email:["",[c.required,c.email]],password:["",[c.required,c.minLength(6)]]})}initializeValues(){this.isSubmitting$=this.store.pipe(_(O)),this.backendErrors$=this.store.pipe(_(I))}onSubmit(){let p={user:this.form.value};console.log(this.form.value),this.store.dispatch(L({request:p}))}};t.\u0275fac=function(d){return new(d||t)(g(D),g(P))},t.\u0275cmp=v({type:t,selectors:[["app-register"]],standalone:!0,features:[b],decls:21,vars:10,consts:[[3,"backendErrors",4,"ngIf"],[1,"container"],[1,"form-container"],[1,"form-title"],[1,"form-link"],[3,"routerLink"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","placeholder","Username","formControlName","username",1,"form-control"],["class","form-error",4,"ngIf"],["type","text","placeholder","Email","formControlName","email",1,"form-control"],["type","password","placeholder","Password","formControlName","password",1,"form-control"],["type","submit",1,"form-button",3,"disabled"],[3,"backendErrors"],[1,"form-error"],[4,"ngIf"]],template:function(d,a){d&1&&(l(0,j,1,1,"app-backend-error-messages",0),h(1,"async"),o(2,"div",1)(3,"div",2)(4,"h1",3),s(5,"Sign Up"),r(),o(6,"p",4)(7,"a",5),s(8,"Have an account?"),r()(),o(9,"form",6),x("ngSubmit",function(){return a.onSubmit()}),o(10,"div",7),f(11,"input",8),l(12,B,2,1,"div",9),r(),o(13,"div",7),f(14,"input",10),l(15,H,3,2,"div",9),r(),o(16,"div",7),f(17,"input",11),l(18,Q,3,2,"div",9),r(),o(19,"button",12),s(20," Sign up "),r()()()()),d&2&&(i("ngIf",S(1,7,a.backendErrors$)),m(7),i("routerLink",C(9,W)),m(2),i("formGroup",a.form),m(3),i("ngIf",a.form.controls.username.invalid&&(a.form.controls.username.dirty||a.form.controls.username.touched)),m(3),i("ngIf",a.form.controls.email.invalid&&(a.form.controls.email.dirty||a.form.controls.email.touched)),m(3),i("ngIf",a.form.controls.password.invalid&&(a.form.controls.password.dirty||a.form.controls.password.touched)),m(),i("disabled",a.form.invalid))},dependencies:[M,y,E,G,F,T,q,z,N,V,k,w,R],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f5f5f5}.form-container[_ngcontent-%COMP%]{background-color:#fff;padding:30px;border-radius:10px;box-shadow:0 0 10px #0003;max-width:600px;width:100%}.form-title[_ngcontent-%COMP%]{font-size:55px;text-align:center;margin-bottom:20px}.form-link[_ngcontent-%COMP%]{font-size:20px;text-align:center;margin-bottom:25px;text-decoration:none}a[_ngcontent-%COMP%]{text-decoration:none}.form-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:25px}.form-control[_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #cccccc;border-radius:5px;transition:border-color .3s ease}.form-control[_ngcontent-%COMP%]:focus{border-color:red}form[_ngcontent-%COMP%]{text-align:center}.form-button[_ngcontent-%COMP%]{font-size:25px;width:200px;padding:10px;background-color:#154997;border:none;color:#fff;font-weight:700;border-radius:5px;cursor:pointer;transition:background-color .3s ease}.form-button[_ngcontent-%COMP%]:hover{background-color:#0563f1}@media screen and (max-width: 600px){.form-container[_ngcontent-%COMP%]{max-width:100%}}.form-error[_ngcontent-%COMP%]{color:#e90800;font-size:20px;margin-top:5px}.form-button[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}"]});let e=t;return e})();export{de as RegisterComponent};
