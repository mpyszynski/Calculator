(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(46)},35:function(e,a,t){},36:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),o=t.n(l),c=(t(35),t(7)),s=t(8),i=t(11),m=t(9),u=t(12),p=(t(36),t(10)),d=t(16),h=t(2),g="GENDER",f="AGE",b="WEIGHT",E="HEIGHT",v="ACTIVITY",y="PROTEIN",N="CARBS",w="FAT",I="CALORIES",O="GOAL",k="GOALCALORIES",x="MEAL",j="INFOSUBMIT",P="UNLOCK",C={gender:"",age:"",weight:"",height:"",activity:"",meals:"",goal:"",calories:"",proteins:"",carbs:"",fat:"",goalCalories:"",genderVal:"",proteinPercentage:"",carbsPercentage:"",fatPercentage:"",isBlocked:!0},M=Object(d.b)({userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case g:return Object(h.a)({},e,{gender:a.payload,genderVal:"man"===a.payload?5:-161});case f:return Object(h.a)({},e,{age:a.payload});case b:return Object(h.a)({},e,{weight:a.payload});case E:return Object(h.a)({},e,{height:a.payload});case v:var t,n,r;switch(a.payload){case"1.2":n=.35;break;case"1.35":n=.4;break;case"1.55":n=.5;break;case"1.75":case"2.05":n=.6;break;default:n=.35}switch(a.payload){case"1.2":r=.35;break;case"1.35":r=.3;break;case"1.55":r=.25;break;case"1.75":case"2.05":r=.15;break;default:r=.35}switch(a.payload){case"1.2":case"1.35":t=.3;break;case"1.55":case"1.75":case"2.05":t=.25;break;default:t=.3}return Object(h.a)({},e,{activity:a.payload,proteinPercentage:100*t,carbsPercentage:100*n,fatPercentage:100*r});case j:return Object(h.a)({},e,{calories:(9.99*+e.weight+6.25*+e.height-4.92*+e.age+e.genderVal)*+e.activity,proteins:(9.99*+e.weight+6.25*+e.height-4.92*+e.age+e.genderVal)*+e.activity*e.proteinPercentage/100/4,carbs:(9.99*+e.weight+6.25*+e.height-4.92*+e.age+e.genderVal)*+e.activity*e.carbsPercentage/100/4,fat:(9.99*+e.weight+6.25*+e.height-4.92*+e.age+e.genderVal)*+e.activity*e.fatPercentage/100/9});case I:return Object(h.a)({},e,{calories:a.payload,proteins:a.payload*e.proteinPercentage/100/4,carbs:a.payload*e.carbsPercentage/100/4,fat:a.payload*e.fatPercentage/100/9});case y:return Object(h.a)({},e,{proteins:a.payload,calories:4*a.payload+4*e.carbs+9*e.fat,proteinPercentage:4*a.payload*100/(4*a.payload+4*e.carbs+9*e.fat),carbsPercentage:4*e.carbs*100/(4*a.payload+4*e.carbs+9*e.fat),fatPercentage:9*e.fat*100/(4*a.payload+4*e.carbs+9*e.fat)});case N:return Object(h.a)({},e,{carbs:a.payload,calories:4*a.payload+4*e.proteins+9*e.fat,proteinPercentage:4*e.proteins*100/(4*e.proteins+4*a.payload+9*e.fat),carbsPercentage:4*a.payload*100/(4*e.proteins+4*a.payload+9*e.fat),fatPercentage:9*e.fat*100/(4*e.proteins+4*a.payload+9*e.fat)});case w:return Object(h.a)({},e,{fat:a.payload,calories:4*e.proteins+4*e.carbs+9*a.payload,proteinPercentage:4*e.proteins*100/(4*e.proteins+4*e.carbs+9*a.payload),carbsPercentage:4*e.carbs*100/(4*e.proteins+4*e.carbs+9*a.payload),fatPercentage:9*a.payload*100/(4*e.proteins+4*e.carbs+9*a.payload)});case O:return Object(h.a)({},e,{goal:a.payload});case x:return Object(h.a)({},e,{meals:a.payload});case k:return Object(h.a)({},e,{goalCalories:+e.calories+ +e.goal,proteins:(+e.calories+ +e.goal)*e.proteinPercentage/100/4,carbs:(+e.calories+ +e.goal)*e.carbsPercentage/100/4,fat:(+e.calories+ +e.goal)*e.fatPercentage/100/9});case P:return Object(h.a)({},e,{isBlocked:!e.isBlocked});default:return e}}}),S=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(a){return}}(),A=Object(d.c)(M,S);A.subscribe(function(){!function(e){try{var a=JSON.stringify(e);localStorage.setItem("state",a)}catch(t){}}({userInfo:A.getState().userInfo})});var B=A;var F=t(14),G=t.n(F),T=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"vertical-center"},r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-lg-6 my-1"},r.a.createElement("div",{className:"card h-100 card-bg card-info"},r.a.createElement("div",{className:"card-header card-header-bg"},"General Info"),r.a.createElement("div",{className:"p-2 text-justify"},"Adequate nutrition is the key to maintaining physical and mental health. Unprocessed food in the right amounts and proportions is the fuel for the body, provides the necessary minerals. With the right caloric supply, you can maintain weight, reduce or focus on weight gain. On this page, we propose diet plans that, based on the information you need (height, weight, physical activity during the day) will allow you to achieve body goals, as well as to support the body's functioning and supply him with nutritionally rich products in the right amount. What distinguishes our plans? They are simple and easy to use. We do not impose predetermined recipes and meals. You know what you want to eat and we enable you to eat this - but in the right proportions. Of course, we suggest to base on as diverse products as possible. We base our plans on unprocessed food, which will minimize the presence of undesirable ingredients in the prepared dishes."))),r.a.createElement("div",{className:"col-sm-12 col-lg-6 my-1"},r.a.createElement("form",{className:"card h-100",action:"#/calories"},r.a.createElement("div",{className:"card-header card-header-bg"},"Personal info"),r.a.createElement("div",{className:"card-bg d-flex flex-column text-center"},r.a.createElement("div",{id:"gender-select",className:"mt-4 ml-1"},r.a.createElement("select",{name:"gender",id:"gender",value:this.props.userInfo.gender,onChange:function(a){return e.props.changeGender(a)}},r.a.createElement("option",{disabled:!0,value:""},"Pick your gender"),r.a.createElement("option",{value:"man"},"Man"),r.a.createElement("option",{value:"woman"},"Woman")),r.a.createElement("p",{className:G()("gender-text info",""!==this.props.userInfo.gender?"visible":"")},"Your gender")),r.a.createElement("div",{className:"ml-1 mt-4"},r.a.createElement("input",{id:"age",type:"number",name:"age",min:"1",max:"120",value:this.props.userInfo.age,placeholder:"Your age",required:!0,onChange:function(a){return e.props.changeAge(a)}}),r.a.createElement("p",{className:G()("age-text info",""!==this.props.userInfo.age?"visible":"")},"Your age")),r.a.createElement("div",{className:"ml-1 mt-4"},r.a.createElement("input",{id:"weight",type:"number",name:"weight",min:"1",max:"250",value:this.props.userInfo.weight,placeholder:"Your weight(kg)",required:!0,onChange:function(a){return e.props.changeWeight(a)}}),r.a.createElement("p",{className:G()("weight-text info",""!==this.props.userInfo.weight?"visible":"")},"Your weight(kg)")),r.a.createElement("div",{className:"ml-1 mt-4"},r.a.createElement("input",{id:"height",type:"number",name:"height",min:"1",max:"250",value:this.props.userInfo.height,placeholder:"Your height(cm)",required:!0,onChange:function(a){return e.props.changeHeight(a)}}),r.a.createElement("p",{className:G()("height-text info",""!==this.props.userInfo.height?"visible":"")},"Your height(cm)")),r.a.createElement("div",{className:"ml-1 mt-4"},r.a.createElement("select",{name:"activity",value:this.props.userInfo.activity,onChange:function(a){return e.props.changeActivity(a)}},r.a.createElement("option",{value:"",disabled:!0},"Physical activity level:"),r.a.createElement("option",{value:"1.2"},"Inactive lifestyle (Sedentary work, no physical activity)"),r.a.createElement("option",{value:"1.35"},"Sedentary (Sedentary work, 1-2 trainings in a week)"),r.a.createElement("option",{value:"1.55"},"Moderately active(Sedentary work, 3-4 trainings in a week)"),r.a.createElement("option",{value:"1.75"},"Vigorously active(Manual worker, 3-4 trainings in a week)"),r.a.createElement("option",{value:"2.05"},"Extremely active(Proffesionals athletes, training everyday)")),r.a.createElement("p",{className:G()("activity-text info",""!==this.props.userInfo.activity?"visible":"")},"Your activity level")),r.a.createElement("div",{className:"ml-1 mt-4"},r.a.createElement("select",{name:"goal",id:"goal",value:this.props.userInfo.goal,onChange:function(a){return e.props.changeGoal(a)}},r.a.createElement("option",{value:"",disabled:!0},"Pick your goal:"),r.a.createElement("option",{value:"0"},"I want to maintain my weight"),r.a.createElement("option",{value:"300"},"I want to gain weight but slowly"),r.a.createElement("option",{value:"500"},"I want to gain weight but in moderate speed"),r.a.createElement("option",{value:"750"},"I want to gain weight fast"),r.a.createElement("option",{value:"-300"},"I want to lose weight but slowly"),r.a.createElement("option",{value:"-450"},"I want to lose weight but in moderate speed"),r.a.createElement("option",{value:"-600"},"I want to lose weight fast")),r.a.createElement("p",{className:G()("goal-text info",""!==this.props.userInfo.goal?"visible":"")},"Your goal")),r.a.createElement("div",{className:"ml-1 mt-4"},r.a.createElement("select",{name:"mealsSelector",value:this.props.userInfo.meals,onChange:function(a){return e.props.changeMeal(a)}},r.a.createElement("option",{value:"",disabled:!0},"Number of meals:"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")),r.a.createElement("p",{className:G()("meals-text info",""!==this.props.userInfo.meals?"visible":"")},"Number of meals"))),r.a.createElement("div",{className:"d-flex justify-content-end card-bg"},r.a.createElement("button",{className:"btn btn-success col-3 col-sm-2 my-2 mr-2 ",onClick:function(a){return e.props.infoSubmit(a)}},"Next"))))))),console.log(this.props.userInfo))}}]),a}(n.Component),Y=Object(p.b)(function(e){return{userInfo:e.userInfo}},function(e){return{changeGender:function(a){e({type:g,payload:a.target.value})},changeAge:function(a){e({type:f,payload:a.target.value})},changeWeight:function(a){e({type:b,payload:a.target.value})},changeHeight:function(a){e({type:E,payload:a.target.value})},changeActivity:function(a){e({type:v,payload:a.target.value})},changeGoal:function(a){e({type:O,payload:a.target.value})},changeMeal:function(a){e({type:x,payload:a.target.value})},infoSubmit:function(a){e({type:j})}}})(T),W=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"vertical-center"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-lg-6 my-1"},r.a.createElement("div",{className:"card card-bg h-100 w-100"},r.a.createElement("div",{className:"card-header card-header-bg"},"Calories info"),r.a.createElement("div",{className:"p-2 text-justify"},"Energy supply is calculated on the basis of approved designs. Nutrition is NOT a mathematics, although a properly calculated energy supply is necessary to achieve certain body goals (eg weight reduction). The calculated values \u200b\u200bare a suggestion, it is possible to individually change the energy supply and / or amount of macronutrients - of course at your own risk. Also remember that this amount of calories is WITHOUT reference to your goal. So if you are not sure how to manage amount of calories it is better to leave it as it is."),r.a.createElement("div",{className:"px-2"},r.a.createElement("p",null,"Percentage of macronutrients: ",r.a.createElement("br",null),"Proteins:"," ",this.props.userInfo.proteinPercentage.toFixed(1),"% ",r.a.createElement("br",null),"Carbs: ",this.props.userInfo.carbsPercentage.toFixed(1),"% ",r.a.createElement("br",null),"Fat: ",this.props.userInfo.fatPercentage.toFixed(1),"%"," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)),r.a.createElement("p",{className:"text-center"},"If you want to change amount of calories and macronutrients:")),r.a.createElement("div",{className:" text-center"},r.a.createElement("button",{className:"btn btn-danger my-2",onClick:function(){return e.props.unlockCalories()}},"Unlock")))),r.a.createElement("div",{className:"col-sm-12 col-lg-6 my-1"},r.a.createElement("form",{className:"card card-height h-100 card-bg",action:"#/calories"},r.a.createElement("div",{className:"card-header card-header-bg"},"Calories"),r.a.createElement("div",{className:"card-bg d-flex flex-column"},r.a.createElement("div",{className:"mt-4 ml-2 d-flex flex-column"},"Calories:"," ",r.a.createElement("input",{type:"number",value:Math.round(this.props.userInfo.calories),onChange:function(a){return e.props.changeCalories(a)},disabled:this.props.userInfo.isBlocked,min:"500",max:"15000"})),r.a.createElement("div",{className:"mt-4 ml-2 d-flex flex-column"},"Proteins:"," ",r.a.createElement("input",{type:"number",value:Math.round(this.props.userInfo.proteins),onChange:function(a){return e.props.changeProtein(a)},disabled:this.props.userInfo.isBlocked,min:"10",max:"1000"})),r.a.createElement("div",{className:"mt-4 ml-2 d-flex flex-column"},"Carbs:"," ",r.a.createElement("input",{type:"number",value:Math.round(this.props.userInfo.carbs),onChange:function(a){return e.props.changeCarbs(a)},disabled:this.props.userInfo.isBlocked,min:"10",max:"1000"})),r.a.createElement("div",{className:"mt-4 ml-2 d-flex flex-column"},"Fat:"," ",r.a.createElement("input",{type:"number",value:Math.round(this.props.userInfo.fat),onChange:function(a){return e.props.changeFat(a)},disabled:this.props.userInfo.isBlocked,min:"10",max:"1000"}))),r.a.createElement("div",{className:"d-flex justify-content-between h-100"},r.a.createElement("button",{className:"btn btn-danger col-3 col-sm-2 align-self-end my-2 mx-2",formAction:"#/"},"Back"),r.a.createElement("button",{className:"btn btn-success col-3 col-sm-2 align-self-end my-2 mx-2",formAction:"#/meals",onClick:function(){return e.props.caloriesSubmit()}},"Next"))))))),console.log(this.props.userInfo))}}]),a}(n.Component),V=Object(p.b)(function(e){return{userInfo:e.userInfo}},function(e){return{changeProtein:function(a){e({type:y,payload:a.target.value})},changeCarbs:function(a){var t;e((t=a,console.log(t.target.value),{type:N,payload:t.target.value}))},changeFat:function(a){var t;e((t=a,console.log(t.target.value),{type:w,payload:t.target.value}))},changeCalories:function(a){e({type:I,payload:a.target.value})},caloriesSubmit:function(a){e({type:k})},unlockCalories:function(){e({type:P})}}})(W),H=t(15),L=[{proteins:[{id:1,name:"Chicken Breast",value:25},{id:2,name:"Beef Entrecote",value:38},{id:3,name:"Tuna",value:32.5}],carbs:[{id:1,name:"Brown Rice",value:83.75},{id:2,name:"Potatoes",value:20},{id:3,name:"Banana",value:25}],fat:[{id:1,name:"Olive Oil",value:100},{id:2,name:"Avocado",value:18},{id:3,name:"Butter",value:80}]}];function R(e){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,e.item.name),r.a.createElement("th",null,Math.floor(100*e.macro/e.item.value/+e.meals))))}var U=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.products[0].proteins.map(function(a){return r.a.createElement(R,{key:a.id,item:a,macro:e.props.userInfo.proteins,meals:e.props.userInfo.meals})}),t=this.props.products[0].carbs.map(function(a){return r.a.createElement(R,{key:a.id,item:a,macro:e.props.userInfo.carbs,meals:e.props.userInfo.meals})}),n=this.props.products[0].fat.map(function(a){return r.a.createElement(R,{key:a.id,item:a,macro:e.props.userInfo.fat,meals:e.props.userInfo.meals})});return r.a.createElement("div",{className:"d-flex flex-md-row flex-column  text-center"},r.a.createElement("table",{className:"table table-striped table-bordered table-hover table-sm"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"2"},"Proteins")),r.a.createElement("tr",null,r.a.createElement("th",null,"Product"),r.a.createElement("th",null,"Grams per meal"))),a),r.a.createElement("table",{className:"table table-striped table-bordered table-hover table-sm"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"2"},"Carbs")),r.a.createElement("tr",null,r.a.createElement("th",null,"Product"),r.a.createElement("th",null,"Grams per meal"))),t),r.a.createElement("table",{className:"table table-striped table-bordered table-hover table-sm"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"2"},"Fat")),r.a.createElement("tr",null,r.a.createElement("th",null,"Product"),r.a.createElement("th",null,"Grams per meal"))),n))}}]),a}(n.Component),q=Object(p.b)(function(e){return{userInfo:e.userInfo,products:L}})(U);function J(e){return r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-striped table-bordered table-hover table-sm text-center"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",{className:""},r.a.createElement("th",{colSpan:"4"},"Macronutrients per meal")),r.a.createElement("tr",{className:""},r.a.createElement("th",null),r.a.createElement("th",null,"Proteins"),r.a.createElement("th",null,"Carbs"),r.a.createElement("th",null,"Fat"))),r.a.createElement("tbody",null,r.a.createElement("tr",{className:""},r.a.createElement("th",null,"Meal 1"),r.a.createElement("th",null,Math.round(e.protein/e.meals)),r.a.createElement("th",null,Math.round(e.carbs/e.meals)),r.a.createElement("th",null,Math.round(e.fat/e.meals))),r.a.createElement("tr",null,r.a.createElement("th",null,"Meal 2"),r.a.createElement("th",null,Math.round(e.protein/e.meals)),r.a.createElement("th",null,Math.round(e.carbs/e.meals)),r.a.createElement("th",null,Math.round(e.fat/e.meals))),r.a.createElement("tr",null,r.a.createElement("th",null,"Meal 3"),r.a.createElement("th",null,Math.round(e.protein/e.meals)),r.a.createElement("th",null,Math.round(e.carbs/e.meals)),r.a.createElement("th",null,Math.round(e.fat/e.meals))),r.a.createElement("tr",{style:{display:e.meals<=3?"none":""}},r.a.createElement("th",null,"Meal 4"),r.a.createElement("th",null,Math.round(e.protein/e.meals)),r.a.createElement("th",null,Math.round(e.carbs/e.meals)),r.a.createElement("th",null,Math.round(e.fat/e.meals))),r.a.createElement("tr",{style:{display:e.meals<=4?"none":""}},r.a.createElement("th",null,"Meal 5"),r.a.createElement("th",null,Math.round(e.protein/e.meals)),r.a.createElement("th",null,Math.round(e.carbs/e.meals)),r.a.createElement("th",null,Math.round(e.fat/e.meals)))),console.log(e)))}var z=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"vertical-center"},r.a.createElement("div",{className:"container  flex-column"},r.a.createElement("div",{className:"card card-bg my-1"},r.a.createElement("div",{className:"card-header card-header-bg"},"Final amount of calories"),r.a.createElement("div",{className:"d-flex flex-column align-items-center"},r.a.createElement("h3",{className:"text-center"},"Your daily calories:"," ",Math.round(this.props.userInfo.goalCalories)),r.a.createElement(J,{protein:this.props.userInfo.proteins,carbs:this.props.userInfo.carbs,fat:this.props.userInfo.fat,meals:this.props.userInfo.meals}))),r.a.createElement("div",{className:"card card-bg my-1"},r.a.createElement("div",{className:"card-header card-header-bg"},"Product grams per meal"),r.a.createElement(q,null))))}}]),a}(n.Component),D=Object(p.b)(function(e){return{userInfo:e.userInfo}})(z),K=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{store:B},r.a.createElement(H.a,{exact:!0,path:"/",component:Y}),r.a.createElement(H.a,{path:"/calories",component:V}),r.a.createElement(H.a,{path:"/meals",component:D}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=t(23);o.a.render(r.a.createElement($.a,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.547acfe8.chunk.js.map