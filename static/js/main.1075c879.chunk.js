(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2),u=n.n(r),c=(n(12),n(13),n(3)),o=n(4),s=n(6),i=n(5),p=(n(14),n(15),function(e){var t=l.a.createRef();return l.a.createElement("input",{ref:function(e){t=e},onChange:function(){e.setStepValue(t.value)},value:e.currentStepValue,type:"number"})}),v=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var a;Object(c.a)(this,n),(a=t.call(this,e)).changeValue=function(){a.setState((function(e){var t=e.toNextLevel-a.state.stepValue,n={counterValue:e.counterValue+e.stepValue,nextLevel:e.nextLevel};for(t<=0?(n.nextLevel*=2,n.toNextLevel=n.nextLevel-(e.counterValue+e.stepValue),n.level=e.level+1):n.toNextLevel=t;n.nextLevel<=n.counterValue;)n.nextLevel*=2,n.toNextLevel=n.nextLevel-(e.counterValue+e.stepValue),n.level++;return n}))},a.resetValue=function(){a.setStep(0),a.setState({counterValue:0,level:1,toNextLevel:10,nextLevel:10})},a.reInit=function(){for(var e=1,t=10;t<=a.props.initValue;)t*=2,e++;a.setState({counterValue:a.props.initValue,level:e,toNextLevel:t-a.props.initValue,nextLevel:t})},a.setStep=function(e){a.setState({stepValue:Number(e)})};for(var l=1,r=10;r<=e.initValue;)r*=2,l++;return a.state={counterValue:a.props.initValue,level:l,toNextLevel:r-e.initValue,stepValue:1,nextLevel:r},a}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"counter"},l.a.createElement("p",null,l.a.createElement("i",null,"Counter:"),l.a.createElement("span",{className:"value"},this.state.counterValue)),l.a.createElement("p",null,l.a.createElement("i",null,"Level:"),l.a.createElement("span",{className:"level"},this.state.level)),l.a.createElement("p",null,l.a.createElement("i",null,"Left to next level:"),l.a.createElement("span",{className:"level"},this.state.toNextLevel)),l.a.createElement("div",{className:"buttons-pannel"},l.a.createElement("button",{onClick:this.changeValue},"Add ",this.state.stepValue),l.a.createElement("button",{onClick:this.resetValue},"Reset"),l.a.createElement("button",{onClick:this.reInit},"ReInit"),l.a.createElement(p,{setStepValue:this.setStep,currentStepValue:this.state.stepValue})))}}]),n}(a.Component);var m=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",{className:"App-title"},"Counter app")),l.a.createElement(v,{initValue:0}),l.a.createElement(v,{initValue:22}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.1075c879.chunk.js.map